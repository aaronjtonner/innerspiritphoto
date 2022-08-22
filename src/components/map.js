import React from "react"
import styled from "styled-components"

const MapFrame = styled.iframe`
  width: 100%;
  height: 450px;
  border: 0;
`

export default function Map() {
  return (
    <div>
      <MapFrame
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d321200.4922713151!2d-114.087835!3d51.0276233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29f27be051105846!2sKLAAD%20Glass%20Ltd.!5e0!3m2!1sen!2sca!4v1660877528440!5m2!1sen!2sca"
        allowFullScreen
        loading="lazy"
      />
    </div>
  )
}
