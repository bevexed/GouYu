import React, { FC } from 'react';
import { MyNavBar } from '../../../components/my-nav-bar';
import './index.less';

const UserAgreement: FC = () => {
  return (
    <div className="user-agreement">
      <MyNavBar>用户协议</MyNavBar>

      <article>
        <p>
          本协议是您与“狗鱼健康”的所有者“XXX公司”（以下简称为“狗鱼健康”）之间就狗鱼健康所提供的服务及相关事宜所立订的契约，请您仔细阅读本注册协议，在您确认阅读并选择注册后，本协议即构成对双方有约束力的法律文件。
        </p>
        <h2>第一条 狗鱼健康服务条款的确认和接纳</h2>
        <p>
          1.狗鱼健康的各项电子服务的所有权和运作权归“狗鱼健康”所有。客户同意所有注册协议条款并完成注册程序，才能成为狗鱼健康的正式客户。客户确认：本协议条款是处理双方权利义务的契约，始终有效，法律另有强制性规定或双方另有特别约定的，依其规定。
        </p>
        <p>
          2.客户点击同意本协议的，即视为客户确认自己具有享受狗鱼健康服务、下单购物等相应的权利能力和行为能力，能够独立承担法律责任。
        </p>
        <p>
          3.如果您在18周岁以下，您只能在父母或监护人的监护参与下才能使用狗鱼健康。
        </p>
        <p>
          4.“狗鱼健康”保留在中华人民共和国大陆地区法施行之法律允许的范围内独自决定拒绝服务、关闭客户账户、清除或编辑内容或取消订单的权利。
        </p>
      </article>
    </div>
  );
};

export default UserAgreement;