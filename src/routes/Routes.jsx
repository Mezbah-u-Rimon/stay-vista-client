import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import RoomDetails from '../pages/RoomDetails/RoomDetails'
import PrivateRoute from './PrivateRoute'
import { getSingleRoom } from '../api/rooms'
import DashboardLayout from '../layouts/DashboardLayout'
import AddRoom from '../pages/Dashboard/Host/AddRoom'
import MyListings from '../pages/Dashboard/Host/MyListings'
import HostRoute from './HostRoute'
import AdminRoute from './AdminRoute'
import ManageUser from '../pages/Dashboard/Admin/ManageUser'
import Profile from '../pages/Dashboard/Common/Profile'
import MyBookings from '../pages/Dashboard/Guest/MyBookings'
import ManageBookings from '../pages/Dashboard/Host/ManageBookings'
import Statistics from '../pages/Dashboard/Common/Statistics'
import MainHome from '../pages/MainHome/MainHome'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <MainHome />,
      },
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/room/:id',
        element: <PrivateRoute> <RoomDetails></RoomDetails> </PrivateRoute>,
        loader: ({ params }) => getSingleRoom(params.id)
      }
    ],
  },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <SignUp /> },
  // dashboard layout
  {
    path: '/dashboard',
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: 'add-room',
        element: <PrivateRoute> <HostRoute><AddRoom /></HostRoute> </PrivateRoute>
        ,
      },
      {
        path: 'my-listing',
        element: <PrivateRoute> <HostRoute> <MyListings /> </HostRoute> </PrivateRoute>
      },
      {
        path: 'manage-bookings',
        element: <PrivateRoute> <HostRoute> <ManageBookings /></HostRoute> </PrivateRoute>
      },
      {
        path: 'manage-users',
        element: <PrivateRoute> <AdminRoute> <ManageUser /> </AdminRoute></PrivateRoute>
      },
      {
        path: 'profile',
        element: <PrivateRoute> <Profile /> </PrivateRoute>
      },
      {
        path: 'my-bookings',
        element: <PrivateRoute> <MyBookings /> </PrivateRoute>
      },

    ]
  }
])
