import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

export default function Main() {
  const [category, setCategory] = useState([]);
  const { auth } = useSelector(state => state);

  useEffect(() => {
    axios.
      get("http://mynodeapis.herokuapp.com/api/category", { headers: { Authorization: auth.accessToken } })
      .then(res => {
        console.log(res);
        setCategory(res.data)
      })
      .catch(err => console.log(err))
  }, [])


  return (
    <div className='container'>
      <h1>Kategory</h1>
      {console.log(category)}
      {category.map((item, index) => (
        <div className='p-2 my-2 border bg-light' key={index}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  )
}
