import React from "react"

import HeroImg from "../images/undraw_grand_slam_0q5r 1.png"

const Hero = () => {
  return (
    <>
      <div className="container">
        <section className="container custom-section-1 flex flex-col-reverse lg:flex-row w-3/4 lg:mt-0">
          <div className="custom-left w-full lg:w-1/2 flex flex-col justify-center items-start">
            <h1 className="text-3xl lg:text-5xl font-bold mb-8 mt-8 text-center lg:text-left">
              Never miss another tennis match
            </h1>
            <h3 className="text-gray-600 tracking-wide w-full lg:w-5/6 text-center lg:text-left">
              Follow your favorite tennis stars and get alerts before each match
              starts. We will email you 1 day and 1 hour before each match.
            </h3>
            <div className="mt-10 mb-12 flex justify-center lg:justify-start w-full">
              <a href="#features_section">
                <button className="custom-cta-button custom-button-1 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white mr-2 md:mr-4 hover:border-transparent">
                  learn more
                </button>
              </a>
              <a href="#signup_section">
                <button className="custom-cta-button custom-button-2 text-white">
                  sign up now
                </button>
              </a>
            </div>
          </div>
          <div className="custom-right lg:w-1/2 flex justify-center items-center mx-auto">
            <img src={HeroImg} alt="" />
          </div>
        </section>
      </div>
    </>
  )
}

export default Hero
