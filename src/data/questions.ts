import type { Question } from '@/types'

export const QUESTIONS: Question[] = [
  {
    id: 'q01',
    scenario:
      '你走在街上，突然听到前方传来巨响和尖叫声——一只巨大的怪人正在破坏街道。周围的人都在四散奔逃，你会？',
    options: [
      {
        id: 'q01a',
        text: '毫不犹豫冲上去，有人需要帮助',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
      {
        id: 'q01b',
        text: '先观察一下怪人的实力，寻找最佳时机介入',
        effects: [
          { dimId: 'bravery', delta: 10 },
          { dimId: 'discipline', delta: 10 },
        ],
      },
      {
        id: 'q01c',
        text: '打电话报警/通知英雄协会，普通人别贸然行动',
        effects: [
          { dimId: 'bravery', delta: -5 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'justice', delta: 5 },
        ],
      },
      {
        id: 'q01d',
        text: '关我什么事，别耽误我的正事',
        effects: [
          { dimId: 'bravery', delta: -10 },
          { dimId: 'justice', delta: -15 },
          { dimId: 'ego', delta: 10 },
        ],
      },
    ],
  },
  {
    id: 'q02',
    scenario:
      '英雄协会对你进行实力评估，测试结果是"中等偏下"。但你有自己的独特能力，你会？',
    options: [
      {
        id: 'q02a',
        text: '完全不在意，数字是数字，我是我',
        effects: [
          { dimId: 'ego', delta: 15 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
      {
        id: 'q02b',
        text: '开始制定严格的训练计划，一定要变强',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'ego', delta: -5 },
        ],
      },
      {
        id: 'q02c',
        text: '虽然有点失落，但我有自己的战斗方式',
        effects: [
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ego', delta: -5 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q02d',
        text: '那套评估体系本身就有问题，不屑被它定义',
        effects: [
          { dimId: 'ego', delta: 10 },
          { dimId: 'bravery', delta: -5 },
          { dimId: 'discipline', delta: -10 },
        ],
      },
    ],
  },
  {
    id: 'q03',
    scenario:
      '你正在追捕一个逃犯，半路上看到一位老奶奶在路边摔倒了，但追捕路线有时间限制，你会？',
    options: [
      {
        id: 'q03a',
        text: '先救人，任务可以再来一次',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'sociability', delta: 10 },
          { dimId: 'ambition', delta: -5 },
        ],
      },
      {
        id: 'q03b',
        text: '叫旁边的人帮忙，自己继续追',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'sociability', delta: 5 },
          { dimId: 'justice', delta: 5 },
        ],
      },
      {
        id: 'q03c',
        text: '任务优先，回头再来处理这边的事',
        effects: [
          { dimId: 'ambition', delta: 10 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'justice', delta: -5 },
        ],
      },
      {
        id: 'q03d',
        text: '没看见——我眼里只有目标',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'ego', delta: 10 },
          { dimId: 'justice', delta: -10 },
        ],
      },
    ],
  },
  {
    id: 'q04',
    scenario:
      'Z 市出现了极其强大的未知怪人，英雄协会发出最高警报。多名 S 级英雄已经赶到但情况仍然危险，你的态度是？',
    options: [
      {
        id: 'q04a',
        text: '这正是证明自己的机会，立刻赶往现场',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'ego', delta: 5 },
        ],
      },
      {
        id: 'q04b',
        text: '相信 S 级英雄们，我做好自己的分内事就好',
        effects: [
          { dimId: 'bravery', delta: -10 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
      {
        id: 'q04c',
        text: '组织周边居民疏散，从侧面支援前线',
        effects: [
          { dimId: 'justice', delta: 10 },
          { dimId: 'sociability', delta: 10 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q04d',
        text: '强者的事让强者去解决，我等结果就好',
        effects: [
          { dimId: 'bravery', delta: -15 },
          { dimId: 'ambition', delta: -5 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q05',
    scenario:
      '你辛苦修炼了一年，却发现自己几乎没有任何进步。这时你会怎么想？',
    options: [
      {
        id: 'q05a',
        text: '继续修炼，突破瓶颈只是时间问题',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'bravery', delta: 5 },
        ],
      },
      {
        id: 'q05b',
        text: '是不是我的修炼方法有问题？换条路试试',
        effects: [
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'ego', delta: -5 },
        ],
      },
      {
        id: 'q05c',
        text: '无所谓，反正我本来也没想当最强',
        effects: [
          { dimId: 'ambition', delta: -15 },
          { dimId: 'ego', delta: -10 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
      {
        id: 'q05d',
        text: '急什么，总有一天我会超过所有人',
        effects: [
          { dimId: 'ego', delta: 15 },
          { dimId: 'ambition', delta: 5 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q06',
    scenario:
      '在英雄协会的年会上，你被安排坐在角落的位置。看到 S 级英雄们在台上接受欢呼，你会？',
    options: [
      {
        id: 'q06a',
        text: '默默地吃自助餐，排名什么的不重要',
        effects: [
          { dimId: 'ego', delta: -10 },
          { dimId: 'ambition', delta: -10 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
      {
        id: 'q06b',
        text: '仔细观察每位 S 级英雄的特点和实力',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
      {
        id: 'q06c',
        text: '总有一天我会站上那个位置',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'ego', delta: 10 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q06d',
        text: '主动去和 S 级英雄们交流、取经',
        effects: [
          { dimId: 'sociability', delta: 15 },
          { dimId: 'ambition', delta: 5 },
          { dimId: 'ego', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q07',
    scenario:
      '你的队友在一场战斗中犯下严重失误，导致整个任务失败。事后他非常自责，你会？',
    options: [
      {
        id: 'q07a',
        text: '"没事，下次注意就好"——安慰并鼓励他',
        effects: [
          { dimId: 'sociability', delta: 15 },
          { dimId: 'justice', delta: 5 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
      {
        id: 'q07b',
        text: '严厉指出问题所在，让他记住这次教训',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
      {
        id: 'q07c',
        text: '心里很不爽但嘴上不说，以后少跟他合作',
        effects: [
          { dimId: 'discipline', delta: -5 },
          { dimId: 'sociability', delta: -10 },
          { dimId: 'ego', delta: 5 },
        ],
      },
      {
        id: 'q07d',
        text: '失败是必经之路，重要的是接下来怎么做',
        effects: [
          { dimId: 'bravery', delta: 5 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q08',
    scenario:
      '你在便利店门口看到一个实力强大的英雄正在欺负一个普通人，你会？',
    options: [
      {
        id: 'q08a',
        text: '直接上前制止，不管对方是谁',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'ego', delta: 5 },
        ],
      },
      {
        id: 'q08b',
        text: '先录像取证，再向英雄协会举报',
        effects: [
          { dimId: 'justice', delta: 10 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'bravery', delta: -5 },
        ],
      },
      {
        id: 'q08c',
        text: '多一事不如少一事，绕道走开',
        effects: [
          { dimId: 'justice', delta: -15 },
          { dimId: 'bravery', delta: -10 },
        ],
      },
      {
        id: 'q08d',
        text: '有意思——看看这英雄能嚣张到什么程度',
        effects: [
          { dimId: 'ego', delta: 10 },
          { dimId: 'ambition', delta: 5 },
          { dimId: 'justice', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q09',
    scenario:
      '你的朋友劝你加入一个团队，说"团队的力量远大于个人"。你更认同哪种说法？',
    options: [
      {
        id: 'q09a',
        text: '认同，团结就是力量，我也想找到可靠的伙伴',
        effects: [
          { dimId: 'sociability', delta: 15 },
          { dimId: 'justice', delta: 5 },
          { dimId: 'bravery', delta: 5 },
        ],
      },
      {
        id: 'q09b',
        text: '团队有团队的好处，但实力还是个人的事',
        effects: [
          { dimId: 'ego', delta: 5 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q09c',
        text: '真正强大的人不需要团队',
        effects: [
          { dimId: 'sociability', delta: -15 },
          { dimId: 'ego', delta: 15 },
          { dimId: 'ambition', delta: 10 },
        ],
      },
      {
        id: 'q09d',
        text: '看情况，靠谱的团队可以加入，乌合之众就算了',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'sociability', delta: 5 },
          { dimId: 'ego', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q10',
    scenario:
      '你在一个废弃的研究所里发现了一套可以大幅提升实力的禁忌改造装置，但使用后有副作用。你会？',
    options: [
      {
        id: 'q10a',
        text: '毫不犹豫使用，力量才是硬道理',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
      {
        id: 'q10b',
        text: '研究清楚副作用后再考虑用不用',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'bravery', delta: -5 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q10c',
        text: '毁掉它，这种歪门邪道不该存在',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: -10 },
        ],
      },
      {
        id: 'q10d',
        text: '报告给协会，让他们来做判断',
        effects: [
          { dimId: 'justice', delta: 10 },
          { dimId: 'sociability', delta: 5 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q11',
    scenario:
      '你和一个实力远强于你的对手交战，对方的攻击让你毫无还手之力。你会？',
    options: [
      {
        id: 'q11a',
        text: '死战不退，直到倒下为止',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q11b',
        text: '战略性撤退，活着才有机会变强',
        effects: [
          { dimId: 'bravery', delta: -10 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q11c',
        text: '边打边寻找对方的破绽和弱点',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 5 },
          { dimId: 'bravery', delta: 5 },
        ],
      },
      {
        id: 'q11d',
        text: '嘴上嘲讽对方，气势上不能输',
        effects: [
          { dimId: 'ego', delta: 15 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q12',
    scenario:
      '英雄协会内部派系斗争越来越严重，你的实力被各方势力盯上，都想拉拢你。你会？',
    options: [
      {
        id: 'q12a',
        text: '独善其身，不参与任何派系',
        effects: [
          { dimId: 'justice', delta: 10 },
          { dimId: 'sociability', delta: -10 },
          { dimId: 'ego', delta: 5 },
        ],
      },
      {
        id: 'q12b',
        text: '选择一个理念最契合的势力加入',
        effects: [
          { dimId: 'sociability', delta: 10 },
          { dimId: 'justice', delta: 5 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q12c',
        text: '笑看他们争斗，谁赢了我帮谁',
        effects: [
          { dimId: 'ego', delta: 15 },
          { dimId: 'sociability', delta: 5 },
          { dimId: 'justice', delta: -10 },
        ],
      },
      {
        id: 'q12d',
        text: '借此机会上位，把权力掌握在自己手中',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'ego', delta: 10 },
          { dimId: 'justice', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q13',
    scenario:
      '你发现最好的朋友背地里在做一些违法的事，但他依然对你很好，你会？',
    options: [
      {
        id: 'q13a',
        text: '大义灭亲，向协会举报他',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
      {
        id: 'q13b',
        text: '先和他谈谈，劝他收手',
        effects: [
          { dimId: 'sociability', delta: 10 },
          { dimId: 'justice', delta: 5 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q13c',
        text: '睁一只眼闭一只眼，不影响我们的关系',
        effects: [
          { dimId: 'justice', delta: -10 },
          { dimId: 'sociability', delta: 10 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
      {
        id: 'q13d',
        text: '趁机了解他背后的势力，为自己谋利',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'ego', delta: 10 },
          { dimId: 'justice', delta: -10 },
        ],
      },
    ],
  },
  {
    id: 'q14',
    scenario:
      '你每天的生活节奏大概是怎样的？',
    options: [
      {
        id: 'q14a',
        text: '严格的作息，训练/工作安排得井井有条',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 5 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
      {
        id: 'q14b',
        text: '比较随性，有重要事情时才会认真起来',
        effects: [
          { dimId: 'discipline', delta: -10 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q14c',
        text: '大部分时间在提升自己，但也会安排休息',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
      {
        id: 'q14d',
        text: '每天都在忙，但仔细想想又不知道忙了什么',
        effects: [
          { dimId: 'discipline', delta: -5 },
          { dimId: 'ambition', delta: 5 },
          { dimId: 'ego', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q15',
    scenario:
      '有人说你"太弱了不配当英雄"，你的第一反应是？',
    options: [
      {
        id: 'q15a',
        text: '关你屁事',
        effects: [
          { dimId: 'ego', delta: 15 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q15b',
        text: '心里难受，但会用行动证明自己',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'ego', delta: -5 },
        ],
      },
      {
        id: 'q15c',
        text: '英雄不是因为强不强，而是因为做不做',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'ego', delta: -10 },
        ],
      },
      {
        id: 'q15d',
        text: '一笑置之，根本不在乎别人的看法',
        effects: [
          { dimId: 'ego', delta: 5 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: -10 },
        ],
      },
    ],
  },
  {
    id: 'q16',
    scenario:
      '你被任命为一个小队的队长，小队成员实力参差不齐。你会采取哪种管理方式？',
    options: [
      {
        id: 'q16a',
        text: '根据每个人的特点分配任务，发挥团队最大效能',
        effects: [
          { dimId: 'sociability', delta: 15 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'justice', delta: 5 },
        ],
      },
      {
        id: 'q16b',
        text: '强者优先，让实力强的人承担更多责任',
        effects: [
          { dimId: 'ambition', delta: 10 },
          { dimId: 'ego', delta: 5 },
          { dimId: 'justice', delta: -5 },
        ],
      },
      {
        id: 'q16c',
        text: '以身作则带头冲锋，用行动带动团队',
        effects: [
          { dimId: 'bravery', delta: 10 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'sociability', delta: 10 },
        ],
      },
      {
        id: 'q16d',
        text: '让大家自由发挥，我只在关键时刻介入',
        effects: [
          { dimId: 'ego', delta: 5 },
          { dimId: 'discipline', delta: -10 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q17',
    scenario:
      '你偶然获得了关于"怪人化"的研究资料。研究显示，人类可以通过强烈的情感执念转化为怪人，获得巨大力量。你会？',
    options: [
      {
        id: 'q17a',
        text: '销毁资料，这是对人类的亵渎',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: -10 },
        ],
      },
      {
        id: 'q17b',
        text: '仔细研究，了解这种力量但绝不使用',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'justice', delta: 5 },
        ],
      },
      {
        id: 'q17c',
        text: '弱小的力量不如强大的怪人——会考虑这条路',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'justice', delta: -15 },
        ],
      },
      {
        id: 'q17d',
        text: '公之于众，让所有人自己判断',
        effects: [
          { dimId: 'sociability', delta: 10 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q18',
    scenario:
      '如果用一个词形容你的人生信条，最接近的是？',
    options: [
      {
        id: 'q18a',
        text: '力量——一切的根本',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q18b',
        text: '正义——做对的事',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
      {
        id: 'q18c',
        text: '自由——不被任何东西束缚',
        effects: [
          { dimId: 'ego', delta: 10 },
          { dimId: 'discipline', delta: -10 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q18d',
        text: '伙伴——没有谁是孤岛',
        effects: [
          { dimId: 'sociability', delta: 15 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'bravery', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q19',
    scenario:
      '面对一个曾经打败过你的对手，现在你有机会和他再次交手。但这次不是必须的，你可以选择避开。你会？',
    options: [
      {
        id: 'q19a',
        text: '主动挑战，战胜过去的自己',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'ego', delta: 5 },
        ],
      },
      {
        id: 'q19b',
        text: '准备充分后再战，不打无把握之仗',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'bravery', delta: -5 },
        ],
      },
      {
        id: 'q19c',
        text: '没必要为个人恩怨战斗，有更重要的事要做',
        effects: [
          { dimId: 'justice', delta: 10 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: -10 },
        ],
      },
      {
        id: 'q19d',
        text: '懒得动——赢了也没什么意思',
        effects: [
          { dimId: 'ego', delta: 10 },
          { dimId: 'ambition', delta: -15 },
          { dimId: 'discipline', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q20',
    scenario:
      '如果你有机会向英雄协会提一个改革建议，你会提什么？',
    options: [
      {
        id: 'q20a',
        text: '建立更公平的英雄评级体系，不以实力为唯一标准',
        effects: [
          { dimId: 'justice', delta: 15 },
          { dimId: 'sociability', delta: 5 },
          { dimId: 'ego', delta: -5 },
        ],
      },
      {
        id: 'q20b',
        text: '增加英雄的训练资源和实战机会',
        effects: [
          { dimId: 'ambition', delta: 10 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'bravery', delta: 5 },
        ],
      },
      {
        id: 'q20c',
        text: '减少协会对英雄的管控，给英雄更多自主权',
        effects: [
          { dimId: 'ego', delta: 10 },
          { dimId: 'bravery', delta: 5 },
          { dimId: 'justice', delta: 5 },
        ],
      },
      {
        id: 'q20d',
        text: '完善英雄之间的协作机制和团队建设',
        effects: [
          { dimId: 'sociability', delta: 15 },
          { dimId: 'discipline', delta: 5 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q21',
    scenario:
      '你在逛街时看到一家新开的拉面店。你的第一反应是？',
    options: [
      {
        id: 'q21a',
        text: '立刻进去尝鲜，拉面就是正义！',
        effects: [
          { dimId: 'sociability', delta: 10 },
          { dimId: 'discipline', delta: -10 },
          { dimId: 'ego', delta: 5 },
        ],
      },
      {
        id: 'q21b',
        text: '先看看评价和价格，再决定要不要吃',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'sociability', delta: -5 },
          { dimId: 'ambition', delta: -5 },
        ],
      },
      {
        id: 'q21c',
        text: '特意等特价时段再去，能省则省',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'ego', delta: -10 },
          { dimId: 'ambition', delta: -5 },
        ],
      },
      {
        id: 'q21d',
        text: '看了一眼，继续走——今天是训练日',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'bravery', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q22',
    scenario:
      '世界陷入了前所未有的危机，一个据说能毁灭人类文明的终极怪人出现了。英雄协会决定组建一支敢死队。你会？',
    options: [
      {
        id: 'q22a',
        text: '第一个报名，这种时候不能退缩',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q22b',
        text: '做好自己分内的事，守护好自己的区域',
        effects: [
          { dimId: 'discipline', delta: 10 },
          { dimId: 'justice', delta: 5 },
          { dimId: 'sociability', delta: 5 },
        ],
      },
      {
        id: 'q22c',
        text: '让那些 S 级英雄去解决吧，我上了也是送死',
        effects: [
          { dimId: 'bravery', delta: -15 },
          { dimId: 'ambition', delta: -10 },
          { dimId: 'ego', delta: -5 },
        ],
      },
      {
        id: 'q22d',
        text: '这种级别的战斗才有挑战的价值——我去了',
        effects: [
          { dimId: 'bravery', delta: 10 },
          { dimId: 'ego', delta: 15 },
          { dimId: 'ambition', delta: 10 },
        ],
      },
    ],
  },
  {
    id: 'q23',
    scenario:
      '你的一位好友被怪人化的力量诱惑，声称要借此保护家人。但他没有意识到怪人化的代价是逐渐丧失人性。你会？',
    options: [
      {
        id: 'q23a',
        text: '全力阻止他——人性比力量重要一万倍',
        effects: [
          { dimId: 'justice', delta: 18 },
          { dimId: 'sociability', delta: 12 },
          { dimId: 'ambition', delta: -10 },
        ],
      },
      {
        id: 'q23b',
        text: '理解他的出发点，但帮他找其他变强的方式',
        effects: [
          { dimId: 'sociability', delta: 12 },
          { dimId: 'discipline', delta: 14 },
          { dimId: 'justice', delta: 8 },
        ],
      },
      {
        id: 'q23c',
        text: '如果这真的是他的觉悟，我会尊重他的选择',
        effects: [
          { dimId: 'ambition', delta: 15 },
          { dimId: 'ego', delta: 10 },
          { dimId: 'bravery', delta: 8 },
        ],
      },
      {
        id: 'q23d',
        text: '陪他一起——要么共同守住底线，要么一起沉沦',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'sociability', delta: 18 },
          { dimId: 'justice', delta: -12 },
        ],
      },
    ],
  },
  {
    id: 'q24',
    scenario:
      '英雄协会的年度评级出来了，你被分到最低档。但你知道自己的真实实力远超这个评级。你的反应？',
    options: [
      {
        id: 'q24a',
        text: '一笑置之，评级是给外人看的，实力自己知道',
        effects: [
          { dimId: 'ego', delta: -5 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'discipline', delta: 10 },
        ],
      },
      {
        id: 'q24b',
        text: '找协会高层理论，要求重新评定',
        effects: [
          { dimId: 'ego', delta: 16 },
          { dimId: 'bravery', delta: 8 },
        ],
      },
      {
        id: 'q24c',
        text: '把C级任务做到极致，用成绩让人闭嘴',
        effects: [
          { dimId: 'discipline', delta: 18 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'justice', delta: 6 },
        ],
      },
      {
        id: 'q24d',
        text: '这评级体系已经烂透了，不屑被它定义',
        effects: [
          { dimId: 'ego', delta: 14 },
          { dimId: 'discipline', delta: -10 },
          { dimId: 'sociability', delta: -8 },
        ],
      },
    ],
  },
  {
    id: 'q25',
    scenario:
      '你在废墟中找到一份怪人协会的作战计划书，上面详细记录了下一次大规模袭击的时间和地点。但消息来源可疑——可能是个陷阱。你会？',
    options: [
      {
        id: 'q25a',
        text: '宁可信其有，立刻通报协会准备应战',
        effects: [
          { dimId: 'justice', delta: 14 },
          { dimId: 'sociability', delta: 10 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
      {
        id: 'q25b',
        text: '亲自去侦查验证真伪后再做决定',
        effects: [
          { dimId: 'discipline', delta: 15 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q25c',
        text: '就算有陷阱又怎样，我将计就计',
        effects: [
          { dimId: 'bravery', delta: 15 },
          { dimId: 'ego', delta: 14 },
          { dimId: 'ambition', delta: 10 },
        ],
      },
      {
        id: 'q25d',
        text: '懒得管，让那些有情报分析能力的英雄去处理',
        effects: [
          { dimId: 'bravery', delta: -12 },
          { dimId: 'ambition', delta: -10 },
          { dimId: 'justice', delta: -8 },
        ],
      },
    ],
  },
  {
    id: 'q26',
    scenario:
      '如果你能选择一种方式来改变世界，你会？',
    options: [
      {
        id: 'q26a',
        text: '用绝对的力量建立一个强者保护弱者的新秩序',
        effects: [
          { dimId: 'bravery', delta: 14 },
          { dimId: 'ambition', delta: 16 },
          { dimId: 'ego', delta: 10 },
        ],
      },
      {
        id: 'q26b',
        text: '从制度入手，推动英雄协会的全面改革',
        effects: [
          { dimId: 'justice', delta: 16 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'sociability', delta: 8 },
        ],
      },
      {
        id: 'q26c',
        text: '从教育做起，培养下一代的正义感和责任感',
        effects: [
          { dimId: 'sociability', delta: 16 },
          { dimId: 'justice', delta: 12 },
          { dimId: 'ambition', delta: -5 },
        ],
      },
      {
        id: 'q26d',
        text: '先让自己站到顶点，其他的以后再说',
        effects: [
          { dimId: 'ambition', delta: 14 },
          { dimId: 'ego', delta: 15 },
          { dimId: 'sociability', delta: -10 },
        ],
      },
    ],
  },
  {
    id: 'q27',
    scenario:
      '在一次战斗中你的队友临阵脱逃，导致你独自面对强敌。虽然你活下来了，但你对"信任"有了新的看法。现在的你会？',
    options: [
      {
        id: 'q27a',
        text: '从此只靠自己——只有自己不会背叛自己',
        effects: [
          { dimId: 'ego', delta: 12 },
          { dimId: 'ambition', delta: 14 },
          { dimId: 'sociability', delta: -16 },
        ],
      },
      {
        id: 'q27b',
        text: '原谅他——人在生死关头的恐惧可以理解',
        effects: [
          { dimId: 'justice', delta: 10 },
          { dimId: 'sociability', delta: 12 },
          { dimId: 'ego', delta: -8 },
        ],
      },
      {
        id: 'q27c',
        text: '之后选人更谨慎——靠谱的同伴需要筛选',
        effects: [
          { dimId: 'discipline', delta: 16 },
          { dimId: 'sociability', delta: 5 },
          { dimId: 'bravery', delta: -5 },
        ],
      },
      {
        id: 'q27d',
        text: '找他当面对质，把话说清楚',
        effects: [
          { dimId: 'bravery', delta: 10 },
          { dimId: 'justice', delta: 12 },
          { dimId: 'discipline', delta: 5 },
        ],
      },
    ],
  },
  {
    id: 'q28',
    scenario:
      '你被邀请加入一个声名显赫的英雄小队，但在面试中发现这个团队内部等级森严、新人会被打压。你会？',
    options: [
      {
        id: 'q28a',
        text: '拒绝加入——我宁可在低处自由，也不在高处受辱',
        effects: [
          { dimId: 'ego', delta: 14 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'ambition', delta: -8 },
        ],
      },
      {
        id: 'q28b',
        text: '加入并忍辱负重——借这个平台让自己变强',
        effects: [
          { dimId: 'ambition', delta: 17 },
          { dimId: 'discipline', delta: 14 },
          { dimId: 'ego', delta: -6 },
        ],
      },
      {
        id: 'q28c',
        text: '加入后尝试从内部改变这种不良风气',
        effects: [
          { dimId: 'sociability', delta: 14 },
          { dimId: 'justice', delta: 12 },
          { dimId: 'bravery', delta: 8 },
        ],
      },
      {
        id: 'q28d',
        text: '拒绝并向协会举报这种霸凌行为',
        effects: [
          { dimId: 'justice', delta: 16 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q29',
    scenario:
      '你独自面对一个无法战胜的敌人。你知道自己会输，但身后就是疏散中的平民。你会？',
    options: [
      {
        id: 'q29a',
        text: '就算会死也要拖住它——能多挡一秒是一秒',
        effects: [
          { dimId: 'bravery', delta: 20 },
          { dimId: 'justice', delta: 18 },
          { dimId: 'ego', delta: -8 },
        ],
      },
      {
        id: 'q29b',
        text: '边战边退尽量拖延，同时大声指挥平民加快撤离',
        effects: [
          { dimId: 'discipline', delta: 14 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'sociability', delta: 10 },
        ],
      },
      {
        id: 'q29c',
        text: '找掩体隐蔽，呼叫支援——无谓的牺牲没意义',
        effects: [
          { dimId: 'discipline', delta: 16 },
          { dimId: 'bravery', delta: -6 },
          { dimId: 'ambition', delta: 5 },
        ],
      },
      {
        id: 'q29d',
        text: '冲向反方向吸引它远离人群',
        effects: [
          { dimId: 'bravery', delta: 13 },
          { dimId: 'discipline', delta: 10 },
          { dimId: 'ego', delta: 8 },
        ],
      },
    ],
  },
  {
    id: 'q30',
    scenario:
      '经过长期观察，你发现英雄协会的排名系统有很多漏洞。但指出这些问题可能会得罪高层。你会？',
    options: [
      {
        id: 'q30a',
        text: '公开发表分析报告——真相不该被隐藏',
        effects: [
          { dimId: 'justice', delta: 18 },
          { dimId: 'bravery', delta: 12 },
          { dimId: 'sociability', delta: -6 },
        ],
      },
      {
        id: 'q30b',
        text: '利用这些漏洞无声地提升自己的排名',
        effects: [
          { dimId: 'ambition', delta: 16 },
          { dimId: 'ego', delta: 10 },
          { dimId: 'justice', delta: -10 },
        ],
      },
      {
        id: 'q30c',
        text: '私下写好建议书，找信任的高层一对一沟通',
        effects: [
          { dimId: 'discipline', delta: 14 },
          { dimId: 'sociability', delta: 10 },
          { dimId: 'justice', delta: 6 },
        ],
      },
      {
        id: 'q30d',
        text: '不屑——自扫门前雪，体制烂不烂与我无关',
        effects: [
          { dimId: 'ego', delta: 8 },
          { dimId: 'justice', delta: -14 },
          { dimId: 'ambition', delta: -6 },
        ],
      },
    ],
  },
  {
    id: 'q31',
    scenario:
      '怪人协会的残党提出和平协议：停止袭击人类，作为交换，协会不再追究他们过去的罪行。你会？',
    options: [
      {
        id: 'q31a',
        text: '正义不能妥协——犯下罪行就必须付出代价',
        effects: [
          { dimId: 'justice', delta: 18 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'sociability', delta: -8 },
        ],
      },
      {
        id: 'q31b',
        text: '和平比复仇重要——如果他们是真心悔改',
        effects: [
          { dimId: 'sociability', delta: 14 },
          { dimId: 'justice', delta: -6 },
          { dimId: 'ambition', delta: -8 },
        ],
      },
      {
        id: 'q31c',
        text: '先假意接受，争取时间部署一网打尽的计划',
        effects: [
          { dimId: 'discipline', delta: 16 },
          { dimId: 'ambition', delta: 12 },
          { dimId: 'justice', delta: -5 },
        ],
      },
      {
        id: 'q31d',
        text: '无所谓——只要不威胁到我和我在乎的人',
        effects: [
          { dimId: 'ego', delta: 10 },
          { dimId: 'justice', delta: -15 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
    ],
  },
  {
    id: 'q32',
    scenario:
      '你遇到了过去的自己——还没有力量的普通人。你最想对ta说什么？',
    options: [
      {
        id: 'q32a',
        text: '你以后会很强大，但比力量更重要的，是知道为何而战',
        effects: [
          { dimId: 'justice', delta: 16 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'ambition', delta: -5 },
        ],
      },
      {
        id: 'q32b',
        text: '别浪费任何一天——马上开始训练',
        effects: [
          { dimId: 'discipline', delta: 18 },
          { dimId: 'ambition', delta: 14 },
          { dimId: 'sociability', delta: -5 },
        ],
      },
      {
        id: 'q32c',
        text: '你不需要变强也很好——不是只有成为英雄才算活出价值',
        effects: [
          { dimId: 'ego', delta: -10 },
          { dimId: 'sociability', delta: 12 },
          { dimId: 'ambition', delta: -10 },
        ],
      },
      {
        id: 'q32d',
        text: '珍惜现在的轻松日子吧，以后你肩上的担子会很重',
        effects: [
          { dimId: 'bravery', delta: 8 },
          { dimId: 'discipline', delta: 8 },
          { dimId: 'ego', delta: 6 },
        ],
      },
    ],
  },
  {
    id: 'q33',
    scenario:
      '你觉得"英雄"这个词最核心的定义是什么？',
    options: [
      {
        id: 'q33a',
        text: '力量——没有实力的英雄只是徒有其表',
        effects: [
          { dimId: 'ambition', delta: 16 },
          { dimId: 'bravery', delta: 10 },
          { dimId: 'ego', delta: 8 },
        ],
      },
      {
        id: 'q33b',
        text: '责任——明知会输还敢上，才是真英雄',
        effects: [
          { dimId: 'justice', delta: 18 },
          { dimId: 'bravery', delta: 14 },
          { dimId: 'ambition', delta: -5 },
        ],
      },
      {
        id: 'q33c',
        text: '同伴——真正的英雄从来不孤身一人',
        effects: [
          { dimId: 'sociability', delta: 18 },
          { dimId: 'justice', delta: 10 },
          { dimId: 'ego', delta: -8 },
        ],
      },
      {
        id: 'q33d',
        text: '自由——按自己标准行事，不被他人定义',
        effects: [
          { dimId: 'ego', delta: 16 },
          { dimId: 'discipline', delta: -8 },
          { dimId: 'sociability', delta: -10 },
        ],
      },
    ],
  },
  {
    id: 'q34',
    scenario:
      '你获得了一段难得的假期。Z市的英雄们都去海边度假了，邀请你同行。但你也想趁这段时间提升实力。你会？',
    options: [
      {
        id: 'q34a',
        text: '假期是陷阱——坚持训练不放松',
        effects: [
          { dimId: 'discipline', delta: 18 },
          { dimId: 'ambition', delta: 10 },
          { dimId: 'sociability', delta: -12 },
        ],
      },
      {
        id: 'q34b',
        text: '和同伴们一起去——难得的放松和情感联结',
        effects: [
          { dimId: 'sociability', delta: 18 },
          { dimId: 'discipline', delta: -10 },
        ],
      },
      {
        id: 'q34c',
        text: '独自找个安静的地方休息——真正的充电',
        effects: [
          { dimId: 'ego', delta: 6 },
          { dimId: 'discipline', delta: -6 },
          { dimId: 'sociability', delta: -8 },
        ],
      },
      {
        id: 'q34d',
        text: '换个地方战斗——听说海边附近有强大的怪人出没',
        effects: [
          { dimId: 'bravery', delta: 14 },
          { dimId: 'ambition', delta: 12 },
          { dimId: 'ego', delta: 8 },
        ],
      },
    ],
  },
]

export const QUESTIONS_TOTAL = QUESTIONS.length
