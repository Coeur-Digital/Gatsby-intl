import React, { useState } from 'react'
import styled from 'styled-components'

import NormalImg from '../image'
import { Link } from 'gatsby-plugin-intl'
const Img = styled(NormalImg)`
  position: fixed;
  display: block;
  margin: auto;
  top: 0;
  left: 0;
  widht: 40px !important;
`
const A = styled(Link)`
  padding: 2em 0;
`

function Logo() {
  return (
    <div>
      <A href="https://www.reactboilerplate.com/">
        <Img
          src="https://res.cloudinary.com/insidebox/image/upload/v1597041820/Gatsby/phuket-icon.svg"
          alt="react-boilerplate - Logo"
        />
      </A>
    </div>
  )
}

export default Logo
