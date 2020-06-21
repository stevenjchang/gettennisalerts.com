import React from "react"
import Img1 from "../images/image_choose.png"
import Img2 from "../images/undraw_email_campaign_qa8y.png"
import Img3 from "../images/undraw_mail_2_tqip.png"
import Img4 from "../images/undraw_mobile_inbox_3h46.png"
import Img5 from "../images/image_followers.png"

const imgArray = [Img5, Img1, Img3, Img2]
const heading = [
  "Follow Players",
  "Set Alerts",
  "Email Notifications",
  "And More",
]
const para = [
  "",
  "",
  "",
  "Currently in beta, there are more features to come. Sign up to be notified of new features, or take our survey",
]

const ExplanationSection = () => {
  return (
    <>
      <div className="bg">
        <div className="container flex flex-col my-20 justify-center w-5/6">
          {imgArray.map((img, idx) => {
            let cn = idx % 2 === 0 ? "flex m-3" : "flex m-3 flex-row-reverse"
            return (
              <div className={cn}>
                <div className="w-2/5 custom-flex-center flex-row">
                  <img src={img} alt="select player" className="" />
                </div>
                <div className="w-3/5 flex justify-center flex-col items-center">
                  <h1 className="font-bold uppercase">{heading[idx]}</h1>
                  <hr className="mt-5 mb-5" />
                  <p className="custom-text-gray w-3/4 ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt orci ut suscipit pretium. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Cras tincidunt orci ut suscipit pretium
                    {para[idx]}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ExplanationSection
