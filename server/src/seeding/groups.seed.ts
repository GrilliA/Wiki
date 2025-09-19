import { PrismaClient } from "@prisma/client";
import companyProductSchema from "../../data/company_product_schema.json";
import companyStorageSchema from "../../data/company_storage_schema.json";

export const seedGroups = async (prisma: PrismaClient) => {
  await prisma.group.createMany({
    data: [
      {
        name: "internal_product",
        displayName: "Prodotti Interni",
        description: "I prodotti interni dell'azienda",
        schema: companyProductSchema,
      },
      {
        name: "storage",
        displayName: "Magazzino",
        description: "Magazzino",
        schema: companyStorageSchema,
      },
    ],
  });
};
