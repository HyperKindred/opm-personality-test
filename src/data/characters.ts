import type { Character } from '@/types'

/**
 * 一拳超人角色维度参考 (0-100)
 * 每个角色的 target 代表 "什么样的人会像这个角色"
 *
 * 头像图片说明：
 * - 每个角色的 avatar 指向 public/avatars/{id}.svg 占位文件
 * - 搜集到真实图片后，放同名 .png / .jpg 文件并修改下面 avatar 路径即可
 */
export const CHARACTERS: Character[] = [
  {
    id: 'saitama',
    name: '埼玉',
    title: '秃头披风侠',
    emoji: '🦸',
    avatar: '/avatars/saitama.png',
    description:
      '以绝对实力碾压一切的兴趣使然英雄。经历过极致训练后达到巅峰，却也因此感到空虚。表面上懒散淡漠，实则内心有着纯粹而坚定的英雄信念。',
    matchReason:
      '你表面看着普通，但内心有着纯粹而坚定的信念。你不盲从世俗规则，有自己的节奏和步调。对真正重要的事情，你会毫不犹豫地出手——这很像那位从超市特价区走出来的最强英雄。',
    target: {
      bravery: 95,
      ego: 85,
      justice: 75,
      discipline: 35,
      sociability: 20,
      ambition: 25,
    },
  },
  {
    id: 'genos',
    name: '杰诺斯',
    title: '魔鬼改造人',
    emoji: '🤖',
    avatar: '/avatars/genos.png',
    description:
      '为复仇而踏上变强之路的改造人英雄。拜埼玉为师后，以极致的自律和钻研精神追求力量。性格认真执着，对目标全情投入，从不懈怠。',
    matchReason:
      '你目标明确、执行力极强，认定一件事就会全力以赴。你欣赏强者并虚心学习，但从不满足于现状。这种永不止步的追求和钢铁般的意志，正是魔鬼改造人的精神核心。',
    target: {
      bravery: 90,
      ego: 30,
      justice: 85,
      discipline: 90,
      sociability: 55,
      ambition: 95,
    },
  },
  {
    id: 'mumen',
    name: '无证骑士',
    title: '正义的自行车',
    emoji: '🚲',
    avatar: '/avatars/mumen.png',
    description:
      '没有天赋异禀，没有强大实力，但他拥有英雄协会中最纯粹的一颗心。无论面对多么可怕的敌人，他都会挡在平民身前。用行动诠释了"英雄"二字的真正含义。',
    matchReason:
      '你或许不是最强的那个，但你的正义感和责任感远超常人。在关键时刻，你总会站出来做正确的事。真正的英雄不是看有多强，而是看愿意为他人付出多少——你就是这种英雄。',
    target: {
      bravery: 60,
      ego: 5,
      justice: 98,
      discipline: 70,
      sociability: 85,
      ambition: 45,
    },
  },
  {
    id: 'tatsumaki',
    name: '龙卷',
    title: '战栗的龙卷',
    emoji: '🌀',
    avatar: '/avatars/tatsumaki.png',
    description:
      '英雄协会最强的S级英雄之一，拥有恐怖的超能力。性格高傲自信，甚至有些目中无人。但她确实有骄傲的资本——在绝对的实力面前，谦虚只是一种选择。',
    matchReason:
      '你有足够的资本去自信，而且你从不掩饰这一点。你的能力出众，也清楚地知道自己想要什么。那种与生俱来的骄傲和不容置疑的气场，让人不禁想起那位凌驾于一切的超能力者。',
    target: {
      bravery: 85,
      ego: 98,
      justice: 60,
      discipline: 45,
      sociability: 25,
      ambition: 70,
    },
  },
  {
    id: 'fubuki',
    name: '吹雪',
    title: '地狱的吹雪',
    emoji: '🌪️',
    avatar: '/avatars/fubuki.png',
    description:
      'B级英雄中排名第一的强者，吹雪组的领导者。她重视同伴和团队的力量，虽然一直活在姐姐龙卷的阴影下，却从未放弃以自己的方式证明价值。',
    matchReason:
      '你重视人际关系和团队合作，善于凝聚周围的人。你有时会被人拿去做比较，但你走出了属于自己的路。既保持自我又懂得借力——你的领导力和韧性正如吹雪组的组长。',
    target: {
      bravery: 55,
      ego: 35,
      justice: 80,
      discipline: 65,
      sociability: 88,
      ambition: 60,
    },
  },
  {
    id: 'garou',
    name: '饿狼',
    title: '人类怪人',
    emoji: '🐺',
    avatar: '/avatars/garou.png',
    description:
      '曾经的英雄狩猎者，以颠覆现有英雄体系为目标的武术天才。他有着偏执而坚定的信念，不断在生死边缘突破极限。本质上是另一种意义上的纯粹——用最极端的方式追求自己的道。',
    matchReason:
      '你是一个复杂而矛盾的人——有强烈的自我主张，对既定的规则和秩序抱有质疑。你特立独行，宁可做孤狼也不愿随波逐流。你的内心有着强烈的驱动，只是方向与常人不同罢了。',
    target: {
      bravery: 98,
      ego: 88,
      justice: 15,
      discipline: 80,
      sociability: 8,
      ambition: 98,
    },
  },
  {
    id: 'king',
    name: 'King',
    title: '地上最强之人',
    emoji: '👑',
    avatar: '/avatars/king.png',
    description:
      '被称为"地上最强的男人"，S级英雄第7位。实际上只是一个运气极好的普通人，但他有着异于常人的心理素质——在被误解中依然活着，依然被当作英雄，某种意义上真是了不起。',
    matchReason:
      '你总是被命运推着走，却又莫名其妙地每次都扛过来了。你内心其实很有压力，但表面上已经学会了淡定。那种"虽然我很慌但我能稳住"的独特气质——没错，是King本王的频率。',
    target: {
      bravery: 10,
      ego: 15,
      justice: 60,
      discipline: 25,
      sociability: 35,
      ambition: 20,
    },
  },
  {
    id: 'sonic',
    name: '索尼克',
    title: '音速的索尼克',
    emoji: '💨',
    avatar: '/avatars/sonic.png',
    description:
      '原忍者村的精英，以极致的速度和身手著称。痴迷于打败埼玉而不断修炼。性格狂傲偏执，对自己的能力极度自信，对对手有着近乎固执的执念。',
    matchReason:
      '你对自己的能力有着绝对的自信，甚至有些偏执。一旦定下目标就百折不挠，哪怕屡战屡败也要屡败屡战。你的自尊心极强，不愿意输给任何人——这份执着，宛如那道追求超越音速的身影。',
    target: {
      bravery: 80,
      ego: 90,
      justice: 20,
      discipline: 98,
      sociability: 10,
      ambition: 88,
    },
  },
  {
    id: 'zombieman',
    name: '僵尸男',
    title: '不死之身的僵尸男',
    emoji: '🧟',
    avatar: '/avatars/zombieman.png',
    description:
      '拥有不死之身的S级英雄。性格沉稳冷静，有着超乎常人的耐心和毅力。擅长持久战和调查工作，不张扬但可靠。他的强大不在于爆发力，而在于永不言弃的韧性。',
    matchReason:
      '你性格沉稳，做事有耐心，从不急于求成。你不追求风头，但交给你的事情总能靠谱地完成。你在逆境中展现出的韧性令人惊叹——那种"倒下了就再爬起来"的顽强，正如不死之身的僵尸男。',
    target: {
      bravery: 75,
      ego: 25,
      justice: 80,
      discipline: 88,
      sociability: 40,
      ambition: 55,
    },
  },
  {
    id: 'metalbat',
    name: '金属球棒',
    title: '打架天王',
    emoji: '🏏',
    avatar: '/avatars/metalbat.png',
    description:
      '热血豪爽的S级英雄，以金属球棒为武器。性格火爆直率，尤其重视家人。战意越强实力越恐怖，是典型的战斗型天才。不在乎规则，只在乎自己想保护的东西。',
    matchReason:
      '你热血、直率、讲义气，认定的人就会拼命去保护。你不喜欢拐弯抹角，有火就发，有架就打。那种越战越勇、专为守护而战的纯粹烈性——你体内流着的，是金属球棒一样的热血。',
    target: {
      bravery: 92,
      ego: 60,
      justice: 70,
      discipline: 30,
      sociability: 75,
      ambition: 65,
    },
  },
  {
    id: 'boros',
    name: '波罗斯',
    title: '宇宙霸主',
    emoji: '👁️',
    avatar: '/avatars/boros.png',
    description:
      '暗物质盗贼团的首领，为了寻找能与之匹敌的对手而穿越无数星系。拥有压倒性的再生能力与毁灭性的能量攻击。在漫长的无敌岁月中，唯一的心愿就是一场酣畅淋漓的全力对决。',
    matchReason:
      '你在内心深处渴望一个真正的挑战——一个值得你全力以赴的对手。你自信且强大，不满足于平庸的日常。就像那位穿越星海只为一场好架的宇宙霸主，你的人生信条是：要么做到极致，要么毫无意义。',
    target: {
      bravery: 98,
      ego: 95,
      justice: 5,
      discipline: 85,
      sociability: 10,
      ambition: 98,
    },
  },
]
