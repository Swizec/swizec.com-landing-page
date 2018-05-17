import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

import swizec from '../img/swizec.jpg'

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${swizec}) 100% 100% no-repeat;
    background-size: cover;
    overflow: hidden;
    filter: blur(35px);
    transform: scale(1.2, 1.2);
    opacity: 0.9;
  }
`

const Headshot = styled.img`
  width: 300px;
  position: relative;
`
const H1 = styled.h1`
  text-align: center;
  position: relative;
  color: white;
  text-shadow: 1px 1px black;
  margin-top: -35px;
`

const H3 = styled.h3`
  text-align: center;
  position: relative;
  color: white;
  text-shadow: 1px 1px black;
`

const P = styled.p`
  text-align: center;
  position: relative;
  color: white;
  text-shadow: 1px 0px black;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.4em;
`

const Blockquote = styled.blockquote`
  position: relative;
  color: white;
  text-shadow: 1px 0px black;
  background: rgba(0, 0, 0, 0.2);
  padding: 0.4em;
`

const Form = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Input = styled.input`
  width: 80%;
  font-size: 1.6em;
  padding: 0.2em 0.9em;
`

const Submit = styled.input`
  cursor: pointer;
  margin-top: 0.7em;
  padding: 0.3em 2.7em;
  background: pink;
  font-size: 1.4em;
  margin-bottom: 1em;
`

const SubscribeForm = () => (
  <Form
    action="https://www.getdrip.com/forms/270040280/submissions"
    method="post"
    data-drip-embedded-form="270040280"
  >
    <H3 data-drip-attribute="headline">
      Join 9,400+ people already becoming better engineers 💌
    </H3>
    <Input
      type="email"
      id="drip-email"
      name="fields[email]"
      placeholder="Add your email, like you@gmail.com"
    />
    <Submit
      type="submit"
      value="I wanna learn! 💌"
      data-drip-attribute="sign-up-button"
    />
  </Form>
)

const Quotes = () => (
  <React.Fragment>
    <Blockquote>
      your newsletter is one of my favorite, always interesting and full of
      useful content.<br />~ Gaël
    </Blockquote>
    <Blockquote>
      I just love the way you write an email.<br />~ Prashen
    </Blockquote>
    <Blockquote>
      Man, I love your way of writing these newsletters. Often very relatable
      and funny perspectives about the mundane struggles of a dev. Lightens up
      my day.<br /> ~ Kostas
    </Blockquote>
  </React.Fragment>
)

const IndexPage = () => (
  <React.Fragment>
    <Header>
      <Headshot src={swizec} alt="Swizec" />
      <H1>Want to become a better frontend engineer?</H1>
      <P>
        Subscribe below and you'll get my{' '}
        <strong>interactive JavaScript cheatsheet</strong> right away.<br />After
        that I'll send you weekly emails about <strong>React</strong>,{' '}
        <strong>JavaScript</strong>, and <strong>lessons learned</strong> in my
        20 years of writing code for companies ranging from tiny startups to
        Fortune5 behemoths.
      </P>
      <SubscribeForm />

      <Quotes />

      <H3>Latest from the blog</H3>
      <P>Coming soon ...</P>

      <H3>Books</H3>
      <P>Coming soon ...</P>

      <H3>Talks & Workshops</H3>
      <P>Coming soon ...</P>

      <H3>About me</H3>
      <P>Coming soon ...</P>
    </Header>
  </React.Fragment>
)

export default IndexPage
