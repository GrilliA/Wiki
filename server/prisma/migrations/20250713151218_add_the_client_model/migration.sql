/*
  Warnings:

  - You are about to drop the column `alias` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `isDeleted` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `piva` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "alias",
DROP COLUMN "isDeleted",
DROP COLUMN "piva",
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "vatNumber" TEXT;
