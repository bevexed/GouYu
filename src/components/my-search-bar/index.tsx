import React, { FC, InputHTMLAttributes, useState } from "react";
import "./index.less";
import { iconPic } from "../../config/image";
import { useHistory } from "react-router";
import { AjaxHistorySearchSave } from "../../api/search";

interface MySearchBarProps extends InputHTMLAttributes<any> {}
const MySearchBar: FC<MySearchBarProps> = (props: MySearchBarProps) => {
  const [focusState, setFocus] = useState(false);
  const [content, setContent] = useState<string>("");
  const {push} = useHistory();
  const search = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      AjaxHistorySearchSave({
        content
      }).then(res=>{
        push("/search-result/" + content)
      });
    }
  };
  const { go } = useHistory();
  return (
    <div className="my-search-bar" onKeyDown={e => search(e)}>
      <img src={iconPic.backBlack} alt="" onTouchStart={() => go(-1)} />
      <div className={["input-wrap", focusState && "active"].join(" ")}>
        <img src={iconPic.search} alt="" />
        <input
          type="search"
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => setFocus(false)}
          onInput={e => setContent(e.currentTarget.value)}
          placeholder={props.placeholder}
        />
      </div>
      <span className={["cancel", focusState && "active"].join(" ")}>取消</span>
    </div>
  );
};

export default MySearchBar;
