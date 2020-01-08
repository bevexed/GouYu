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
const MyInput: FC<Props> = ({
  placeholder = "请输入",
  disabled = false
}: Props) => {
  return (
    <input
      type="text"
      disabled={disabled}
      placeholder={placeholder}
      className="_my-input"
    />
  );
};

export default MyInput;
