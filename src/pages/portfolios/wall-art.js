import React from "react"
import BannerSecondary from "../../components/banners/bannerSecondary"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import CTAsecondary from "../../components/CTAsecondary"
import CTA from "../../components/CTA"
import BannerImg from "../../images/banners/wall-art-banner.jpg"
import { Container, Section } from "../../components/layoutComponents"
import styled from "styled-components"
import WallArtPortfolio from "../../components/Portfolios/WallArtPortfolio"

const Text = styled.div`
  max-width: 100ch;
  width: 100%;
`

export default function WallArt() {
  return (
    <Layout>
      <SEO title="" description="" />
      <BannerSecondary
        img={BannerImg}
        to1="/"
        link1="Home"
        to2="/portfolios"
        link2="Portfolios"
        to3="/portfolios/wall-art"
        link3="Wall Art"
        headline="Wall Art"
        description="When I saw my photos, I broke into tears because I thought, I can't believe how beautiful that person is. - Deanna B."
      />
      <WallArtPortfolio />
      <CTAsecondary />
      <Section>
        <Container className="spacing">
          <Text className="spacing">
            <h2 className="headline">Wall Art</h2>
            <div>
              <h3 className="headline">Enlargements and Framed Photos</h3>
              <p>
                Be the Art on your walls! Single powerful images or collages of
                images telling a story. Options are paper, metal, canvas and
                acrylic. Boudoir, nude or fashion, all work well.
              </p>
            </div>
            <div>
              <h3 className="headline">Paper Prints</h3>
              <p>
                Rich and lush traditional paper is still desirable. With a
                tested lifespan for over 200 years plus a protective museum
                quality finish means no glass. Custom sizes from 11×14 to 40×60.
                Included is our Flush Frame that floats on your wall. You can
                also go with matted and framed.
              </p>
            </div>
            <div>
              <h3 className="headline">Metal Prints</h3>
              <p>
                Detailed in high gloss the metal print showcases vibrant colors
                making it a stylish choice. The illusion of floating off the
                wall is created with special pre-installed hanging hardware.
                Being metal it won’t degrade.
              </p>
            </div>
            <div>
              <h3 className="headline">Canvas Prints</h3>
              <p>
                Archival artist canvas wrapped around a one-inch wood frame. You
                can add a metal or wood frame to it as well to make a classy art
                piece. Alternatively, your image can be mounted on museum
                quality board to make for easy framing.
              </p>
            </div>
            <div>
              <h3 className="headline">Acrylic Print</h3>
              <p>
                The unique, crisp look gives your image a futuristic look. Your
                mage appears to be painted on the glass and arrives ready to
                hang.
              </p>
            </div>
            <div>
              <h3 className="headline">why a wall print?</h3>
              <p>
                Having art on your walls is the personal touch, giving your
                walls a flavour unique to you. Women put personal images up for
                very different reasons. The room itself lends to different looks
                too. It is a reminder of your power and confidence. In the
                tumble of the day, our sense of self can get bruised a bit. An
                image reflecting back to you your true spirit lifts you up. In a
                bedroom a more daring, sultry nude or boudoir image sets the
                mood. Here it reminds you of your sensuality, how sexy you are.
                The right look shows your sensual side is more than skin deep
                :it’s how you express yourself. Living and dining rooms are
                great for those sweeping emotional images with rich colors that
                warm a room. Here you can switch it up with something artsy and
                dramatic or go earthy and quiet. Family rooms are where the
                playful images go, something fun that flavours the room with
                joy. The nice thing about photographs is they are easy to change
                seasonally. We do that in our home, loving the change it gives
                for the season. We can break out of traditional sizes. Images
                can be all sorts of shapes to go anywhere, even to fit together
                creating a larger concept on the wall. Some women get nervous
                that a wall print could be seen as vain, self-indulgent but more
                often they are viewed with envy. The common comment is “If I
                looked that good it would be on my wall too!” It may take a few
                days to adjust to a large size image but after you do, you can
                never go back! A wall size print is amazing art. You do deserve
                that for yourself.
              </p>
            </div>
          </Text>
        </Container>
      </Section>
      <CTA
        headline="we’ll create your 
        experience of a liftetime"
        subhead="Take the leap, we’ll catch you!"
        description="Feeling insecure about your body can keep you from feeling confident and sexy. A boudoir photography session is a great way to start feeling more comfortable in your own skin. When you see yourself through a photographer's lens, beautiful and sexy, it will change the way you see yourself forever. You'll be able to look back at these photos years from now and still feel confident and empowered"
      />
    </Layout>
  )
}
