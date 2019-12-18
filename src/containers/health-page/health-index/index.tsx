import React, { FC, useState } from 'react';
import './index.less';
import MyPopUp from '../../../components/my-pop-up';
import HealthCoupons from "../heal-coupons";

type HealthIndexProps = {};
const HealthIndex: FC<HealthIndexProps> = (props: HealthIndexProps) => {
  const [HealthCouponsState, setHealthCouponsState] = useState(true);
  return (
    <div className="health-index">
      <MyPopUp
        popUpShow={ HealthCouponsState }
        setPopUpShow={ setHealthCouponsState }>
        <HealthCoupons/>
      </MyPopUp>
    </div>
  );
};

export default HealthIndex;
