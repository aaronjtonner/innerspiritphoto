import React from "react"
import { useGalleryQuery } from "../../hooks/useGalleryQuery"
import { Section } from "../layoutComponents"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Masonry from "react-masonry-component"

const masonryOptions = {
  transitionDuration: 0,
}

const imagesLoadedOptions = { background: ".my-bg-image-el" }

export default function MasonryGallery() {
  const data = useGalleryQuery()

  const childElements = this.props.elements.map(function (element) {
    return (
      <li className="image-element-class">
        {data.wpPage.ACF_GalleryPage.gallery.map(localFile => {
          return (
            <GatsbyImage
              image={localFile.localFile.childImageSharp.gatsbyImageData}
              alt=""
              objectFit="contain"
            />
          )
        })}
      </li>
    )
  })

  return (
    <Masonry
      className={"my-gallery-class"} // default ''
      elementType={"ul"} // default 'div'
      options={masonryOptions} // default {}
      disableImagesLoaded={false} // default false
      updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
      imagesLoadedOptions={imagesLoadedOptions} // default {}
    >
      {childElements}
    </Masonry>
  )
}
