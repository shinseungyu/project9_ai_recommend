import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026 AI 도구 추천 완벽 가이드 — 목적별·직업별 최적 AI 선택법',
  description: '2026년 최신 AI 도구 추천 가이드. ChatGPT, Claude, Cursor, Midjourney 등 50+ AI를 목적·직업·예산별로 분류해 가장 빠르게 내 AI를 찾아드립니다.',
  keywords: [
    'AI 도구 추천', 'AI 추천', '2026 AI 도구', '업무용 AI 추천', '직장인 AI 추천',
    'AI 선택 가이드', 'ChatGPT 추천', 'Claude 추천', '최고의 AI', 'AI 비교'
  ],
  alternates: { canonical: '/ai-tools-guide' },
  openGraph: {
    title: '2026 AI 도구 추천 완벽 가이드 — 목적별·직업별 최적 AI 선택법',
    description: 'ChatGPT, Claude, Cursor 등 50+ AI 도구를 직업·예산·목적별로 분류한 2026 완벽 가이드.',
    url: '/ai-tools-guide',
    type: 'article',
  }
};

const toolsByCategory = [
  {
    category: '대화형 AI (LLM)',
    color: '#6366f1',
    bg: '#eef2ff',
    icon: '💬',
    tools: [
      { name: 'ChatGPT (GPT-4o)', free: true, price: '$20/월', best: '범용', summary: '가장 넓은 생태계. 이미지·코드·번역·데이터 분석 모두 가능한 올라운더.' },
      { name: 'Claude 3.7 Sonnet', free: true, price: '$20/월', best: '글쓰기·분석', summary: '200K 토큰 초장문 처리. 보고서·계약서·논문 분석에 독보적 성능.' },
      { name: 'Gemini 2.5 Pro', free: true, price: '$19.99/월', best: '구글 통합', summary: 'Google 서비스와 완벽 연동. 코딩 추론 능력이 빠르게 성장 중.' },
      { name: 'Perplexity AI', free: true, price: '$20/월', best: '리서치·검색', summary: '실시간 웹 검색 + 출처 표시. 최신 정보가 중요한 리서치에 필수.' },
    ]
  },
  {
    category: '코딩 AI',
    color: '#7c3aed',
    bg: '#f5f3ff',
    icon: '⌨️',
    tools: [
      { name: 'Cursor', free: true, price: '$20/월', best: '개발 생산성', summary: '코드베이스 전체를 읽고 맥락 파악. 코딩 시간 평균 40% 단축.' },
      { name: 'GitHub Copilot', free: false, price: '$10/월', best: '기업 표준', summary: 'VSCode·JetBrains 등 모든 IDE 지원. 기업 보안 정책에 친화적.' },
      { name: 'Windsurf', free: true, price: '$15/월', best: '에이전트 코딩', summary: 'Cursor 대항마. 자율 에이전트 모드로 복잡한 코딩 작업 위임 가능.' },
      { name: 'Lovable', free: true, price: '$20/월', best: '비개발자 앱 제작', summary: '자연어만으로 웹앱 완성. 기획자·디자이너의 MVP 제작에 최적.' },
    ]
  },
  {
    category: '이미지 생성 AI',
    color: '#db2777',
    bg: '#fdf2f8',
    icon: '🎨',
    tools: [
      { name: 'Midjourney V7', free: false, price: '$10+/월', best: '예술성·광고', summary: '최고 수준의 이미지 품질. 광고·아트워크·콘셉트 이미지에 압도적.' },
      { name: 'DALL-E 3', free: true, price: 'ChatGPT 포함', best: '초보자', summary: 'ChatGPT에 통합. 프롬프트 이해력이 높아 원하는 이미지를 쉽게 생성.' },
      { name: 'Adobe Firefly', free: true, price: '$4.99+/월', best: '저작권 안전', summary: '상업적 사용 완전 안전. 어도비 CC 사용자라면 자연스럽게 통합.' },
      { name: 'Stable Diffusion', free: true, price: '무료(로컬)', best: '무제한·커스텀', summary: '로컬 설치 무료. LoRA 모델로 무한 커스터마이징 가능.' },
    ]
  },
  {
    category: '영상 생성 AI',
    color: '#dc2626',
    bg: '#fff1f2',
    icon: '🎬',
    tools: [
      { name: 'Runway Gen-4', free: false, price: '$15+/월', best: '전문가·광고', summary: '4K 품질 지원. 영화·광고 제작 수준의 자연스러운 영상 생성.' },
      { name: 'Kling AI 2.0', free: true, price: '$6.99+/월', best: '가성비', summary: '2분 롱폼 영상 + 캐릭터 일관성 유지. 가격 대비 최강 성능.' },
      { name: 'Veo 3 (Google)', free: false, price: '$19.99/월', best: '오디오 포함', summary: '자체 음악·효과음 자동 생성. 배경음악 별도 편집이 필요 없음.' },
      { name: 'Pika Labs', free: true, price: '$8+/월', best: '입문자·SNS', summary: '가장 쉬운 UI. 인스타·틱톡용 10초 클립 제작에 최적.' },
    ]
  },
];

const jobRecommendations = [
  {
    job: '직장인 / 기획자',
    icon: '💼',
    color: '#6366f1',
    primary: 'Claude',
    secondary: 'Notion AI',
    tertiary: 'Perplexity',
    reason: '보고서·기획서 작성은 Claude, 팀 문서 관리는 Notion AI, 트렌드 리서치는 Perplexity로 3분할 활용이 최강'
  },
  {
    job: '개발자',
    icon: '👨‍💻',
    color: '#7c3aed',
    primary: 'Cursor',
    secondary: 'Claude Code',
    tertiary: 'GitHub Copilot',
    reason: '일상 코딩은 Cursor, 대규모 리팩토링은 Claude Code, 기업 환경이라면 Copilot 추가'
  },
  {
    job: '마케터 / 콘텐츠 크리에이터',
    icon: '📱',
    color: '#db2777',
    primary: 'ChatGPT',
    secondary: 'Midjourney',
    tertiary: 'Kling AI',
    reason: '카피라이팅은 ChatGPT, 광고 이미지는 Midjourney, SNS 영상 클립은 Kling AI로 풀 콘텐츠 파이프라인 구성'
  },
  {
    job: '연구자 / 학생',
    icon: '🔬',
    color: '#0ea5e9',
    primary: 'Perplexity',
    secondary: 'Claude',
    tertiary: 'ChatGPT',
    reason: '최신 논문·자료 검색은 Perplexity, 장문 문서 분석은 Claude, 개념 이해·요약은 ChatGPT'
  },
  {
    job: '디자이너',
    icon: '🎨',
    color: '#f59e0b',
    primary: 'Midjourney',
    secondary: 'Adobe Firefly',
    tertiary: 'ChatGPT',
    reason: '콘셉트 이미지는 Midjourney, 저작권 안전한 상업 소재는 Firefly, 클라이언트 커뮤니케이션 초안은 ChatGPT'
  },
  {
    job: '유튜버 / 영상 제작자',
    icon: '🎥',
    color: '#dc2626',
    primary: 'Veo 3',
    secondary: 'Runway Gen-4',
    tertiary: 'HeyGen',
    reason: '오디오 포함 영상은 Veo 3, 전문가급 편집은 Runway, AI 아바타 마케팅 영상은 HeyGen'
  },
];

export default function AIToolsGuidePage() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "2026 AI 도구 추천 완벽 가이드 — 목적별·직업별 최적 AI 선택법",
    "description": "ChatGPT, Claude, Cursor, Midjourney 등 50+ AI를 목적·직업·예산별로 분류한 2026 AI 도구 추천 완벽 가이드",
    "author": { "@type": "Organization", "name": "aicoretool.com" },
    "publisher": { "@type": "Organization", "name": "aicoretool.com" },
    "datePublished": "2026-01-01",
    "dateModified": "2026-03-01",
    "keywords": "AI 도구 추천, AI 추천, 2026 AI, ChatGPT, Claude, Cursor",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://aicoretool.com/ai-tools-guide" }
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://aicoretool.com" },
      { "@type": "ListItem", "position": 2, "name": "AI 도구 추천 가이드", "item": "https://aicoretool.com/ai-tools-guide" }
    ]
  };

  return (
    <>
      <Script id="guide-article-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} strategy="beforeInteractive" />
      <Script id="guide-breadcrumb-ld" type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} strategy="beforeInteractive" />

      <div className="max-w-[1000px] mx-auto px-4 py-12">

        {/* 브레드크럼 */}
        <nav className="text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-indigo-600">홈</Link>
          <span className="mx-2">›</span>
          <span className="text-slate-600 font-medium">AI 도구 추천 가이드</span>
        </nav>

        {/* 헤더 */}
        <header className="mb-12">
          <span className="text-sm font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4 inline-block">
            AI 도구 추천 완벽 가이드 2026
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            목적별·직업별 <span className="text-indigo-600">AI 도구 추천</span> 완벽 가이드
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            수백 가지 AI 도구 중 내 업무에 딱 맞는 AI를 찾는 건 쉽지 않습니다. 이 가이드는 <strong>직업·사용 목적·예산</strong>에 따라 2026년 최적의 AI 도구를 추천합니다. 무작정 ChatGPT만 쓰지 말고, 나에게 맞는 AI 조합을 찾아보세요.
          </p>
          <div className="mt-6 p-4 bg-indigo-50 rounded-xl border border-indigo-100">
            <p className="text-sm text-indigo-700">
              💡 <strong>빠른 추천이 필요하다면?</strong> 아래 가이드를 읽는 대신{' '}
              <Link href="/" className="font-bold underline hover:no-underline">AI 추천 테스트 (6문항, 30초)</Link>를 먼저 해보세요.
            </p>
          </div>
        </header>

        {/* 카테고리별 AI 추천 */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">카테고리별 AI 도구 추천</h2>
          <p className="text-slate-500 mb-8 text-sm">2026년 기준 각 분야에서 가장 인기 있는 AI 도구 TOP 4</p>

          <div className="space-y-10">
            {toolsByCategory.map((cat) => (
              <div key={cat.category}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="text-xl font-bold text-slate-900">{cat.category}</h3>
                  <div className="h-px flex-1 bg-slate-200" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {cat.tools.map((tool) => (
                    <div key={tool.name}
                      className="bg-white border border-slate-200 rounded-xl p-5 hover:shadow-md transition-shadow"
                      style={{ borderTop: `3px solid ${cat.color}` }}>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-slate-900 text-[15px]">{tool.name}</h4>
                        <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                          style={{ backgroundColor: cat.color }}>
                          {tool.best}
                        </span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed mb-3">{tool.summary}</p>
                      <div className="flex items-center gap-3 text-xs">
                        <span className={`px-2 py-0.5 rounded-full font-semibold ${tool.free ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                          {tool.free ? '무료 플랜 있음' : '유료 전용'}
                        </span>
                        <span className="text-slate-400">{tool.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 직업별 AI 추천 조합 */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">직업별 AI 추천 조합</h2>
          <p className="text-slate-500 mb-8 text-sm">실제로 효과가 입증된 직업별 AI 3종 세트 조합</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {jobRecommendations.map((job) => (
              <div key={job.job}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{job.icon}</span>
                  <h3 className="text-lg font-bold text-slate-900">{job.job}</h3>
                </div>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-sm font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: job.color }}>
                    ① {job.primary}
                  </span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    ② {job.secondary}
                  </span>
                  <span className="text-sm font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                    ③ {job.tertiary}
                  </span>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{job.reason}</p>
              </div>
            ))}
          </div>
        </section>

        {/* AI 도구 선택 체크리스트 */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">AI 도구 추천 전 체크리스트</h2>
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <p className="text-slate-600 mb-5 text-sm leading-relaxed">
              아래 질문에 답하면 어떤 AI 도구가 나에게 맞는지 빠르게 파악할 수 있습니다.
              체크한 항목이 많은 카테고리가 내가 먼저 시작해야 할 AI입니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: '📝 문서·보고서를 자주 작성한다', tip: '→ Claude 또는 ChatGPT' },
                { label: '💻 코드를 작성하거나 디버깅한다', tip: '→ Cursor 또는 GitHub Copilot' },
                { label: '🔍 최신 정보·뉴스를 리서치한다', tip: '→ Perplexity AI' },
                { label: '🎨 이미지·썸네일·광고 소재를 만든다', tip: '→ Midjourney 또는 DALL-E 3' },
                { label: '🎬 YouTube·SNS 영상 콘텐츠를 만든다', tip: '→ Runway 또는 Kling AI' },
                { label: '📊 팀과 함께 문서를 협업으로 관리한다', tip: '→ Notion AI' },
                { label: '🤖 반복 업무를 자동화하고 싶다', tip: '→ n8n 또는 Make.com' },
                { label: '💰 무료로 AI를 시작하고 싶다', tip: '→ 무료 AI 추천 페이지 참고' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100">
                  <div className="w-5 h-5 mt-0.5 rounded border-2 border-slate-300 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-slate-800">{item.label}</p>
                    <p className="text-xs text-indigo-600 mt-1 font-semibold">{item.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 예산별 AI 추천 */}
        <section className="mb-16">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">예산별 AI 도구 추천</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-white border-2 border-green-200 rounded-2xl p-6">
              <div className="text-2xl mb-3">🆓</div>
              <h3 className="text-lg font-bold text-green-700 mb-1">무료 시작</h3>
              <p className="text-xs text-slate-500 mb-4">월 $0 — 기본 기능 체험</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ ChatGPT Free (GPT-4o mini)</li>
                <li>✓ Claude Free (3회/5시간)</li>
                <li>✓ Perplexity Free (5회/일)</li>
                <li>✓ Cursor Free (2000 자동완성)</li>
                <li>✓ Copilot (MS 계정 기본 제공)</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-indigo-300 rounded-2xl p-6 shadow-md relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">추천</div>
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-lg font-bold text-indigo-700 mb-1">스마트 조합</h3>
              <p className="text-xs text-slate-500 mb-4">월 $20~40 — 실무 활용</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ ChatGPT Plus ($20)</li>
                <li>✓ Cursor Pro ($20)</li>
                <li className="text-slate-400 text-xs">* 개발자라면 이 조합만으로 충분</li>
                <li className="mt-2">✓ Claude Pro ($20) + Perplexity Pro ($20)</li>
                <li className="text-slate-400 text-xs">* 기획/마케터 추천 조합</li>
              </ul>
            </div>
            <div className="bg-white border-2 border-amber-200 rounded-2xl p-6">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-lg font-bold text-amber-700 mb-1">파워 유저</h3>
              <p className="text-xs text-slate-500 mb-4">월 $50+ — 전문가·창작자</p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>✓ Claude Pro + ChatGPT Plus</li>
                <li>✓ Midjourney ($10+) 추가</li>
                <li>✓ Runway 또는 Kling AI</li>
                <li>✓ Perplexity Pro</li>
                <li className="text-slate-400 text-xs">* 모든 분야 커버</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 관련 페이지 링크 */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">더 자세한 AI 추천 가이드</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { href: '/free-ai-tools', title: '무료 AI 추천 TOP 10', desc: '비용 없이 시작할 수 있는 최고의 무료 AI 모음', color: '#10b981' },
              { href: '/ai-ranking', title: 'AI 도구 순위 TOP 10', desc: '카테고리별 2026 인기 AI 랭킹', color: '#6366f1' },
              { href: '/ai-agents', title: '업무 자동화 AI', desc: '자율적으로 일하는 AI 에이전트 가이드', color: '#0ea5e9' },
              { href: '/creative-ai', title: '이미지·영상 생성 AI', desc: '크리에이터를 위한 AI 도구 비교', color: '#db2777' },
              { href: '/', title: 'AI 추천 테스트', desc: '6문항으로 나에게 딱 맞는 AI 찾기', color: '#7c3aed' },
              { href: '/board', title: 'AI 활용 팁 게시판', desc: '실전 AI 프롬프트와 활용 노하우', color: '#f59e0b' },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="block bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow group">
                <h3 className="font-bold text-slate-900 text-sm mb-1 group-hover:text-indigo-600 transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-slate-500">{link.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center py-8 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100">
          <h2 className="text-xl font-extrabold text-slate-900 mb-3">아직 어떤 AI를 골라야 할지 모르겠다면?</h2>
          <p className="text-slate-600 mb-6 text-sm">6가지 질문에 답하면 내 업무에 맞는 AI 조합을 30초 안에 추천해드립니다.</p>
          <Link href="/"
            className="inline-block bg-indigo-600 text-white font-bold py-3 px-10 rounded-full hover:bg-indigo-700 transition shadow-md">
            AI 추천 테스트 무료로 시작하기
          </Link>
        </div>

      </div>
    </>
  );
}
