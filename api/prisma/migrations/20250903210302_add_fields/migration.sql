/*
  Warnings:

  - Added the required column `planId` to the `Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planId` to the `Thread` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "planId" INTEGER NOT NULL,
ALTER COLUMN "clientNote" DROP NOT NULL,
ALTER COLUMN "internalNote" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "planId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Thread" ADD CONSTRAINT "Thread_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
