import { Toast } from "antd-mobile";

export const ShowLoading = (loading:boolean)=>{
  if (loading) {
    Toast.loading('Loading...');
  }
};
export const HideLoading = (loading:boolean)=>{
  if (loading) {
    Toast.loading('Loading...');
  }
};
