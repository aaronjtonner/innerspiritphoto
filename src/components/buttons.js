import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// Links & Anchors
// Links
export const ButtonPrimary = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-accent-darker);
    color: var(--txt-light);
  }

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`
export const ButtonLight = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;

  background: var(--clr-light);
  color: var(--clr-accent);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  &:hover {
    background: var(--clr-light-secondary);
  }

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`

export const ButtonOutlineLight = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.25s linear;
  color: var(--txt-light);
  border-radius: 4px;
  border: 1px solid var(--clr-light);
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px 0;

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`

export const ButtonUnderline = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: blue;

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`
export const ButtonUnderlineLight = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--txt-light);
`
export const ButtonInline = styled(props => <Link {...props} />)`
  cursor: pointer;
  display: inline-block;
  color: var(--clr-accent);
  text-decoration: none;
`

// Anchors
export const AnchorPrimary = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: var(--clr-accent);
  color: var(--txt-light);
  border: 1px solid var(--clr-accent);

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;
    justify-content: center;

    & > * + * {
      margin-left: 5px;
    }
  }

  &:hover {
    background: var(--clr-accent-darker);
  }
`

export const AnchorSecondary = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--txt-light);
  border: 1px solid var(--txt-light);

  &:hover {
    opacity: 0.8;
  }
`
export const AnchorSecondaryDark = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 1em 1.33em;
  transition: all 0.2s linear;

  background: transparent;
  color: var(--clr-dark);
  border: 1px solid var(--clr-dark);

  &:hover {
    opacity: 0.8;
  }
`

export const AnchorUnderline = styled.a`
  cursor: pointer;
  display: inline-block;
  font-size: var(--fs-sm);
  font-weight: var(--fw-button);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: blue;

  // this is for when an icon is used inside too
  div {
    display: flex;
    align-items: center;

    & > * + * {
      margin-left: 0;
      padding-left: 0;
    }
  }
`

export const AnchorInline = styled.a`
  cursor: pointer;
  display: inline;
  color: var(--clr-accent);
  text-decoration: none;

  span.light {
    color: var(--txt-light);
  }

  span.dark {
    color: var(--txt-dark);
  }
`
