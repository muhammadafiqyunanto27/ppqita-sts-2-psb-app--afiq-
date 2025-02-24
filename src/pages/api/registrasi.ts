import {PrismaClient} from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   if (req.method === 'POST') {
    const {nama_orang_tua, no_wa_orang_tua, alamat, nama_santri, tanggal_lahir_santri, hafalan_per_juz, motivasi_santri, hobi_santri} = req.body;
    const newRegistrasi = await prisma.registrasi.create({
        data: {
            nama_orang_tua, no_wa_orang_tua, alamat, nama_santri, tanggal_lahir_santri, hafalan_per_juz, motivasi_santri, hobi_santri
        }
    })
    res.status(201).json(newRegistrasi);
   } else if (req.method === 'GET') {
    const registrasiList = await prisma.registrasi.findMany();
    res.status(200).json(registrasiList)
   } else {
    res.setHeader('Allow', ['GET', 'POST'])
    res.status(405).end(`method ${req.method} Allowed`)
   }
}