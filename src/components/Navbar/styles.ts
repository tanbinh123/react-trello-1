import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderDiv = styled.nav`
height: 60px;
background-color: #0067a3;
display: flex;
align-items: center;
justify-content: space-between;
`

export const MyLink = styled.a`
color: white;
text-decoration: none
padding: 5px;
margin: 0 4px;
background-color: #4d95bf;
border-radius: 3px;
cursor: pointer;
`

export const MyRouterLink = styled(Link)`
color: white;
text-decoration: none
padding: 5px;
margin: 0 4px;
background-color: #4d95bf;
border-radius: 3px;
`

export const Logo = styled.img`
height: 40px;
`