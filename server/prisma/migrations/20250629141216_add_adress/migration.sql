-- CreateTable
CREATE TABLE "Cap" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,
    "istatCode" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Cap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comune" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,
    "belfioreCode" TEXT NOT NULL,
    "istatCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "isCapital" BOOLEAN NOT NULL,
    "areaKmQ" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "provinceCode" TEXT NOT NULL,

    CONSTRAINT "Comune_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Province" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "areaKmQ" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "regionCode" TEXT NOT NULL,

    CONSTRAINT "Province_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "geoDistribution" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "areaKmQ" TEXT NOT NULL,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CapToComune" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CapToComune_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Comune_belfioreCode_key" ON "Comune"("belfioreCode");

-- CreateIndex
CREATE UNIQUE INDEX "Comune_istatCode_key" ON "Comune"("istatCode");

-- CreateIndex
CREATE UNIQUE INDEX "Province_code_key" ON "Province"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Region_code_key" ON "Region"("code");

-- CreateIndex
CREATE INDEX "_CapToComune_B_index" ON "_CapToComune"("B");

-- AddForeignKey
ALTER TABLE "Comune" ADD CONSTRAINT "Comune_provinceCode_fkey" FOREIGN KEY ("provinceCode") REFERENCES "Province"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Province" ADD CONSTRAINT "Province_regionCode_fkey" FOREIGN KEY ("regionCode") REFERENCES "Region"("code") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CapToComune" ADD CONSTRAINT "_CapToComune_A_fkey" FOREIGN KEY ("A") REFERENCES "Cap"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CapToComune" ADD CONSTRAINT "_CapToComune_B_fkey" FOREIGN KEY ("B") REFERENCES "Comune"("id") ON DELETE CASCADE ON UPDATE CASCADE;
