import { ajax } from "../ajax";

interface AjaxQueryGoodsListProps {
  goodsName: string;
  classifyId?: string;
  type?: string;
}

export const AjaxQueryGoodsList = (data: AjaxQueryGoodsListProps) =>
  ajax<any>({
    url: "/goods/queryGoodsList",
    method: "GET",
    data
  });

export const AjaxHistorySearchDel = () =>
  ajax({
    url: "/HistorySearch/del",
    method: "GET"
  });

export const AjaxHistorySearchSave = (data: { content: string }) =>
  ajax({
    url: "/HistorySearch/searchSave",
    method: "POST",
    data
  });

export const AjaxHistorySearchQueryList = () =>
  ajax<any>({
    url: "/HistorySearch/searchQueryList",
    method: "GET",
  });

