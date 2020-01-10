import { BuyNowProps } from "./reducer";
import { UPDATE_BUY_NOW } from "../action-types";

export const updateBuyNow = (data: Partial<BuyNowProps>) => ({
  type: UPDATE_BUY_NOW,
  data
});
