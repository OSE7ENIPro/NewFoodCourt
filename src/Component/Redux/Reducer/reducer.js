import { combineReducers } from 'redux'
import { MANAGE_PRODUCT } from '../Action/ActionType'

const initialState = {
    productList: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case MANAGE_PRODUCT:
            return {
                productList: action.payload
            }
        default:
            return state;
    }
}

const reducer = combineReducers({
   Product : productReducer
})

export default reducer;