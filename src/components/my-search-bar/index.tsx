import React, { FC, InputHTMLAttributes, useState } from 'react';
import './index.less';
import { iconPic } from '../../config/image';
import { useHistory } from 'react-router';

interface MySearchBarProps extends InputHTMLAttributes<any>{
};
const MySearchBar: FC<MySearchBarProps> = (props: MySearchBarProps) => {
  const [focusState, setFocus] = useState(false);
  const { go } = useHistory();
  return (
    <div className="my-search-bar">
      <img src={ iconPic.backBlack } alt="" onTouchStart={ () => go(-1) }/>
      <div className={ ['input-wrap', focusState && 'active'].join(' ') }>
        <img src={ iconPic.search } alt=""/>
        <input
          type="text"
          onFocus={ () => {
            setFocus(true);
          } }
          onBlur={ () => setFocus(false) }
          placeholder={props.placeholder}
        />
      </div>
      <span className={ ['cancel', focusState && 'active'].join(' ') }>
          取消
      </span>
    </div>
  );
};

export default MySearchBar;
