import { ajax } from "../ajax";

export const AjaxOrderSubmissionOrdinaryGoods = (data:any)=>ajax<any>({
  url:'/order/submissionOrdinaryGoods',
  data,
  method:"POST"
})
