/**
 * @file 按业务模块进行分割
 */

/**
 * @type action types
 */
const ADD_PRODUCT = 'product/add-product';
const DEL_PRODUCT = 'product/del-product';

/**
 * @type state
 */
let defaultState = {
    products: [],
    name: 'product'
};

/**
 * @type reducer
 */
export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case DEL_PRODUCT:
            return {
                ...state,
                products: state.products.filter(prod => prod != action.product)
            };
        default:
            return state;
    }
}

/**
 * @type action
 */
export const actions = {

    /**
     * 添加商品
     * @param {*} product 
     */
    addProduct(product) {
        return {
            type: ADD_PRODUCT,
            product
        }
    }
     
}