-- CreateTable
CREATE TABLE "Inventory" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletedAt" TIMESTAMP(3),
    "id" SERIAL NOT NULL,
    "stockQuantity" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "storageId" INTEGER NOT NULL,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_storageId_fkey" FOREIGN KEY ("storageId") REFERENCES "Option"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
