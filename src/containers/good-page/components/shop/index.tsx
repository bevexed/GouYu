import React, { FC } from "react";
import "./index.less";
import { WingBlank } from "antd-mobile";

type Props = {};
const Shop: FC<any> = (props: any) => {
  const {data} = props
  console.log(data);
  return (
    <>
      <WingBlank className="_shop">
        {/*<header>*/}
        {/*  <MyImage src={""} />*/}
        {/*  <div className={"right"}>*/}
        {/*    <BlackLabel>xxxxxx</BlackLabel>*/}
        {/*    <div className="shop-level">*/}
        {/*      {new Array(5).fill(1).map((item, key) => (*/}
        {/*        <img*/}
        {/*          src={Heart}*/}
        {/*          alt=""*/}
        {/*          className={key > 2 ? "gray" : ""}*/}
        {/*          key={key}*/}
        {/*        />*/}
        {/*      ))}*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*  <GoToShopButton>进店逛逛</GoToShopButton>*/}
        {/*</header>*/}

        <div dangerouslySetInnerHTML={{__html:data.goodsInfoImage}}>
        </div>

        <article>
        </article>
      </WingBlank>
    </>
  );
};

export default Shop;
