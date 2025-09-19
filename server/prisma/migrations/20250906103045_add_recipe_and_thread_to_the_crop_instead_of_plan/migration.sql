/*
  Warnings:

  - You are about to drop the column `planId` on the `Recipe` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `Thread` table. All the data in the column will be lost.
  - Added the required column `cropId` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cropId` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_planId_fkey";

-- DropForeignKey
ALTER TABLE "Thread" DROP CONSTRAINT "Thread_planId_fkey";

-- AlterTable
ALTER TABLE "Recipe" DROP COLUMN "planId",
ADD COLUMN     "cropId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Thread" DROP COLUMN "planId",
ADD COLUMN     "cropId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_cropId_fkey" FOREIGN KEY ("cropId") REFERENCES "Crop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
