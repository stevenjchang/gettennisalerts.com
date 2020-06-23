import React from "react"

import CustomHeader from "../components/CustomHeader"
import Counter from "../components/Counter"
import ExplanationSection from "../components/ExplanationSection"
import EmailSignUp from "../components/EmailSignUp"

import HeroImg from "../images/undraw_grand_slam_0q5r 1.png"

const IndexPage = () => {
  return (
    <div className="font-sans">
      <CustomHeader />
      <div className="css-shadow-div sticky w-full"></div>

      <div className="main-container relative">
        <div className="cover h-1 absolute w-full bg-white"></div>
        <div className="container">
          <section className="container custom-section-1 flex flex-col-reverse lg:flex-row w-3/4 lg:mt-0">
            <div className="custom-left w-full lg:w-1/2 flex flex-col justify-center items-start">
              <h1 className="text-3xl lg:text-5xl font-bold mb-8 mt-8 text-center lg:text-left">
                Never miss another tennis match
              </h1>
              <h3 className="text-gray-600 tracking-wide w-full lg:w-5/6 text-center lg:text-left">
                Follow your favorite tennis stars and be notified before each
                match starts. We will email you 1 day and 1 hour before each
                match.
              </h3>
              <div className="mt-10 mb-12">
                <button className="custom-cta-button custom-button-1 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white mr-2 md:mr-4 hover:border-transparent">
                  learn more
                </button>
                <button className="custom-cta-button custom-button-2 text-white">
                  sign up now
                </button>
              </div>
            </div>
            <div className="custom-right lg:w-1/2 flex justify-center items-center mx-auto">
              <img src={HeroImg} alt="" />
            </div>
          </section>
        </div>
        {/* <Counter /> */}
        <ExplanationSection />
        <EmailSignUp />
      </div>
    </div>
  )
}

export default IndexPage
