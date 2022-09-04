import { Link, useLocation } from 'react-router-dom'

const SinglePark = () => {
  const location = useLocation()
  const { name, address, hours, price, website, url } = location.state
  console.log(location)

  return (
    <div className="single-container">
      <div className="single-park">
        <h1>{name}</h1>
        <img src={url} alt="" />
        <br />
        <h3>{address}</h3>
        <br />
        <p>
          <b>Hours: </b>
          {hours}
        </p>
        <br />
        <p>
          <b>Price: </b>
          {price}
        </p>
        <br />
        <p>
          <b className="website-link">
            <a href={website}>{website}</a>{' '}
          </b>
        </p>
        <button className="admin-btn">
          <Link state={location.state} to="/admin-edit">
            Admin tools
          </Link>
        </button>
      </div>
    </div>
  )
}

export default SinglePark
