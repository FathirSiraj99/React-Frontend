import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserCreate = () => {

    const [nama, setNama] = useState('')
    const [address, setAddress] = useState('')

    const navigate = useNavigate()

    const handlerSubmit = async(e) =>{
        e.preventDefault()
        try {
             await axios.post('http://192.168.18.210:4012/api/user/',{
                name: nama,
                address: address
            })

            navigate('/userlist')
        } catch (error) {
            console.log(error)
        }
    }
    

  return (


<div className="container mt-5">
    <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card">
                <div className="card-header">
                    <h4>Form Pembuatan Nama dan Alamat</h4>
                </div>
                <div className="card-body">
                    <form onSubmit={handlerSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control"  placeholder="Masukkan Nama" value={nama} onChange={(e) => setNama(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control"  placeholder="Masukkan Alamat" value={address} onChange={(e) => setAddress(e.target.value)}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default UserCreate