import React from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, children, type }) => {
    if (!type || type === 'BACK') return <Link to={to}>{"<-"} {children}</Link>
    if (type === 'FORWARD') return <Link to={to}>{children} {"->"}</Link>
}

export default NavLink;