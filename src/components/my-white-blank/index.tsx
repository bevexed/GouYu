import React, { FC } from 'react';

type Props = {
  height?: number;
  backgroundColor?: string;
};
const MyWhiteBlank: FC<Props> = ({
                                   height = 24,
                                   backgroundColor = 'transparent',
                                 }: Props) => {
  return <div style={ { height: height / 2 + 'px', backgroundColor } }/>;
};

export default MyWhiteBlank;
