import { ActionProps } from "../store";
import { GET_SHOP_CART } from "../action-types";

const init:any[] = []
export const shopCar = (state=init,action:ActionProps)=>{
  switch (action.type) {
    case GET_SHOP_CART:
      return [...action.data]
    default:
      return state
  }
}
