import { FadeInImage } from "./FadeInImage";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logoYouverse from "figma:asset/d202f2e6de05ab262a1f2a6ebc582dfd2ba34e75.png";
import svgPaths from "./imports/svg-w1e8ba7f43";

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

// Hero Section
function HeroSection() {
  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1603348417826-e9bc1e277c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydXJhbCUyMGZhY3RvcnklMjBjb3VudHJ5c2lkZSUyMGluZHVzdHJpYWx8ZW58MXx8fHwxNzY1Njk3NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="田舎の工場"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 md:px-8 text-center">
        <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '-1.5px', lineHeight: '1.2' }}>
          地域産業の未来と<br />AIという選択肢
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto text-base md:text-lg lg:text-xl" style={{ lineHeight: '1.7' }}>
          「座して待つか、武器を取るか」<br />岐路に立つ地方企業の皆様へ
        </p>
      </div>
    </section>
  );
}

// Reality Section
function RealitySection() {
  return (
    <section className="bg-[#1a1a1a] py-12 md:py-20 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <div className="text-center md:text-left">
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
              仕事があるが、人がいない
            </h2>
            <p className="text-white/70 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
              「求人を出しても、電話すら鳴らない」 それが、地方ビジネスの偽らざる現実です。
            </p>
            <p className="text-white/70 mt-3 md:mt-4 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
              以前なら当たり前に採用できた「普通の人材」が、今は全く確保できない。 その結果、営業担当が事務作業に追われ、経営者が電話番をし、現場の社員は雑務で疲弊していく。特別なスキルが必要な仕事の話ではありません。「誰でもできる仕事」をやる人が、物理的に足りていないのです。
            </p>
            <p className="text-white/70 mt-3 md:mt-4 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
              都市部との情報格差も深刻です。向こうがAIで「雑務の無人化」を進める一方で、地方は貴重な社員の時間を「作業」に浪費し続けている。この構造を変えない限り、会社の成長は止まったままです。
            </p>
          </div>
          
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
              alt="減少するグラフ"
              className="w-full h-auto rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Evolution Section
function EvolutionSection() {
  return (
    <section className="bg-black py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, #42ea95 1px, transparent 1px), linear-gradient(0deg, #42ea95 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="max-w-[900px] mx-auto px-4 md:px-8 text-center relative z-10">
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
          「辞めない・眠らない・ミスのない」人材を
        </h2>
        <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
          AIに専門知識は不要です。必要なのは、経営者の「指示（オーダー）」だけ。 メールの代筆、議事録の要約、市場調査、翻訳。これまで社員が残業してこなしていた膨大な事務作業を、AIは一瞬で完了させます。
        </p>
        <p className="text-white/70 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
          これは、魔法ではありません。月額数千円〜数万円で雇える、極めて優秀な実務アシスタントです。 教育コストもかからず、退職リスクもない。人間が本来やるべき「売上を作る仕事」に集中するために、この「デジタル労働力」を使わない手はありません。
        </p>
        
        <div className="mt-8 md:mt-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 max-w-xl mx-auto">
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-start gap-2 md:gap-3">
              <div className="bg-[#42ea95] text-black px-2 md:px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">あなた</div>
              <div className="bg-white/10 px-3 md:px-4 py-2 rounded-2xl text-white text-xs md:text-sm flex-1 text-left">
                この書類を要約して
              </div>
            </div>
            <div className="flex items-start gap-2 md:gap-3 justify-end">
              <div className="bg-white px-3 md:px-4 py-2 rounded-2xl text-black text-xs md:text-sm flex-1 text-left max-w-[250px] md:max-w-[300px]">
                承知しました。3つのポイントにまとめます...
              </div>
              <div className="bg-white/20 text-white px-2 md:px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">AI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function SolutionSection() {
  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-black py-12 md:py-20 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#42ea95]/20 to-transparent" />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-2xl md:text-3xl lg:text-4xl" style={{ letterSpacing: '-0.5px', lineHeight: '1.3' }}>
            人を減らすのではなく、<br className="md:hidden" /> 一人ひとりの「価値」を最大化する
          </h2>
          <p className="text-white/70 max-w-3xl mx-auto mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
            私たちは、AIを「人の代替品」とは考えていません。
          </p>
          <p className="text-white/70 max-w-3xl mx-auto mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.9' }}>
            社員の皆様が本来持っているポテンシャルを引き出すための「支援ツール」です。
          </p>
          <p className="text-white/70 max-w-3xl mx-auto text-sm md:text-base" style={{ lineHeight: '1.9' }}>
            定型業務をシステムに任せることで、お客様への提案や、サービスの品質向上など、人間にしか生み出せない価値に時間を投資していただけます。 限られた人数で、最大限のパフォーマンスを発揮する。それが、これからの地方企業が目指すべき、持続可能な経営のカタチです。
          </p>
        </div>
        
        <div className="text-center mt-8 md:mt-12">
          <a 
            href="#service"
            onClick={(e) => { 
              e.preventDefault(); 
              window.location.hash = ''; 
              setTimeout(() => {
                window.location.hash = 'service';
              }, 100);
            }}
            className="inline-flex items-center gap-3 bg-[#42ea95] text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm uppercase tracking-wider hover:bg-white transition-all"
          >
            オウバースの提供サービスを見る
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
export default function AIFuturePage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <RealitySection />
        <EvolutionSection />
        <SolutionSection />
      </main>
    </div>
  );
}