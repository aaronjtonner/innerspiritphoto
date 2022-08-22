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

const Text = styled.div`
  align-self: start;
`

const AccordionContent = styled.div`
  display: ${({ item }) => (item ? "block" : "none")};
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
        <p className="bold">{props.question}</p>
        <ArrowImg item={item} src={ArrowDown} alt="" />
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

export default function StormdoorFAQ() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          Get your questions answered by our{" "}
          <span className="accent">storm door experts!</span>
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="Wow much does a Calgary storm door cost?"
              answer="On average, a calgary storm door cost between $200 and $400. The cost will depend on the size of the door, the type of glass, and the frame. For example, a small door with a single pane of glass will cost less than a large door with a double pane of glass. The frame also plays a role in the cost of the door. A metal frame will be more expensive than a wood frame. Lastly, the type of glass will also affect the cost. There are three types of glass: clear, tempered, and tinted. Clear glass is the least expensive, while tinted glass is the most expensive. Tempered glass is somewhere in between. When choosing a calgary storm door, it is important to consider all of these factors to get an accurate estimate of the cost for your storm door. Contact us today to get an estimate."
            />
            <AccordionItem
              question="How do you install a storm door?
              "
              answer="Because storm doors are typically made of glass or metal, they can be a bit tricky to install. The first step is to measure the door opening and then cut the storm door to size. Next, use a drill to make holes for the handles and hinges. Once the holes are drilled, it's time to attach the storm door to the frame. Begin by attaching the hinges, and then secure the door in place with screws or bolts. Finally, install the handle and any other hardware, such as a latch or deadbolt. With these simple steps, you'll have your Calgary storm door installed in no time. If you need assistance with a storm door selection, or repairs and installation, contact KLAAD Glass!"
            />
            <AccordionItem
              question="Do storm doors add value to your home?"
              answer="Any homeowner knows that the key to a comfortable home is making sure it is well insulated. In winter, you want to keep the warm air in and the cold air out. In summer, you want to keep the cool air in and the hot air out. Storm doors are an excellent way to add an extra layer of protection to your home, keeping it more comfortable year-round. Not only do storm doors help to regulate temperature, but they also provide an extra level of security. In addition, storm doors can be a great way to add curb appeal to your home. Calgary is known for its extreme weather conditions, so a storm door can be a valuable investment for any homeowner. When it comes to adding value to your home, storm doors are a wise choice."
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
