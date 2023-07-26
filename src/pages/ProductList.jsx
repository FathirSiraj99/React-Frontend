import React, { useEffect, useState } from 'react'
import axios from 'axios'


const UserList = () => {
    const [users, setUser] = useState([])

    const fetchData = async () => {
        const response = await axios.get(`http://192.168.18.210:4012/api/product/`)
        setUser(response.data)
    }


    useEffect(() => {
        fetchData()
        
    },[])

  return (
    <table class="table">
    <thead>
      <tr>
        <th scope="col">nomor</th>
        <th scope="col">nama produk</th>
        <th scope="col">harga</th>
        <th scope="col">expire</th>
        <th scope="col">created time</th>
        <th scope="col">update time</th>
      </tr>
    </thead>
    <tbody>
      {users.map((item, index )=> (
        <tr key={item.id}>
            <td>{(index + 1)}</td>
            <td>{item.nameProduct}</td>
            <td>{item.price}</td>
            <td>{item.expired}</td>
            <td>{item.createdAt}</td>
            <td>{item.updatedAt}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default UserList