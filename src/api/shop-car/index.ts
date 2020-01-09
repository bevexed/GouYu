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
