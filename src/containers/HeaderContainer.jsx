import { connect } from 'react-redux';
import Header from '../components/Header'

const mapStateToProps = state => ({
    nrOfFavoriteJokes: state.favoriteJokes ? state.favoriteJokes.length : 0
})


export default connect(mapStateToProps, null)(Header);