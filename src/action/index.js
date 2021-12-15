export const goodsLoading = () => ({
    type: 'GOODS_LOADING'
})

export const goodsLoaded = (newGoods) => ({
    type: 'GOODS_LOADED',
    payload: newGoods
})
export const addToBasket = (order) => ({
    type: 'ADD_TO_BASKET',
    payload: order
})
export const showBasket = () => ({
    type: 'SHOW_BASKET'
})
export const deleteFromBasket = (id) => ({
    type: 'DELETE_FROM_BASKET',
    payload: id
})
export const decQtty = (id) => ({
    type: 'DEC_QTTY',
    payload: id
})
export const incQtty = (id) => ({
    type: 'INC_QTTY',
    payload: id
})
export const changeTotalPrice = (price) => ({
    type: 'CHANGE_TOTAL_PRICE',
    payload: price
})
export const changeQtty = (qtty) => ({
    type: 'CHANGE_QTTY',
    payload: qtty
})
export const changeSearch = (e) => ({
    type: 'CHANGE_SEARCH',
    payload: e
})
export const deleteQtty = (id) => ({
    type: 'DELETE_FRON_BACKET_QTTY',
    payload: id
})

