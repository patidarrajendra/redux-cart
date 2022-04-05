import {connect} from 'react-redux';
import Home from '../components/Home';
import {addTOCart} from '../service/Actions/actions';

const mapStateToProps = state => ({
    data:state.cardItems
})

const mapDispatchToProps = dispatch=>({
    addTOCartHandler:data=>dispatch(addTOCart(data))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home)

//export default Home;



