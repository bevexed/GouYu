import React, { FC, ReactNode, TouchEventHandler } from 'react';
import './index.less';

type Props = {
  children: string | ReactNode;
  onTouchStart?: TouchEventHandler;
  round?: boolean
};
export const MyTag: FC<Props> = (props: Props) => {
  return <div className="my-tag">{ props.children }</div>;
};

export default MyTag;

export const MyBorderTag: FC<Props> = (props: Props) => {
  return (
    <div className="my-border-tag" onTouchStart={ props.onTouchStart }>
      { props.children }
    </div>
  );
};

export const MyGrayTag: FC<Props> = (props: Props) => {
  return (
    <div className="my-gray-tag" onTouchStart={ props.onTouchStart }>
      { props.children }
    </div>
  );
};

export const MySmallGrayTag: FC<Props> = (props: Props) => {
  return (
    <div className="my-small-gray-tag" onTouchStart={ props.onTouchStart }>
      { props.children }
    </div>
  );
};

export const MySmallYellowTag: FC<Props> = (props: Props) => {
  return (
    <div className="my-small-yellow-tag" onTouchStart={ props.onTouchStart }>
      { props.children }
    </div>
  );
};

export const MyBlueTag: FC<Props> = (props: Props) => {
  return (
    <div className="my-blue-tag" style={ { borderRadius: props.round ? '16px' : '' } }
         onTouchStart={ props.onTouchStart }>
      { props.children }
    </div>
  );
};

interface MySelectTagProps extends Props {
  isSelected: boolean;
  onTouchEnd: any;
}

export const MySelectTag: FC<MySelectTagProps> = props => {
  return (
    <div
      onTouchEnd={ props.onTouchEnd }
      className={ ['my-select-tag', props.isSelected && 'active'].join(' ') }>
      <span>{ props.children }</span>
    </div>
  );
};
