import React from "react"

const Section2 = () => {
  return (
    <div className="custom-background-color bg-gray-400">
      <section className="container text-center text-white h-48 custom-flex-center">
        <div className="form-container custom-flex-center flex-col  px-16 py-8 rounded-md">
          <div className="mb-6 text-gray-800">
            something something something something something somethings
          </div>
          <div className="input-container custom-flex-center">
            <input type="text" size="30" className="h-8 rounded-lg" />
            <button className="bg-indigo-700 px-4 py-1 ml-4 rounded-lg">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section2
