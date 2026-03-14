import type { Metadata, Viewport } from 'next'
import { Outfit, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import Header from '@/components/Header'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'AI 추천 | 나에게 맞는 AI 도구 무료 추천 테스트 2026 — ChatGPT·Claude·Cursor',
  description: 'AI 추천 테스트로 ChatGPT, Claude, Cursor, Midjourney 중 내 업무에 딱 맞는 AI를 무료로 찾아보세요. 직장인·개발자·크리에이터 맞춤 AI 추천.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://aicoretool.com'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'AI 추천', 'AI 도구 추천', '나에게 맞는 AI 추천', '무료 AI 추천', 'AI 추천 테스트',
    '직장인 AI 추천', '업무용 AI 추천', 'ChatGPT 추천', 'Claude 추천', 'Cursor 추천',
    '2026 AI 도구 추천', 'AI 추천 사이트', '최고의 AI 추천'
  ],
  openGraph: {
    title: 'AI 추천 | 나에게 맞는 AI 도구 무료 추천 테스트 2026 — ChatGPT·Claude·Cursor',
    description: 'AI 추천 테스트로 ChatGPT, Claude, Cursor, Midjourney 중 내 업무에 딱 맞는 AI를 무료로 찾아보세요. 직장인·개발자·크리에이터 맞춤 AI 추천.',
    url: '/',
    siteName: 'AI 추천 | aicoretool.com',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: 'https://aicoretool.com/thumb.webp',
        width: 1200,
        height: 630,
        alt: '2026 AI 툴 추천 가이드 썸네일',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI 추천 | 나에게 맞는 AI 도구 무료 추천 테스트 2026',
    description: 'AI 추천 테스트로 ChatGPT, Claude, Cursor 중 내 업무에 딱 맞는 AI를 무료로 찾아보세요.',
    images: ['https://aicoretool.com/thumb.webp'],
  },
  authors: [{ name: 'aicoretool.com' }],
  publisher: 'aicoretool.com',
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  verification: {
    other: {
      'naver-site-verification': 'f76e43211cd87d512ec3ef595aca8518c1998d92'
    }
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  other: {
    'google-adsense-account': 'ca-pub-5378247298190063',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: '2026 AI 도구 추천: 내 업무 3초 판독기 | ChatGPT·Claude·Cursor 무료 추천',
    description: 'ChatGPT, Claude, Cursor 중 내 업무에 딱 맞는 AI를 3초 만에 무료로 추천받으세요.',
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'All',
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'ChatGPT와 Claude 중 어떤 AI가 더 나은가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '사용 목적에 따라 다릅니다. ChatGPT는 다양한 작업에 범용적으로 쓰기 좋고, Claude는 긴 문서 분석이나 논리적 글쓰기에 탁월합니다. 본 테스트로 내 업무 패턴에 맞는 AI를 추천받아 보세요.',
        },
      },
      {
        '@type': 'Question',
        name: 'Cursor는 개발자만 쓸 수 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cursor는 코드 편집에 특화된 AI 도구로, 개발자에게 최적화되어 있습니다. 비개발자라면 ChatGPT나 Claude가 더 적합할 수 있습니다.',
        },
      },
      {
        '@type': 'Question',
        name: 'AI 도구 추천 테스트는 무료인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 완전히 무료입니다. 6가지 질문에 답하면 즉시 나에게 맞는 AI 도구 조합을 추천받을 수 있습니다.',
        },
      },
    ],
  };

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
        <Script
          id="faq-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          strategy="beforeInteractive"
        />
        <meta name="naver-site-verification" content="f76e43211cd87d512ec3ef595aca8518c1998d92" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5378247298190063"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${outfit.variable} ${jetbrainsMono.variable}`}>
        <Header />
        <main style={{ minHeight: 'calc(100vh - 4rem)' }}>
          {children}
        </main>
        <footer style={{
          borderTop: '1px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          padding: '2rem 1rem',
          marginTop: '2rem',
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
              <a href="/privacy-policy" style={{ fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}>개인정보 처리방침</a>
              <a href="/terms-of-service" style={{ fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}>이용약관</a>
              <a href="/cookie-policy" style={{ fontSize: '13px', color: '#6b7280', textDecoration: 'none' }}>쿠키 정책</a>
            </nav>
            <p style={{ fontSize: '12px', color: '#9ca3af', margin: 0 }}>
              © 2026 aicoretool.com · 문의: tlsfkaus0711@gmail.com
            </p>
            <p style={{ fontSize: '11px', color: '#d1d5db', marginTop: '4px' }}>
              본 테스트 결과는 참고용이며, 개인 업무 환경에 따라 최적의 AI 도구는 다를 수 있습니다.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
