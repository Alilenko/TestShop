import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import GoogsItem from '../goodsItem/GoogsItem';
import './goodsList.css';
import Spinner from '../spinner/Spinner';

const GoodsList = () => {
    const {goods, search} = useSelector(state => state);
    

    const searchGoods = goods.filter((item) => item.displayName.toLowerCase().includes([search]))


    const element = searchGoods.map(item => {
        return(
            <GoogsItem key={item.mainId} {...item} />
        )
    })

    return (
        <div className='container'>
        <ul className='goods__list'>
            {goods.length < 0 ? <Spinner/> : element}

        </ul>
        </div>
    )
}


export default GoodsList
