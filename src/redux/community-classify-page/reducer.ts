import { ActionProps } from '../store';
import { GIT_CLASSIFY_PAGE_DATA } from "../action-types";

const initClassifyPageData = {
    "current": "页码",
		"pages": "共几页",
		"records": [
			{
				"cityName": "",
				"communityClassifyId": "",
				"content": "",
				"createTime": "",
				"id": "",
				"isPass": "",
				"isZan": "",
				"nickName": "",
				"userId": "",
				"video": "",
				"headImage": "",
				"zanNumber": ""
			}
		],
		"searchCount": "分页信息",
		"size": "总页数",
		"total": "总条数",
  specialList: [
    {
      createTime: 1577601383000,
      icon: '3.png',
      id: 3,
      isDisplay: 1,
      modifyTime: 1577601385000,
      name: '品牌特卖',
      sort: 0,
    },
  ],
};

export type ClassifyPageDataProps = typeof initClassifyPageData

export const classifyPageData = (
  state = initClassifyPageData,
  action: ActionProps,
) => {
  switch (action.type) {
    case GIT_CLASSIFY_PAGE_DATA:
       
      return action.data
    default:
      return state
  }
};
