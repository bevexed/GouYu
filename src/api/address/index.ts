import { ajax } from "../ajax";

const _add = {
  name: "姓名",
  phone: "手机号",
  postalCode: "编码",
  province: "省",
  city: "市",
  region: "区",
  address: "详细地址",
  isDefault: "默认传1"
};

export const AjaxUserAddressSave = (data: typeof _add) =>
  ajax<any>({
    url: "/userAddress/save",
    method: "POST",
    data
  });

export const AjaxUserAddressList = ({page,size}:{page:number,size:number}) => ajax<any>({
  url:'userAddress/list',
  method:'GET',
  data:{page,size}
})

export const AjaxUserAddressEditDefault = (id:number)=>ajax<any>({
  url:'userAddress/editDefault',
  method:'POST',
  data:{id}
})
