import { Link } from 'react-router-dom'

export const AquariumCard = ({ parks, index }) => {
  return (
    <>
      <Link state={parks} to="/single-park" className="park-cards" key={index}>
        <h3 className="name-text">{parks.name}</h3>
        <img src={parks.url} alt="" />
        <small className="address-text">{parks.address}</small>
        <br />
        <small className="hour-text">
          <br />
          <b>Hours</b>
          {parks.hours}
        </small>
        <br />
        <small className="price-text">
          <br />
          <b>Price</b>
          {parks.price}
        </small>
      </Link>
    </>
  )
}
