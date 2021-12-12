import React from 'react';

import {deleteFromBasket, changeQtty, changeTotalPrice, changeOrderQtty, addToBasket} from '../../action';
import { useState,  useEffect } from 'react';
import { useDispatch,  useSelector } from 'react-redux';


import './basketListItem.css'

const BasketListItem = ({price, id, displayName, mainId}) => {
   const {goods, order} = useSelector(state => state)
    
    const [qtty, setQtty] = useState(1);
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();


    useEffect((id) => {
        setSum(sum => price * qtty ) 

        
      }, [])   
      

  
      const inc = (id) => {
          setQtty(qtty => qtty + 1)
          setSum(sum => sum + price)
  
          dispatch(changeTotalPrice(price))
          dispatch(changeQtty(1))

      }
      const dec = (id) => {
          if(qtty === 1){        
              onDelete(id)
          } else{
          setQtty(qtty => qtty - 1)
          setSum(sum => sum - price)
          dispatch(changeTotalPrice(-price))
          dispatch(changeQtty(-1))
      }}
      const onDelete = (id) => {
          dispatch(deleteFromBasket(id))
          dispatch(changeTotalPrice(-(price*qtty)))
      }

    return (
        <div >
        <div className="collection-item basket-item">
        <div className='basket-name'>{displayName}</div>
            <div className='basket-qtty'>
                <button onClick={() => dec(id)} className='dec'>-</button>
                {qtty}
                <button onClick={() => inc(mainId)} className='inc'>+</button></div>
                
           {price}x{qtty} {sum}<i onClick={() => onDelete(id)} className="material-icons icons-close">close</i></div>
        
        </div>
    )
}


export default BasketListItem;
