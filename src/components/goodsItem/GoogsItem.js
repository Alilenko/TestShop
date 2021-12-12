import React from 'react';
import {connect} from 'react-redux';
import {addToBasket, changeQtty, changeTotalPrice} from '../../action'
import './goodsItem.css';
import { useSelector, useDispatch} from 'react-redux';


const GoogsItem = (props) => {
  const {goods, order, loading} = useSelector(state => state);
  const dispatch = useDispatch();


    const {mainId, displayName, displayDescription, displayAssets, price } = props
    if (!displayDescription){
        return null
    }
    const addToBasketClick = (mainId) => {
      const exist = order.find((elem) => elem.mainId === mainId)

      if(exist){
          
      } else{
      const ord = goods.filter(item => item.mainId === mainId)

      const newOrder = {
      mainId: ord[0].mainId,
      displayName: ord[0].displayName,
      displayDescription: ord[0].displayDescription,
      displayAssets: ord[0].displayAssets[0].url,
      price: ord[0].price.finalPrice,
      qtty: 1
      }
      dispatch(addToBasket(newOrder))
      dispatch(changeQtty(1))
      dispatch(changeTotalPrice(ord[0].price.finalPrice))
    }
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
              <button onClick={(e) => {e.preventDefault(); addToBasketClick(mainId)}} className='btn blue darken-4'>Купить</button>
              </div>
            </div>
           
          </div>
      
    )
}


export default GoogsItem;
