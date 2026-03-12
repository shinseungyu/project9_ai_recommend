import { redirect } from 'next/navigation';
import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import aiData from '@/data/ai.json';

export const metadata: Metadata = {
  title: '2026 동영상 생성 AI 전격 비교 - Sora, Runway, Kling AI 추천',
  description: '텍스트로 영상 만들기 종결판! Sora, Runway Gen-4, Kling AI 등 최신 동영상 생성 AI의 길이 설정, 오디오 지원 여부, 가격을 비교 분석합니다.',
  keywords: ['동영상 생성 AI', 'AI 비디오 만들기', 'Sora', 'Runway', 'Kling AI', 'AI 영상 제작', '텍스트 영상 변환', '무료 영상 AI', 'AI 동영상 편집'],
  openGraph: {
    title: '2026 텍스트를 영상으로! 동영상 생성 AI 전격 비교',
    description: 'Sora, Runway Gen-4 등 비디오 스펙 상세 비교.',
  }
};

export default function VideoAIPage() {
  redirect('/creative-ai');
  const videoServices = aiData.ai_tools.video_generation.services;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": videoServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": service.name,
        "applicationCategory": "MultimediaApplication",
        "operatingSystem": "All",
        "description": service.specialty,
        "offers": {
          "@type": "Offer",
          "price": service.price_month.toString().replace(/[^0-9.]/g, '') || "0",
          "priceCurrency": "USD"
        }
      }
    })),
    "name": "2026 동영상 생성 AI 도구 추천 목록",
    "description": "Sora, Runway 등 텍스트로 고품질 비디오를 만드는 AI를 상세하게 비교합니다."
  };

  return (
    <>
      <Script
        id="video-ai-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <header className="mb-12 text-center">
           <span className="text-sm font-bold text-rose-500 bg-rose-50 px-3 py-1 rounded-full mb-4 inline-block">
            Video Generation
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            2026 <span className="text-rose-600">동영상 생성 AI</span> 스펙 완벽 비교
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            생성 길이부터 배경음악 자동 탑재 여부까지—내 콘텐츠 기획에 꼭 필요한 최고의 AI 비디오 툴을 선택하세요.
          </p>
        </header>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-900 w-[180px]">비디오 AI</th>
                  <th className="p-4 font-semibold text-slate-900">특화 목적 (Specialty)</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">최대 길이</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">자체 오디오</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">사용 난이도</th>
                  <th className="p-4 font-semibold text-slate-900 text-right pr-6">구독료</th>
                </tr>
              </thead>
              <tbody>
                {videoServices.map((service, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <strong className="text-slate-900 text-[15px]">{service.name}</strong>
                    </td>
                    <td className="p-4 text-slate-600 text-[14px]">
                      {service.specialty}
                    </td>
                    <td className="p-4 text-center font-medium text-slate-700 text-[14px]">
                      {service.max_length}
                    </td>
                    <td className="p-4 text-center text-[13px]">
                      {service.audio ? (
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md font-bold">지원</span>
                      ) : (
                        <span className="text-slate-400">미지원</span>
                      )}
                    </td>
                     <td className="p-4 text-center text-amber-500 text-[14px] tracking-widest">
                      {service.difficulty}
                    </td>
                    <td className="p-4 text-right pr-6 text-slate-700 font-semibold text-[14px]">
                      {service.price_month}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-12">
          <h3 className="text-lg font-bold text-slate-900 mb-3">🎬 비디오 AI 선택 가이드</h3>
           <ul className="text-sm text-slate-600 space-y-2 leading-relaxed">
            <li><strong>초보자/인스타 릴스:</strong> <span className="font-semibold text-slate-900">Pika Labs</span> 나 <strong>Hailuo AI</strong> 처럼 모바일 프렌들리하고 10초 내외의 빠른 클립 제작에 뛰어난 툴이 좋습니다.</li>
            <li><strong>전문가/영화급 퀄리티:</strong> <span className="font-semibold text-slate-900">Runway Gen-4</span> 또는 <strong>Kling AI</strong> 처럼 캐릭터의 일관성을 유지하며 긴 영상을 만들 수 있는 툴을 추천합니다.</li>
           </ul>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-block bg-rose-600 text-white font-bold py-3 px-8 rounded-full hover:bg-rose-700 transition shadow-sm">
            모든 AI 분야 맞춤 테스트하러 가기
          </Link>
        </div>
      </div>
    </>
  );
}
