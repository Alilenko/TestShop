import React from 'react';
import {connect} from 'react-redux';
import {showBasket} from '../../action'
import BasketList from '../basketList/BasketList';
import './cart.css'

const Cart = ({order, showBasket}) => {

    
    return (
        <div onClick={showBasket} className='cart blue darken-4 white-text'>
              <i className="material-icons">add_shopping_cart</i>
              <span>{order ? order.length : 0}</span>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
        order: state.order
    }
}
const mapDispatchToProps = {
    showBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
