import { ajax } from "../ajax";
import { ClassifyBannerProps, OneClassifyListProps, QueryClassifyListProps } from "../../redux/goods/reducer";
import { AjaxGetOrdinaryGoodsInfoProps, AjaxQueryClassifyListProps } from "./GoodProps";

export const AjaxQueryOneClassifyList = () =>
  ajax<OneClassifyListProps>({
    url: "/goods/queryOneClassifyList",
    method: "GET"
  });

export const AjaxQueryClassifyList = (data: AjaxQueryClassifyListProps) =>
  ajax<QueryClassifyListProps>({
    url: "/goods/queryClassifyList",
    method: "GET",
    data
  });

export const AjaxQueryClassifyBanner = () =>
  ajax<ClassifyBannerProps>({
    url: "/goods/queryClassifyBanner",
    method: "GET"
  });

export const AjaxGetOrdinaryGoodsInfo = (data: AjaxGetOrdinaryGoodsInfoProps) =>
  ajax<any>({
    url: "goods/getOrdinaryGoodsInfo",
    method: "GET",
    data
  });

export const AjaxGetVipGoodsInfo = (data: AjaxGetOrdinaryGoodsInfoProps) =>
  ajax<any>({
    url: "goods/getVipGoodsInfo",
    method: "GET",
    data
  });

export interface BuyNowVipGoodProps {
  vipGoodsId: any;
  buyQuantity: any;
  [key: string]: any;
}

export const AjaxOrderBuyNowVipGoods = (data: BuyNowVipGoodProps) =>
  ajax<any>({
    url: "/order/buyNowVipGoods",
    method: "POST",
    data
  });

export const AjaxOrderSubmissionVipGoods = (data: BuyNowVipGoodProps) =>
  ajax<any>({
    url: "/order/submissionVipGoods",
    method: "POST",
    data
  });

export const AjaxGoodsQueryGoodsList = (data:any) =>
  ajax<any>({
    url: "goods/queryGoodsList",
    method: "GET",
    data
  });
