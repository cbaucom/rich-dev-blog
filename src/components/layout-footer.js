import React from "react"
import styled from "styled-components"

const Footie = styled.div`
  display: grid;
  align-self: stretch;
  justify-self: stretch;
`

const FootieContent = styled.div`
  color: rgb(120, 120, 120);
  font-size: 12px;
  align-self: center;
  justify-self: center;
`

const LayoutFooter = () => {
  return (
    <Footie>
      <FootieContent>© 2019 Rich Seiffert</FootieContent>
    </Footie>
  )
}

export default LayoutFooter
