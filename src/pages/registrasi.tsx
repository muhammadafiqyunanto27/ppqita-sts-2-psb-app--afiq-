import { useState } from "react";

export default function Registrasi() {
    const [formData, setFormData] = useState ({
        nama_orang_tua: '',
        no_wa_orang_tua: '',
        alamat: '',
        nama_santri: '',
        tanggal_lahir_santri: '',
        hafalan_per_juz: '',
        motivasi_santri: '',
        hobi_santri: '',
    })

    const handleChange = (e:React.ChangeEvent <HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault()
        const response = await fetch('api/registrasi', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData)
        })
        if (response.ok) {
            alert('Registration Succesfully')
        } else {
            alert('Registration failed')
        }
    }

    return (
        <div className="flex justify-center items-center p-14">
            <form className="flex flex-col justify-center items-center gap-4 shadow-lg w-3/5 p-10 bg-slate-400 rounded-md" onSubmit={handleSubmit}>
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="nama_orang_tua" placeholder="Nama Orang Tua" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="no_wa_orang_tua" placeholder="No Wa Orang Tua" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="alamat" placeholder="Alamat" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="nama_santri" placeholder="Nama Santri" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="date" name="tanggal_lahir_santri" placeholder="Tanggal Lahir Santri" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="hafalan_per_juz" placeholder="hafalan Santri" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="motivasi_santri" placeholder="Motivasi Santri" onChange={handleChange} />
            <input className="p-3 rounded-md shadow-xl w-3/5" type="text" name="hobi_santri" placeholder="Hobi Santri" onChange={handleChange} />
            <button className="p-3 rounded-md shadow-xl w-2/4 bg-slate-950 text-white" type="submit">Submit</button>
        </form>
        </div>
    )

}