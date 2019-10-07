
import { ADD_PRODUCT, DEL_PRODUCT } from '../actions/product';

const defaultState = {
  products: [],
  name: 'product',
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case DEL_PRODUCT:
      return {
        ...state,
        products: state.products.filter((prod) => prod !== action.product),
      };
    default:
      return state;
  }
};
