import React, { FC } from 'react';
import './index.less'
import { MyImage } from "../../../../components/my-image";
import { iconPic } from "../../../../config/image";

type Props = {};
const HealthHeader: FC<Props> = (props: Props) => {
  return (
    <div className='health-header'>
      <div className="left">
        康养
      </div>
      <MyImage src={ iconPic.search } className='icon'/>
    </div>
  );
};

export default HealthHeader
