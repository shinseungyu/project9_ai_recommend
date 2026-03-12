import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026 AI 도구 순위 TOP 10 - ChatGPT·Claude·Midjourney·Sora 랭킹',
  description: '2026년 가장 인기 있는 AI 도구 순위를 카테고리별로 정리했습니다. 대화형 AI, 이미지 생성, 영상 제작, 코딩 AI 순위를 한눈에 확인하세요.',
  keywords: ['AI 도구 순위', 'AI 랭킹', 'ChatGPT 순위', 'Claude 순위', '이미지 AI 순위', '영상 AI 순위', '코딩 AI 순위', '2026 AI 추천'],
  alternates: { canonical: '/ai-ranking' },
  openGraph: {
    title: '2026 AI 도구 순위 TOP 10 — 카테고리별 완벽 정리',
    description: '대화형·이미지·영상·코딩 AI 카테고리별 TOP 랭킹',
  }
};

const rankingData = {
  llm: [
    { rank: 1, name: 'ChatGPT (GPT-4o)', tag: '범용 1위', score: 98, badge: '🥇', color: '#10b981', desc: '가장 넓은 생태계, 멀티모달, 수백만 커스텀 GPT', price: '$20/월 (무료플랜 있음)' },
    { rank: 2, name: 'Claude 3.7 Sonnet', tag: '글쓰기·분석', score: 96, badge: '🥈', color: '#f59e0b', desc: '200K 컨텍스트, 문서 분석·보고서 작성 최강', price: '$20/월 (무료플랜 있음)' },
    { rank: 3, name: 'Gemini 2.5 Pro', tag: '구글 통합', score: 93, badge: '🥉', color: '#3b82f6', desc: '구글 서비스 통합, 코딩 추론 능력 급성장', price: '$19.99/월' },
    { rank: 4, name: 'Grok 3', tag: 'X 실시간', score: 90, badge: '4️⃣', color: '#8b5cf6', desc: 'X(트위터) 실시간 데이터, 검열 없는 응답', price: '$16/월' },
    { rank: 5, name: 'Perplexity AI', tag: '검색 특화', score: 87, badge: '5️⃣', color: '#6366f1', desc: '실시간 웹 검색 + 출처 표시, 리서치 최적', price: '$20/월 (무료플랜 있음)' },
    { rank: 6, name: 'DeepSeek R2', tag: '비용 효율', score: 84, badge: '6️⃣', color: '#0ea5e9', desc: '오픈소스 강자, GPT-4급 성능에 무료 제공', price: '무료 (API 유료)' },
  ],
  image: [
    { rank: 1, name: 'Midjourney V7', tag: '예술성 1위', score: 98, badge: '🥇', color: '#ec4899', desc: '가장 아름다운 이미지 품질, 광고·아트워크 최강', price: '$10+/월' },
    { rank: 2, name: 'FLUX 1.1 Pro', tag: '사실적 사진', score: 95, badge: '🥈', color: '#f97316', desc: '사진 같은 현실감, 제품·인물 이미지에 최적', price: '$20+/월' },
    { rank: 3, name: 'DALL-E 3', tag: '초보자 추천', score: 88, badge: '🥉', color: '#10b981', desc: 'ChatGPT 내 통합, 프롬프트 이해력 최고 수준', price: 'ChatGPT $20+' },
    { rank: 4, name: 'Ideogram 3', tag: '텍스트 포함', score: 85, badge: '4️⃣', color: '#6366f1', desc: '이미지 안에 글자 넣기 특화, 포스터·썸네일', price: '$8+/월' },
    { rank: 5, name: 'Adobe Firefly', tag: '저작권 안전', score: 83, badge: '5️⃣', color: '#f59e0b', desc: '상업적 사용 완전 안전, 어도비 CC 통합', price: 'CC $22.99+' },
    { rank: 6, name: 'Stable Diffusion', tag: '무료 무제한', score: 80, badge: '6️⃣', color: '#64748b', desc: '로컬 설치 무료, 커스터마이징 무한 가능', price: '무료 (로컬)' },
  ],
  video: [
    { rank: 1, name: 'Runway Gen-4', tag: '전문가 1위', score: 97, badge: '🥇', color: '#8b5cf6', desc: '4K 품질, 긴 영상 지원, 영화·광고 제작 수준', price: '$15+/월' },
    { rank: 2, name: 'Kling AI 2.0', tag: '성능·가성비', score: 94, badge: '🥈', color: '#3b82f6', desc: '2분 롱폼 영상, 캐릭터 일관성, 가격 대비 최강', price: '$6.99+/월' },
    { rank: 3, name: 'Veo 3', tag: '오디오 포함', score: 91, badge: '🥉', color: '#10b981', desc: '자체 음악·효과음 자동 생성, 60초 영상 지원', price: '$19.99/월' },
    { rank: 4, name: 'Sora', tag: '물리 시뮬', score: 88, badge: '4️⃣', color: '#f59e0b', desc: '오픈AI의 물리 법칙 이해 기반 자연스러운 영상', price: 'ChatGPT $20+' },
    { rank: 5, name: 'HeyGen', tag: 'AI 아바타', score: 85, badge: '5️⃣', color: '#ec4899', desc: 'AI 아바타 + 립싱크, 마케팅 영상 자동화', price: '$29+/월' },
    { rank: 6, name: 'Pika Labs', tag: '입문자 추천', score: 80, badge: '6️⃣', color: '#f97316', desc: '가장 쉬운 UI, SNS 릴스용 10초 클립 특화', price: '$8+/월' },
  ],
  coding: [
    { rank: 1, name: 'Cursor', tag: '개발자 1위', score: 98, badge: '🥇', color: '#6366f1', desc: '코드베이스 전체 이해, Tab 자동완성, 대화로 버그 수정', price: '$20/월 (무료플랜 있음)' },
    { rank: 2, name: 'GitHub Copilot', tag: '기업 표준', score: 92, badge: '🥈', color: '#64748b', desc: '모든 IDE 지원, 기업 보안 정책 친화적', price: '$10/월' },
    { rank: 3, name: 'Windsurf', tag: '신흥 강자', score: 90, badge: '🥉', color: '#0ea5e9', desc: 'Cursor 대항마, 에이전트 자율 코딩 강화', price: '$15/월' },
    { rank: 4, name: 'Lovable', tag: '빠이브 코딩', score: 87, badge: '4️⃣', color: '#ec4899', desc: '자연어만으로 웹앱 완성, 비개발자도 MVP 제작', price: '$20/월' },
    { rank: 5, name: 'Claude Code', tag: '대규모 코드', score: 85, badge: '5️⃣', color: '#f59e0b', desc: '대규모 코드베이스 리팩토링, 아키텍처 분석 최강', price: 'Claude $20+' },
    { rank: 6, name: 'v0 by Vercel', tag: 'UI 생성', score: 82, badge: '6️⃣', color: '#10b981', desc: '프롬프트로 React UI 즉시 생성, 프론트 특화', price: '$20/월 (무료플랜 있음)' },
  ],
};

const categories = [
  { key: 'llm', label: '대화형 AI', icon: '💬', color: 'emerald' },
  { key: 'image', label: '이미지 생성', icon: '🎨', color: 'pink' },
  { key: 'video', label: '영상 제작', icon: '🎬', color: 'purple' },
  { key: 'coding', label: '코딩 AI', icon: '⌨️', color: 'indigo' },
];

export default function AIRankingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "2026 AI 도구 순위",
    "description": "대화형 AI, 이미지·영상 생성, 코딩 AI 카테고리별 TOP 랭킹",
    "itemListElement": rankingData.llm.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
    }))
  };

  return (
    <>
      <Script
        id="ai-ranking-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />

      <div className="max-w-[1100px] mx-auto px-4 py-12">
        {/* 헤더 */}
        <header className="mb-12 text-center">
          <span className="text-sm font-bold text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full mb-4 inline-block">
            2026 AI Rankings
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            2026 <span className="text-yellow-500">AI 도구 순위</span> TOP 랭킹
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            대화형·이미지·영상·코딩 — 카테고리별 최고의 AI 도구를 순위로 한눈에 확인하세요.
          </p>
        </header>

        {/* 카테고리별 순위 */}
        {categories.map((cat) => {
          const items = rankingData[cat.key as keyof typeof rankingData];
          return (
            <section key={cat.key} className="mb-14">
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h2 className="text-xl font-extrabold text-slate-900">{cat.label} AI 순위</h2>
                <span className="text-xs font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">TOP {items.length}</span>
              </div>

              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.rank}
                    className={`bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4 hover:shadow-md transition-shadow ${
                      item.rank === 1 ? 'border-yellow-300 bg-yellow-50/30' : ''
                    }`}
                  >
                    {/* 순위 배지 */}
                    <div className="text-2xl w-10 text-center flex-shrink-0">{item.badge}</div>

                    {/* 점수 바 */}
                    <div className="hidden sm:flex flex-col items-center gap-1 flex-shrink-0 w-14">
                      <span className="text-xs font-bold text-slate-500">점수</span>
                      <span className="text-lg font-extrabold" style={{ color: item.color }}>{item.score}</span>
                    </div>

                    {/* 정보 */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <strong className="text-slate-900 text-[15px]">{item.name}</strong>
                        <span
                          className="text-xs font-bold px-2 py-0.5 rounded-full text-white flex-shrink-0"
                          style={{ backgroundColor: item.color }}
                        >
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                    </div>

                    {/* 가격 */}
                    <div className="hidden md:block text-right flex-shrink-0">
                      <span className="text-xs text-slate-400 block">가격</span>
                      <span className="text-sm font-semibold text-slate-700">{item.price}</span>
                    </div>

                    {/* 점수 바 (모바일) */}
                    <div className="flex sm:hidden flex-col items-end gap-0.5 flex-shrink-0">
                      <span className="text-xs text-slate-400">점수</span>
                      <span className="text-base font-extrabold" style={{ color: item.color }}>{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* 하단 CTA */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 text-center border border-indigo-100">
          <h2 className="text-xl font-extrabold text-slate-900 mb-2">나에게 맞는 AI는 따로 있다</h2>
          <p className="text-slate-500 mb-5 text-sm">순위가 전부가 아닙니다. 6가지 질문으로 내 업무·스타일에 딱 맞는 AI를 찾아보세요.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition shadow-sm">
              AI 맞춤 추천 테스트
            </Link>
            <Link href="/creative-ai" className="inline-block bg-white text-indigo-600 border-2 border-indigo-200 font-bold py-3 px-8 rounded-full hover:bg-indigo-50 transition">
              이미지·영상 AI 비교 →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
