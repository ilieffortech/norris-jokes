import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, children, type }) => (
    <Link to={to}>{type === 'FORWARD'} ? {children} {"->"} : {"->"} {children}</Link>
)

export default NavLink;