import React, { useEffect, useState } from "react"

import "./Counter.css"

const tournamentTime = new Date("2020-12-25")

const CounterState = () => {
  const [timeRemaining, setTimeTimeRemaining] = useState({})

  useEffect(() => {
    // setInterval(() => calcTime(new Date()), 1000)
  }, [timeRemaining.seconds])

  function calcTime(now) {
    const time = tournamentTime - now
    const weeks = Math.floor(time / (1000 * 60 * 60 * 24) / 7)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)
    setTimeTimeRemaining({ weeks, days, hours, minutes, seconds })
  }

  return (
    <>
      <CounterSection time={timeRemaining} />
    </>
  )
}

const CounterSection = ({ time }) => {
  const { weeks = 3, days = 187, hours = 23, minutes = 55, seconds = 13 } = time
  return (
    <>
      <div className="bg-teal-600">
        <section className="container flex justify-evenly p-10 px-40">
          <div className="custom-counter-text-container">
            <p>{weeks}</p>
            <p className="text-sm">Weeks</p>
          </div>
          <div className="custom-counter-text-container">
            <p>{days}</p>
            <p className="text-sm">Days</p>
          </div>
          <div className="custom-counter-text-container">
            <p>{hours}</p>
            <p className="text-sm">hours</p>
          </div>
          <div className="custom-counter-text-container">
            <p>{minutes}</p>
            <p className="text-sm">minutes</p>
          </div>
          <div className="custom-counter-text-container">
            <p>{seconds}</p>
            <p className="text-sm">seconds</p>
          </div>
        </section>
      </div>
    </>
  )
}

export default CounterState

// export default () => <div>fake</div>
