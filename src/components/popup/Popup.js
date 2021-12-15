import React, { useEffect } from 'react'
import './popup.css'
import {useDispatch, useSelector} from 'react-redux'
import { changePopup } from '../../action'

const Popup = () => {
    const {popup} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(()=>{
        setTimeout(timer, 1000)
    },[])

    const timer = () => {
        dispatch(changePopup(false))
        
    }
    
    return (
        <div className='popup'>
        Товар добавлен к корзину
        </div>
    
    )
}

export default Popup
