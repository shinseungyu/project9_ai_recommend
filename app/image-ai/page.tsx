import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import aiData from '@/data/ai.json';

export const metadata: Metadata = {
  title: '2026 무료/유료 AI 이미지 파워 비교 - 미드저니, 스테이블 디퓨전, DALL-E 3',
  description: 'Midjourney, FLUX, DALL-E 3 등 최신 이미지 생성 AI 툴들을 한 눈에 비교하세요. 나에게 맞는 무료/유료 AI 그림 사이트를 찾아드립니다.',
  keywords: ['이미지 생성 AI', '그림 그리는 AI', '미드저니', '스테이블 디퓨전', 'AI 그림 사이트', '무료 AI 그림', 'DALL-E 3', '디자인 AI', 'AI 이미지 비교'],
  openGraph: {
    title: '2026 무료/유료 AI 이미지 파워 비교 - 미드저니 등 총정리',
    description: 'Midjourney, FLUX, DALL-E 3 등 이미지 생성 AI 10종 비교표. 나에게 맞는 AI 그림 사이트는?',
  }
};

export default function ImageAIPage() {
  const imageServices = aiData.ai_tools.image_generation.services;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": imageServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": service.name,
        "applicationCategory": "DesignApplication",
        "operatingSystem": "All",
        "description": service.specialty,
        "offers": {
          "@type": "Offer",
          "price": service.price_month.toString().replace(/[^0-9.]/g, '') || "0",
          "priceCurrency": "USD"
        }
      }
    })),
    "name": "2026 이미지 생성 AI 도구 추천 목록",
    "description": "미드저니, 스테이블 디퓨전, DALL-E 3 등 인기 이미지 생성 AI를 전격 비교합니다."
  };

  return (
    <>
      <Script
        id="image-ai-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      
      <div className="max-w-[1000px] mx-auto px-4 py-12">
        <header className="mb-12 text-center">
          <span className="text-sm font-bold text-indigo-500 bg-indigo-50 px-3 py-1 rounded-full mb-4 inline-block">
            Image Generation
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            2026 최고의 <span className="text-indigo-600">이미지 생성 AI</span> 총정리
          </h1>
          <p className="text-lg text-slate-600">
            미드저니부터 무료 스테이블 디퓨전까지 — 내 목적에 맞는 완벽한 AI 그림 사이트를 찾아보세요.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-900">AI 도구 이름</th>
                  <th className="p-4 font-semibold text-slate-900">주요 강점 (Specialty)</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">무료 정책</th>
                  <th className="p-4 font-semibold text-slate-900">월 구독료</th>
                </tr>
              </thead>
              <tbody>
                {imageServices.map((service, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <strong className="text-slate-900 text-[15px]">{service.name}</strong>
                    </td>
                    <td className="p-4 text-slate-600 text-[14px]">
                      {service.specialty}
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        service.free === true ? 'bg-green-100 text-green-700' : 
                        service.free === false ? 'bg-red-50 text-red-600' : 
                        'bg-yellow-50 text-yellow-700'
                      }`}>
                        {service.free === true ? '가능' : service.free === false ? '유료 전용' : service.free}
                      </span>
                    </td>
                    <td className="p-4 text-slate-700 font-medium text-[14px]">
                      {service.price_month}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="text-center">
          <Link href="/" className="inline-block bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition">
            맞춤형 AI 추천 퀴즈 다시하기
          </Link>
        </div>
      </div>
    </>
  );
}
