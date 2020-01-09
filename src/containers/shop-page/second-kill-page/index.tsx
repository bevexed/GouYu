import React, { FC, useEffect, useState } from "react";
import "./index.less";
import { MyNavBar } from "../../../components/my-nav-bar";
import Seckill from "../components/seckill";
import { GoodList } from "../components/good-list";
import { ajax } from "../../../api/ajax";
import { useParams } from "react-router";

type Props = {};
const SecondKillPage: FC<Props> = (props: Props) => {
  const { seckillActivityId } = useParams();
  const [cur, setCur] = useState<any>({});
  const [state, setState] = useState<any>([]);
  const [List, setList] = useState<any>([]);
  const getList = (id?: any) => {
    ajax<any>({
      url: "/goods/getSeckillGoodsPageList",
      method: "GET",
      data: {
        seckillActivityTimeSlotId: id,
        current: 1,
        size: 1000000000
      }
    }).then(res => {
      setList(res?.data?.records);
    });
  };

  useEffect(() => {
    ajax<any>({
      url: "/goods/getSeckillActivityTimeSlotList",
      method: "GET",
    }).then(res => {
      setState(res.data);
      getList(res.data[0].id)
    });
  }, [seckillActivityId]);

  return (
    <div className="second-kill-page">
      <MyNavBar>限时秒杀</MyNavBar>

      <div className="fixed">
        <Seckill tabs={state} getChange={tab => {setCur(tab); getList(tab.id)}}>
          <GoodList goodList={List} />
        </Seckill>
      </div>
    </div>
  );
};

export default SecondKillPage;
