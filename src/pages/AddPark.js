import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddPark = () => {
  const [form, setForm] = useState()
  const navigate = useNavigate()

  const newPark = (event) => {
    event.preventDefault()

    fetch(`${process.env.REACT_APP_API_ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err))
      navigate('/')

    console.log('Product sent to API')
  }

  const handleForm = (event) => {
    console.log(event.target.value)
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  return (
      <div align='center' className="form-card">
        <form className='add-form'>
          <label htmlFor="">Name: </label>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            placeholder="ex. Boca Code Aquarium"
            name="name"
            id="name"
          />

          <label htmlFor="">Address: </label>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            placeholder="ex. 612 wolf ave"
            name="address"
            id="address"
          />

          <label htmlFor="">Hours:</label>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            placeholder="ex. 8:00 AM - 10:00 PM "
            name="hours"
            id="hours"
          />

          <label htmlFor="">Price:</label>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            placeholder="ex. $25.00"
            name="price"
            id="price"
          />

          <label htmlFor="">Website:</label>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            placeholder="ex www.bocacode.com"
            name="website"
            id="website"
          />

          <label htmlFor="">URL:</label>
          <input
            onChange={(event) => handleForm(event)}
            type="text"
            placeholder="ex www.PhotoURLGoesHere.com"
            name="url"
            id="url"
          />
          <button className='add-park-btn' onClick={(event) => newPark(event)}>Add Park</button>
        </form>
      </div>
  )
}

export default AddPark
