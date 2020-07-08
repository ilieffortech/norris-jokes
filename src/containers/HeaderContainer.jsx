import React from 'react'
import { connect } from 'react-redux';


const Header = (props) => (
    <div className="horizontalContainer">
        <div className="left"></div>
        <div className="center"> </div>
        <div className="rigth">
            Favorite jokes: {props.nrOfFavoriteJokes}
        </div>
    </div>
)

const mapStateToProps = state => ({
    nrOfFavoriteJokes: state.favoriteJokes ? state.favoriteJokes.length : 0
})


export default connect(mapStateToProps, null)(Header);