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
            情報セキュリティ基本方針
          </h1>
          <p className="text-white/60 uppercase tracking-widest" style={{ fontSize: '14px' }}>
            Information Security Policy
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
          当社の情報セキュリティ方針を、以下のように定めます。
        </p>
      </div>
    </section>
  );
}

// Content Section
function ContentSection() {
  const articles = [
    {
      title: "第1条（目的）",
      content: "株式会社オウバース(以下、当社)は、AI 技術を活用したソリューションを提供する企業として、お客様の信頼を損なうことのないよう、事業活動において取り扱うすべての情報資産を適切に保護する責任を有しています。情報の漏えいや改ざん、サービスの停止等によるリスクから情報資産を守り、安心・安全なサービスを提供するため、ここに情報セキュリティ基本方針を定めます。"
    },
    {
      title: "第2条（適用範囲）",
      content: "本方針は、当社が保有・管理するすべての情報資産(顧客情報、AI 学習データ、ソースコード、契約情報等)および、当社の業務に従事するすべての役職員(役員、従業員、業務委託、インターン等)に適用します。"
    },
    {
      title: "第3条（基本方針）",
      content: "",
      list: [
        "情報資産の保護：当社は、情報資産の機密性・完全性・可用性を維持するために、組織的・技術的な管理策を講じ、第三者による不正アクセスや内部不正、災害等の脅威から保護します。",
        "法令・契約等の遵守：個人情報保護法、著作権法、電気通信事業法などの法令および、顧客との契約・業界ガイドラインを遵守します。",
        "教育・訓練の実施：全従業者に対し、情報セキュリティに関する教育・訓練を定期的に実施し、リスクに対する意識向上と責任の自覚を促進します。",
        "インシデント対応：万が一、情報セキュリティに関するインシデント(漏えい・改ざん・紛失等)が発生した場合は、速やかに対応し、被害の最小化と再発防止を図ります。",
        "継続的改善：情報セキュリティ管理体制は、定期的な見直しと外部動向の把握を通じて継続的に改善します。"
      ]
    },
    {
      title: "第4条（情報セキュリティ体制）",
      content: "当社は、情報セキュリティ管理責任者(CISO)を任命し、情報セキュリティに関する施策の策定・運用・監査を行います。経営層が主導し、全社的な取り組みとして体制を構築・維持します。"
    },
    {
      title: "第5条（公表と見直し）",
      content: "本基本方針は社内外に公開し、法令や社会情勢、技術環境の変化等に応じて適宜見直しを行います。"
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
              {article.content && (
                <p className="text-black/70 mb-4" style={{ fontSize: '16px', lineHeight: '1.9' }}>
                  {article.content}
                </p>
              )}
              {article.list && (
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  {article.list.map((item, i) => (
                    <li key={i} className="text-black/70" style={{ fontSize: '16px', lineHeight: '1.9' }}>
                      {item}
                    </li>
                  ))}
                </ol>
              )}
            </article>
          ))}
          
          <div className="pt-8">
            <p className="text-black/70 text-right" style={{ fontSize: '16px', lineHeight: '1.9' }}>
              2025年8月1日制定
            </p>
          </div>
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
export default function SecurityPolicy() {
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