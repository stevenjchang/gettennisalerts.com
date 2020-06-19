import React from "react"

import Section2 from "../components/Section2"

import LogoImg from "../images/GTA.png"
import HeroImg from "../images/undraw_grand_slam_0q5r 1.png"

// import { FaBeer } from "react-icons/fa"

const IndexPage = () => {
  return (
    <div className="font-sans">
      <nav className="h-16 sticky top-0 z-10 bg-white flex items-center">
        <div className="container flex justify-between items-center bg-gray-10 w-5/6 lg:w-3/4">
          <a href="" className="">
            <img src={LogoImg} alt="" className="mb-0" />
          </a>
          <div className="css-nav-right">
            <a href="" className="custom-nav-links">
              Features
            </a>
            <a href="" className="custom-nav-links">
              Pricing
            </a>
            <a href="" className="custom-nav-links">
              Contact Us
            </a>
          </div>
        </div>
      </nav>
      <div className="css-shadow-div sticky w-full"></div>
      <div className="main-container relative">
        <div className="cover h-1 absolute w-full bg-white"></div>
        <div className="container">
          <section className="container custom-section-1 flex h-screen w-3/4">
            <div className="custom-left w-1/2 flex flex-col justify-center items-start">
              <h1 className="text-5xl font-bold mb-8 mt-8">
                Never miss another tennis match
              </h1>
              <h3 className="text-gray-600 tracking-wide w-5/6">
                Follow your favorite tennis stars and be notified before each
                match starts. We will email you 1 day and 1 hour before each
                match.
              </h3>
              <div className="mt-10">
                <button className="custom-cta-button custom-button-1 bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white mr-4 py-2 px-4 hover:border-transparent">
                  learn more
                </button>
                <button className="custom-cta-button custom-button-2 text-white py-2 px-4">
                  sign up now
                </button>
              </div>
            </div>
            <div className="custom-right w-1/2 flex justify-center items-center">
              <img src={HeroImg} alt="" />
            </div>
          </section>
        </div>
        <Section2 />
      </div>
    </div>
  )
}

export default IndexPage
