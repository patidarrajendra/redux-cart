import { ADD_TO_CART } from "../constant";

const initialState = {
    cardData: []
}
export default function cardItems(state= [], action) {
        switch(action.type) {
            case ADD_TO_CART:
                // console.warn('reducers-',action.data);
                return [
                    ...state,
                    {cardData: action.data}
                ];
                break;
            default:
                return state;    

        }
}