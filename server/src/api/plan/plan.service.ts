import prisma from "../../helper/prisma";

export const isPlanSameYear = async (clientId: number, data: any) => {
  const { year, id } = data;
  const isNew = !Boolean(id);
  const yearAsNumber = Number(year);
  const allPlan = await prisma.plan.findMany({
    where: { clientId, deletedAt: null },
  });
  const isSameYear = allPlan.find((crop) => crop.year === yearAsNumber);
  const isSamePlan = id === isSameYear?.id;
  if (isNew) {
    return isSameYear;
  }
  return !isSamePlan && isSameYear;
};

export const createPlan = async (data: any, clientId: number) => {
  const { year, ...rest } = data;
  const body = {
    ...rest,
    year: Number(year),
    client: {
      connect: { id: clientId },
    },
  };
  await prisma.plan.create({
    data: body,
  });
  const allPlan = await getAllPlan(clientId);
  return allPlan;
};

export const updatePlan = async (id: number, data: any, clientId: number) => {
  const { year, ...rest } = data;
  const body = {
    ...rest,
    year: Number(year),
  };
  await prisma.plan.update({
    where: { id, deletedAt: null },
    data: {
      ...body,
      updateCount: {
        increment: 1,
      },
    },
  });
  const allPlan = await getAllPlan(clientId);
  return allPlan;
};

export const getAllPlan = async (clientId: number) => {
  if (!clientId) {
    return [];
  }
  const plan = await prisma.plan.findMany({
    where: {
      clientId,
      deletedAt: null,
    },
    orderBy: {
      year: "desc",
    },
  });
  return plan;
};

export const getPlan = async (id: number, clientId: number) => {
  const plan = await prisma.plan.findUnique({
    where: { id, clientId, deletedAt: null },
    include: {
      crops: {
        where: {
          deletedAt: null,
        },
        include: {
          crop: {
            where: {
              deletedAt: null,
            },
          },
          group: {
            where: {
              deletedAt: null,
            },
          },
          regime: {
            where: {
              deletedAt: null,
            },
          },
        },
      },
    },
  });
  return plan;
};

export const deletePlan = async (id: number, clientId: number) => {
  await prisma.plan.update({
    where: { id, clientId },
    data: {
      deletedAt: new Date().toISOString(),
    },
  });
  const allPlan = await getAllPlan(clientId);
  return allPlan;
};
