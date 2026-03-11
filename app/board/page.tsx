import posts from '@/data/posts.json'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI 활용 팁 게시판 | AI 도구 추천 테스트',
  description: '직장인, 개발자를 위한 ChatGPT, Claude, Cursor 등 AI 도구 200% 활용 팁을 모아둔 게시판입니다.',
  alternates: { canonical: '/board' },
}

interface Post {
  id: number
  title: string
  date: string
  category: string
  summary: string
  content: string
  tags: string[]
}

interface Props {
  searchParams: Promise<{ id?: string }>
}

export default async function BoardPage({ searchParams }: Props) {
  const { id } = await searchParams
  const allPosts: Post[] = posts as Post[]

  if (id) {
    const post = allPosts.find((p) => p.id === Number(id))

    if (!post) {
      return (
        <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif" }}>
          <p style={{ color: "hsl(220 10% 46%)" }}>게시글을 찾을 수 없습니다.</p>
          <Link href="/board" style={{ color: "hsl(250 85% 60%)", fontSize: "14px", textDecoration: "none" }}>← 목록으로</Link>
        </main>
      )
    }

    return (
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px", fontFamily: "sans-serif", color: "hsl(220 25% 10%)" }}>
        <Link href="/board" style={{ fontSize: "14px", color: "hsl(250 85% 60%)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "4px", marginBottom: "24px", fontWeight: "600" }}>
          ← 목록으로 돌아가기
        </Link>

        <article style={{ background: "hsl(0 0% 100%)", padding: "32px", borderRadius: "16px", border: "1px solid hsl(220 15% 90%)", boxShadow: "0 4px 6px hsl(250 85% 60% / 0.04)" }}>
          <div style={{ marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", backgroundColor: "hsl(250 85% 95%)", color: "hsl(250 85% 60%)", padding: "4px 12px", borderRadius: "999px", fontWeight: "700" }}>
              {post.category}
            </span>
          </div>
          <h1 style={{ fontSize: "1.8rem", fontWeight: "800", lineHeight: "1.4", margin: "0 0 16px 0", letterSpacing: "-0.5px" }}>
            {post.title}
          </h1>
          <div style={{ display: "flex", gap: "16px", fontSize: "13px", color: "hsl(220 10% 55%)", marginBottom: "32px", borderBottom: "1px solid hsl(220 15% 90%)", paddingBottom: "20px" }}>
            <span>📅 {post.date}</span>
            <span>🏷️ {post.tags.join(', ')}</span>
          </div>

          <div style={{ lineHeight: "1.9", fontSize: "15px", color: "hsl(220 15% 30%)" }}>
            {post.content.split('\n').map((line, i) => (
              line.trim() === ''
                ? <br key={i} />
                : <p key={i} style={{ margin: "0 0 12px 0" }}>{line}</p>
            ))}
          </div>
        </article>

        <section style={{ marginTop: "48px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "800", marginBottom: "20px", color: "hsl(220 25% 10%)" }}>다른 글 추천</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {allPosts.filter(p => p.id !== post.id).map(p => (
              <Link key={p.id} href={`/board?id=${p.id}`} style={{ textDecoration: "none", padding: "20px", background: "hsl(0 0% 100%)", borderRadius: "12px", border: "1px solid hsl(220 15% 90%)", display: "block", transition: "transform 0.2s" }}>
                <span style={{ fontSize: "12px", color: "hsl(250 85% 60%)", fontWeight: "700" }}>{p.category}</span>
                <p style={{ margin: "6px 0 0 0", fontSize: "15px", color: "hsl(220 25% 10%)", fontWeight: "700" }}>{p.title}</p>
              </Link>
            ))}
          </div>
        </section>
        
      </main>
    )
  }

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "60px 20px", fontFamily: "sans-serif" }}>
      <Link href="/" style={{ fontSize: "14px", color: "hsl(250 85% 60%)", textDecoration: "none", marginBottom: "32px", display: "inline-block", fontWeight: "600" }}>
        ← 테스트 홈으로
      </Link>

      <div style={{ textAlign: "center", marginBottom: "48px" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: "800", margin: "0 0 12px 0", color: "hsl(220 25% 10%)", letterSpacing: "-1px" }}>AI 활용 팁 게시판</h1>
        <p style={{ color: "hsl(220 10% 46%)", fontSize: "15px", margin: "0", lineHeight: "1.6" }}>
          직장인, 마케터, 개발자를 위한 실전 AI 도구 활용법과<br />
          프롬프트 꿀팁을 정리했습니다.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {allPosts.map((post) => (
          <Link key={post.id} href={`/board?id=${post.id}`} style={{ textDecoration: "none", display: "block", padding: "28px", background: "hsl(0 0% 100%)", border: "1px solid hsl(220 15% 90%)", borderRadius: "16px", boxShadow: "0 2px 8px hsl(250 85% 60% / 0.05)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
              <span style={{ fontSize: "12px", backgroundColor: "hsl(250 85% 95%)", color: "hsl(250 85% 60%)", padding: "4px 12px", borderRadius: "999px", fontWeight: "700" }}>
                {post.category}
              </span>
              <span style={{ fontSize: "13px", color: "hsl(220 10% 65%)" }}>{post.date}</span>
            </div>
            <h2 style={{ margin: "0 0 10px 0", fontSize: "18px", fontWeight: "800", color: "hsl(220 25% 10%)" }}>{post.title}</h2>
            <p style={{ margin: "0 0 16px 0", fontSize: "15px", color: "hsl(220 10% 46%)", lineHeight: "1.6" }}>{post.summary}</p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {post.tags.map(tag => (
                <span key={tag} style={{ fontSize: "12px", color: "hsl(220 10% 46%)", background: "hsl(220 15% 96%)", padding: "4px 10px", borderRadius: "6px", fontWeight: "500" }}>#{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>

    </main>
  )
}
