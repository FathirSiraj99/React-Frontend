import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const UserList = () => {
    const [users, setUser] = useState([])
    const [nama, setNama] = useState('')

    const fetchData = async () => {
        const response = await axios.get(`http://192.168.18.210:4012/api/user/`)
        setUser(response.data)
    }

    const handlerDelete = async (id) => {
        try {
            await axios.delete(`http://192.168.18.210:4012/api/user/${id}`)
            fetchData()
        } catch (error) {
            
        }
    }

    useEffect(() => {
        fetchData()
        setNama('Rizwar')
    },[])
console.log(nama)
  return (

<div className="conrainer-mt-5">
    <div className="card">
        <div className="card-body">
                
    <table class="table">
    <thead>
      <tr>
        <th scope="col">nomor</th>
        <th scope="col">name</th>
        <th scope="col">address</th>
        <th scope="col">Action</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item, index )=> (
        <tr key={item.id}>
            <td>{(index + 1)}</td>
            <td>{item.name}</td>
            <td>{item.address}</td>
            <td>
                <Link className='btn btn-warning mx-3' to={`/updateuser/${item.id}`}>Edit</Link>
                <button onClick={() => handlerDelete(item.id)} className='btn btn-danger'>Delete</button>
            </td>
        </tr>
      ))}
    </tbody>
  </table>
        </div>
    </div>
</div>

  )
}

export default UserList
