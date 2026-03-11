import { Helmet } from "react-helmet-async";

const SEOHead = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "내 업무에 딱 맞는 AI 툴 찾기",
    description:
      "8개의 간단한 질문으로 내 업무 스타일에 최적화된 AI 도구를 추천받으세요. ChatGPT, Claude, Cursor, Midjourney, Perplexity, Notion AI 중 나에게 맞는 조합을 찾아드립니다.",
    url: "https://ai-tool-finder.lovable.app",
    applicationCategory: "Productivity",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "KRW",
    },
    inLanguage: "ko",
    author: {
      "@type": "Organization",
      name: "AI Tool Finder",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "나에게 맞는 AI 툴은 어떻게 찾나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "8개의 간단한 질문에 답하면 업무 스타일, 예산, 작업 환경 등을 분석하여 최적의 AI 도구 조합을 추천해드립니다.",
        },
      },
      {
        "@type": "Question",
        name: "추천받을 수 있는 AI 툴은 어떤 것이 있나요?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ChatGPT, Claude, Cursor, Midjourney, Perplexity, Notion AI 등 6가지 주요 AI 도구 중에서 추천해드립니다.",
        },
      },
    ],
  };

  return (
    <Helmet>
      <title>내 업무에 딱 맞는 AI 툴 찾기 | 무료 AI 추천 테스트</title>
      <meta
        name="description"
        content="8개의 간단한 질문으로 내 업무에 딱 맞는 AI 툴을 찾아보세요. ChatGPT, Claude, Cursor, Midjourney, Perplexity, Notion AI 중 최적의 조합을 추천합니다."
      />
      <meta
        name="keywords"
        content="AI 툴 추천, AI 도구 비교, ChatGPT, Claude, Cursor, Midjourney, Perplexity, Notion AI, 업무 자동화, AI 생산성"
      />
      <link rel="canonical" href="https://ai-tool-finder.lovable.app" />

      <meta property="og:title" content="내 업무에 딱 맞는 AI 툴 찾기" />
      <meta
        property="og:description"
        content="8개 질문으로 나에게 맞는 AI 도구 조합을 추천받으세요"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ai-tool-finder.lovable.app" />
      <meta property="og:locale" content="ko_KR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="내 업무에 딱 맞는 AI 툴 찾기" />
      <meta
        name="twitter:description"
        content="8개 질문으로 나에게 맞는 AI 도구 조합을 추천받으세요"
      />

      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
    </Helmet>
  );
};

export default SEOHead;
