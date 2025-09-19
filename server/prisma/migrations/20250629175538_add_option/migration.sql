/*
  Warnings:

  - You are about to drop the column `isDeleted` on the `Cap` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `Comune` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `Province` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `Region` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `Token` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cap" DROP COLUMN "isDeleted";

-- AlterTable
ALTER TABLE "Comune" DROP COLUMN "isDeleted";

-- AlterTable
ALTER TABLE "Province" DROP COLUMN "isDeleted";

-- AlterTable
ALTER TABLE "Region" DROP COLUMN "isDeleted";

-- AlterTable
ALTER TABLE "Token" DROP COLUMN "isDeleted";

-- CreateTable
CREATE TABLE "Option" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "group" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "index" INTEGER NOT NULL DEFAULT 0,
    "value" TEXT,
    "externalId" TEXT,
    "description" TEXT,

    CONSTRAINT "Option_pkey" PRIMARY KEY ("id")
);
