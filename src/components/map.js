import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2512.079291324071!2d-114.08281318438509!3d50.97772497955152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5371711767f98659%3A0xbbb2559053a55ca5!2sInner%20Spirit%20Photography!5e0!3m2!1sen!2sca!4v1661354922755!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
