import React from 'react'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

const SeasonDisplay = ({ lat }) => {
  const seasonMapper = {
    winter: {
      message: `It's chilly!!`,
      icon: 'snowflake'
    },
    summer: {
      message: `Let's go to the beach!!`,
      icon: 'sun'
    }
  }
  console.log(seasonMapper)

  const season = getSeason(lat, new Date().getMonth())

  const { message, icon } = seasonMapper[season]

  return (
    <div className={`season-display ${season}`}>
      <i className={`${icon} icon icon-left`} />
      <h1>{message}</h1>
      <i className={`${icon} icon icon-right`} />
    </div>
  )
}

export default SeasonDisplay
