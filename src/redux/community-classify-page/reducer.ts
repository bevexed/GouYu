import { ActionProps } from '../store';
import { GIT_CLASSIFY_PAGE_DATA } from "../action-types";

const initClassifyPageData = {
    "current": "页码",
		"pages": "共几页",
		"records": [
			{
				"cityName": "城市名称",
				"communityClassifyId": "社区动态分类",
				"content": "内容",
				"createTime": "创建时间",
				"id": "动态id",
				"isPass": "是否审核通过(0:否 1:是)",
				"isZan": "当前用户是否点赞(0:否 1:是)",
				"nickName": "用户昵称",
				"userId": "用户id",
				"video": "视频地址",
				"headImage": "用户头像",
				"zanNumber": "点赞数"
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
