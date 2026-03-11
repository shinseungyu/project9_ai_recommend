export type AITool = 'cursor' | 'claude' | 'chatgpt' | 'perplexity' | 'midjourney' | 'notionAI';

export interface Option {
  text: string;
  scores: Partial<Record<AITool, number>>;
}

export interface Question {
  id: number;
  question: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    question: "가장 많은 시간을 쏟는 주된 업무는 무엇인가요?",
    options: [
      { text: "💻 코드 작성 및 디버깅", scores: { cursor: 3, claude: 2, chatgpt: 1 } },
      { text: "📝 블로그, 기획서 등 긴 글 쓰기", scores: { claude: 3, notionAI: 2, chatgpt: 1 } },
      { text: "📊 시장 조사 및 데이터 분석", scores: { perplexity: 3, chatgpt: 2, claude: 1 } },
      { text: "🎨 이미지, 디자인 아이디어 구상", scores: { midjourney: 3, chatgpt: 1 } },
    ],
  },
  {
    id: 2,
    question: "현재 업무에서 가장 해결하고 싶은 빡침(?) 포인트는?",
    options: [
      { text: "🔍 최신 정보나 팩트 체크하느라 시간이 다 감", scores: { perplexity: 3, chatgpt: 1 } },
      { text: "🤖 문맥을 못 알아듣고 자꾸 기계적인 헛소리를 함", scores: { claude: 3, cursor: 1 } },
      { text: "⌨️ 단순 반복 타이핑, 노가다가 너무 많음", scores: { cursor: 2, chatgpt: 2, notionAI: 2 } },
      { text: "🖼️ 원하는 퀄리티의 시각 자료(이미지)가 안 나옴", scores: { midjourney: 3 } },
    ],
  },
  {
    id: 3,
    question: "AI가 출력하는 결과물의 길이나 스타일은 어땠으면 좋겠나요?",
    options: [
      { text: "📖 사람이 쓴 것처럼 자연스럽고 논리적인 긴 글", scores: { claude: 3, notionAI: 1 } },
      { text: "⚡ 요점만 딱딱 짚어주는 짧고 명확한 요약본", scores: { chatgpt: 2, perplexity: 2 } },
      { text: "📂 내 프로젝트 파일 전체를 읽고 수정해주는 방식", scores: { cursor: 3 } },
      { text: "🔗 글보다는 출처가 명확한 링크나 시각 자료", scores: { perplexity: 2, midjourney: 2 } },
    ],
  },
  {
    id: 4,
    question: "영어 울렁증이 있으신가요?",
    options: [
      { text: "🇰🇷 네, 무조건 한국어를 찰떡같이 알아들어야 해요", scores: { claude: 3, chatgpt: 1 } },
      { text: "🌍 아뇨, 번역기 돌리거나 영어로 프롬프트 써도 괜찮아요", scores: { midjourney: 2, perplexity: 1, chatgpt: 1 } },
    ],
  },
  {
    id: 5,
    question: "AI 툴에 달마다 투자할 수 있는 최대 금액은?",
    options: [
      { text: "🆓 무조건 무료! 일단 돈 안 내고 쓸래요", scores: { chatgpt: 2, claude: 1, perplexity: 1 } },
      { text: "☕ 커피 몇 잔 값(약 월 3만 원) 정도는 낼 수 있어요", scores: { chatgpt: 3, claude: 3, cursor: 3, midjourney: 3 } },
      { text: "💳 업무 효율만 오르면 여러 개 구독해도 상관없어요", scores: { cursor: 2, claude: 2, perplexity: 2, midjourney: 2 } },
    ],
  },
  {
    id: 6,
    question: "어떤 환경에서 주로 작업하시나요?",
    options: [
      { text: "🌐 웹 브라우저 창 띄워놓고 채팅하듯 작업", scores: { chatgpt: 3, claude: 2, perplexity: 2 } },
      { text: "📄 문서 편집기(노션, 워드 등) 안에서 바로바로 수정", scores: { notionAI: 3, claude: 1 } },
      { text: "🛠️ VS Code 같은 개발 전용 에디터", scores: { cursor: 3 } },
      { text: "💬 디스코드나 메신저 환경", scores: { midjourney: 3 } },
    ],
  },
  {
    id: 7,
    question: "자료를 올릴 때 회사 대외비나 보안 문서가 포함되나요?",
    options: [
      { text: "🔒 네, 보안이 철저하거나 학습에 안 쓰여야 해요", scores: { claude: 2, cursor: 2 } },
      { text: "📢 아니요, 구글링할 수 있는 일반적인 내용 위주예요", scores: { chatgpt: 2, perplexity: 2, midjourney: 1 } },
    ],
  },
  {
    id: 8,
    question: "마지막으로, 본인의 컴퓨터/IT 활용 능력은 어느 정도인가요?",
    options: [
      { text: "😅 단축키도 잘 모르는 컴알못", scores: { chatgpt: 3, notionAI: 2 } },
      { text: "🔧 필요한 툴은 검색해서 다룰 줄 아는 일반 직장인", scores: { claude: 2, perplexity: 2, midjourney: 1 } },
      { text: "⚙️ 코딩 가능하거나 단축키 세팅까지 다 하는 헤비 유저", scores: { cursor: 3, claude: 1, midjourney: 1 } },
    ],
  },
];

export interface AIToolInfo {
  name: string;
  description: string;
  tagline: string;
  icon: string;
  color: string;
  link: string;
}

export const aiToolDetails: Record<AITool, AIToolInfo> = {
  cursor: {
    name: "Cursor",
    description: "AI 기반 코드 에디터로, 프로젝트 전체를 이해하고 코드를 자동 작성·수정해줍니다. 개발자 생산성을 극대화하는 최고의 도구입니다.",
    tagline: "코딩의 게임 체인저",
    icon: "🖥️",
    color: "hsl(250, 85%, 60%)",
    link: "https://cursor.sh",
  },
  claude: {
    name: "Claude",
    description: "Anthropic이 만든 AI로, 긴 문맥 이해력과 자연스러운 한국어 실력이 독보적입니다. 기획서, 보고서, 전략 문서 작성에 최적화되어 있습니다.",
    tagline: "글쓰기의 끝판왕",
    icon: "🧠",
    color: "hsl(25, 90%, 55%)",
    link: "https://claude.ai",
  },
  chatgpt: {
    name: "ChatGPT",
    description: "OpenAI의 대표 AI 챗봇으로, 범용성이 뛰어나고 진입 장벽이 낮습니다. 무료 버전만으로도 대부분의 일상 업무를 커버할 수 있습니다.",
    tagline: "만능 올라운더",
    icon: "💬",
    color: "hsl(170, 75%, 42%)",
    link: "https://chat.openai.com",
  },
  perplexity: {
    name: "Perplexity",
    description: "실시간 웹 검색과 AI를 결합한 리서치 엔진입니다. 출처를 명확히 밝혀주어 팩트 체크와 시장 조사에 강력합니다.",
    tagline: "리서치 전문가",
    icon: "🔎",
    color: "hsl(200, 85%, 50%)",
    link: "https://perplexity.ai",
  },
  midjourney: {
    name: "Midjourney",
    description: "텍스트를 입력하면 놀라운 퀄리티의 이미지를 생성해주는 AI입니다. 디자인 시안, 컨셉 아트, 마케팅 이미지 제작에 최적입니다.",
    tagline: "비주얼 크리에이터",
    icon: "🎨",
    color: "hsl(280, 80%, 55%)",
    link: "https://midjourney.com",
  },
  notionAI: {
    name: "Notion AI",
    description: "노션 워크스페이스에 통합된 AI로, 문서 작성·요약·번역을 노션 안에서 바로 처리합니다. 기존 노션 유저에게 최고의 선택입니다.",
    tagline: "문서 작업의 비서",
    icon: "📝",
    color: "hsl(0, 0%, 20%)",
    link: "https://notion.so/product/ai",
  },
};
