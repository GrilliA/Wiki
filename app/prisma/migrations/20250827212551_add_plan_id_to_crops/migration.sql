/*
  Warnings:

  - You are about to drop the column `cropTypeId` on the `Crop` table. All the data in the column will be lost.
  - Added the required column `planId` to the `Crop` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Crop" DROP CONSTRAINT "Crop_cropTypeId_fkey";

-- AlterTable
ALTER TABLE "Crop" DROP COLUMN "cropTypeId",
ADD COLUMN     "cropId" INTEGER,
ADD COLUMN     "planId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
