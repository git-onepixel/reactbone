
export const ADD_PRODUCT = 'product/add-product';
export const DEL_PRODUCT = 'product/del-product';


export default {

  /**
     * 添加商品
     * @param {*} product
     */
  addProduct(product) {
    return {
      type: ADD_PRODUCT,
      product,
    };
  },

};
