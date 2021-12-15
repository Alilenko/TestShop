import React, {useState} from 'react';
import {addToBasket, changeQtty, changeTotalPrice, changePopup} from '../../action'
import './goodsItem.css';
import { useSelector, useDispatch} from 'react-redux';
import Spinner from '../spinner/Spinner';


const GoogsItem = (props) => {
  const {goods, loading} = useSelector(state => state);
  const dispatch = useDispatch();
  const [qttyLocal, setQttyLocal]= useState(1)


    const {mainId, displayName, displayDescription, displayAssets, price } = props
    if (!displayDescription){
        return null
    }
    const addToBasketClick = (mainId) => {

      const ord = goods.filter(item => item.mainId === mainId)
      setQttyLocal(qttyLocal + 1)
      dispatch(addToBasket(mainId))
      dispatch(changeQtty(qttyLocal))
      dispatch(changeTotalPrice(ord[0].price.finalPrice))
      dispatch(changePopup(true))
    }
    
 

    return (
     
          <div className="card ">
            
            <div className="card-image">
              <img src={displayAssets[0].full_background} alt={displayName}/>
            </div>
            <div className="card-content">
            <span className="card-title black-text">{displayName}</span>
              <div className='card-descr'>{displayDescription }</div>
              <div className='card-footer'>
              <p className='card-price'>{price.finalPrice} UAN</p>
              <button onClick={(e) => {e.preventDefault(); addToBasketClick(mainId)}} className='btn blue darken-4 card-button'>Купить</button>
              </div>
            </div>
           
          </div>
     
    )
}

export default GoogsItem;
