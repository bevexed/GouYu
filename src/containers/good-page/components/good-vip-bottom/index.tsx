import React, { FC } from "react";
import "./index.less";
import MyWhiteBlank from "../../../../components/my-white-blank";
import MyIcon from "../../../../components/my-icon";
import { iconPic } from "../../../../config/image";
import { GrayLabel } from "../../../../components/price";
import { useHistory } from "react-router";

type Props = {
};
const GoodVipBottom: FC<any> = (props) => {
  const {push} = useHistory();
  return (
    <>
      <div className="_good-bottom">
        <ul className="three-icon">
          <li onClick={()=>push('/shop/shop-car-page')}>
            <MyIcon src={iconPic.cart_gray} />
            <GrayLabel >加购</GrayLabel>
          </li>

          <li>
            <MyIcon src={iconPic.service_gray} />
            <GrayLabel>客服</GrayLabel>
          </li>
        </ul>

        <div className="share-get">
          立即购买 成为VIP
        </div>
      </div>
      <MyWhiteBlank height={112} />
    </>
  );
};

export default GoodVipBottom;
