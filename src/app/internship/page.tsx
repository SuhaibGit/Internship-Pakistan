import React from 'react'
import All_Internships from '../components/Allinternships'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Feedback from '../components/feedback'

const Internship = () => {
  return (
    <div>
        <Navbar/>
        <All_Internships/>
        <Feedback/>
        <Footer/>
    </div>
  )
}

export default Internship