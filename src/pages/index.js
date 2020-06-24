import React from "react"

import CustomHeader from "../components/CustomHeader"
import Hero from "../components/Hero"
import Counter from "../components/Counter"
import ExplanationSection from "../components/ExplanationSection"
import EmailSignUp from "../components/EmailSignUp"

const IndexPage = () => {
  return (
    <div className="font-sans">
      <CustomHeader />
      {/* part of sticky navbar trick */}
      <div className="css-shadow-div sticky w-full"></div>

      <div className="main-container relative">
        {/* part of sticky navbar trick */}
        <div className="cover h-1 absolute w-full bg-white"></div>
        <Hero />
        {/* <Counter /> */}
        <ExplanationSection />
        <EmailSignUp />
      </div>
    </div>
  )
}

export default IndexPage
