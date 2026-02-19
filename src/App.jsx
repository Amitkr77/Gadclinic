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
import Parvindar from "./doctor/Parvindar"
import Simrandeep from "./doctor/Simrandeep"
import IVF from "./treatment/IVF"
import HipReplcament from "./treatment/HipReplcament"
import Infertility from "./treatment/Infertility"



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path= '/doctor-profiles' element= {<DocterProfiles/>}/>
      <Route path="/doctor-profile/parvinder" element={<Parvindar />} />
      <Route path="/doctor-profile/simrandeep" element={<Simrandeep />} />

      <Route path="/treatments/knee-replacement" element={<KneeReplacement />} />
      <Route path="/treatments/fracture" element={<Fracture />} />
      <Route path="/treatments/joint-pain" element={<JointPain />} />
      <Route path="/treatments/infertility" element={<Infertility />} />
      <Route path="/treatments/ivf" element={<IVF />} />
      <Route path="/treatments/hip-replacement" element={<HipReplcament />} />


      <Route path="/book-appointment" element={<BookAppointment />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />

      <Route path="privacy-policy" element={<PrivacyPolicy />} />
      <Route path="terms-of-service" element={<TermsOfService />} />
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