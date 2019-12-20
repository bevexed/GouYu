import React, { FC } from 'react';
import './index.less';

type StepsProps = {
  step: number;
};
const Steps: FC<StepsProps> = (props: StepsProps) => {
  return (
    <ul className="my-steps">
      { new Array(4).fill('').map((item, key) => (
        <li key={ key } className={ key < props.step ? 'active' : '' }/>
      )) }
    </ul>
  );
};

export default Steps;
