import React from "react"

const RobotImage = ({ src, alt }) => {
  return (
    <figure>
      <img src={src} width="480" height="440" alt={alt} />
    </figure>
  )
}

export default RobotImage
