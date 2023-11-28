import React, { useEffect, useState } from 'react'
import './style.css'

function Basket() {

    const [user, setUser] = useState([]);

    const fetchData = () => {
      return fetch("https://northwind.vercel.app/api/products")
            .then((response) => response.json())
            .then((data) => setUser(data));
    }
  
    useEffect(() => {
      fetchData();
    },[])
    function addbasket() {
        
    }



    return (
        <div className='basket'>
            <h1>UMUMI HISSE</h1>
            <div className='basketinmaini'>
                <h3>basket</h3>
            </div>
            <ul>
                {user.map((index) => (
                    <div className='esasbasket'>
                        <li key={index.id}>{index.id}</li>
                        <li key={index.id}>{index.name}</li>
                        <button className='btn1' onClick={addbasket}>add basket</button>
                    </div>
                ))}
            </ul>
        </div>

    )
}

export default Basket