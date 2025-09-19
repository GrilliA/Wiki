import prisma from "../../helper/prisma";
import { AUTH_TOKEN_TYPE } from "../auth/auth.helper";
export const createToken = async (data: { userId: string; type: AUTH_TOKEN_TYPE }, expiresAt: string) => {
  const token = await prisma.token.create({
    data: {
      userId: data.userId,
      type: data.type,
      expiresAt,
    },
  });
  return token;
};
export const getTokenByCode = async (code: string) => {
  const token = await prisma.token.findUnique({
    where: {
      code,
      expiresAt: {
        lt: new Date(),
      },
    },
    include: {
      user: true,
    },
  });
  return token;
};

export const getTokenByType = async (email: string, type: number) => {
  const token = await prisma.token.findFirst({
    where: {
      type,
      user: {
        email,
      },
    },
    orderBy: {
      id: "desc",
    },
  });
  return token;
};

export const getRegions = async () => {
  const regions = await prisma.region.findMany({
    orderBy: {
      name: "asc",
    },
  });
  return regions;
};

export const getProvince = async (regionCode: string) => {
  const province = await prisma.province.findMany({
    where: { regionCode },
    orderBy: {
      name: "asc",
    },
  });
  return province;
};

export const getComuni = async (provinceCode: string) => {
  const comuni = await prisma.comune.findMany({
    where: { provinceCode },
    orderBy: {
      name: "asc",
    },
  });
  return comuni;
};

export const getCap = async (istatCode: string) => {
  const cap = await prisma.cap.findMany({
    where: { istatCode },
  });
  return cap;
};
