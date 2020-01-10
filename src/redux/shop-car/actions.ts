import { CANCEL_SHOP, GET_SHOP_CART, SELECT_ONE_GOOD, SELECT_SHOP } from "../action-types";
import { Dispatch } from "redux";
import { AjaxShoppingCartGetShoppingCartList } from "../../api/shop-car";

export const getShopCart = (data: any) => ({
  type: GET_SHOP_CART,
  data
});

export const selectShop = (storeId:any) => ({
  type: SELECT_SHOP,
  data: storeId
});

export const cancelShop = (storeId:any) => ({
  type: CANCEL_SHOP,
  data: storeId
});

export const selectOneGood = (goodsId:any) => ({
  type: SELECT_ONE_GOOD,
  data: goodsId
});



export const ajaxGetShopCart = (dispatch: Dispatch) =>
  AjaxShoppingCartGetShoppingCartList({}).then((res:any) => {
    if (res) {
      dispatch(getShopCart(res.data));
    }
  });
