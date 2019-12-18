import React, { FC } from 'react';
import './index.less'

type HealthCouponsProps = {};
const HealthCoupons: FC<HealthCouponsProps> = (props: HealthCouponsProps) => {
  return (
    <div className='health-coupons'>
      <div className="money">
        <span className="type">
          ￥
        </span>
        <span className="number">
          100
        </span>
      </div>

      <div className="btn">
        立即领取
      </div>
    </div>
  );
};

export default HealthCoupons
