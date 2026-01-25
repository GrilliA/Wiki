-- CreateTable
CREATE TABLE "Client" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "surname" TEXT,
    "alias" TEXT,
    "piva" TEXT,
    "phoneNumber" TEXT,
    "address" TEXT,
    "addressNumber" TEXT,
    "cap" TEXT,
    "parentId" INTEGER,
    "representativeId" TEXT,
    "regionId" INTEGER,
    "provinceId" INTEGER,
    "comuneId" INTEGER,
    "facilityId" INTEGER,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_regionId_fkey" FOREIGN KEY ("regionId") REFERENCES "Region"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_provinceId_fkey" FOREIGN KEY ("provinceId") REFERENCES "Province"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_comuneId_fkey" FOREIGN KEY ("comuneId") REFERENCES "Comune"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_representativeId_fkey" FOREIGN KEY ("representativeId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Client"("id") ON DELETE SET NULL ON UPDATE CASCADE;
