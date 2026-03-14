"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import postsData from "@/data/posts.json";
import aiData from "@/data/ai.json";
import QuizApp from "@/components/QuizApp";
import AdBanner from "@/components/AdBanner";

export default function Page() {
  // ai.json 데이터를 기반으로 ItemList 구조화된 데이터 생성
  const generateJsonLd = () => {
    const allServices = [
      ...aiData.ai_tools.image_generation.services.map(s => ({ ...s, category: 'Image Generation' })),
      ...aiData.ai_tools.video_generation.services.map(s => ({ ...s, category: 'Video Generation' })),
      ...aiData.ai_tools.ai_agents.services.map(s => ({ ...s, category: 'AI Agents' }))
    ];

    const itemListElement = allServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": service.name,
        "applicationCategory": "UtilitiesApplication",
        "operatingSystem": "All",
        ...('specialty' in service ? { "description": service.specialty } : { "description": service.use_case }),
        ...('price_month' in service ? {
          "offers": {
            "@type": "Offer",
            "price": service.price_month.toString().replace(/[^0-9.]/g, '') || "0",
            "priceCurrency": "USD"
          }
        } : {})
      }
    }));

    return {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": itemListElement,
      "name": "추천 AI 도구 리스트",
      "description": "ChatGPT, Claude, Cursor 등 직장인과 개발자를 위한 맞춤형 AI 도구 모음"
    };
  };

  const jsonLd = generateJsonLd();

  return (
    <>
      <Script
        id="ai-tools-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      {/* 퀴즈 앱 (클라이언트 컴포넌트) */}
      <QuizApp />

      {/* 광고 배너 영역 (현재 숨김 처리) */}
      <AdBanner dataAdSlot="1234567890" />

      {/* SEO 콘텐츠 섹션 - 구글 크롤러가 읽는 영역 */}
      <div style={{ maxWidth: "1200px" }} className="mx-auto px-4 pb-20">

        {/* 가이드 아티클 */}
        <article style={{ marginTop: "60px", paddingTop: "40px", borderTop: "1px solid hsl(220 15% 90%)" }}>
          <h2 style={{ fontSize: "22px", fontWeight: "800", marginBottom: "16px", color: "hsl(220 25% 10%)" }}>
            AI 추천 — ChatGPT, Claude, Cursor 중 나에게 맞는 AI는?
          </h2>
          <p style={{ fontSize: "15px", lineHeight: "1.8", color: "hsl(220 10% 40%)", marginBottom: "20px" }}>
            <strong>AI 추천</strong> 테스트를 통해 수십 가지 AI 중에서 내 업무에 딱 맞는 도구를 빠르게 찾아보세요. <strong>ChatGPT, Claude, Cursor, Perplexity, Midjourney, Notion AI</strong> 등 대표적인 AI 서비스는 각각 강점이 다르기 때문에, 직업·업무 방식·사용 목적에 따라 최적의 <strong>AI 추천</strong> 결과가 달라집니다. 직장인부터 개발자, 크리에이터까지 — 이 무료 <strong>AI 추천 테스트</strong>로 나만의 AI 조합을 찾아보세요.
          </p>

          <section style={{ marginBottom: "36px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "16px", color: "hsl(220 25% 10%)" }}>
              1. AI 도구별 장점 완전 정리
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px" }}>

              {/* ChatGPT */}
              <div style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "12px", padding: "18px", borderTop: "3px solid #10b981" }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>💬</div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 10px", color: "hsl(220 25% 10%)" }}>ChatGPT <span style={{ fontSize: "12px", fontWeight: "400", color: "#10b981" }}>범용 올라운더</span></h4>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", lineHeight: "1.9", color: "hsl(220 10% 40%)" }}>
                  <li>텍스트·이미지·코드·데이터 분석 모두 가능</li>
                  <li>GPT-4o로 이미지 생성 및 파일 업로드 지원</li>
                  <li>수백만 개의 커스텀 GPT 생태계 활용</li>
                  <li>음성 대화 기능으로 핸즈프리 업무 가능</li>
                  <li>무료 플랜으로도 충분한 기본 기능 제공</li>
                </ul>
              </div>

              {/* Claude */}
              <div style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "12px", padding: "18px", borderTop: "3px solid #f59e0b" }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>🧠</div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 10px", color: "hsl(220 25% 10%)" }}>Claude <span style={{ fontSize: "12px", fontWeight: "400", color: "#f59e0b" }}>깊이 있는 사고</span></h4>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", lineHeight: "1.9", color: "hsl(220 10% 40%)" }}>
                  <li>200K 토큰 컨텍스트로 초장문 문서 분석</li>
                  <li>보고서·논문·계약서 요약 및 분석에 최강</li>
                  <li>사실에 근거한 신중하고 정확한 답변</li>
                  <li>창의적 글쓰기와 카피라이팅 품질 최고 수준</li>
                  <li>AI 안전성 중시로 신뢰할 수 있는 응답</li>
                </ul>
              </div>

              {/* Cursor */}
              <div style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "12px", padding: "18px", borderTop: "3px solid #6366f1" }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>⌨️</div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 10px", color: "hsl(220 25% 10%)" }}>Cursor <span style={{ fontSize: "12px", fontWeight: "400", color: "#6366f1" }}>코딩 생산성 극대화</span></h4>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", lineHeight: "1.9", color: "hsl(220 10% 40%)" }}>
                  <li>AI가 코드베이스 전체를 읽고 맥락 파악</li>
                  <li>Tab 키 하나로 스마트 자동완성</li>
                  <li>버그를 대화로 설명하면 AI가 직접 수정</li>
                  <li>Claude·GPT-4o 등 여러 AI 모델 선택 가능</li>
                  <li>코딩 시간 평균 40% 단축 효과</li>
                </ul>
              </div>

              {/* Perplexity */}
              <div style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "12px", padding: "18px", borderTop: "3px solid #3b82f6" }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>🔍</div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 10px", color: "hsl(220 25% 10%)" }}>Perplexity <span style={{ fontSize: "12px", fontWeight: "400", color: "#3b82f6" }}>AI 검색의 미래</span></h4>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", lineHeight: "1.9", color: "hsl(220 10% 40%)" }}>
                  <li>실시간 웹 검색 + AI 답변 통합 제공</li>
                  <li>모든 답변에 출처(URL) 자동 표시</li>
                  <li>최신 뉴스·논문·데이터 즉시 조회</li>
                  <li>리서치·경쟁사 분석·시장 조사에 최적</li>
                  <li>구글 검색의 강력한 AI 대체제</li>
                </ul>
              </div>

              {/* Midjourney */}
              <div style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "12px", padding: "18px", borderTop: "3px solid #ec4899" }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>🎨</div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 10px", color: "hsl(220 25% 10%)" }}>Midjourney <span style={{ fontSize: "12px", fontWeight: "400", color: "#ec4899" }}>이미지 생성 1위</span></h4>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", lineHeight: "1.9", color: "hsl(220 10% 40%)" }}>
                  <li>텍스트 한 줄로 예술 작품 수준의 이미지 생성</li>
                  <li>광고·썸네일·콘셉트 아트에 바로 활용 가능</li>
                  <li>스타일 세밀하게 조정하는 파라미터 지원</li>
                  <li>상업적 사용 가능한 이미지 라이선스 제공</li>
                  <li>일러스트·사진·3D 등 다양한 스타일 구현</li>
                </ul>
              </div>

              {/* Notion AI */}
              <div style={{ background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "12px", padding: "18px", borderTop: "3px solid #8b5cf6" }}>
                <div style={{ fontSize: "22px", marginBottom: "6px" }}>📝</div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 10px", color: "hsl(220 25% 10%)" }}>Notion AI <span style={{ fontSize: "12px", fontWeight: "400", color: "#8b5cf6" }}>업무 생산성 도구</span></h4>
                <ul style={{ margin: 0, paddingLeft: "16px", fontSize: "13px", lineHeight: "1.9", color: "hsl(220 10% 40%)" }}>
                  <li>Notion 문서를 AI가 즉시 요약·번역·개선</li>
                  <li>회의록 자동 정리 및 액션 아이템 추출</li>
                  <li>팀원 모두가 AI 혜택을 공유하는 협업 도구</li>
                  <li>데이터베이스와 연동한 스마트 콘텐츠 생성</li>
                  <li>별도 앱 없이 작업 흐름 안에서 AI 활용</li>
                </ul>
              </div>

            </div>
          </section>

          <section style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "hsl(220 25% 10%)" }}>
              2. 직업별 AI 추천 조합
            </h3>
            <ul style={{ paddingLeft: "20px", lineHeight: "2", color: "hsl(220 10% 40%)", fontSize: "14px" }}>
              <li><strong>개발자 AI 추천:</strong> Cursor (코드 편집) + ChatGPT (범용 보조) 조합이 가장 강력</li>
              <li><strong>마케터/기획자 AI 추천:</strong> Claude (글쓰기) + Notion AI (문서 관리) + Perplexity (트렌드 리서치)</li>
              <li><strong>디자이너/크리에이터 AI 추천:</strong> Midjourney (이미지) + ChatGPT (카피라이팅)</li>
              <li><strong>연구자/학생 AI 추천:</strong> Perplexity (최신 정보 검색) + Claude (문서 분석 및 요약)</li>
            </ul>
          </section>

          <section style={{ marginBottom: "28px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "700", marginBottom: "12px", color: "hsl(220 25% 10%)" }}>
              3. 무료 AI 추천 — 처음엔 어떤 AI부터 써야 할까?
            </h3>
            <p style={{ fontSize: "14px", lineHeight: "1.8", color: "hsl(220 10% 40%)" }}>
              대부분의 AI 도구는 <strong>무료 플랜</strong>을 제공합니다. ChatGPT Free(GPT-4o mini), Claude Free, Perplexity Free 등으로 먼저 체험해보고, 실제로 자주 활용하게 되면 유료 플랜을 고려하세요. 특히 Cursor는 무료 플랜에서도 월 2,000건의 자동완성을 제공하므로 개발자라면 지금 바로 시작해볼 수 있습니다.
            </p>
          </section>
        </article>

        {/* FAQ 섹션 */}
        <article style={{ marginTop: "40px", paddingTop: "40px", borderTop: "1px solid hsl(220 15% 90%)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "24px", color: "hsl(220 25% 10%)" }}>
            🙋 자주 묻는 질문 (FAQ)
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ background: "hsl(0 0% 100%)", padding: "20px", borderRadius: "12px", border: "1px solid hsl(220 15% 90%)", boxShadow: "0 1px 4px hsl(250 85% 60% / 0.06)" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 8px 0", color: "hsl(220 25% 10%)" }}>
                <span style={{ color: "hsl(250 85% 60%)", marginRight: "8px" }}>Q.</span>
                ChatGPT와 Claude 중 어떤 AI가 더 나은가요?
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "hsl(220 10% 46%)", lineHeight: "1.7" }}>
                <strong>A.</strong> 목적에 따라 다릅니다. <strong>ChatGPT</strong>는 이미지 생성, 코드, 번역 등 다양한 작업에 범용적으로 쓰기 좋습니다. <strong>Claude</strong>는 긴 글 분석, 보고서 작성, 복잡한 논리 추론에서 한 단계 앞섭니다. 위 테스트를 통해 내 업무 패턴에 맞는 AI를 추천받아 보세요.
              </p>
            </div>

            <div style={{ background: "hsl(0 0% 100%)", padding: "20px", borderRadius: "12px", border: "1px solid hsl(220 15% 90%)", boxShadow: "0 1px 4px hsl(250 85% 60% / 0.06)" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 8px 0", color: "hsl(220 25% 10%)" }}>
                <span style={{ color: "hsl(250 85% 60%)", marginRight: "8px" }}>Q.</span>
                Cursor는 개발자가 아니어도 쓸 수 있나요?
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "hsl(220 10% 46%)", lineHeight: "1.7" }}>
                <strong>A.</strong> Cursor는 코드 편집에 특화된 AI 도구로, 코딩 경험이 없다면 진입 장벽이 있습니다. 비개발자라면 ChatGPT나 Claude가 훨씬 친숙하고 다양한 용도로 활용하기 좋습니다.
              </p>
            </div>

            <div style={{ background: "hsl(0 0% 100%)", padding: "20px", borderRadius: "12px", border: "1px solid hsl(220 15% 90%)", boxShadow: "0 1px 4px hsl(250 85% 60% / 0.06)" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 8px 0", color: "hsl(220 25% 10%)" }}>
                <span style={{ color: "hsl(250 85% 60%)", marginRight: "8px" }}>Q.</span>
                AI 도구 추천 테스트는 무료인가요?
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "hsl(220 10% 46%)", lineHeight: "1.7" }}>
                <strong>A.</strong> 네, 완전히 무료입니다. 회원가입이나 로그인 없이 6가지 질문에 답하면 즉시 나에게 맞는 AI 도구 조합을 추천받을 수 있습니다.
              </p>
            </div>

            <div style={{ background: "hsl(0 0% 100%)", padding: "20px", borderRadius: "12px", border: "1px solid hsl(220 15% 90%)", boxShadow: "0 1px 4px hsl(250 85% 60% / 0.06)" }}>
              <h3 style={{ fontSize: "15px", fontWeight: "700", margin: "0 0 8px 0", color: "hsl(220 25% 10%)" }}>
                <span style={{ color: "hsl(250 85% 60%)", marginRight: "8px" }}>Q.</span>
                Perplexity와 ChatGPT의 차이는 무엇인가요?
              </h3>
              <p style={{ margin: 0, fontSize: "14px", color: "hsl(220 10% 46%)", lineHeight: "1.7" }}>
                <strong>A.</strong> <strong>Perplexity</strong>는 실시간 웹 검색 결과를 바탕으로 출처와 함께 답변을 제공합니다. 최신 뉴스, 논문, 데이터가 필요한 리서치에 특화되어 있습니다. <strong>ChatGPT</strong>는 더 창의적이고 대화형 활용에 강점이 있으며, 별도 검색 플러그인으로 최신 정보도 활용할 수 있습니다.
              </p>
            </div>
          </div>
        </article>

        {/* 서브페이지 링크 섹션 */}
        <section style={{ marginTop: "40px", paddingTop: "40px", borderTop: "1px solid hsl(220 15% 90%)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: "800", marginBottom: "8px", color: "hsl(220 25% 10%)" }}>
            AI 도구 추천 심화 가이드
          </h2>
          <p style={{ fontSize: "14px", color: "hsl(220 10% 50%)", marginBottom: "20px" }}>
            목적·예산·직업별로 더 깊이 있는 <strong>AI 추천</strong> 가이드를 확인하세요.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
            {[
              { href: "/ai-tools-guide", icon: "📚", title: "AI 도구 추천 완벽 가이드", desc: "직업·목적·예산별 50+ AI 선택 가이드", color: "#6366f1" },
              { href: "/free-ai-tools", icon: "🆓", title: "무료 AI 추천 TOP 10", desc: "비용 없이 바로 쓸 수 있는 최고의 무료 AI", color: "#10b981" },
              { href: "/ai-ranking", icon: "🏆", title: "AI 순위 TOP 10", desc: "2026 카테고리별 최강 AI 랭킹", color: "#f59e0b" },
              { href: "/ai-agents", icon: "🤖", title: "업무 자동화 AI", desc: "반복 업무를 대신해주는 AI 에이전트", color: "#0ea5e9" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "14px",
                  textDecoration: "none",
                  background: "hsl(0 0% 100%)",
                  padding: "18px",
                  borderRadius: "12px",
                  border: "1px solid hsl(220 15% 90%)",
                  borderTop: `3px solid ${item.color}`,
                  boxShadow: "0 1px 4px hsl(250 85% 60% / 0.04)",
                  transition: "box-shadow 0.2s",
                }}
              >
                <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ margin: "0 0 4px", fontSize: "14px", fontWeight: "800", color: "hsl(220 25% 10%)" }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: "12px", color: "hsl(220 10% 50%)", lineHeight: "1.5" }}>
                    {item.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* 게시판 미리보기 섹션 */}
        <section style={{ marginTop: "40px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <h2 style={{ fontSize: "20px", fontWeight: "800", margin: "0", color: "hsl(220 25% 10%)" }}>
              💡 AI 활용 팁
            </h2>
            <Link href="/board" style={{ fontSize: "14px", color: "hsl(250 85% 60%)", fontWeight: "700", textDecoration: "none" }}>
              전체 보기 →
            </Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {[...postsData]
              .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .slice(0, 3)
              .map((post: any) => (
              <Link 
                key={post.id} 
                href={`/board?id=${post.id}`} 
                style={{
                  display: "block",
                  textDecoration: "none",
                  background: "hsl(0 0% 100%)",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid hsl(220 15% 90%)",
                  boxShadow: "0 1px 4px hsl(250 85% 60% / 0.04)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                  <span style={{ fontSize: "11px", backgroundColor: "hsl(250 85% 95%)", color: "hsl(250 85% 60%)", padding: "4px 10px", borderRadius: "999px", fontWeight: "700" }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: "12px", color: "hsl(220 10% 65%)" }}>{post.date}</span>
                </div>
                <h3 style={{ margin: "0 0 6px 0", fontSize: "16px", fontWeight: "800", color: "hsl(220 25% 10%)" }}>
                  {post.title}
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "hsl(220 10% 46%)", lineHeight: "1.5" }}>
                  {post.summary}
                </p>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
