import React from 'react';
import BasketListItem from '../basketListItem/BasketListItem';
import { connect } from 'react-redux';
import {showBasket, deleteFromBasket} from '../../action'

import "./basketList.css"

const BasketList = ({order, totalPrice, showBasket, deleteFromBasket}) => {

    const element = (
        order.map(item =>     
        <div key={item.id}>
            <BasketListItem {...item}/>  
        </div>)
    )
    
     
    return (
    <div  className='basket'>
      <div className="collection basket-body">
      <div  className="collection-item active blue lighten-1">Корзина</div>

        {
            order.length ? element : <div className="collection-item ">Корзина пуста</div>
        }
      <div  className="collection-item active blue lighten-1">Общая стоимость: {totalPrice} </div>
      <i onClick={showBasket} className="material-icons modal-close">close</i>
    </div>

    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        order: state.order,
        totalPrice: state.totalPrice
    }
}
const mapDispatchToProps = {
    showBasket,

}

export default connect(mapStateToProps, mapDispatchToProps)(BasketList);
