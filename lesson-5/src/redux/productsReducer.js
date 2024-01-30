import data  from "../products.json"

const initialState = {
    products: data,
    storage: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PRODUCT":
            return {...state, storage: [...state.storage, action.payload]};
        default:
            return state
    }
}