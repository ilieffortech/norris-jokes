import React from 'react'
import { Link } from 'react-router-dom'

const ForwardLink = ({ to, children }) => (
    <Link to={to}>{children} {"->"}</Link>
)

export default ForwardLink;