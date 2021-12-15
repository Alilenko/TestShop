import React from 'react';

import {deleteFromBasket, changeQtty, changeTotalPrice, changeOrderQtty, addToBasket, deleteQtty} from '../../action';
import { useState,  useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';


import './basketListItem.css'

const BasketListItem = ({price, id, displayName, mainId}) => {
   const {order } = useSelector(state => state)
    
    
    const dispatch = useDispatch();

    const findGoods = order.filter(item => item.mainId === mainId)
    const findQtty = findGoods.map(item => item.qtty)
      
      const inc = (id) => {
          dispatch(changeTotalPrice(price))
          dispatch(changeQtty(1))
          dispatch(addToBasket(id))

      }
      const dec = (id) => {
          if(findQtty == 1){        
              onDelete(id)
          } else{
          dispatch(changeTotalPrice(-price))
          dispatch(changeQtty(-1))
          dispatch(deleteQtty(id))
          
      }}

      const onDelete = (id) => {
          
          dispatch(deleteFromBasket(id))
          dispatch(changeTotalPrice(-(price*findQtty)))
          dispatch(changeQtty(0))
      }

    return (
        <div >
        <div className="collection-item basket-item">
        <div className='basket-name'>{displayName}</div>
            <div className='basket-qtty'>
                <button onClick={() => dec(mainId)} className='dec'>-</button>
                {findQtty}
                <button onClick={() => inc(mainId)} className='inc'>+</button></div>
                <div className='basket_sum'>{price}x{findQtty} {price*findQtty}</div>
           <i onClick={() => onDelete(mainId)} className="material-icons icons-close">close</i></div>
        
        </div>
    )
}


export default BasketListItem;
