import logger from "../../helper/logger";
import { sendEmail } from "../../helper/sendEmail";
import ForgottenPasswordEmail from "../../emails/auth/ForgottenPasswordEmail";
import { render } from "@react-email/components";
import { Token, User } from "@prisma/client";
import { APP_NAME } from "../../helper/constants";
import prisma from "../../helper/prisma";

export const sendForgottenPasswordEmail = async (user: User, token: Token) => {
  try {
    const email = await ForgottenPasswordEmail({ user, token });
    await sendEmail({
      subject: `Reset your password on ${APP_NAME}`,
      to: user?.email,
      html: render(email),
    });
  } catch (error) {
    logger.error(error);
  }
};

export const seedDatabase = async () => {
  prisma.$transaction(async (tx) => {
    try {
      //Seed here
    } catch (error) {
      logger.error(error);
    }
  });
};

export const getCurrentUserContext = async (
  userId: string,
  clientId: number,
) => {
  //TODO: add a transaction that gets all the user context
  let currentClient = null;
  const currentUser = await prisma.user.findUnique({
    where: {
      id: userId,
      deletedAt: null,
    },
  });
  const isAppInit = await prisma.user.count();
  globalThis.gemmaState = {
    ...globalThis.gemmaState,
    isAppInit: isAppInit > 0,
  };
  if (clientId) {
    currentClient = await prisma.client.findUnique({
      where: {
        id: clientId,
        deletedAt: null,
      },
    });
  }
  const result = {
    currentUser,
    gemmaState: globalThis.gemmaState,
    currentClient,
  };
  return result;
};
