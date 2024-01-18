import { Helmet } from "react-helmet-async"
import Categories from "../../components/Categories/Categories"
import Rooms from "../../components/Rooms/Rooms"

const Home = () => {


  return (
    <div>
      <Helmet>
        <title> StayVista || Room Booking </title>
      </Helmet>
      <Categories></Categories>
      <Rooms></Rooms>
    </div>
  )
}

export default Home
