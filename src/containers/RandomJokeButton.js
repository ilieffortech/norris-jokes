import { connect } from 'react-redux'
import { randomJoke } from '../actions'
import Button from '../components/button'

const mapStateToProps = state => ({

})

const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch(randomJoke())
})

export default connect(mapStateToProps, mapDispatchToProps)(Button)