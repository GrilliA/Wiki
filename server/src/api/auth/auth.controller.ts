import { compare, hash } from "bcryptjs";
import { createUser, getUserByEmail, updateUser } from "../user/user.service";
import {
  USER_STATUS,
  USER_ROLE,
  PASSWORD_SALT,
  APP_NAME,
} from "../../helper/constants";
import { Response, Request } from "express";
import logger from "../../helper/logger";
import authEvent, { AUTH_EVENT_ACTION_TYPE } from "./auth.event";
import { AUTH_TOKEN_TYPE } from "./auth.helper";
import { getUserResponseMapper } from "../user/user.mapper";
import { getCurrentUserContext, seedDatabase } from "./auth.service";
import { Prisma } from "@prisma/client";

export const initAppController = async (req: Request, res: Response) => {
  const { password, ...data } = req.body;
  if (globalThis.gemmaState.isAppInit) {
    res
      .status(409)
      .json({ message: "L'applicazione è già stata inizializzata" });
    return;
  }
  await seedDatabase();
  const hashedPassword = await hash(password, PASSWORD_SALT);
  const userToSave: Prisma.UserCreateInput = {
    email: data.email,
    status: USER_STATUS.VERIFIED,
    role: USER_ROLE.SUPER_ADMIN,
    password: hashedPassword,
    surname: `${APP_NAME}.surname`,
    name: `${APP_NAME}.name`,
  };
  const user = await createUser(userToSave);
  authEvent.emit(AUTH_EVENT_ACTION_TYPE.INIT_APP, { user });
  const payload = {
    id: user.id,
    role: user.role,
    status: user.status,
  };
  req.session.user = payload;
  globalThis.gemmaState = {
    ...globalThis.gemmaState,
    isAppInit: true,
  };
  const responseData = {
    currentUser: getUserResponseMapper(user as any),
    gemmaState: globalThis.gemmaState,
  };
  res
    .status(200)
    .json({ data: responseData, message: "Utente registrato con successo" });
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    logger.error("User not found");
    res.status(403).json({ message: "Questo utente non esiste" });
    return;
  }
  const isSamePassword = await compare(password, user?.password);
  if (!isSamePassword) {
    logger.error("Wrong password");
    res.status(403).json({ message: "Password errata" });
    return;
  }
  const isVerified = user.status <= USER_STATUS.VERIFIED;
  const isAdmin = user.role <= USER_ROLE.SUPER_ADMIN;
  if (!isAdmin && !isVerified) {
    logger.error("Account not verified");
    res.status(401).json({ message: "Account non verificato" });
    return;
  }
  const payload = {
    id: user.id,
    role: user.role,
    status: user.status,
  };
  req.session.user = payload;
  logger.info("User logged in successfully");
  res.status(200).json({
    data: getUserResponseMapper(user as any),
    message: "Accesso effettuato con successo",
  });
};

export const logoutController = (req: Request, res: Response) => {
  req.session.destroy(() => {});
  logger.info("User logged out successfully");
  res.status(200).json({ message: "Logout effettuato con successo" });
};

export const retrieveCurrentUserContextController = async (
  req: Request,
  res: Response,
) => {
  const { clientId, id: userId } = req.session.user;
  const data = await getCurrentUserContext(userId, clientId);
  res.status(200).json({ data, message: "fetch current user successfully" });
};

export const triggerForgottenPasswordController = async (
  req: Request,
  res: Response,
) => {
  const { email } = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    res.status(403).json({ message: "Questo utente non esiste" });
    return;
  }
  const forgottenPassowrdTokenExpiresAt = new Date(
    new Date().getTime() + 1000 * 60 * 60 * 24,
  ).toISOString();
  // const token = await createToken(
  //   { userId: user.id, type: AUTH_TOKEN_TYPE.FORGOTTEN_PASSWORD },
  //   forgottenPassowrdTokenExpiresAt,
  // );
  // authEvent.emit(AUTH_EVENT_ACTION_TYPE.FORGOTTEN_PASSWORD, {
  //   user: user,
  //   token,
  // });
  logger.info("triggered forgotten password");
  res.status(200).json({
    message: "Email per la password dimenticata mandato con successo",
  });
};

export const changeForgottenPasswordController = async (
  req: Request,
  res: Response,
) => {
  const { code } = req.params;
  const { password } = req.body;
  // const token = await getTokenByCode(code);
  // if (token && token?.code !== code) {
  //   logger.error("token doesn't exist or doesn't match");
  //   res.status(401).json({ message: "Il token non esiste o non coincide" });
  //   return;
  // }
  // const createdDate = new Date(token?.createdAt).getTime();
  // const expiringDate = createdDate + 1000 * 30;
  // const now = new Date().getTime();
  // if (now < expiringDate) {
  //   logger.error("token is expired");
  //   res.status(401).json({ message: "Il token è scaduto" });
  //   return;
  // }
  // const newPassword = await hash(password, 10);
  // await updateUser(token?.user?.id, { password: newPassword });
  // logger.info("Password changed successfully");
  res
    .status(200)
    .json({ message: "La password è stata cambiata con successo" });
};

export const resendForgottenPasswordEmailController = async (
  req: Request,
  res: Response,
) => {
  const user = await getUserByEmail(req.params.email);
  const forgottenPasswordTokens = user.tokens.filter(
    (token) => token.type === AUTH_TOKEN_TYPE.FORGOTTEN_PASSWORD,
  );
  const token = forgottenPasswordTokens[forgottenPasswordTokens.length - 1];
  // await sendForgottenPasswordEmail(user, token);
  logger.info("Forgotten password email sent successfully");
  res.status(200).json({
    message:
      "L'email della password dimenticata è stata rimandata con successo",
  });
};
