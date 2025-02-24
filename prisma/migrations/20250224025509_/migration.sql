-- CreateTable
CREATE TABLE "Registrasi" (
    "id" SERIAL NOT NULL,
    "nama_orang_tua" TEXT NOT NULL,
    "no_wa_orang_tua" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "nama_santri" TEXT NOT NULL,
    "tangal_lahir_santri" TEXT NOT NULL,
    "hafalan_per_juz" TEXT NOT NULL,
    "motivasi_santri" TEXT NOT NULL,
    "hobi_santri" TEXT NOT NULL,

    CONSTRAINT "Registrasi_pkey" PRIMARY KEY ("id")
);
