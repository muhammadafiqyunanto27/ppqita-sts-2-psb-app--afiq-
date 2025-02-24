/*
  Warnings:

  - You are about to drop the column `tangal_lahir_santri` on the `Registrasi` table. All the data in the column will be lost.
  - Added the required column `tanggal_lahir_santri` to the `Registrasi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Registrasi" DROP COLUMN "tangal_lahir_santri",
ADD COLUMN     "tanggal_lahir_santri" TEXT NOT NULL;
