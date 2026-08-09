import { USER_ROLE } from "../../helper/constants";
import logger from "../../helper/logger";
import db from "../../helper/db";

export const createUser = async (data: any) => {
  const user = await db.user.create({
    data: {
      ...data,
    },
    include: {
      tokens: true,
      facility: true,
    },
  });
  return user;
};

export const getUserById = async (id: string) => {
  const user = await db.user.findUnique({
    where: { id },
    include: {
      facility: true,
    },
  });
  return user;
};

export const getUserByCode = async (code: string) => {
  const user = await db.user.findFirst({
    where: {
      tokens: {
        some: {
          code: {
            equals: code,
          },
        },
      },
    },
    include: {
      tokens: true,
      facility: true,
    },
  });
  return user;
};

export const getUserByEmail = async (email: string) => {
  const user = await db.user.findFirst({
    where: {
      email,
      deletedAt: null,
    },
    include: {
      tokens: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });
  return user;
};

export const updateUser = async (id: string, data: Record<string, any>) => {
  const user = await db.user.update({
    where: { id },
    data,
    include: {
      facility: true,
    },
  });
  return user;
};

export const getAllUsers = async () => {
  const user = await db.user.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      facility: true,
    },
  });
  return user;
};

export const getAllUsersByType = async (userRole: USER_ROLE) => {
  const users = await db.user.findMany({
    where: {
      role: userRole,
    },
    include: {
      facility: true,
    },
  });
  return users;
};

export const sendCredentialsEmail = async () => {
  try {
    console.error("to be implemented");
  } catch (error) {
    logger.error(error);
  }
};
