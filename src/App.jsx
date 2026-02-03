import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import MainLayout from "./layout/MainLayout"
import BookAppointment from "./pages/BookAppointment"
import DocterProfiles from "./pages/DocterProfiles"
import KneeReplacement from "./treatment/KneeReplacement"
import Fracture from "./treatment/Fracture"
import JointPain from "./treatment/JointPain"
import Contact from "./pages/Contact"
import About from "./pages/About"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path= '/doctor_profiles' element= {<DocterProfiles/>}/>

      <Route path="/treatments/knee-replacement" element={<KneeReplacement />} />
      <Route path="/treatments/fracture" element={<Fracture />} />
      <Route path="/treatments/joint-pain" element={<JointPain />} />
      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<div className="pt-32 md:pt-40 pb-20 text-center text-3xl font-bold">404 - Page Not Found</div>} />
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