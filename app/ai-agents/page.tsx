import React from 'react';
import { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import aiData from '@/data/ai.json';

export const metadata: Metadata = {
  title: '업무 90% 자동화! 2026 자율형 AI 에이전트 종류 및 활용법',
  description: 'Devin, 코파일럿(Copilot), n8n, AutoGen 등 혼자서 코딩하고 문서를 작성하는 완전 자율형 AI 에이전트 서비스 리스트와 도입 가이드를 확인하세요.',
  keywords: ['AI 에이전트', '자율 AI', '오토젠', '크루AI', '업무 자동화 AI', 'Devin', '코딩 에이전트', 'Manus AI', 'n8n'],
  openGraph: {
    title: '나 대신 일하는 자율형 AI 에이전트 (2026 도입 가이드)',
    description: '단순 챗봇을 넘어 스스로 생각하고 행동하는 최신 AI 에이전트 리스트 총정리.',
  }
};

export default function AIAgentsPage() {
  const agentServices = aiData.ai_tools.ai_agents.services;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": agentServices.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": service.name,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "description": service.use_case,
        ...(service.price ? {
          "offers": {
            "@type": "Offer",
            "price": service.price.toString().replace(/[^0-9.]/g, '') || "0",
            "priceCurrency": "USD"
          }
        } : {})
      }
    })),
    "name": "2026 필수 AI 에이전트 및 자동화 도구 목록",
    "description": "업무 생산성을 극대화하는 자율형 AI 및 워크플로우 자동화 도구 비교."
  };

  return (
    <>
      <Script
        id="ai-agents-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      
      <div className="max-w-[900px] mx-auto px-4 py-12">
        <header className="mb-12 text-center">
           <span className="text-sm font-bold text-teal-500 bg-teal-50 px-3 py-1 rounded-full mb-4 inline-block">
            AI Agents & Automation
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            사람처럼 스스로 일하는 <br className="hidden md:block"/><span className="text-teal-600">AI 에이전트</span> 총정리
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            단답형 대답만 하는 챗봇 시대는 끝났습니다. 목표만 던져주면 알아서 리서치하고, 코딩하고, 실행하는 자율형 AI 목록입니다.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {agentServices.map((service, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-teal-500 transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 flex justify-between items-start">
                {service.name}
              </h3>
              <p className="text-slate-600 mb-4 h-12">
                {service.use_case}
              </p>
              
              <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">주요 목적</span>
                <span className="text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-md">
                  {service.name.includes("Devin") || service.name.includes("Manus") ? "완전 자율형" :
                   service.name.includes("n8n") || service.name.includes("LangChain") ? "빌더/자동화" :
                   "협업/범용"}
                </span>
              </div>
            </div>
          ))}
        </section>

        <div className="bg-slate-900 text-white p-8 rounded-2xl mb-12 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">💡 AI 에이전트, 어떻게 활용해야 할까?</h2>
          <p className="text-slate-300 mb-6 leading-relaxed">
            AI 에이전트는 일반적인 챗GPT 사용법과 완전히 다릅니다. 프롬프트 창에 하나하나 지시하는 것이 아니라, <strong className="text-white bg-slate-800 px-1 rounded">"웹사이트 코드를 작성하고 서버에 배포한 후 링크를 알려줘"</strong> 라는 거시적인 목표(Goal)를 부여해야 합니다.
          </p>
          <ul className="space-y-3 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-teal-400">✓</span> 
              <span><strong>개발자:</strong> Devin, Cursor 등을 이용해 단순 반복되는 디버깅과 보일러플레이트 작성 위임</span>
            </li>
            <li className="flex items-start gap-2">
               <span className="text-teal-400">✓</span> 
              <span><strong>기획/마케팅:</strong> CrewAI, n8n을 연결해 매일 아침 경쟁사 뉴스를 스크랩하고 슬랙으로 자동 전송</span>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <Link href="/" className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition shadow-sm">
            범용 AI(GPT, Claude) 퀴즈 풀기
          </Link>
        </div>
      </div>
    </>
  );
}
