import region from "../../data/region.json";
import province from "../../data/province.json";
import comune from "../../data/comune.json";
import cap from "../../data/cap.json";
import { PrismaClient } from "@prisma/client";

export const seedTerritories = async (prisma: PrismaClient) => {
  await prisma.region.createMany({
    data: region,
  });
  await prisma.province.createMany({
    data: province,
  });
  const comuni = await prisma.comune.createManyAndReturn({
    data: comune,
  });
  const caps = await prisma.cap.createManyAndReturn({
    data: cap,
  });
  await Promise.all(
    comuni.map(async (comune) => {
      const currentCap = caps
        .filter((c) => {
          return c.istatCode === comune.istatCode;
        })
        .map((c) => ({ id: c.id }));
      await prisma.comune.update({
        where: { id: comune.id },
        data: {
          cap: {
            connect: currentCap,
          },
        },
      });
    }),
  );
};
