export const isApp = () => {
  const ua = window.navigator.userAgent;
  return ua.includes("DOG_FISH_MALL");
};

bridge.call("wxPay", "订单编号");

export const AppAliPay = (num: any) => {
  bridge.call("aliPay", num);
};

export const AppWxPay = (num: any) => {
  bridge.call("wxPay", num);
};

export const AppGetBack = ()=>{
  bridge.call('getBack')
}
