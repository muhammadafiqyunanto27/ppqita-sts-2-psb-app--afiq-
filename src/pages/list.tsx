import { register } from "module";
import { useEffect, useState } from "react";

type Registrasi = {
    id: number
    nama_orang_tua: string
    no_wa_orang_tua: string
    alamat: string
    nama_santri: string
    tanggal_lahir_santri: string
    hafalan_per_juz: string
    motivasi_santri: string
    hobi_santri: string
}

export default function List() {
    const [regitrasiList, setRegistrasiList] = useState<Registrasi[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/api/registrasi')
            const data: Registrasi[] = await response.json()
            setRegistrasiList(data)
        }
        fetchData()
    }, [])

    return (
        <div className="flex flex-col justify-center items-center p-14 gap-4">
            <h1>List Of Registration</h1>
            <ul className="flex flex-col w-2/4 rounded-md shadow-lg gap-2 p-7 bg-slate-500">{regitrasiList.map((registrasi) => (
                <li className="p-3 shadow-md bg-black text-white rounded-md" key={registrasi.id}>
                    Orang tua: {registrasi.nama_orang_tua}
                    <br /> 
                    Santri: {registrasi.nama_santri}
                    <br />
                    Alamat: {registrasi.alamat}
                    <br />
                    No Wa: {registrasi.no_wa_orang_tua}
                    <br />
                    Tanggal Lahir Santri: {registrasi.tanggal_lahir_santri}
                    <br />
                    Hafalan Santri: {registrasi.hafalan_per_juz}
                    <br />
                    Motivasi Santri: {registrasi.motivasi_santri}
                    <br />
                    Hobi Santri: {registrasi.hobi_santri}
                </li>
            ))}

            </ul>
        </div>
    )

}