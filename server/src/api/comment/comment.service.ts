import prisma from "../../helper/prisma";

export const getCommentById = async (id: number) => {
  const comment = await prisma.comment.findUnique({
    where: {
      id,
      deletedAt: null,
    },
  });
  return comment;
};
export const getallComments = async () => {
  const comment = await prisma.comment.findMany({
    where: {
      deletedAt: null,
    },
  });
  return comment;
};
export const createComment = async (data: any) => {
  const comment = await prisma.comment.create({
    data,
  });
  return comment;
};

export const updateComment = async (id: number, data: any) => {
  const comment = await prisma.comment.update({
    where: { id },
    data,
  });
  return comment;
};

export const deleteComment = async (id: number) => {
  const comment = await prisma.comment.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return comment;
};
