// AI 도구 유형 정의
export type AITool =
  | "cursor"
  | "claude"
  | "chatgpt"
  | "perplexity"
  | "midjourney"
  | "notionAI";

// 결과 화면에서 사용할 AI 도구 상세 정보
export const aiToolDetails: Record<
  AITool,
  {
    name: string;
    icon: string;
    tagline: string;
    description: string;
    link: string;
    color: string;
  }
> = {
  cursor: {
    name: "Cursor",
    icon: "⌨️",
    tagline: "AI 코딩의 미래",
    description:
      "AI가 코드를 이해하고 자동 완성, 리팩터링, 디버깅을 도와주는 최강의 코딩 에디터. 개발자라면 필수입니다.",
    link: "https://cursor.sh",
    color: "#6366f1",
  },
  claude: {
    name: "Claude",
    icon: "🧠",
    tagline: "깊이 있는 사고의 파트너",
    description:
      "긴 문서 분석, 복잡한 글쓰기, 논리적 추론에 탁월합니다. 프리미엄 AI 어시스턴트가 필요하다면 Claude.",
    link: "https://claude.ai",
    color: "#f59e0b",
  },
  chatgpt: {
    name: "ChatGPT",
    icon: "💬",
    tagline: "가장 범용적인 AI",
    description:
      "텍스트, 이미지, 코드, 데이터 분석까지 모두 처리하는 올라운더. AI를 처음 접하거나 다양하게 활용하고 싶다면 최고의 선택.",
    link: "https://chatgpt.com",
    color: "#10b981",
  },
  perplexity: {
    name: "Perplexity",
    icon: "🔍",
    tagline: "AI 기반 검색 엔진",
    description:
      "실시간 웹 검색과 AI를 결합한 서비스. 최신 정보를 빠르게 파악하고 출처가 필요한 리서치에 최적화.",
    link: "https://perplexity.ai",
    color: "#3b82f6",
  },
  midjourney: {
    name: "Midjourney",
    icon: "🎨",
    tagline: "이미지 생성의 정점",
    description:
      "텍스트 한 줄로 예술적인 이미지를 생성합니다. 디자이너, 크리에이터, 마케터의 필수 크리에이티브 도구.",
    link: "https://midjourney.com",
    color: "#ec4899",
  },
  notionAI: {
    name: "Notion AI",
    icon: "📝",
    tagline: "생산성 극대화 도구",
    description:
      "Notion 내에서 AI로 문서 작성, 요약, 번역, 아이디어 정리까지. 팀 협업과 지식 관리의 새로운 기준.",
    link: "https://notion.so",
    color: "#8b5cf6",
  },
};

// 퀴즈 문항 타입 정의
export interface Option {
  text: string;
  scores: Partial<Record<AITool, number>>;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

// 퀴즈 문항
export const questions: Question[] = [
  {
    id: 1,
    question: "AI를 가장 많이 쓰는 상황은?",
    options: [
      {
        text: "코드 작성이나 개발 업무",
        scores: { cursor: 3, chatgpt: 1, claude: 1 },
      },
      {
        text: "글쓰기, 보고서, 콘텐츠 제작",
        scores: { claude: 3, chatgpt: 2, notionAI: 2 },
      },
      {
        text: "정보 검색과 리서치",
        scores: { perplexity: 3, chatgpt: 1 },
      },
      {
        text: "이미지, 디자인 제작",
        scores: { midjourney: 3, chatgpt: 1 },
      },
    ],
  },
  {
    id: 2,
    question: "지금 가장 시간이 많이 걸리는 작업은?",
    options: [
      {
        text: "버그 찾기와 코드 디버깅",
        scores: { cursor: 3, chatgpt: 1 },
      },
      {
        text: "긴 문서 읽고 요약하기",
        scores: { claude: 3, notionAI: 2, chatgpt: 1 },
      },
      {
        text: "최신 트렌드 파악하기",
        scores: { perplexity: 3, chatgpt: 1 },
      },
      {
        text: "시각 자료 및 썸네일 만들기",
        scores: { midjourney: 3 },
      },
    ],
  },
  {
    id: 3,
    question: "직업 또는 주요 역할은?",
    options: [
      {
        text: "개발자 / 엔지니어",
        scores: { cursor: 3, chatgpt: 1, claude: 1 },
      },
      {
        text: "기획자 / 마케터",
        scores: { notionAI: 2, claude: 2, chatgpt: 2, perplexity: 1 },
      },
      {
        text: "디자이너 / 크리에이터",
        scores: { midjourney: 3, chatgpt: 1 },
      },
      {
        text: "연구자 / 학생",
        scores: { perplexity: 3, claude: 2, chatgpt: 1 },
      },
    ],
  },
  {
    id: 4,
    question: "AI에게 원하는 것은?",
    options: [
      {
        text: "내 코드를 직접 수정해줬으면",
        scores: { cursor: 3 },
      },
      {
        text: "신중하고 깊이 있는 답변",
        scores: { claude: 3, chatgpt: 1 },
      },
      {
        text: "빠른 시간 안에 답을 찾아줬으면",
        scores: { perplexity: 3, chatgpt: 2 },
      },
      {
        text: "내가 상상한 이미지를 만들어줬으면",
        scores: { midjourney: 3 },
      },
    ],
  },
  {
    id: 5,
    question: "협업이나 팀 작업이 많은 편인가요?",
    options: [
      {
        text: "팀과 함께 문서/노트를 자주 공유",
        scores: { notionAI: 3, claude: 1 },
      },
      {
        text: "혼자 개발이나 작업을 주로 함",
        scores: { cursor: 2, chatgpt: 2 },
      },
      {
        text: "클라이언트에게 결과물을 납품",
        scores: { midjourney: 2, chatgpt: 2, claude: 1 },
      },
      {
        text: "개인 학습이나 사이드 프로젝트",
        scores: { chatgpt: 2, perplexity: 2, claude: 1 },
      },
    ],
  },
  {
    id: 6,
    question: "AI를 쓸 때 가장 중요하게 생각하는 것은?",
    options: [
      {
        text: "정확성과 신뢰도",
        scores: { claude: 3, perplexity: 2 },
      },
      {
        text: "속도와 편의성",
        scores: { chatgpt: 3, cursor: 2 },
      },
      {
        text: "창의성과 독창성",
        scores: { midjourney: 3, claude: 1 },
      },
      {
        text: "팀 협업 및 통합 기능",
        scores: { notionAI: 3, chatgpt: 1 },
      },
    ],
  },
];
