import { Calc } from "calc-js"

const initialState = {
    goods: [],
    loading: true,
    order: [],
    qtty: 0,
    totalPrice: 0,
    basketShow: false,
    search: null
}

const reducer = (state = initialState, action) => {

   switch(action.type){
       case 'GOODS_LOADING':
           return {
               ...state,
               loading: true
           }
       case 'GOODS_LOADED':
           return {
               ...state,
               goods: action.payload,
               loading: false
           }
        case 'ADD_TO_BASKET':
                return {
                    ...state, 
                    order: [...state.order, action.payload],
                }

        case 'DELETE_FROM_BASKET':
            const delItem = state.order.findIndex((item) => item.id === action.payload)
               
            return {
                ...state,
               order: [...state.order.slice(0, delItem), ...state.order.slice(delItem + 1)]
            }
        case 'CHANGE_TOTAL_PRICE':
            const newPrice = Number(state.totalPrice) + Number(action.payload)
            return {
                ...state,
                totalPrice: newPrice
            }
        case 'CHANGE_QTTY':
            const newQtty = Number(state.qtty) + Number(action.payload)
            return {
                ...state,
                qtty: newQtty
            }
        case 'SHOW_BASKET':
            return {
                ...state,
                basketShow: !state.basketShow
            }
        case 'CHANGE_SEARCH':
            return{
                ...state,
                search: action.payload
            }
       default:
        return state
   }
}

export default reducer;

