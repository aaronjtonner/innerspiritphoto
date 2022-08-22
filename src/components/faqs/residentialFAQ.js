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

export default function ResidentialFAQ() {
  return (
    <Section>
      <Container className="spacing-lg">
        <h2 className="title italics bold center">
          Get your questions answered by our{" "}
          <span className="accent">home window experts!</span>
        </h2>
        <Flex>
          <div>
            <AccordionItem
              question="How much does it cost to repair a window?"
              answer="The cost of repairing a window in Calgary will vary depending on the severity of the damage. For example, a small crack can often be repaired for as little as $50, while a larger crack or hole may require a more expensive repair. The cost also depends on the type of window you have. A wood frame window will typically cost more to repair than a vinyl frame window. KLAAD Glass offers window repair services and our prices can range so it’s best to contact us for a quote to see your options!"
            />
            <AccordionItem
              question="Is it cheaper to replace or repair a window?
              "
              answer="The answer to this question depends on a number of factors, such as the age and condition of the window, the type of damage, and the cost of replacement parts or a new window. In general, however, it is usually cheaper to repair a window than to replace it. This is especially true if the damage is minor and can be easily fixed. For example, a broken pane of glass can be replaced for a few dollars, while a new window can cost hundreds of dollars. If the damage is more significant, such as a cracked frame or rotted wood, then replacement may be the more cost-effective option. Ultimately, the best way to determine whether to repair or replace a window is to consult with a professional. At KLAAD Glass we will be able to assess the damage and provide an estimate of the costs involved in each option."
            />
            <AccordionItem
              question="How do you get rid of moisture and condensation between double-pane windows?"
              answer="If you find moisture or condensation between your double-pane window panes, it's important to take action to remove it. If left unchecked, this moisture can lead to window fogging, which can permanently damage the window. There are a few things you can do to get rid of moisture and condensation between double-pane windows. One option is to use a window defogging kit, which uses a safe, environmentally friendly solution to remove the moisture. Another option is to open the window and let the air circulate. This will help to evaporate the moisture and prevent it from condensing again. Finally, you can contact a professional window defogging Calgary company like KLAAD Glass, who have the experience and equipment to safely and effectively remove window fogging and moisture."
            />
          </div>
          <div>
            <AccordionItem
              question="Can you fix a double pane window?"
              answer="Double pane windows are a great way to improve the energy efficiency of your home. However, if one of the panes becomes cracked or breaks, it can be difficult to know how to fix it. Luckily, there are a few simple steps you can take to repair a double pane window. First, clean the area around the break with soapy water. Then, use a putty knife to apply clear silicone sealant around the edges of the break. Next, place a piece of glass over the break and secure it in place with tape. Finally, allow the sealant to dry for 24 hours before removing the tape. By following these steps, you can easily repair a double pane window. If the damage is more severe and you need to replace the window, contact your calgary window installation company to get a quote!"
            />
            <AccordionItem
              question="Can a thermal pane window be repaired?"
              answer="Thermal pane windows are a type of energy-efficient window that is made up of two or more panes of glass. The panes are separated by a spacer, and the entire assembly is sealed with a gasket or sealant. This helps to create an insulated barrier that prevents heat transfer. As a result, thermal pane windows can help to keep your home warm in the winter and cool in the summer. While thermal pane windows are designed for durability, the seals can occasionally fail. If you have a foggy or condensation in your thermal pane window, it may be due to a broken seal. In most cases, thermal pane window repair is possible. A professional will be able to assess the damage and determine whether the window can be repaired or if it needs to be replaced."
            />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
