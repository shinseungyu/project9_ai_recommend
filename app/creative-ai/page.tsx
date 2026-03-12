import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import aiData from '@/data/ai.json';
import CreativeAITabs from '@/components/CreativeAITabs';

export const metadata: Metadata = {
  title: '2026 AI 이미지·영상 생성 도구 비교 - 미드저니, Sora, Runway 총정리',
  description: '이미지 생성 AI(Midjourney, DALL-E 3, FLUX)와 영상 제작 AI(Sora, Runway, Kling AI)를 한 페이지에서 비교하세요. 목적에 맞는 AI 크리에이티브 툴을 찾아드립니다.',
  keywords: ['이미지 생성 AI', '영상 제작 AI', 'AI 그림', 'AI 동영상', '미드저니', 'Sora', 'Runway', 'DALL-E 3', 'Kling AI', 'AI 크리에이티브'],
  alternates: { canonical: '/creative-ai' },
  openGraph: {
    title: '2026 AI 이미지·영상 생성 도구 비교 총정리',
    description: '이미지·영상 생성 AI를 한 곳에서 비교 — 미드저니부터 Sora까지.',
  }
};

export default function CreativeAIPage() {
  const imageServices = aiData.ai_tools.image_generation.services;
  const videoServices = aiData.ai_tools.video_generation.services;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "2026 AI 이미지·영상 생성 도구 비교",
    "description": "이미지 생성 AI와 동영상 생성 AI를 한 곳에서 비교합니다.",
    "itemListElement": [
      ...imageServices.map((s, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": s.name,
          "applicationCategory": "DesignApplication",
          "description": s.specialty,
        }
      })),
      ...videoServices.map((s, i) => ({
        "@type": "ListItem",
        "position": imageServices.length + i + 1,
        "item": {
          "@type": "SoftwareApplication",
          "name": s.name,
          "applicationCategory": "MultimediaApplication",
          "description": s.specialty,
        }
      }))
    ]
  };

  return (
    <>
      <Script
        id="creative-ai-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />

      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <header className="mb-10 text-center">
          <span className="text-sm font-bold text-purple-500 bg-purple-50 px-3 py-1 rounded-full mb-4 inline-block">
            Creative AI
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            2026 <span className="text-purple-600">AI 이미지·영상</span> 생성 도구 총비교
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            그림 그리는 AI부터 텍스트로 영상 만드는 AI까지 — 목적에 딱 맞는 크리에이티브 AI를 찾아보세요.
          </p>
        </header>

        <CreativeAITabs
          imageServices={imageServices}
          videoServices={videoServices}
        />

        <div className="mt-12 text-center flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-block bg-purple-600 text-white font-bold py-3 px-8 rounded-full hover:bg-purple-700 transition shadow-sm">
            AI 맞춤 추천 테스트하기
          </Link>
          <Link href="/ai-ranking" className="inline-block bg-white text-purple-600 border-2 border-purple-300 font-bold py-3 px-8 rounded-full hover:bg-purple-50 transition">
            AI 도구 순위 보기 →
          </Link>
        </div>
      </div>
    </>
  );
}
