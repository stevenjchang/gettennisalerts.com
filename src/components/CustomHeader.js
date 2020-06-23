import React, { useState } from "react"
import classnames from "classnames"

import { FiMenu } from "react-icons/fi"
import { GrClose } from "react-icons/gr"

import LogoImg from "../images/logo_tennis_terry.png"

const HamburgerMenuDropdown = ({ isOpen }) => (
  <div
    className={classnames(
      "absolute custom-hamburger-menu w-2/3 bg-gray-100 mx-8 flex flex-col ",
      { block: isOpen },
      { hidden: !isOpen }
    )}
  >
    <a href="1" className="block text-black hover:bg-green-200 p-4 rounded">
      Features
    </a>
    <a href="1" className="block text-black hover:bg-green-200 p-4 rounded">
      Pricing
    </a>
    <a href="1" className="block text-black hover:bg-green-200 p-4 rounded">
      Contact Us
    </a>
  </div>
)

const Header = ({ siteTitle }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="h-16 sticky top-0 z-10 bg-white flex items-center">
        <div className="container flex justify-between items-center bg-gray-10 w-5/6 lg:w-3/4">
          <a href="" className="flex items-center text-green-800 font-semibold">
            <img src={LogoImg} alt="" className="mb-0 h-20" />
            <p>get tennis alerts</p>
          </a>
          <div className="css-nav-right hidden lg:inline-block">
            <a href="#features_section" className="custom-nav-links">
              Features
            </a>
            <a href="" className="custom-nav-links">
              Pricing
            </a>
            <a href="" className="custom-nav-links">
              Contact Us
            </a>
          </div>
          <div className="css-nav-right inline-block lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {!isOpen && <FiMenu size="1.7em" color="#9c9999" />}
              {isOpen && <GrClose size="1.7em" color="#9c9999" />}
            </button>
          </div>
        </div>
        <HamburgerMenuDropdown isOpen={isOpen} />
      </header>
    </>
  )
}

export default Header
