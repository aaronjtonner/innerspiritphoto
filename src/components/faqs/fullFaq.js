import React, { useState } from "react"
import styled from "styled-components"
import { Section, Container, Flex } from "../layoutComponents"
import { ButtonUnderline } from "../buttons"

import ArrowDown from "../../images/arrow-down.svg"

const device = {
  md: "48em",
}

const AccordionWrapper = styled.div`
  border-bottom: ${({ item }) =>
    item ? "none" : "1px solid var(--clr-accent)"};
  margin-bottom: var(--spacer-md);
`

const TitleFlex = styled.div`
  padding: var(--spacer-sm);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: ${({ item }) => (item ? "4px solid #9ecaed" : "none")};

  &:hover {
    cursor: pointer;
    background: var(--clr-light-secondary);
    transition: 0.25s ease-in;
  }
`

const Wrapper = styled.div`
  padding: 2em;
  background: var(--clr-light-secondary);
  border-radius: var(--br);
`

const Text = styled.div`
  align-self: start;
`

const AccordionContent = styled.div`
  display: ${({ item }) => (item ? "block" : "none")};

  p {
    font-size: var(--fs-b);
  }
`

const ArrowImg = styled.img`
  width: 25px;
  transform: ${({ item }) => (item ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.25s;
`

const Spacer = styled.div`
  margin-bottom: var(--spacer);
`

const AccordionItem = props => {
  const [item, itemOpen] = useState(false)

  function toggleItem() {
    itemOpen(!item)
  }
  return (
    <AccordionWrapper item={item}>
      <TitleFlex item={item} onClick={toggleItem}>
        <h3 className="bold italics accent subhead">{props.question}</h3>
        <ArrowImg
          item={item}
          src={ArrowDown}
          alt="questions about nude & boudoir photography calgary"
        />
      </TitleFlex>
      <AccordionContent className="spacing" item={item}>
        <div className="spacing">
          <p>{props.answer}</p>
        </div>
        <Spacer />
      </AccordionContent>
    </AccordionWrapper>
  )
}

export default function FullFaq() {
  return (
    <Section>
      <Container>
        <Wrapper className="spacing">
          <h2 className="headline italics accent center">
            Get your boudoir questions answered
          </h2>
          <div>
            <AccordionItem
              question="What is the investment?"
              answer="The investment depends on what final images you purchase. Clients spend between $750 to $5,000, depending on wants and funds.. Once you book with us, we pull out all the stops to make this an incredible, luxurious experience.

Note: We offer flexible “layaway” plans to make it possible for anyone to comfortably afford their images. Get in touch to inquire about pricing and layaway options."
            />
            <AccordionItem
              question="I’m not a model. Will I look good?"
              answer="YES! Yes! Mark is a posing genius. He will guide you into flattering poses, showing off your best assets. Most women arrive with some insecurities and nerves. When you start seeing the images on the camera back, they vanish.

Our 40+ years of experience photographing over 5,000 women means we’re skilled at emphasizing what our clients love about themselves and minimizing anything they don’t feel comfortable showing off. 
"
            />
            <AccordionItem
              question="I don’t want to show certain “problem areas”. Can you help?"
              answer="Yes, most of us have areas of our bodies that we’re just not comfortable showing off. We’re really good at knowing exactly what poses emphasize the parts you’re MOST proud of and deemphasize (or completely cover) the areas you’d rather not show. We also offer light retouching to make sure you’re absolutely thrilled and proud of your final images. "
            />
            <AccordionItem
              question="How much time will this take?"
              answer="Most of our session days last for about three hours. The first hour is hair and makeup in our studio, and the remaining two hours are in front of the camera!  You just need to arrive with a clean face and unstyled hair! "
            />
            <AccordionItem
              question="Will I have to be fully nude?"
              answer="Only if you choose to be! Most of our clients come hoping they will be comfortable enough to do nudes. They are thrilled when they are. Usually they do a mix of nudes, lingerie and fashion glamour in their sessions.

              This is your adventure, you dictate what you want, Mark  creates a safe and comfortable environment that frees you. Oh, we have comfy robes for between sets. 
              "
            />
            <AccordionItem
              question="Can I bring someone with me to my session?"
              answer="Absolutely! Many of our clients invite a spouse, partner, or friend along. We welcome anyone who will make you feel comfortable. (And bringing a romantic partner makes for a very sexy date…)"
            />
            <AccordionItem
              question="Will my photographs appear on your website or on the internet?"
              answer="No, not unless you give us permission to do so. No one outside of our small Inner Spirit team will see your images. If you are comfortable letting us present some images for contests and marketing, you can sign a model release allowing us to. We are very strict about privacy. Only you decide who sees your photos."
            />
            <AccordionItem
              question="Do you offer retouching or enhancements?"
              answer="Yes,  our approach is very natural. Lines, blemishes, stretch marks, scars, and cellulite will be addressed (if desired), but you will look like yourself in your final images."
            />
            <AccordionItem
              question="I’m not sure about working with a male boudoir photographer. Why should I consider it?"
              answer="We completely understand this question and we’re glad you asked! Some clients have found that working with a male boudoir photographer has distinct benefits that they would not experience with a female photographer: Working with a male photographer can make it easier for some women to tap into their sensual side. Some women find that because the male-female dynamic is one they are familiar with when it comes to sensuality, they are able to access that side of themselves easier. 


              Working with a male photographer can facilitate healing for those who have experienced past trauma with a man. Some clients have reported that the experience helped them “rewrite” past traumatic experiences with men because they were able to be in full control of this experience. 
              
              
              Working with a male photographer allows you to get the perspective of what a man finds sexy about you, which may be different from what you assume. This can be especially helpful if you are getting these photos as a gift for a male romantic partner. 
              
              If you are insecure about your beauty or appeal to men, working with a male photographer can be extremely encouraging, as he assures you that you are beautiful, just the way you are (and means it!). While compliments from a woman can be amazing, it can be uniquely validating to receive compliments from a man if you have insecurities in this area. 
              "
            />
            <AccordionItem
              question="Do I have to do my own makeup and hair?"
              answer="We provide professional makeup and hair styling with your session! There’s no need to worry
about that."
            />
            <AccordionItem
              question="Can I bring my own outfits? Do you have some?"
              answer="We encourage you to bring outfits and props.
We have a nice selection of robes, wraps and shirts as well as cool things like capes, latex
dresses, wild shoes and cowboy wear. We recommend that you bring your own bras and
panties and anything else you like."
            />
            <AccordionItem
              question="I'm nervous! I don't know if I can do this!"
              answer="Nearly everyone is nervous at first. Don’t worry, there is no pressure. It all happens very
naturally, at your own pace. You’ll surprise yourself."
            />
            <AccordionItem
              question="Can I do my own makeup and/or hair?"
              answer="Yes, but we might give you a few suggestions. Jan will advise, help you or do it for you.
Whatever you feel comfortable with is fine."
            />
          </div>
        </Wrapper>
      </Container>
    </Section>
  )
}
