import React from "react"
import Img1 from "../images/image_choose.png"
import Img2 from "../images/undraw_email_campaign_qa8y.png"
import Img3 from "../images/undraw_mail_2_tqip.png"
import Img4 from "../images/undraw_mobile_inbox_3h46.png"

const ExplanationSection = () => {
  return (
    <>
      <div className="bg">
        <div className="container flex flex-col my-20">
          <div className="flex m-3">
            <div className="w-1/3 custom-flex-center flex-row">
              <img src={Img1} alt="select player" className="" />
            </div>
            <div className="w-2/3 flex justify-center flex-col items-center">
              <h1>Choose</h1>
              <hr />
              <p>Choose only the players you want to follow</p>
            </div>
          </div>

          <div className="flex m-3">
            <div className="w-2/3 flex justify-center flex-col items-center">
              <h1>Choose</h1>
              <hr />
              <p>Choose only the players you want to follow</p>
            </div>
            <div className="w-1/3 custom-flex-center">
              <img src={Img3} alt="select player" className="" />
            </div>
          </div>
          <div className="flex m-3">
            <div className="w-1/3 custom-flex-center">
              <img src={Img4} alt="select player" className="" />
            </div>
            <div className="w-2/3 flex justify-center flex-col items-center">
              <h1>Choose</h1>
              <hr />
              <p>Choose only the players you want to follow</p>
            </div>
          </div>
          <div className="flex m-3">
            <div className="w-2/3 flex justify-center flex-col items-center">
              <h1>Choose</h1>
              <hr />
              <p>Choose only the players you want to follow</p>
            </div>
            <div className="w-1/3 custom-flex-center">
              <img src={Img2} alt="select player" className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExplanationSection
