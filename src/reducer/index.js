import { Calc } from "calc-js"

const initialState = {
    goods: [],
    loading: true,
    order: [],
    qtty: 0,
    totalPrice: 0,
    basketShow: false,
    search: null,
    popup: false
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
            
            const itemInd = state.order.findIndex(item => item.mainId === action.payload);
            if (itemInd>= 0){
                const itemState = state.order.find(items => items.mainId === action.payload);
                const editItem = {
                    ...itemState,
                    qtty: ++itemState.qtty
                }
                return{
                    ...state,
                    order: [
                        ...state.order.slice(0, itemInd),
                        editItem,
                        ...state.order.slice(itemInd + 1)
                    ]
                    
                }
            } 
            const item = state.goods.find(item => item.mainId === action.payload);
            const newItem = {
                mainId: item.mainId,
                displayName: item.displayName,
                displayDescription: item.displayDescription,
                displayAssets: item.displayAssets[0].url,
                price: item.price.finalPrice,
                qtty: 1
            };
                return {
                    ...state, 
                    order: [...state.order, newItem]
                }
            
        case 'DELETE_FROM_BASKET':
            const delItem = state.order.findIndex((item) => item.mainId === action.payload)

            return {
                ...state,
               order: [
                   ...state.order.slice(0, delItem),
                   ...state.order.slice(delItem + 1)]
               
            }
        case 'DELETE_FRON_BACKET_QTTY':
            const delIndx = state.order.findIndex(item => item.mainId === action.payload);
            if (delIndx>= 0){
                const itemDelState = state.order.find(item => item.mainId === action.payload);
                const deleteItem = {
                    ...itemDelState,    
                    qtty: --itemDelState.qtty 
                }
                return{
                    ...state,
                    order: [
                        ...state.order.slice(0, delIndx),
                        deleteItem,
                        ...state.order.slice(delIndx + 1)
                    ]
                    
                }
            }
            return {
                ...state
            }
        case 'CHANGE_TOTAL_PRICE':
            const newPrice = Number(state.totalPrice) + Number(action.payload)
            return {
                ...state,
                totalPrice: newPrice
            }
        case 'CHANGE_QTTY':
            if(action.payload === 0){
                return {
                    ...state,
                    qtty: 0
                }
            }
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
        case 'CHANGE_POPUP':
            return{
                ...state,
                popup: action.payload
            }
       default:
        return state
   }
}

export default reducer;

