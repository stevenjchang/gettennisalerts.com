import React from "react"

const EmailSignUp = () => {
  return (
    <div className="custom-background-color bg-gray-400">
      <section className="container text-center text-white h-48 custom-flex-center">
        <div className="form-container custom-flex-center flex-col py-8 rounded-md">
          <div className="mb-6 text-gray-800 font-semibold">
            This project is working and currently in beta. Sign up to be invited
            as a beta user.
          </div>
          <div className="input-container custom-flex-center">
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
                className="h-10 rounded-lg text-black"
              />
              <button
                type="submit"
                // className="bg-indigo-700 px-4 py-1 ml-4 rounded-lg font-bold"
                className="custom-cta-button custom-button-3 bg-indigo-700 ml-3"
              >
                sign up now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EmailSignUp
