/*
  Warnings:

  - You are about to drop the column `description` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `externalId` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `group` on the `Option` table. All the data in the column will be lost.
  - You are about to drop the column `label` on the `Option` table. All the data in the column will be lost.
  - Added the required column `groupId` to the `Option` table without a default value. This is not possible if the table is not empty.
  - Made the column `value` on table `Option` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_facilityId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_facilityId_fkey";

-- AlterTable
ALTER TABLE "Option" DROP COLUMN "description",
DROP COLUMN "externalId",
DROP COLUMN "group",
DROP COLUMN "label",
ADD COLUMN     "groupId" INTEGER NOT NULL,
ALTER COLUMN "value" SET NOT NULL;

-- CreateTable
CREATE TABLE "Group" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "displayName" TEXT NOT NULL,
    "schema" JSONB NOT NULL,
    "description" TEXT,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Option" ADD CONSTRAINT "Option_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
