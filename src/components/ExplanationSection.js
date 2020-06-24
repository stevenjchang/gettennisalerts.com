import React from "react"
import classnames from "classnames"

import Img1 from "../images/image_choose.png"
import Img2 from "../images/undraw_email_campaign_qa8y.png"
import Img3 from "../images/undraw_mail_2_tqip.png"
import Img4 from "../images/undraw_mobile_inbox_3h46.png"
import Img5 from "../images/image_followers.png"
import Img6 from "../images/undraw_online_articles_79ff.png"

const imgArray = [Img5, Img3, Img6, Img2]
const heading = [
  "Follow Players",
  // "Set Alerts",
  "Email Notifications",
  "View Scores",
  "And More",
]
const para = [
  "Choose to follow certain players and get customized alerts. Declutter what you want to see.",
  "Receive a daily summary during tournament time of the upcoming matches of your favorite players. You will also receive an alert 1 hour before each match",
  "Enjoy a clean and simplified view, only browse through the score of the players you follow. This feature is in beta.",
  "Currently in beta, there are more features to come. Sign up to be notified of new features, or take our survey",
]

const calcClassname = index => {
  return classnames(
    "flex my-3 flex-col justify-around",
    {
      "lg:flex-row": index % 2 === 0,
    },
    { "lg:flex-row-reverse": index % 2 !== 0 }
  )
}

const ExplanationSection = () => {
  return (
    <>
      <span id="features_section"></span>
      <div className="bg">
        <div className="container flex flex-col my-20 w-9/12">
          {imgArray.map((img, idx) => {
            return (
              <div key={idx} className={calcClassname(idx)}>
                <div className="w-full lg:w-2/5 custom-flex-center flex-row">
                  <img src={img} alt="select player" className="" />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center flex-col items-center">
                  <h1 className="font-bold uppercase">{heading[idx]}</h1>
                  <hr className="mt-5 mb-5" />
                  <p className="custom-text-gray text-center lg:text-left">
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
