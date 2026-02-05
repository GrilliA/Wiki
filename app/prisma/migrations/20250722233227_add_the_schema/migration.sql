-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Option"("id") ON DELETE SET NULL ON UPDATE CASCADE;
