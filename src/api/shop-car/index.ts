import { ajax } from "../ajax";

export const AjaxShoppingCartAddShoppingCart = (data: any) =>
  ajax<any>({
    url: "shoppingCart/addShoppingCart",
    method: "POST",
    data
  });

export const AjaxShoppingCartGetShoppingCartList = (data: any) =>
  ajax<any>({
    url: "shoppingCart/getShoppingCartList",
    data,
    method: "GET"
  });

export interface ShoppingCartUpdateGoodsShoppingCartNumberProps {
  goodsId: string;
  skuId: string;
  storeId: string;
  number: number;
}

export const AjaxShoppingCartUpdateGoodsShoppingCartNumber = (
  data: ShoppingCartUpdateGoodsShoppingCartNumberProps
) =>
  ajax<any>({
    method: "GET",
    url: "/shoppingCart/updateGoodsShoppingCartNumber",
    data
  });

export const AjaxShoppingCartDelCartGoods = (data: {
  storeIds: string;
  goodsIds: string;
}) =>
  ajax<any>({
    url: "shoppingCart/delCartGoods",
    method: "GET",
    data
  });

export const AjaxShoppingCartConfirmShoppingCart = () =>
  ajax<any>({
    url: "shoppingCart/confirmShoppingCart",
    method: "GET"
  });

export const AjaxShoppingCartSubmissionShoppingCart = (receiverAddressId:string,couponId?:string) =>
  ajax<any>({
    url: "shoppingCart/submissionShoppingCart",
    method: "POST",
    data:{receiverAddressId,couponId}
  });
