import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026 무료 AI 추천 TOP 10 — 돈 한 푼 없이 쓸 수 있는 최고의 AI',
  description: '2026년 무료로 사용할 수 있는 AI 도구 TOP 10을 추천합니다. ChatGPT Free, Claude Free, Perplexity, Copilot 등 회원가입 없이 또는 무료 플랜으로 즉시 시작 가능한 AI 모음.',
  keywords: [
    '무료 AI 추천', '무료 AI', '무료 ChatGPT', '무료 AI 도구', 'AI 무료 사용',
    '무료 이미지 생성 AI', '무료 AI 챗봇', '무료 코딩 AI', '2026 무료 AI', '무료 AI 사이트'
  ],
  alternates: { canonical: '/free-ai-tools' },
  openGraph: {
    title: '2026 무료 AI 추천 TOP 10 — 돈 없이 쓰는 최고의 AI',
    description: 'ChatGPT Free, Claude Free, Perplexity 등 무료로 바로 시작할 수 있는 AI 도구 TOP 10 완벽 정리.',
    url: '/free-ai-tools',
    type: 'article',
  }
};

const freeAiTools = [
  {
    rank: 1,
    name: 'ChatGPT Free',
    category: '대화형 AI',
    badge: '🥇',
    color: '#10b981',
    freeLimit: 'GPT-4o mini 무제한 + GPT-4o 제한 사용',
    bestFor: '범용 작업 전반',
    howToStart: 'chat.openai.com 접속 → 회원가입 없이 시작 가능',
    features: [
      'GPT-4o mini 모델 무제한 사용',
      '이미지 업로드 및 분석 가능',
      '코드 작성·디버깅 지원',
      '번역·요약·글쓰기 모두 가능',
      '모바일 앱 무료 제공',
    ],
    tip: '회원가입 없이도 즉시 사용 가능. 하루 GPT-4o 사용 한도가 초기화되면 유료 기능도 맛볼 수 있음.',
    url: 'https://chat.openai.com'
  },
  {
    rank: 2,
    name: 'Claude Free',
    category: '대화형 AI',
    badge: '🥈',
    color: '#f59e0b',
    freeLimit: '5시간마다 일정 횟수 초기화',
    bestFor: '긴 문서 분석·보고서 작성',
    howToStart: 'claude.ai 접속 → 구글 계정으로 가입',
    features: [
      'Claude 3.5 Sonnet 무료 제공',
      '최대 100K 토큰 컨텍스트 처리',
      '파일·PDF 업로드 분석 가능',
      '고품질 글쓰기·보고서 작성',
      '사실 기반 신뢰도 높은 답변',
    ],
    tip: '무료 플랜도 Claude 3.5 Sonnet을 사용할 수 있어 GPT-4 수준의 글쓰기 품질 제공.',
    url: 'https://claude.ai'
  },
  {
    rank: 3,
    name: 'Perplexity AI Free',
    category: '검색·리서치 AI',
    badge: '🥉',
    color: '#3b82f6',
    freeLimit: '일 5회 Pro 검색, 기본 검색 무제한',
    bestFor: '최신 정보 리서치·출처 확인',
    howToStart: 'perplexity.ai 접속 → 바로 검색 가능',
    features: [
      '실시간 웹 검색 + AI 답변 통합',
      '모든 답변에 출처 URL 자동 표시',
      '최신 뉴스·논문 즉시 조회',
      '구글 검색보다 훨씬 정확한 요약',
      '로그인 없이 즉시 사용',
    ],
    tip: '로그인 없이 바로 쓸 수 있는 가장 강력한 무료 리서치 도구. 최신 뉴스·트렌드 파악에 필수.',
    url: 'https://perplexity.ai'
  },
  {
    rank: 4,
    name: 'Microsoft Copilot',
    category: '대화형 AI',
    badge: '4️⃣',
    color: '#0078d4',
    freeLimit: 'GPT-4 Turbo 무제한 (엣지 브라우저)',
    bestFor: '웹 검색 통합 + 이미지 생성',
    howToStart: 'copilot.microsoft.com 접속 → MS 계정 로그인',
    features: [
      'GPT-4 Turbo 기반 무료 대화',
      'Bing 실시간 검색 연동',
      'DALL-E 3 이미지 생성 무료',
      '문서·PDF 분석 지원',
      'Windows 11 기본 내장',
    ],
    tip: 'DALL-E 3 이미지 생성을 무료로 쓸 수 있는 유일한 방법. 하루 15크레딧 이미지 생성 가능.',
    url: 'https://copilot.microsoft.com'
  },
  {
    rank: 5,
    name: 'Google Gemini Free',
    category: '대화형 AI',
    badge: '5️⃣',
    color: '#4285f4',
    freeLimit: 'Gemini 1.5 Flash 무제한',
    bestFor: 'Google 서비스 통합·문서 분석',
    howToStart: 'gemini.google.com → 구글 계정 로그인',
    features: [
      'Google Docs, Gmail 직접 연동',
      '유튜브 영상 요약 기능',
      '이미지 업로드 분석',
      '멀티모달 이해력 우수',
      '한국어 지원 품질 우수',
    ],
    tip: 'Google Workspace 사용자라면 필수. Gmail·Docs 안에서 바로 AI 기능을 사용할 수 있음.',
    url: 'https://gemini.google.com'
  },
  {
    rank: 6,
    name: 'Cursor Free',
    category: '코딩 AI',
    badge: '6️⃣',
    color: '#6366f1',
    freeLimit: '월 2,000회 코드 자동완성',
    bestFor: '개발자 코딩 생산성',
    howToStart: 'cursor.com → 다운로드 → 무료 플랜 시작',
    features: [
      '월 2,000회 Tab 자동완성 무료',
      '코드베이스 전체 컨텍스트 인식',
      'GPT-4o mini 기반 코드 채팅',
      'VSCode와 동일한 인터페이스',
      '대부분의 언어 지원',
    ],
    tip: '개발자라면 지금 바로 설치해야 할 무료 AI. VSCode 플러그인에서 갈아타면 즉시 생산성 체감.',
    url: 'https://cursor.com'
  },
  {
    rank: 7,
    name: 'DeepSeek Free',
    category: '대화형 AI',
    badge: '7️⃣',
    color: '#0ea5e9',
    freeLimit: '무제한 (웹·앱 기본 기능)',
    bestFor: '코딩·수학 추론',
    howToStart: 'chat.deepseek.com 접속 → 가입 후 무료 사용',
    features: [
      'GPT-4 수준 성능을 완전 무료 제공',
      '수학 문제·논리 추론 특화',
      '코드 생성 품질 최상위',
      'R1 추론 모델 무료 접근',
      '오픈소스 기반 투명한 운영',
    ],
    tip: '실력 대비 비용이 0원인 가장 가성비 좋은 AI. 코딩과 수학 분야에서 GPT-4o를 능가하는 경우도 있음.',
    url: 'https://chat.deepseek.com'
  },
  {
    rank: 8,
    name: 'Stable Diffusion (로컬)',
    category: '이미지 생성 AI',
    badge: '8️⃣',
    color: '#64748b',
    freeLimit: '로컬 설치 후 완전 무제한',
    bestFor: '무제한 이미지 생성',
    howToStart: 'Automatic1111 또는 ComfyUI 설치 (GPU 필요)',
    features: [
      '월정액 없이 완전 무료',
      '이미지 생성 횟수 제한 없음',
      '수천 개의 커스텀 모델 활용',
      'LoRA로 스타일 세밀 조정',
      '개인 데이터 외부 전송 없음',
    ],
    tip: 'GPU(RTX 3060 이상)가 있다면 가장 강력한 무료 이미지 AI. 초기 설치가 복잡하지만 이후엔 무제한.',
    url: 'https://github.com/AUTOMATIC1111/stable-diffusion-webui'
  },
  {
    rank: 9,
    name: 'Kling AI Free',
    category: '영상 생성 AI',
    badge: '9️⃣',
    color: '#7c3aed',
    freeLimit: '월 66크레딧 무료 제공',
    bestFor: '짧은 영상 클립 생성',
    howToStart: 'klingai.com → 가입 후 무료 크레딧 사용',
    features: [
      '월 66크레딧 무료 제공',
      '5초~30초 영상 생성 가능',
      '텍스트→영상, 이미지→영상 지원',
      '한국어 프롬프트 인식 가능',
      '유료 대비 품질 차이 거의 없음',
    ],
    tip: '무료 크레딧으로 한 달에 약 20~30개 영상 클립 생성 가능. SNS 콘텐츠 제작자에게 강력 추천.',
    url: 'https://klingai.com'
  },
  {
    rank: 10,
    name: 'Notion AI Free Trial',
    category: '업무·문서 AI',
    badge: '🔟',
    color: '#000000',
    freeLimit: '20회 AI 응답 무료 체험',
    bestFor: '팀 문서 협업·회의록',
    howToStart: 'notion.so → 무료 계정 → AI 기능 체험',
    features: [
      '20회 무료 AI 응답 제공',
      '문서 자동 요약·번역',
      '회의록 액션 아이템 추출',
      'Notion DB와 AI 연동',
      '팀 협업 문서 관리 통합',
    ],
    tip: '20회 체험 후 유료($10/월)이지만, 팀 전체가 쓴다면 1인당 비용이 매우 낮아 충분히 고려할 가치가 있음.',
    url: 'https://notion.so'
  },
];

export default function FreeAIToolsPage() {
  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "2026 무료 AI 추천 TOP 10",
    "description": "돈 한 푼 없이 사용할 수 있는 최고의 무료 AI 도구 10선",
    "itemListElement": freeAiTools.map((tool, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": tool.name,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        "description": tool.features[0],
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://aicoretool.com" },
      { "@type": "ListItem", "position": 2, "name": "무료 AI 추천", "item": "https://aicoretool.com/free-ai-tools" }
    ]
  };

  return (
    <>
      <Script id="free-ai-list-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} strategy="beforeInteractive" />
      <Script id="free-ai-breadcrumb-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />

      <div className="max-w-[900px] mx-auto px-4 py-12">

        {/* 브레드크럼 */}
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">홈</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-600 font-medium">무료 AI 추천 TOP 10</span>
        </nav>

        {/* 헤더 */}
        <header className="mb-10">
          <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full mb-4 inline-block">
            무료 AI 추천 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            돈 한 푼 없이 시작하는 <span className="text-green-600">무료 AI 추천</span> TOP 10
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            AI를 처음 써보거나 비용 없이 도입하고 싶다면? 2026년 현재 실제로 쓸 만한 <strong>무료 AI 도구 TOP 10</strong>을 선별했습니다. 무료 플랜으로도 업무 생산성을 확실히 올릴 수 있는 서비스만 담았습니다.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs text-slate-500">
            <span className="bg-slate-100 px-3 py-1 rounded-full">✓ 2026년 3월 기준</span>
            <span className="bg-slate-100 px-3 py-1 rounded-full">✓ 신용카드 없이 시작 가능</span>
            <span className="bg-slate-100 px-3 py-1 rounded-full">✓ 직접 테스트한 서비스만 포함</span>
          </div>
        </header>

        {/* 빠른 요약 카드 */}
        <section className="mb-12 bg-green-50 rounded-2xl border border-green-200 p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">🏆 무료 AI 추천 한눈에 보기</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { name: 'ChatGPT', use: '범용' },
              { name: 'Claude', use: '글쓰기' },
              { name: 'Perplexity', use: '검색' },
              { name: 'Copilot', use: '이미지' },
              { name: 'DeepSeek', use: '코딩' },
            ].map((item) => (
              <div key={item.name} className="bg-white rounded-xl p-3 text-center border border-green-100">
                <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                <p className="text-xs text-green-600 mt-0.5">{item.use}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 상세 목록 */}
        <section className="space-y-6 mb-16">
          {freeAiTools.map((tool) => (
            <article key={tool.rank}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
              style={{ borderLeft: `4px solid ${tool.color}` }}>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3 gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{tool.badge}</span>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{tool.name}</h2>
                      <span className="text-xs font-semibold text-white px-2 py-0.5 rounded-full"
                        style={{ backgroundColor: tool.color }}>
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-xs text-slate-400 mb-1">무료 범위</p>
                    <p className="text-sm font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-lg text-right">
                      {tool.freeLimit}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">주요 기능</p>
                    <ul className="space-y-1">
                      {tool.features.map((f) => (
                        <li key={f} className="text-sm text-slate-600 flex items-start gap-2">
                          <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">시작 방법</p>
                    <p className="text-sm text-slate-600 bg-slate-50 p-3 rounded-lg leading-relaxed">
                      {tool.howToStart}
                    </p>
                    <p className="text-xs font-bold text-slate-400 mb-1 mt-3 uppercase tracking-wide">추천 대상</p>
                    <p className="text-sm font-semibold text-slate-700">{tool.bestFor}</p>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-100 rounded-lg px-4 py-3">
                  <p className="text-sm text-amber-800">
                    <strong>💡 팁:</strong> {tool.tip}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">무료 AI 추천 자주 묻는 질문</h2>
          <div className="space-y-4">
            {[
              {
                q: '무료 AI와 유료 AI의 차이는 얼마나 큰가요?',
                a: '생각보다 작습니다. ChatGPT Free, Claude Free, DeepSeek 등 무료 플랜도 기본적인 업무 자동화, 글쓰기, 코딩에 충분히 활용 가능합니다. 유료 플랜은 주로 사용 한도, 최신 모델 우선 접근, 더 빠른 응답속도 측면에서 차이가 납니다.'
              },
              {
                q: '무료 AI를 상업적 목적으로 사용해도 되나요?',
                a: '대부분 허용됩니다. ChatGPT, Claude, Perplexity의 무료 플랜은 상업적 사용을 기본적으로 허용합니다. 단, 생성된 이미지 등의 저작권은 서비스별로 다르므로 각 플랫폼의 이용약관을 꼭 확인하세요.'
              },
              {
                q: '여러 무료 AI를 동시에 쓰는 게 좋은가요?',
                a: '전략적 분산이 최고입니다. 각 AI마다 강점이 다르므로 리서치는 Perplexity, 글쓰기는 Claude, 코딩은 Cursor, 이미지는 Copilot처럼 목적에 따라 나눠 쓰면 무료 한도를 최대한 활용할 수 있습니다.'
              },
              {
                q: '무료 AI는 개인정보가 안전한가요?',
                a: '주의가 필요합니다. 대부분의 무료 AI 서비스는 학습 데이터로 입력값을 활용할 수 있습니다. 민감한 개인정보, 기업 기밀 등은 AI에 직접 입력하지 않는 것이 좋습니다. 기업 보안이 중요하다면 유료 엔터프라이즈 플랜을 사용하세요.'
              },
            ].map((item) => (
              <div key={item.q} className="bg-white border border-slate-200 rounded-xl p-5">
                <h3 className="font-bold text-slate-900 mb-2 text-[15px]">
                  <span className="text-green-600 mr-2">Q.</span>{item.q}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  <span className="text-slate-400 font-bold mr-1">A.</span>{item.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 관련 페이지 + CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <Link href="/ai-tools-guide"
            className="block bg-indigo-50 border border-indigo-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-indigo-900 mb-2">📚 AI 도구 추천 완벽 가이드</h3>
            <p className="text-sm text-indigo-700">목적·직업·예산별 AI 도구 추천 가이드 읽기 →</p>
          </Link>
          <Link href="/ai-ranking"
            className="block bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <h3 className="font-bold text-slate-900 mb-2">🏆 2026 AI 도구 순위 TOP 10</h3>
            <p className="text-sm text-slate-600">카테고리별 최강 AI 랭킹 확인하기 →</p>
          </Link>
        </div>

        <div className="text-center py-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100">
          <h2 className="text-xl font-extrabold text-slate-900 mb-3">어떤 무료 AI부터 시작해야 할지 모르겠다면?</h2>
          <p className="text-slate-600 mb-6 text-sm">6가지 간단한 질문으로 내 업무에 맞는 AI를 정확히 추천받으세요.</p>
          <Link href="/"
            className="inline-block bg-green-600 text-white font-bold py-3 px-10 rounded-full hover:bg-green-700 transition shadow-md">
            무료 AI 추천 테스트 시작하기
          </Link>
        </div>

      </div>
    </>
  );
}
