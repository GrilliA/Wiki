import prisma from "../../helper/prisma";

export const getLikeById = async (id: number) => {
  const like = await prisma.like.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
  return like;
};
export const getLikeByUserId = async (userId: string, threadId: number) => {
  const like = await prisma.like.findFirst({
    where: {
      userId,
      threadId,
      deletedAt: null,
    },
  });
  return like;
};
export const getallLikes = async () => {
  const like = await prisma.like.findMany({
    where: {
      deletedAt: null,
    },
  });
  return like;
};
export const createLike = async (data: any) => {
  const like = await prisma.like.create({
    data,
  });
  return like;
};

export const updateLike = async (id: number, data: any) => {
  const like = await prisma.like.update({
    where: { id },
    data,
  });
  return like;
};

export const deleteLike = async (id: number) => {
  const like = await prisma.like.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return like;
};
