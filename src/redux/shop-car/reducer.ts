import { ActionProps } from "../store";
import { CANCEL_ONE_GOOD, CANCEL_SHOP, GET_SHOP_CART, SELECT_ONE_GOOD, SELECT_SHOP } from "../action-types";

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
          if (item.goodsId === action.data) {
            good.c = true;
          }
        });
        if (
          item.shoppingCartList.every(
            (good: any, index: number) => good.c === true
          )
        ) {
          item.c = true;
        }
        return item;
      });
      return [...state];

    case CANCEL_ONE_GOOD:
      state.map((item, key) => {
        item.shoppingCartList.forEach((good: any, index: number) => {
          if (item.goodsId === action.data) {
            good.c = true;
          }
        });
        item.c = false;

        return item;
      });
      return [...state];

    default:
      return state;
  }
};
