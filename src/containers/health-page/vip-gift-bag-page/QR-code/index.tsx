import React, { FC } from 'react';
import './index.less';

type Props = {
  userInvitation:string
};
const QRcode: FC<Props> = (props: Props) => {
  return (
    <div className="_qr-code">
      {/*<p className="_qr-code-p">专属个人二维码</p>*/}
      {/*<MyImage*/}
      {/*  className='_qr-code-img'/>*/}

      <section className='_qr-code-footer'>
        邀请码：{props.userInvitation}
      </section>
    </div>
  );
};

export default QRcode;
