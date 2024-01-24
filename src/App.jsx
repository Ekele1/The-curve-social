import './App.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
// import SignUp from './Onboarding/SignUp/SignUp'
// import Login from './Onboarding/Login/Login'
import Login from './Onboarding/Login'
// import HomePage from './assets/Homepage'
// import RealPage from './assets/RealPage'
import Instagram from './assets/RealPage'

// import Post from './assets/post'
// import NewUi from './assets/NewUi'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/instagram",
    element: <Instagram />
  },
  // {
  //   path: "/home",
  //   element: <NewUi />
  // },
  // {
  //   path: "/post",
  //   element: <Post />
  // }

])

function App() {


  return (
    <>
      <RouterProvider router={router} />
      {/* <h1>hello</h1> */}
    </>
  )
}

export default App
