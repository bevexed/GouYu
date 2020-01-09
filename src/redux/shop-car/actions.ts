import { GET_SHOP_CART } from "../action-types";
import { Dispatch } from "redux";
import { AjaxShoppingCartGetShoppingCartList } from "../../api/shop-car";

export const getShopCart = (data: any) => ({
  type: GET_SHOP_CART,
  data
});

export const ajaxGetShopCart = (dispatch: Dispatch) =>
  AjaxShoppingCartGetShoppingCartList({}).then(res => {
    if (res) {
      dispatch(getShopCart(res.data));
    }
  });
