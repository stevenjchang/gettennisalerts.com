import React from "react"

const EmailSignUp = () => {
  return (
    <>
      <span id="signup_section"></span>
      <div className="custom-background-color bg-gray-400 pt-10 pb-10 lg:pt-3 lg:pb-0">
        <section className="container text-center text-white h-48 custom-flex-center">
          <div className="form-container custom-flex-center flex-col rounded-md">
            <div className="mb-6 text-gray-800 font-semibold">
              Sorry, this project is in beta testing, and is currently closed
              for new users.
            </div>
            <div className="input-container custom-flex-center px-8">
              <form
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input
                  type="email"
                  name="email"
                  size="30"
                  disable
                  className="h-10 rounded-lg text-black mb-4 w-full lg:w-auto mr-0 lg:mr-3"
                />
                <button
                  type="submit"
                  // className="bg-indigo-700 px-4 py-1 ml-4 rounded-lg font-bold"
                  className="custom-cta-button custom-button-3 bg-indigo-700 w-full lg:w-auto"
                >
                  sign up now
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default EmailSignUp
