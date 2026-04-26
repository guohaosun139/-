export const DRINKS = {
  tea: { label: "热茶", moodGain: 15 },
  coffee: { label: "咖啡", moodGain: 5 },
  sweetSoup: { label: "糖水", moodGain: 10 },
};

export const THRESHOLDS = {
  storyUnlock: 60,
  sootheComplete: 90,
};

export const VISITORS = [
  {
    id: "office-worker",
    name: "末班车前的加班者",
    initialMood: 30,
    intro: "她把工牌攥在手里，像是刚从一场没有观众的战斗里退下来。",
    storyUnlocked: "她说，今天第三次把“没事”发给妈妈，其实只是怕妈妈担心。",
    soothed: "她把热茶捧在手心，终于低声说：明天，我想早点回家。",
  },
  {
    id: "sleepless-student",
    name: "考完试的学生",
    initialMood: 25,
    intro: "他背着书包坐在角落，准考证被折出了很深的痕迹。",
    storyUnlocked: "他说自己不是怕考差，而是突然不知道考完以后该往哪里走。",
    soothed: "他把糖水喝完，像是终于允许自己暂时不用想答案。",
  },
  {
    id: "delivery-rider",
    name: "雨夜外卖员",
    initialMood: 35,
    intro: "他的雨衣还在滴水，手套湿透，却先问这里能不能坐一会儿。",
    storyUnlocked: "他说不饿，却盯着柜台后的热粥看了很久。",
    soothed: "他把空碗轻轻推回来，说今晚这条路，好像没那么冷了。",
  },
  {
    id: "retired-man",
    name: "退休后的老人",
    initialMood: 40,
    intro: "他在门口站了很久，像是在等一个早就不用等的通知。",
    storyUnlocked: "他说退休以后最不习惯的，是没人再催他开会。",
    soothed: "他笑了笑，把旧钥匙放进口袋，说明天想去公园走走。",
  },
];
