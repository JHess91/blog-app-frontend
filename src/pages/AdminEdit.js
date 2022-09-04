import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'


const AdminEdit = () => {
  const [form, setForm] = useState({})
  const [showForm, setShowForm] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()


  const { name, address, hours, price, website, url, } = location.state
 
  
  

  const deletePark = (event) => {
    event.preventDefault()
    console.log('Sending to API for delete')

    fetch(`http://localhost:4001?name=${name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err))
      navigate('/')
  }

  const updatePark = (event) => {
    event.preventDefault()

    fetch(`http://localhost:4001?name=${name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err))
      navigate('/single-park')

    console.log('Product sent to API')
  }

  const handleForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
    <div className="single-container">
      <div className="single-park">
        <div className='edit-buttons'>
            <button className="show-btn" onClick={() => setShowForm(!showForm)}>✎</button>
            <button className="delete-btn" onClick={deletePark}>X</button>
            <button className="add-btn"><a href="/add-park">+</a></button>
          </div>
      <h1>{name}</h1>
        {/* <img src={`https://source.unsplash.com/random?sig=${index}`} alt="" /> */}
        <img src={url} alt="" />
        <br />
        <h3>{address}</h3>
        <br />
        <p>
          <b>Hours</b>
          {hours}
        </p>
        <br />
        <p>
          <b>Price</b>
          {price}
        </p>
        <br />
        <p>
          <b className="website-link">
            <a href={website}>{website}</a>{' '}
          </b>
        </p>


        <div className="update-form">
          {showForm && (
            <form action="update-park">
              <label htmlFor="">Park name: </label>
              <input className='add-input'
                onChange={(event) => handleForm(event)}
                type="text"
                placeholder="ex. Boca Code Aquarium"
                name="name"
                id="name"
                defaultValue={name}
              />

              <label htmlFor="">Address: </label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                placeholder="ex. 612 wolf ave"
                name="address"
                id="address"
                defaultValue={address}
              />

              <label htmlFor="">Hours: </label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                placeholder="ex. 8:00 AM - 10:00 PM "
                name="hours"
                id="hours"
                defaultValue={hours}
              />

              <label htmlFor="">Price: </label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                placeholder="ex. $25.00"
                name="price"
                id="price"
                defaultValue={price}
              />

              <label htmlFor="">Website: </label>
              <input
                onChange={(event) => handleForm(event)}
                type="text"
                placeholder="ex www.bocacode.com"
                name="website"
                id="website"
                defaultValue={website}
              />
              <button className='update-btn' onClick={updatePark}>Update</button>
            </form>
          )}
        </div>
        
        
      </div>
    </div>
  )
}

export default AdminEdit

// import { useLocation } from "react-router-dom"

// const AdminEdit = () => {
//   const locationTo = useLocation()
  

//   const {name} = locationTo.state


//   return(
//     <>
//     <h1>Admin Edit</h1>
//     <h1>Name: {name}</h1>
//     </>
//   )
// }

// export default AdminEdit

