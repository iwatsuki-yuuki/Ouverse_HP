import { FadeInImage } from "./FadeInImage";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoYouverse from "figma:asset/d202f2e6de05ab262a1f2a6ebc582dfd2ba34e75.png";
import founderImage from "figma:asset/7f8b555ba34598f5984fe1ba541c469894e07041.png";

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
          {['Top', 'About', 'Service', 'Works', 'Company', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              onClick={(e) => { 
                e.preventDefault(); 
                window.location.hash = ''; 
                setTimeout(() => {
                  window.location.hash = item.toLowerCase();
                }, 100);
              }}
              className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]"
            >
              {item}
            </a>
          ))}
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
            {['Top', 'About', 'Service', 'Works', 'Company', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { 
                  e.preventDefault();
                  setIsOpen(false);
                  window.location.hash = ''; 
                  setTimeout(() => {
                    window.location.hash = item.toLowerCase();
                  }, 100);
                }}
                className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

// Founder's Message Section
function FoundersMessageSection() {
  return (
    <section className="bg-black pt-24 md:pt-32 pb-12 md:pb-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 md:mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px', lineHeight: '1.2' }}>
            ABOUT US
          </h1>
          <p className="text-white/70 text-base md:text-lg" style={{ lineHeight: '1.7' }}>
            私たちの原点と、描く未来
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative">
            <FadeInImage 
              src={founderImage}
              alt="代表取締役 岩月 優樹"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
          </div>
          
          <div>
            <div className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold mb-2 tracking-wider text-xs">
              FOUNDER'S MESSAGE
            </div>
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-xl md:text-2xl lg:text-3xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
              なぜ、学生の私が<br />『和歌山』で起業したのか
            </h2>
            <div className="space-y-3 md:space-y-4 text-white/70 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
              <p>
                「なぜ都会じゃないの？」とよく聞かれます。 確かに、最先端の技術を学ぶだけなら、都会の方が便利かもしれません。しかし、私が本当に解決したかった課題は、ピカピカのオフィスビルではなく、地方で汗を流して働く「現場」にありました。
              </p>
              <p>
                私は大学でAIについて学ぶ中で、ひとつの確信を得ました。 「テクノロジーは、困っている人のそばにあってこそ輝く」。 素晴らしい技術があっても、それが現場で使われなければ意味がない。地方には、世界に誇れる技術や産業があるのに、デジタルの遅れだけで損をしている。このもったいない現状を、無限の可能性に変えたい。それが、私の原点です。
              </p>
              <p>
                株式会社オウバースは、単なるシステム会社ではありません。 ここ和歌山・橋本から、地方ビジネスの常識を覆す。 「若さ」と「技術」という武器で、泥臭く、熱く、貴社の挑戦を支えることをお約束します。
              </p>
              <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
                <p className="text-white font-['Space_Grotesk',sans-serif] mb-3 md:mb-4 text-xs md:text-sm">
                  株式会社オウバース 代表取締役<br />
                  <span className="text-white font-bold text-base md:text-lg">岩月 優樹</span>
                </p>
                <p className="text-white/70 text-xs md:text-sm" style={{ lineHeight: '1.8' }}>
                  大阪大学在籍。 大学での研究と並行し、戦略コンサルティング、アセットマネジメント、システム開発など、多岐にわたる業界で長期インターンに従事。 ビジネスの「上流（戦略・ファイナンス）」と、テクノロジーの「実装（開発）」の両面を現場で叩き上げた経験を持つ。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// MVV Section
function MVVSection() {
  return (
    <section className="bg-[#1a1a1a] py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, #42ea95 1px, transparent 1px), linear-gradient(0deg, #42ea95 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 md:mb-4 text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
            MVV
          </h2>
          <p className="text-white/70 text-sm md:text-base" style={{ lineHeight: '1.7' }}>
            私たちの使命・目指す姿・提供する価値
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* MISSION */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#42ea95]/50 transition-all">
            <div className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold mb-3 md:mb-4 tracking-wider text-xs">
              MISSION
            </div>
            <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
              テクノロジーの体温で、地域ビジネスを沸騰させる。
            </h3>
            <p className="text-white/70 text-xs md:text-sm lg:text-base" style={{ lineHeight: '1.8' }}>
              冷たい効率化ではなく、働く人の情熱に火をつけるDXを。デジタルの力で地方企業のポテンシャルを最大化し、持続可能な成長基盤を構築します。
            </p>
          </div>

          {/* VISION */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#42ea95]/50 transition-all">
            <div className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold mb-3 md:mb-4 tracking-wider text-xs">
              VISION
            </div>
            <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
              場所の制約を超え、<br className="hidden md:block" />地方から『世界』へ。
            </h3>
            <p className="text-white/70 text-xs md:text-sm lg:text-base" style={{ lineHeight: '1.8' }}>
              「地方だから」という言い訳は過去のものです。地理的なハンディキャップを技術で無効化し、どこにいても世界と渡り合えるビジネス環境を実装します。
            </p>
          </div>

          {/* VALUE */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#42ea95]/50 transition-all sm:col-span-2 md:col-span-1">
            <div className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold mb-3 md:mb-4 tracking-wider text-xs">
              VALUE
            </div>
            <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 md:mb-4 text-lg md:text-xl lg:text-2xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
              私たちが提供する価値
            </h3>
            <ul className="space-y-2 md:space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-[#42ea95] mt-1">●</span>
                <span className="text-white/70 text-xs md:text-sm lg:text-base" style={{ lineHeight: '1.8' }}>
                  <strong className="text-white">High-Tech × High-Touch</strong><br />
                  技術力と人間力
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#42ea95] mt-1">●</span>
                <span className="text-white/70 text-xs md:text-sm lg:text-base" style={{ lineHeight: '1.8' }}>
                  <strong className="text-white">Beyond the System</strong><br />
                  納品後の伴走
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#42ea95] mt-1">●</span>
                <span className="text-white/70 text-xs md:text-sm lg:text-base" style={{ lineHeight: '1.8' }}>
                  <strong className="text-white">Speed & Quality</strong><br />
                  AI高速開発と対話
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// Future Section
function FutureSection() {
  return (
    <section className="bg-gradient-to-b from-black to-[#1a1a1a] py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#42ea95]/30 to-transparent" />
      </div>
      
      <div className="max-w-[1000px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold mb-3 md:mb-4 tracking-wider text-xs">
            FUTURE
          </div>
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
            地域の『DXインフラ』になる。<br />そして、次世代の挑戦者たちへ。
          </h2>
          <div className="space-y-3 md:space-y-4 text-white/70 max-w-3xl mx-auto text-sm md:text-base" style={{ lineHeight: '1.9' }}>
            <p>
              私たちのゴールは、受託開発だけではありません。目指すのは、地域企業が当たり前にデジタルを使いこなし自律成長する「DXのエコシステム」を作ることです。
            </p>
            <p>
              そのために教育事業にも力を入れます。地域の子どもたちにAIの楽しさを伝え、次世代のイノベーターを育てる。企業が育ち、人が育ち、街が元気になる。オウバースは、テクノロジーを通じて地域社会の「新しい循環」を作る中心でありたいと考えています。
            </p>
          </div>
        </div>

        <div className="mt-8 md:mt-12">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=1200&q=80"
            alt="次世代の挑戦者たち"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="text-center mt-8 md:mt-12">
          <a 
            href="#"
            onClick={(e) => { 
              e.preventDefault(); 
              window.location.hash = ''; 
            }}
            className="inline-flex items-center gap-3 bg-[#42ea95] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm uppercase tracking-wider hover:bg-white transition-all"
          >
            トップページに戻る
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function IdentityPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <FoundersMessageSection />
        <MVVSection />
        <FutureSection />
      </main>
    </div>
  );
}