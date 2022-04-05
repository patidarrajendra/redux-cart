import {ADD_TO_CART} from '../constant'

export const addTOCart = (data) =>{
    // console.warn("action",data)
    return {
        type: ADD_TO_CART,
        data:data
    }
}

// export const removeTOCart = (data) =>{
//     return {
//         type: 'REMOVE_TO_CART',
//         data:data
//     }
// }

 