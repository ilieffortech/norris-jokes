import React from 'react'
import CustomText from '../components/CustomText'
import './Header.scss'

const Header = (props) => (
    <div className="headercontainer">
        <div className="left"></div>
        <div className="rigth">
            <CustomText>Favorite jokes: {props.nrOfFavoriteJokes}</CustomText>
        </div>
    </div>
)

export default Header;