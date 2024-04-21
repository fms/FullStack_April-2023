import { Outlet, createBrowserRouter } from 'react-router-dom'
import UserPage from '../UserPage/UserPage'
import UsersNavBar from '../UsersNavBar/UsersNavBar'

const router = createBrowserRouter([{
  path: "/",
  element:
    <>
      <UsersNavBar />
      <Outlet />
    </>,
  children: [
    {
      path: "/user/:id",
      element: <UserPage />,
    },
    {
      path: "/",
      element: <p>Hello, Please select User</p>
    },
    {
      path: "*",
      element: <p>Page Not Found!</p>
    }
  ]
}
])
export default router