import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UserUpdate = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const { id } = useParams()

    const navigate = useNavigate()

    const fetchData = async() =>{
        try {
            const response = await axios.get(`http://192.168.18.210:4012/api/user/${id}`)
            setName(response.data.name)
            setAddress(response.data.address)
        } catch (error) {
            
        }
    }

    const handlerUpdate = async(e) => {
        e.preventDefault()
        try {
            await axios.patch(`http://192.168.18.210:4012/api/user/${id}`,{
               name: name,
               address: address
           })

           navigate('/userlist')
       } catch (error) {
           console.log(error)
       }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={handlerUpdate}>
                                <div className="row mb-3 mt-5">
                                    <div className="col-sm-10 d-flex">
                                        <h4>Name</h4>
                                        <input type="text" className="form-control mx-5" value={name} onChange={(e) => setName(e.target.value)}  />
                                    </div>
                                </div>
                                <div className="row mb-3 mt-5">
                                    <div className="col-sm-10 d-flex">
                                        <h4>Address</h4>
                                        <input type="text" className="form-control mx-4"   value={address} onChange={(e) => setAddress(e.target.value)} />
                                    </div>
                                </div>


                                <div className="col-md-12 mt-5 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-success">
                                        <i className="fa fa-save"></i>Save</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UserUpdate