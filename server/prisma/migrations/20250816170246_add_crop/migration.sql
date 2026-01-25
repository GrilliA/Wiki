-- CreateTable
CREATE TABLE "Crop" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "regimeId" INTEGER,
    "groupId" INTEGER,
    "cropTypeId" INTEGER,

    CONSTRAINT "Crop_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_regimeId_fkey" FOREIGN KEY ("regimeId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Crop" ADD CONSTRAINT "Crop_cropTypeId_fkey" FOREIGN KEY ("cropTypeId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;
