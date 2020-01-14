import { ActionProps } from "../store";
import { UPDATE_BUY_NOW } from "../action-types";

export interface BuyNowProps {
  skuId: string;
  buyQuantity: string;
  goodsId: string;
  receiverAddressId: string;
  couponId?: string;
  name?: string;
  idCard?: string;
  storeId?: string;
  [key:string]:any
}

export const initBuyNow: BuyNowProps = {
  skuId: "0",
  buyQuantity: "0",
  goodsId: "0",
  receiverAddressId: "0",
  storeId: "0",
};

export const buyNow = (state = initBuyNow, action: ActionProps) => {
  switch (action.type) {
    case UPDATE_BUY_NOW:
      return { ...state, ...action.data };
    default:
      return state;
  }
};
