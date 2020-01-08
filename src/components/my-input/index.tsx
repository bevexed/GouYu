/**
 * @Description: input 框
 * @author 两万
 * @date 2019/12/27
 * @time 13:54
 */

import React, { FC, InputHTMLAttributes } from "react";
import "./index.less";

interface Props extends InputHTMLAttributes<any> {
  placeholder?: string;
  disabled?: boolean;
}
const MyInput: FC<Props> = (props) => {
  return (
    <input
      {...props}
    />
  );
};

export default MyInput;
