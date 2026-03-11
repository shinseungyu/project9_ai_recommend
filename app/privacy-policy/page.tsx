import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '개인정보 처리방침 | AI 도구 추천 테스트',
  description: 'AI 도구 추천 테스트 서비스의 개인정보 처리방침입니다.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: false, follow: false },
}

const sectionStyle = { marginBottom: '32px' }
const h2Style = { fontSize: '1.3rem', fontWeight: 'bold' as const, marginBottom: '12px', borderBottom: '2px solid #eee', paddingBottom: '8px' }
const linkStyle = { color: '#4f46e5' }
const tableThStyle = { padding: '10px', textAlign: 'left' as const, border: '1px solid #ddd', backgroundColor: '#f5f5f5', fontWeight: 'bold' as const }
const tableTdStyle = { padding: '10px', border: '1px solid #ddd', verticalAlign: 'top' as const }

export default function PrivacyPolicyPage() {
  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif', color: '#333', lineHeight: '1.8' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '8px' }}>개인정보 처리방침</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>최종 업데이트: 2026년 3월 11일</p>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제1조 (개인정보의 처리 목적)</h2>
        <p>
          <strong>aicoretool.com</strong>(이하 &quot;사이트&quot;)이 운영하는 &quot;AI 도구 추천 테스트&quot; 서비스는
          개인정보보호법 제30조에 따라 정보주체의 개인정보를 다음의 목적으로 처리합니다.
          처리하는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며,
          이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>서비스 운영 및 품질 개선</li>
          <li>방문자 통계 분석 (Google Analytics)</li>
          <li>맞춤형 광고 제공 (Google AdSense)</li>
          <li>서비스 이용 중 발생하는 불편사항 처리</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제2조 (개인정보의 처리 및 보유 기간)</h2>
        <p>
          사이트는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에
          동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
        </p>
        <p style={{ marginTop: '8px' }}>
          본 사이트는 회원가입·로그인 절차가 없으므로 직접적인 개인정보(이름, 이메일 등)를 수집하거나
          저장하지 않습니다. Google Analytics 및 AdSense를 통해 수집된 데이터(접속 로그, 쿠키 등)는
          각 서비스의 정책에 따라 관리됩니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제3조 (처리하는 개인정보의 항목)</h2>
        <p>사이트는 다음과 같은 정보를 자동으로 수집합니다:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>IP 주소, 브라우저 유형·버전, 운영체제 정보</li>
          <li>방문 페이지, 유입 경로, 체류 시간 등 서비스 이용 기록</li>
          <li>쿠키(Cookie) 및 유사 기술을 통해 수집된 데이터</li>
        </ul>
        <p style={{ marginTop: '8px' }}>
          이름, 이메일 주소, 전화번호, 주민등록번호 등 직접 식별 가능한 정보는 수집하지 않습니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제4조 (개인정보의 제3자 제공)</h2>
        <p>
          사이트는 정보주체의 개인정보를 제1조에서 명시한 목적 범위 내에서만 처리하며,
          원칙적으로 제3자에게 제공하지 않습니다. 단, 아래의 경우에는 예외로 합니다:
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>정보주체가 사전에 동의한 경우</li>
          <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
        </ul>
        <p style={{ marginTop: '12px' }}>
          <strong>Google AdSense 광고 게재:</strong> 본 사이트는 Google LLC가 제공하는 광고 서비스를 이용합니다.
          Google은 쿠키를 사용하여 이용자의 이전 방문 기록을 기반으로 관련 광고를 표시합니다.
          Google의 개인정보 사용에 관한 자세한 내용은{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Google 개인정보처리방침</a>을 참고하세요.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제5조 (개인정보 처리의 위탁)</h2>
        <p>사이트는 서비스 운영을 위해 아래와 같이 개인정보 처리를 위탁하고 있습니다:</p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '14px' }}>
          <thead>
            <tr>
              <th style={tableThStyle}>수탁업체</th>
              <th style={tableThStyle}>위탁 업무 내용</th>
              <th style={tableThStyle}>보유 및 이용기간</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tableTdStyle}>Google LLC (Google Analytics)</td>
              <td style={tableTdStyle}>방문자 통계 분석 (접속 로그, 이용 기록 등)</td>
              <td style={tableTdStyle}>위탁 계약 종료 시까지</td>
            </tr>
            <tr style={{ backgroundColor: '#f9f9f9' }}>
              <td style={tableTdStyle}>Google LLC (Google AdSense)</td>
              <td style={tableTdStyle}>맞춤형 광고 제공 및 광고 성과 측정</td>
              <td style={tableTdStyle}>위탁 계약 종료 시까지</td>
            </tr>
            <tr>
              <td style={tableTdStyle}>Vercel Inc.</td>
              <td style={tableTdStyle}>웹 서버 호스팅 및 인프라 운영</td>
              <td style={tableTdStyle}>위탁 계약 종료 시까지</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제6조 (정보주체의 권리·의무 및 행사 방법)</h2>
        <p>정보주체는 사이트에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>개인정보 열람 요구</li>
          <li>오류 등이 있을 경우 정정 요구</li>
          <li>삭제 요구</li>
          <li>처리 정지 요구</li>
        </ul>
        <p style={{ marginTop: '8px' }}>
          위 권리 행사는 아래 이메일로 연락하시면 처리해 드립니다:
          <a href="mailto:tlsfkaus0711@gmail.com" style={{ ...linkStyle, marginLeft: '6px' }}>tlsfkaus0711@gmail.com</a>
        </p>
        <p style={{ marginTop: '8px' }}>
          Google Analytics 데이터 수집 거부:
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, marginLeft: '6px' }}>Google Analytics 옵트아웃 플러그인 설치</a>
        </p>
        <p>
          Google 맞춤형 광고 비활성화:
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ ...linkStyle, marginLeft: '6px' }}>Google 광고 설정</a> 또는{' '}
          <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" style={linkStyle}>aboutads.info</a>
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제7조 (개인정보의 파기)</h2>
        <p>
          사이트는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는
          지체없이 해당 개인정보를 파기합니다.
        </p>
        <p style={{ marginTop: '8px' }}>
          본 사이트는 직접 수집·저장하는 개인정보가 없으므로 별도의 파기 절차가 없습니다.
          Google Analytics·AdSense 데이터의 파기는 각 서비스의 정책에 따릅니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제8조 (개인정보의 안전성 확보 조치)</h2>
        <p>사이트는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 조치를 하고 있습니다:</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>HTTPS 암호화 통신:</strong> 전송 구간 데이터 암호화</li>
          <li><strong>접근 통제:</strong> 개인정보 처리 시스템에 대한 접근 권한 최소화</li>
          <li><strong>보안 인프라:</strong> Vercel(CDN·WAF)을 통한 서버 보안 관리</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제9조 (쿠키 사용 및 아동 보호)</h2>
        <p>
          본 사이트는 서비스 향상 및 광고 제공을 위해 쿠키를 사용합니다.
          이용자는 브라우저 설정으로 쿠키를 거부할 수 있으나, 일부 서비스 이용에 제한이 생길 수 있습니다.
          자세한 내용은 <a href="/cookie-policy" style={linkStyle}>쿠키 정책</a>을 참고하세요.
        </p>
        <p style={{ marginTop: '8px' }}>
          본 서비스는 만 14세 미만 아동을 대상으로 하지 않으며,
          만 14세 미만 아동의 개인정보는 의도적으로 수집하지 않습니다.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={h2Style}>제10조 (개인정보 보호책임자)</h2>
        <p>
          사이트는 개인정보 처리에 관한 업무를 총괄해서 책임지고,
          정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '12px', fontSize: '14px' }}>
          <tbody>
            <tr>
              <td style={{ ...tableTdStyle, backgroundColor: '#f5f5f5', fontWeight: 'bold', width: '30%' }}>성명</td>
              <td style={tableTdStyle}>사이트 운영자</td>
            </tr>
            <tr>
              <td style={{ ...tableTdStyle, backgroundColor: '#f5f5f5', fontWeight: 'bold' }}>연락처</td>
              <td style={tableTdStyle}><a href="mailto:tlsfkaus0711@gmail.com" style={linkStyle}>tlsfkaus0711@gmail.com</a></td>
            </tr>
          </tbody>
        </table>
        <p style={{ marginTop: '12px' }}>
          정보주체께서는 개인정보보호법 제55조의 규정에 의한 권익침해 신고·상담을 위하여
          아래 기관에 문의하실 수 있습니다:
        </p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>개인정보침해신고센터 (한국인터넷진흥원 운영): <a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" style={linkStyle}>privacy.kisa.or.kr</a> / 전화 118</li>
          <li>대검찰청 사이버수사과: <a href="https://www.spo.go.kr" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.spo.go.kr</a> / 전화 02-3480-3573</li>
          <li>경찰청 사이버안전국: <a href="https://cyberbureau.police.go.kr" target="_blank" rel="noopener noreferrer" style={linkStyle}>cyberbureau.police.go.kr</a> / 전화 182</li>
        </ul>
      </section>

      <div style={{ marginTop: '48px', borderTop: '1px solid #eee', paddingTop: '20px', textAlign: 'center' }}>
        <a href="/" style={{ ...linkStyle, marginRight: '16px' }}>홈으로</a>
        <a href="/terms-of-service" style={{ ...linkStyle, marginRight: '16px' }}>이용약관</a>
        <a href="/cookie-policy" style={linkStyle}>쿠키 정책</a>
      </div>
    </main>
  )
}
