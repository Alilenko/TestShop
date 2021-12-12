import React, {useEffect} from 'react';
import {API_Key, API_Url} from '../../config'
import {connect} from 'react-redux';
import {goodsLoaded, goodsLoading} from '../../action'
import GoodsList from '../googsList/GoodsList';
import Cart from '../cart/Cart';
import BasketList from '../basketList/BasketList';
import Spinner from '../spinner/Spinner';
import { useDispatch } from 'react-redux';

const Shop = ({loading, show, goods}) => {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(goodsLoading())
        fetch(API_Url, {
            headers:{
                'Authorization' : API_Key
            }
        })
        .then((res) => res.json())
        .then((data) => dispatch(goodsLoaded(data.shop)))
    }, [])

    return (
        <div>
            <Cart/>
            {
                loading ? <Spinner/> :<GoodsList/> 
            }
           
           {
               show ? <BasketList/> : null
           }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        loading: state.loading,
        show: state.basketShow
    }
}
const mapDispatchToProps = {
    goodsLoaded,
    goodsLoading
}


export default connect(mapStateToProps, mapDispatchToProps)(Shop);
