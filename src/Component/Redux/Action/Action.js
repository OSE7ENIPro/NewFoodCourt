import { MANAGE_PRODUCT } from "./ActionType"

const manageProduct = (payload) => {
    return {
        type: MANAGE_PRODUCT,
        payload: payload
    };
}

export { manageProduct };