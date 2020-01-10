import React, { useState } from 'react'

import { Icon } from '..'
const TIMER_BASE_TIME_IN_SECONDS = 25 * 60

const formatSecondsToMinutes: (time: number) => string = time => {
  const minutes = Math.floor(time / 60)
    .toString()
    .padStart(2, '0')
  const seconds = (time % 60).toString().padStart(2, '0')

  return `${minutes}:${seconds}`
}

let interval: number | null

const Timer: React.FC = () => {
  const [isRunning, setRunning] = useState(false)
  const [timeRemaining, setTimeRemaining] = useState(TIMER_BASE_TIME_IN_SECONDS)

  const runTimer = () => {
    interval = setInterval(() => {
      setTimeRemaining(prevTime => {
        if (prevTime <= 0) {
          handleStop()
        }
        return prevTime - 1
      })
    }, 1000)
  }

  const handlePlay = () => {
    setRunning(true)
    runTimer()
  }

  const handlePause = () => {
    if (interval) {
      clearInterval(interval)
    }
    setRunning(false)
  }

  const handleStop = () => {
    if (interval) {
      clearInterval(interval)
    }
    setRunning(false)
    setTimeRemaining(TIMER_BASE_TIME_IN_SECONDS)
  }
  return (
    <div className="flex flex-col">
      <div className="m-4">
        <p>Time remaining:</p>
        <span className="font-bold">
          {formatSecondsToMinutes(timeRemaining)}
        </span>
      </div>
      <div className="m-4 flex justify-around">
        {isRunning ? (
          <>
            <Icon
              name="pause"
              size="big"
              color="grey"
              data-testid="button-pause"
              onClick={handlePause}
            />
            <Icon
              name="stop"
              size="big"
              color="grey"
              data-testid="button-stop"
              onClick={handleStop}
            />
          </>
        ) : (
          <>
            <Icon
              name="play"
              size="big"
              color="grey"
              data-testid="button-play"
              onClick={handlePlay}
            />
            <Icon
              name="stop"
              size="big"
              color="grey"
              data-testid="button-stop"
              onClick={handleStop}
            />
          </>
        )}
      </div>
    </div>
  )
}

export default Timer
