"use client";

import React, { useState } from 'react';

interface ImageService {
  name: string;
  specialty: string;
  free: boolean | string;
  price_month: string;
}

interface VideoService {
  name: string;
  specialty: string;
  max_length: string;
  audio: boolean;
  free: boolean | string;
  price_month: string;
  difficulty: string;
}

interface Props {
  imageServices: ImageService[];
  videoServices: VideoService[];
}

export default function CreativeAITabs({ imageServices, videoServices }: Props) {
  const [activeTab, setActiveTab] = useState<'image' | 'video'>('image');

  return (
    <div>
      {/* 탭 버튼 */}
      <div className="flex gap-2 mb-6 bg-slate-100 p-1 rounded-xl w-fit mx-auto">
        <button
          onClick={() => setActiveTab('image')}
          className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'image'
              ? 'bg-white text-indigo-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          🎨 이미지 생성 AI
        </button>
        <button
          onClick={() => setActiveTab('video')}
          className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition-all ${
            activeTab === 'video'
              ? 'bg-white text-rose-600 shadow-sm'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          🎬 영상 제작 AI
        </button>
      </div>

      {/* 이미지 탭 */}
      {activeTab === 'image' && (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-indigo-50">
            <h2 className="font-bold text-indigo-700 text-[15px]">이미지 생성 AI 비교 ({imageServices.length}종)</h2>
            <p className="text-xs text-indigo-500 mt-0.5">미드저니, FLUX, DALL-E 3 등 인기 이미지 AI를 한눈에 비교</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-900">AI 도구</th>
                  <th className="p-4 font-semibold text-slate-900">주요 강점</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">무료 사용</th>
                  <th className="p-4 font-semibold text-slate-900">월 구독료</th>
                </tr>
              </thead>
              <tbody>
                {imageServices.map((s, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <strong className="text-slate-900 text-[15px]">{s.name}</strong>
                    </td>
                    <td className="p-4 text-slate-600 text-[14px]">{s.specialty}</td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        s.free === true ? 'bg-green-100 text-green-700' :
                        s.free === false ? 'bg-red-50 text-red-600' :
                        'bg-yellow-50 text-yellow-700'
                      }`}>
                        {s.free === true ? '가능' : s.free === false ? '유료 전용' : String(s.free)}
                      </span>
                    </td>
                    <td className="p-4 text-slate-700 font-medium text-[14px]">{s.price_month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 영상 탭 */}
      {activeTab === 'video' && (
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-100 bg-rose-50">
            <h2 className="font-bold text-rose-700 text-[15px]">영상 제작 AI 비교 ({videoServices.length}종)</h2>
            <p className="text-xs text-rose-500 mt-0.5">Sora, Runway, Kling AI 등 텍스트→영상 AI 스펙 완벽 비교</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="p-4 font-semibold text-slate-900">비디오 AI</th>
                  <th className="p-4 font-semibold text-slate-900">특화 목적</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">최대 길이</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">자체 오디오</th>
                  <th className="p-4 font-semibold text-slate-900 text-center">난이도</th>
                  <th className="p-4 font-semibold text-slate-900 text-right pr-6">구독료</th>
                </tr>
              </thead>
              <tbody>
                {videoServices.map((s, idx) => (
                  <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <td className="p-4">
                      <strong className="text-slate-900 text-[15px]">{s.name}</strong>
                    </td>
                    <td className="p-4 text-slate-600 text-[14px]">{s.specialty}</td>
                    <td className="p-4 text-center font-medium text-slate-700 text-[14px]">{s.max_length}</td>
                    <td className="p-4 text-center text-[13px]">
                      {s.audio ? (
                        <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md font-bold">지원</span>
                      ) : (
                        <span className="text-slate-400">미지원</span>
                      )}
                    </td>
                    <td className="p-4 text-center text-amber-500 text-[14px] tracking-widest">{s.difficulty}</td>
                    <td className="p-4 text-right pr-6 text-slate-700 font-semibold text-[14px]">{s.price_month}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-slate-50 p-5 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-800 mb-2">영상 AI 선택 가이드</h3>
            <ul className="text-xs text-slate-500 space-y-1.5">
              <li><strong className="text-slate-700">초보자·SNS 릴스:</strong> Pika Labs, Hailuo AI — 모바일 친화적, 빠른 10초 클립</li>
              <li><strong className="text-slate-700">전문가·영화급:</strong> Runway Gen-4, Kling AI — 캐릭터 일관성, 긴 영상 지원</li>
              <li><strong className="text-slate-700">오디오 포함 영상:</strong> Veo 3, HeyGen — 자체 음악·립싱크 지원</li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
}
