import { FadeInImage } from "./FadeInImage";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import svgPaths from "../imports/svg-s1g6fsj54f";
import imgDivAfter from "figma:asset/b18a27147dfb310b403784ab5aef72fe22622eff.png";
import imgSectionBefore from "figma:asset/0485830cb9039bd53dd142141856b235f3e84707.png";
import imgDiv from "figma:asset/3c063bb0aeec055be9e74447d86aaca857425bb2.png";
import imgDiv1 from "figma:asset/da3fc9da8cda1560046526eaf7f04cf25aadecdb.png";
import imgSectionAfter from "figma:asset/b59cabba03c370580964cfdef3539afe028c6e9e.png";
import imgDiv2 from "figma:asset/6c77bed9ba7844332cef2d0d77d280f30f2a6753.png";
import imgSection from "figma:asset/8c78747f5c4c848525a2194a7c86f558692e22a1.png";
import imgDiv3 from "figma:asset/65138f15fc320b7c26d4c839adf8c9df7d612144.png";
import imgFooterBefore from "figma:asset/6af1b2331ebbf9abae94f57e364847f22ffb19ea.png";
import logoYouverse from "figma:asset/d202f2e6de05ab262a1f2a6ebc582dfd2ba34e75.png";
import heroBgImage from "figma:asset/49d5b2968fc1016c577c4c27ff1a74599601e02e.png";
import imgAbout from "figma:asset/120d19713a1d8af092398806df067db309d85e32.png";
import imgChatbot from "figma:asset/d90f17881520b9e6a2d4949fd80ef7d294f4ebe7.png";
import imgSeminar from "figma:asset/54d328c60471d19fc83ba69fa34d5345020f50dd.png";
import imgHachi from "figma:asset/040e7adf9e0efdfcd5d1a19b3786819fae99b135.png";
import imgTellgrit from "figma:asset/8690af00519d1a06d76fbb38932ddba6a136f575.png";

// Header Component
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <FadeInImage src={logoYouverse} alt="Youverse" className="h-8 md:h-10 w-auto" />
          <span className="font-['Orbitron',sans-serif] font-bold text-white tracking-wide text-sm md:text-base lg:text-lg">
            株式会社オウバース
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#top" className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            Top
          </a>
          <a href="#about" className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            About
          </a>
          <a href="#service" className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            Service
          </a>
          <a href="#works" className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            Works
          </a>
          <a href="#company" className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            Company
          </a>
          <a href="#contact" className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
            Contact
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
            <a href="#top" onClick={() => setIsOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              Top
            </a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              About
            </a>
            <a href="#service" onClick={() => setIsOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              Service
            </a>
            <a href="#works" onClick={() => setIsOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              Works
            </a>
            <a href="#company" onClick={() => setIsOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              Company
            </a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm text-white/70 hover:text-white transition-colors font-['Space_Grotesk',sans-serif]">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="top" className="relative bg-black min-h-[500px] md:min-h-[600px] max-h-[100vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <FadeInImage 
          src={heroBgImage} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 py-12 md:py-20 relative z-10">
        <div className="max-w-2xl lg:-ml-[340px]">
          <div className="flex flex-wrap gap-4 mb-6 md:mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-['Space_Grotesk',sans-serif] font-bold text-white uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#42ea95]" />
              Bringing a new force to the field: AI
            </span>
          </div>
          
          <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-3xl md:text-4xl lg:text-5xl" style={{ lineHeight: '1.3', letterSpacing: '0px' }}>
            その「現場」に、
            <br />
            AIという新たな戦力を
          </h1>
          
          <p className="text-white/70 mb-6 md:mb-8 max-w-xl text-sm md:text-base" style={{ lineHeight: '1.8' }}>
            地域ビジネスの課題をITの力で解決し、持続可能な成長を実現する。
          </p>
          
          <button className="group inline-flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm uppercase tracking-wider hover:bg-[#42ea95] transition-all"
            onClick={() => window.location.hash = 'ai-future'}
          >
            Learn More
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 15 15">
              <path d={svgPaths.p1949a4c0} fill="currentColor" transform="rotate(315 7.5 7.5)" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="about" className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative">
            <FadeInImage 
              src={imgAbout} 
              alt="About Optinet"
              className="w-full rounded-lg"
            />
          </div>
          
          <div>
            <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-black uppercase mb-4 md:mb-6 text-2xl md:text-3xl" style={{ letterSpacing: '-0.5px' }}>
              ABOUT
            </h2>
            <p className="text-black/70 mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.6' }}>
              「DX」や「AI」という言葉が飛び交う中で、本当に地方の現場が必要としているのは、難解な理論ではなく、明日の業務を助ける具体的な解決策です。私たちは、地域ごとの特性や現場の声を深く理解し、それぞれの企業に最適な形のIT技術をオーダーメイドで提供します。
            </p>
            <p className="text-black/70 mb-4 md:mb-6 text-sm md:text-base" style={{ lineHeight: '1.6' }}>
              地方の活性化は、一社の成功から始まります。貴社の課題に誰よりも真剣に向き合い、共に汗をかきながら、テクノロジーによる変革を成し遂げるパートナーでありたいと考えています。
            </p>
            <button 
              className="inline-flex items-center gap-3 border-2 border-black text-black px-6 py-3 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm uppercase tracking-wider hover:bg-black hover:text-white transition-all"
              onClick={() => window.location.hash = 'identity'}
            >
              Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Company Section
function CompanySection() {
  const companyInfo = [
    { label: "会社名", value: "株式会社オウバース" },
    { label: "設立", value: "2025年7月" },
    { label: "代表取締役", value: "岩月 優樹" },
    { label: "所在地", value: "〒648-0073 和歌山県橋本市市脇1丁目3-18" },
    { label: "資本金", value: "1,000,000円" },
    { label: "事業内容", value: "AI・データ活用ソリューション開発、業務自動化支援、DX戦略コンサルティング" }
  ];

  return (
    <section id="company" className="bg-[#0a0a0a] py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-4 text-2xl md:text-3xl" style={{ letterSpacing: '-0.5px' }}>
            COMPANY
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="text-white/70 max-w-4xl mb-6 md:mb-8 text-sm md:text-base" style={{ lineHeight: '1.6' }}>
              地域に根差したIT支援で、ビジネスの持続的成長を実現します。
            </p>
            <div className="space-y-4 md:space-y-6">
              {companyInfo.map((info, index) => (
                <div key={index} className="border-b border-white/10 pb-3 md:pb-4">
                  <dt className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold text-xs md:text-sm uppercase tracking-wider mb-1 md:mb-2">
                    {info.label}
                  </dt>
                  <dd className="text-white/90 text-sm md:text-base" style={{ lineHeight: '1.6' }}>
                    {info.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-lg p-6 md:p-8 border border-white/10">
            <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 md:mb-6 text-xl md:text-2xl">
              企業理念
            </h3>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.8' }}>
              私たち株式会社オウバースは、単なるシステム開発会社ではありません。私たちの使命は、テクノロジーという最強の武器を使って、地方企業のポテンシャルを最大限に引き出すことです。
            </p>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.8' }}>
              「DX」や「AI」という言葉が飛び交う現代ですが、地方の現場では「何から始めればいいかわからない」「導入しても使いこなせない」という声が後を絶ちません。最先端の技術と、現場の実情。この二つの間にある深い溝を埋めるのが、私たちの役割です。
            </p>
            <p className="text-white/70 mb-3 md:mb-4 text-sm md:text-base" style={{ lineHeight: '1.8' }}>
              システムを導入して終わりではありません。それが現場に定着し、業務が変わり、利益が生まれ、そこで働く人々の表情が明るくなるまで。私たちは長期的なパートナーとして、泥臭く、かつスマートに伴走し続けます。場所の制約を超え、地方から世界へ通じるビジネスを共に創り上げる。それが、私たちの約束です。
            </p>
            <p className="text-white/70 text-sm md:text-base" style={{ lineHeight: '1.8' }}>
              テクノロジーの力で地域ビジネスを支え、持続可能な成長を実現します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services = [
    {
      title: "AI・データ活用ソリューション",
      description: "需要予測、画像認識による検品、チャットボットによる顧客対応など、貴社の課題に特化したAIモデルをオーダーメイドで開発。社内に眠るデータを分析し、「経験と勘」に頼らない、データに基づいた経営判断をサポートします。",
      image: imgDiv
    },
    {
      title: "業務自動化・効率化支援",
      description: "日々の入力作型業務を、RPAやデジタルツールを使って自動化します。人手不の解消はもちろん、ヒューマンエラーの削減と、社員がクリエイティブな業務に集中できる環境作りを実現します。",
      image: imgDiv1
    },
    {
      title: "地方DX戦略コンサルティング",
      description: "「DXと言われてもピンとこない」という段階からご相談ください。貴社の現状と課題を深くヒアリングし、無理のない導入計画を策定。さらに、現場を支える社内DX人材の育成や、AIを活用した新規事業開発・PoC（実証実験）の支援まで幅広く対応します。システムを入れて終わりではなく、定着し成果が出るまで伴走します。",
      image: imgDiv2
    }
  ];

  return (
    <section id="service" className="bg-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="mb-8 md:mb-12">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-black uppercase mb-4 text-2xl md:text-3xl" style={{ letterSpacing: '-0.5px' }}>
            Service
          </h2>
          <p className="text-black/60 max-w-4xl text-sm md:text-base" style={{ lineHeight: '1.6' }}>
            AI開発から組織づくりまで。ビジネスの成長フェーズに合わせた、最適なDX支援を提供します。
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="relative mb-4 md:mb-6 overflow-hidden rounded-lg bg-gray-50">
                <FadeInImage 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-black mb-2 md:mb-3 text-lg md:text-xl">
                {service.title}
              </h3>
              <p className="text-black/60 text-xs md:text-sm" style={{ lineHeight: '1.6' }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Network Infrastructure Section
function NetworkSection() {
  const works = [
    {
      category: "AIチャットボット",
      title: "顧客対応の自動化",
      description: "夜間や休日も、AIなら即座に応答可能。「電話がつながらない」による機会失をゼロにします。定型対応を全て自動化し、スタッフは人にしかできない業務に集中できます。",
      image: imgChatbot
    },
    {
      category: "AIセミナー",
      title: "DX人材育成支援",
      description: "ツールを入れるだけではDXは完成しません。社員一人ひとりがAIを「部下」のように使いこなせるようトレーニング。社内から自発的に変革が生まれる、自走する組織づくりを支援します。",
      image: imgSeminar
    },
    {
      category: "Web",
      title: "Webサイト制作・運用",
      description: "生成AIを活用した「バイブコーディング」により、圧倒的なスピードでWebサイトを構築。短縮した時間はヒアリングに充て、お客様の想いを深く反映させます。制作して終わりではなく、長期的な運用パートナーとして、ビジネスの成長に合わせた改善・更新まで伴走します。",
      image: "https://images.unsplash.com/photo-1565688720651-d0d042946c5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGJ1c2luZXNzJTIwdGVhbXdvcmslMjBsYXB0b3B8ZW58MXx8fHwxNzY1NzA1NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <section id="works" className="bg-black py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <FadeInImage 
          src={imgSectionAfter} 
          alt="" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-12 md:mb-16">
          <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-4 text-2xl md:text-3xl" style={{ letterSpacing: '-0.5px' }}>
            WORKS
          </h2>
          <p className="text-white/70 text-sm md:text-base" style={{ lineHeight: '1.6' }}>
            地域の課題を、どのようにテクノロジーで解決するのか一部をご紹介します。
          </p>
        </div>
        
        <div className="space-y-12 md:space-y-20">
          {works.map((work, index) => {
            const isEven = index % 2 === 1;
            return (
              <div key={index} className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                {/* 画像部分 */}
                <div className={`relative ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`relative h-[300px] md:h-[400px] rounded-lg overflow-hidden group`}>
                    <FadeInImage 
                      src={work.image} 
                      alt={work.title}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}
                      style={index === 1 ? { filter: 'brightness(1.15) contrast(1.1) saturate(1.05)' } : undefined}
                    />
                  </div>
                </div>
                
                {/* テキスト部分 */}
                <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#42ea95]" />
                    <span className="text-[#42ea95] font-['Space_Grotesk',sans-serif] font-bold text-xs uppercase tracking-wider">
                      {work.category}
                    </span>
                  </div>
                  <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-3 md:mb-4 text-xl md:text-2xl lg:text-3xl">
                    {work.title}
                  </h3>
                  <p className="text-white/70 text-sm md:text-base" style={{ lineHeight: '1.8' }}>
                    {work.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Client Logos Section
function ClientsSection() {
  const logos = [
    { src: imgHachi, alt: "Hachi" },
    { src: imgTellgrit, alt: "Tellgrit" }
  ];

  return (
    <section className="bg-[#f8f8f8] py-16">
      <div className="max-w-[1200px] mx-auto px-8">
        <h3 className="font-['Space_Grotesk',sans-serif] font-bold text-black uppercase text-center mb-12" style={{ fontSize: '20px', letterSpacing: '2px' }}>
          partner company
        </h3>
        
        <div className="flex items-center justify-center gap-16">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <FadeInImage 
                src={logo.src} 
                alt={logo.alt}
                className="max-w-[300px] max-h-[150px] w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactFormSection() {
  // GoogleフォームのURLをここに設定してください
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd3erCzkZg-d_FV6pXtqb8GDgDkOXLpLDdgyhUsOMhF84tvQA/viewform";

  return (
    <section id="contact-form" className="bg-black py-20">
      <div className="max-w-[1200px] mx-auto px-8 text-center">
        <h2 className="font-['Space_Grotesk',sans-serif] font-bold text-white uppercase mb-6" style={{ fontSize: '32px', letterSpacing: '-0.5px' }}>
          お問い合わせ
        </h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto" style={{ fontSize: '16px', lineHeight: '1.6' }}>
          ご相談やお見積もりなど、お気軽にお問い合わせください。<br />
          専門スタッフが丁寧に対応いたします。
        </p>
        <a 
          href={googleFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#42ea95] text-black px-8 py-4 rounded-full font-['Space_Grotesk',sans-serif] font-bold text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all"
        >
          お問い合わせフォームへ
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
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
                <a href="#top" className="text-white/60 hover:text-white transition-colors text-xs">
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
                  <a href="#about" className="text-white/60 hover:text-white transition-colors text-xs">
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
                  <a href="#service" className="text-white/60 hover:text-white transition-colors text-xs">
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
                  <a href="#works" className="text-white/60 hover:text-white transition-colors text-xs">
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
                  <a href="#company" className="text-white/60 hover:text-white transition-colors text-xs">
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
                <a href="#contact" className="text-white/60 hover:text-white transition-colors text-xs">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#privacy" className="text-white/40 hover:text-white transition-colors text-sm">
                プライバシーポリシー
              </a>
              <a href="#security" className="text-white/40 hover:text-white transition-colors text-sm">
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
export default function OptinetWebsite() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NetworkSection />
        <CompanySection />
        <ClientsSection />
        <ContactFormSection />
        <Footer />
      </main>
    </div>
  );
}