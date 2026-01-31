import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layout/MainLayout"
import BookAppointment from "./pages/BookAppointment"
import DocterProfiles from "./pages/DocterProfiles"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/book_appointment' element={<BookAppointment/>}/>
      <Route path= '/doctor_profiles' element= {<DocterProfiles/>}/>

      </Route>

  )
)

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  
  )
}

export default App