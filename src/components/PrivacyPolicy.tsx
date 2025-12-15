import { FadeInImage } from "./FadeInImage";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoYouverse from "figma:asset/d202f2e6de05ab262a1f2a6ebc582dfd2ba34e75.png";
import imgFooterBefore from "figma:asset/6af1b2331ebbf9abae94f57e364847f22ffb19ea.png";

// Header Component
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="flex items-center gap-2 md:gap-3">
          <FadeInImage src={logoYouverse} alt="Youverse" className="h-8 md:h-10 w-auto" />
          <span className="font-['Orbitron',sans-serif] font-bold text-white tracking-wide text-sm md:text-base lg:text-lg">
            株式会社オウバース
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#" onClick={(e) => { e.preventDefault(); window.location.hash = ''; }} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            ホームに戻る
          </a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col items-center gap-4 py-6">
            <a href="#" onClick={(e) => { e.preventDefault(); setIsOpen(false); window.location.hash = ''; }} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              ホームに戻る
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// Page Header
function PageHeader() {
  return (
    <section className="bg-black pt-32 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#42ea95]/20 to-transparent" />
      </div>
      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        <div className="text-center">
          <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4" style={{ fontSize: '48px', letterSpacing: '-1px' }}>
            プライバシーポリシー
          </h1>
          <p className="text-white/60 uppercase tracking-widest" style={{ fontSize: '14px' }}>
            Privacy Policy
          </p>
        </div>
      </div>
    </section>
  );
}

// Introduction Section
function Introduction() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[900px] mx-auto px-8">
        <p className="text-black/70" style={{ fontSize: '16px', lineHeight: '1.9' }}>
          株式会社オウバース（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
        </p>
      </div>
    </section>
  );
}

// Content Section
function ContentSection() {
  const articles = [
    {
      title: "第1条（個人情報）",
      content: "「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。"
    },
    {
      title: "第2条（個人情報の収集方法）",
      content: "当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。"
    },
    {
      title: "第3条（個人情報を収集・利用する目的）",
      content: "当社が個人情報を収集・利用する目的は、以下のとおりです。",
      list: [
        "当社サービスの提供・運営のため",
        "ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）",
        "ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため",
        "メンテナンス、重要なお知らせなど必要に応じたご連絡のため",
        "上記の利用目的に付随する目的"
      ]
    },
    {
      title: "第4条（利用目的の変更）",
      content: "当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。"
    },
    {
      title: "第5条（個人情報の第三者提供）",
      content: "当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。"
    },
    {
      title: "第6条（お問い合わせ窓口）",
      content: "本ポリシーに関するお問い合わせは、以下のリンクよりお願いいたします。",
      hasContactForm: true
    }
  ];

  return (
    <section className="bg-white py-16 pb-24">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="space-y-12">
          {articles.map((article, index) => (
            <article key={index} className="border-l-4 border-[#42ea95] pl-6">
              <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-black mb-4" style={{ fontSize: '24px', letterSpacing: '-0.5px' }}>
                {article.title}
              </h2>
              <p className="text-black/70 mb-4" style={{ fontSize: '16px', lineHeight: '1.9' }}>
                {article.content}
              </p>
              {article.list && (
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  {article.list.map((item, i) => (
                    <li key={i} className="text-black/70" style={{ fontSize: '16px', lineHeight: '1.9' }}>
                      {item}
                    </li>
                  ))}
                </ol>
              )}
              {article.hasContactForm && (
                <div className="mt-6">
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSd3erCzkZg-d_FV6pXtqb8GDgDkOXLpLDdgyhUsOMhF84tvQA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#42ea95] text-black px-6 py-3 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
                  >
                    お問い合わせフォーム
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer id="contact" className="bg-black py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <FadeInImage 
          src={imgFooterBefore} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:items-start lg:justify-between gap-6 md:gap-3 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:flex-shrink-0 lg:max-w-[240px]">
            <div className="flex items-center gap-2 mb-3">
              <FadeInImage src={logoYouverse} alt="Youverse" className="h-7 w-auto" />
              <span className="font-['Orbitron',sans-serif] font-bold text-white text-xs">
                株式会社オウバース
              </span>
            </div>
            <p className="text-white/60 text-xs" style={{ lineHeight: '1.5' }}>
              地域ビジネスの課題をITの力で解決し、持続可能な成長を実現する。
            </p>
          </div>

          <div className="lg:flex-shrink-0">
            <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-2 tracking-wider text-xs">
              Top
            </h4>
            <ul className="space-y-1">
              <li>
                <a 
                  href="#top" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.location.hash = ''; 
                  }} 
                  className="text-white/60 hover:text-white transition-colors text-xs"
                >
                  トップページ
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:flex-shrink-0">
            <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-2 tracking-wider text-xs">
              About
            </h4>
            <ul className="space-y-1">
              {['私たちについて'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#about" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      window.location.hash = ''; 
                      setTimeout(() => {
                        window.location.hash = 'about';
                      }, 100);
                    }} 
                    className="text-white/60 hover:text-white transition-colors text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:flex-shrink-0">
            <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-2 tracking-wider text-xs">
              Service
            </h4>
            <ul className="space-y-1">
              {['AI・データ活用', '業務自動化・効率化支援', 'DX戦略コンサル'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#service" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      window.location.hash = ''; 
                      setTimeout(() => {
                        window.location.hash = 'service';
                      }, 100);
                    }} 
                    className="text-white/60 hover:text-white transition-colors text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:flex-shrink-0">
            <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-2 tracking-wider text-xs">
              Works
            </h4>
            <ul className="space-y-1">
              {['事例紹介', '実績一覧'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#works" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      window.location.hash = ''; 
                      setTimeout(() => {
                        window.location.hash = 'works';
                      }, 100);
                    }} 
                    className="text-white/60 hover:text-white transition-colors text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:flex-shrink-0">
            <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-2 tracking-wider text-xs">
              Company
            </h4>
            <ul className="space-y-1">
              {['会社概要', '企業理念'].map((item, i) => (
                <li key={i}>
                  <a 
                    href="#company" 
                    onClick={(e) => { 
                      e.preventDefault(); 
                      window.location.hash = ''; 
                      setTimeout(() => {
                        window.location.hash = 'company';
                      }, 100);
                    }} 
                    className="text-white/60 hover:text-white transition-colors text-xs"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:flex-shrink-0">
            <h4 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-2 tracking-wider text-xs">
              Contact
            </h4>
            <ul className="space-y-1">
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    window.location.hash = ''; 
                    setTimeout(() => {
                      window.location.hash = 'contact';
                    }, 100);
                  }} 
                  className="text-white/60 hover:text-white transition-colors text-xs"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); window.location.hash = 'privacy'; }} className="text-white/40 hover:text-white transition-colors text-sm">
                プライバシーポリシー
              </a>
              <a href="#security" onClick={(e) => { e.preventDefault(); window.location.hash = 'security'; }} className="text-white/40 hover:text-white transition-colors text-sm">
                セキュリティポリシー
              </a>
            </div>
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2025 株式会社オウバース. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Component
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <PageHeader />
        <Introduction />
        <ContentSection />
        <Footer />
      </main>
    </div>
  );
}