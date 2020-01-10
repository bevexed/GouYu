import { ActionProps } from "../store";
import {
  CANCEL_ALL,
  CANCEL_ONE_GOOD,
  CANCEL_SHOP,
  GET_SHOP_CART,
  PUSH_SHOP_CART_ORDER,
  SELECT_ALL,
  SELECT_ONE_GOOD,
  SELECT_SHOP
} from "../action-types";

const init: any[] = [];
export const shopCar = (state = init, action: ActionProps) => {
  switch (action.type) {
    case GET_SHOP_CART:
      return [...action.data];
    case SELECT_SHOP:
      state.map((item, key) => {
        if (item.id === action.data) {
          item.c = true;
          item.shoppingCartList.forEach((good: any, index: number) => {
            good.c = true;
          });
        }
        return item;
      });
      return [...state];
    case CANCEL_SHOP:
      state.map((item, key) => {
        if (item.id === action.data) {
          item.c = false;
          item.shoppingCartList.forEach((good: any, index: number) => {
            good.c = false;
          });
        }
        return item;
      });
      return [...state];

    case SELECT_ONE_GOOD:
      state.map((item, key) => {
        item.shoppingCartList.forEach((good: any, index: number) => {
          if (good.goodsId === action.data) {
            good.c = true;
          }
        });
        if (item.shoppingCartList.some((good: any) => good.c)) {
          item.c = true;
        }
        return item;
      });
      return [...state];

    case CANCEL_ONE_GOOD:
      state.map((item, key) => {
        item.shoppingCartList.forEach((good: any, index: number) => {
          if (good.goodsId === action.data) {
            good.c = false;
          }
        });
        if (item.shoppingCartList.every((good: any) => !good.c)) {
          item.c = false;
        }
        return item;
      });
      return [...state];

    case SELECT_ALL:
      state.forEach(item => {
        item.c = true;
        item.shoppingCartList.forEach((good: any) => (good.c = true));
      });
      return [...state];
    case CANCEL_ALL:
      state.forEach(item => {
        item.c = false;
        item.shoppingCartList.forEach((good: any) => (good.c = false));
      });
      return [...state];
    default:
      return state;
  }
};

const initShopCartOrderData: any = {};

export const shopCartOrderData = (
  state = initShopCartOrderData,
  action: ActionProps
) => {
  switch (action.type) {
    case PUSH_SHOP_CART_ORDER:
      return action.data;
    default:
      return state;
  }
};
