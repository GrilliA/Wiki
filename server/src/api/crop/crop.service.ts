import prisma from "../../helper/prisma";

export const getCropById = async (id: number) => {
  const crop = await prisma.crop.findUnique({
    where: {
      id,
      deletedAt: null,
    },
    include: {
      recipes: {
        where: {
          deletedAt: null,
        },
        include: {
          typeOfTreatment: true,
          treatmentPhase: true,
        },
      },
      threads: {
        where: {
          deletedAt: null,
        },
      },
      crop: {
        where: {
          deletedAt: null,
        },
      },
      regime: {
        where: {
          deletedAt: null,
        },
      },
      group: {
        where: {
          deletedAt: null,
        },
      },
    },
  });
  return crop;
};
export const getallCrops = async () => {
  const crop = await prisma.crop.findMany({
    where: {
      deletedAt: null,
    },
    include: {
      crop: true,
      regime: true,
      group: true,
    },
  });
  return crop;
};
export const createCrop = async (data: any) => {
  const crop = await prisma.crop.create({
    data,
  });
  return crop;
};

export const updateCrop = async (id: number, data: any) => {
  const crop = await prisma.crop.update({
    where: { id },
    data,
  });
  return crop;
};

export const deleteCrop = async (id: number) => {
  const crop = await prisma.crop.update({
    where: { id },
    data: {
      deletedAt: new Date(),
    },
  });
  return crop;
};
