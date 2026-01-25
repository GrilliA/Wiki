import prisma from "../../helper/prisma";

export const getIsAppInit = async () => {
  const hasUsers = await prisma.user.count();
  return !!hasUsers;
};
