import { FadeInImage } from "./FadeInImage";
import { useState } from "react";
import { Menu, X, Copy, Check } from "lucide-react";
import logoYouverse from "figma:asset/d202f2e6de05ab262a1f2a6ebc582dfd2ba34e75.png";

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

// Copy Button Component
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="p-2 hover:bg-white/10 rounded transition-colors"
      title="コピー"
    >
      {copied ? (
        <Check className="w-4 h-4 text-[#42ea95]" />
      ) : (
        <Copy className="w-4 h-4 text-white/50" />
      )}
    </button>
  );
}

// Google Search Preview Component
function GoogleSearchPreview() {
  const url = "https://ouverse.co.jp";
  const title = "AI・DX導入支援と業務自動化システム | 株式会社ouverse";
  const description = "AIを活用したチャットボット開発や電話自動応答システムで、企業のDXを推進します。和歌山県を中心に、葬儀社や専門商社など実務への導入実績多数。現場で「使える」ソリューションを提案します。";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-['Space_Grotesk',sans-serif] font-bold mb-3 flex items-center gap-2">
          <span className="bg-[#42ea95] text-black px-3 py-1 rounded text-xs">01</span>
          Google検索結果プレビュー
        </h3>
        <p className="text-white/50 text-xs mb-4">検索エンジンでの表示イメージ</p>
      </div>

      {/* Google Search Result Mockup */}
      <div className="bg-white p-6 rounded-lg">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
            O
          </div>
          <div>
            <div className="text-sm text-gray-900">株式会社ouverse</div>
            <div className="text-xs text-gray-600">{url}</div>
          </div>
        </div>
        <h3 className="text-xl text-blue-600 hover:underline cursor-pointer mb-2 font-['Space_Grotesk',sans-serif]">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Implementation Code */}
      <div className="bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#161b22]">
          <span className="text-xs text-white/70 font-mono">HTML Meta Tags</span>
          <CopyButton text={`<title>${title}</title>\n<meta name="description" content="${description}" />`} />
        </div>
        <pre className="p-4 text-xs text-white/90 font-mono overflow-x-auto">
{`<title>${title}</title>
<meta name="description" content="${description}" />`}
        </pre>
      </div>
    </div>
  );
}

// OGP Card Preview Component
function OGPCardPreview() {
  const ogTitle = "現場を変えるAI・DX開発 | 株式会社ouverse";
  const ogDescription = "チャットボットや電話対応の自動化で業務効率を改善。関西の実装系DXパートナー。";
  const ogUrl = "https://ouverse.co.jp";
  const ogImage = "https://ouverse.co.jp/og-image.jpg";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-['Space_Grotesk',sans-serif] font-bold mb-3 flex items-center gap-2">
          <span className="bg-[#42ea95] text-black px-3 py-1 rounded text-xs">02</span>
          SNSシェア用カード（OGP）
        </h3>
        <p className="text-white/50 text-xs mb-4">Twitter/Facebook等でのシェア時の表示</p>
      </div>

      {/* OGP Card Mockup */}
      <div className="bg-[#15202b] p-6 rounded-lg">
        <div className="bg-white rounded-lg overflow-hidden border border-gray-200 max-w-lg">
          {/* OG Image */}
          <div className="relative h-64 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white text-4xl font-bold mb-2 font-['Space_Grotesk',sans-serif]">ouverse</div>
              <div className="text-white/80 text-sm">AI・DX Development Partner</div>
            </div>
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-white text-xs font-bold">Tech</span>
            </div>
          </div>
          
          {/* OG Text */}
          <div className="p-4 bg-white">
            <div className="text-xs text-gray-500 mb-1 uppercase">{ogUrl}</div>
            <h4 className="font-bold text-gray-900 mb-1 font-['Space_Grotesk',sans-serif]">{ogTitle}</h4>
            <p className="text-sm text-gray-600">{ogDescription}</p>
          </div>
        </div>
      </div>

      {/* Implementation Code */}
      <div className="bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#161b22]">
          <span className="text-xs text-white/70 font-mono">OGP Meta Tags</span>
          <CopyButton text={`<meta property="og:title" content="${ogTitle}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:url" content="${ogUrl}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${ogTitle}" />
<meta name="twitter:description" content="${ogDescription}" />
<meta name="twitter:image" content="${ogImage}" />`} />
        </div>
        <pre className="p-4 text-xs text-white/90 font-mono overflow-x-auto">
{`<meta property="og:title" content="${ogTitle}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:url" content="${ogUrl}" />
<meta property="og:image" content="${ogImage}" />
<meta property="og:type" content="website" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${ogTitle}" />
<meta name="twitter:description" content="${ogDescription}" />
<meta name="twitter:image" content="${ogImage}" />`}
        </pre>
      </div>
    </div>
  );
}

// Browser Tab Preview Component
function BrowserTabPreview() {
  const tabTitle = "AI・DX導入支援 | 株式会社ouverse";

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-white font-['Space_Grotesk',sans-serif] font-bold mb-3 flex items-center gap-2">
          <span className="bg-[#42ea95] text-black px-3 py-1 rounded text-xs">03</span>
          ブラウザタブ表示
        </h3>
        <p className="text-white/50 text-xs mb-4">ブラウザタブとファビコンの表示</p>
      </div>

      {/* Browser Tab Mockup */}
      <div className="bg-[#2d2d2d] rounded-t-lg overflow-hidden">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#3c3c3c] border-b border-white/10">
          <div className="flex items-center gap-2 bg-[#2d2d2d] px-3 py-2 rounded-t border-t-2 border-[#42ea95] max-w-xs">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white text-[8px] font-bold flex-shrink-0">
              O
            </div>
            <span className="text-xs text-white truncate">{tabTitle}</span>
          </div>
          <div className="flex items-center gap-2 bg-[#232323] px-3 py-2 rounded-t opacity-60">
            <div className="w-4 h-4 bg-gray-500 rounded flex-shrink-0"></div>
            <span className="text-xs text-white/50">新しいタブ</span>
          </div>
        </div>
        <div className="h-32 bg-white flex items-center justify-center">
          <span className="text-gray-400 text-xs">Webページコンテンツ</span>
        </div>
      </div>

      {/* Favicon Preview */}
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h4 className="text-white text-sm mb-4 font-['Space_Grotesk',sans-serif] font-bold">ファビコンデザイン案</h4>
        <div className="flex gap-6 items-center">
          <div className="space-y-2">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">
              O
            </div>
            <p className="text-xs text-white/50">64x64</p>
          </div>
          <div className="space-y-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
              O
            </div>
            <p className="text-xs text-white/50">32x32</p>
          </div>
          <div className="space-y-2">
            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-sm flex items-center justify-center text-white font-bold text-[8px]">
              O
            </div>
            <p className="text-xs text-white/50">16x16</p>
          </div>
        </div>
      </div>

      {/* Implementation Code */}
      <div className="bg-[#0d1117] border border-white/10 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-[#161b22]">
          <span className="text-xs text-white/70 font-mono">Favicon Links</span>
          <CopyButton text={`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`} />
        </div>
        <pre className="p-4 text-xs text-white/90 font-mono overflow-x-auto">
{`<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />`}
        </pre>
      </div>
    </div>
  );
}

// Main Component
export default function MetadataSpecPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
          {/* Page Title */}
          <div className="mb-12 md:mb-16">
            <div className="inline-block bg-[#42ea95]/10 border border-[#42ea95]/30 rounded-full px-4 py-2 mb-4">
              <span className="text-[#42ea95] text-xs font-['Space_Grotesk',sans-serif] font-bold uppercase tracking-wider">
                Technical Specification
              </span>
            </div>
            <h1 className="font-['Space_Grotesk',sans-serif] font-bold text-white mb-4 text-3xl md:text-4xl lg:text-5xl" style={{ letterSpacing: '-1px', lineHeight: '1.2' }}>
              メタデータ仕様書
            </h1>
            <p className="text-white/70 text-sm md:text-base max-w-2xl" style={{ lineHeight: '1.8' }}>
              株式会社ouverse Webサイトの検索エンジン最適化（SEO）とSNSシェア用メタデータの実装仕様。<br />
              開発時にそのまま使用できるコードスニペット付き。
            </p>
          </div>

          {/* Specifications Grid */}
          <div className="space-y-12 md:space-y-16">
            <GoogleSearchPreview />
            
            <div className="border-t border-white/10"></div>
            
            <OGPCardPreview />
            
            <div className="border-t border-white/10"></div>
            
            <BrowserTabPreview />
          </div>

          {/* Additional Notes */}
          <div className="mt-16 bg-white/5 border border-white/10 rounded-lg p-6 md:p-8">
            <h3 className="text-white font-['Space_Grotesk',sans-serif] font-bold mb-4 flex items-center gap-2">
              <span className="text-[#42ea95]">💡</span>
              実装上の注意点
            </h3>
            <ul className="space-y-3 text-white/70 text-sm" style={{ lineHeight: '1.8' }}>
              <li className="flex gap-3">
                <span className="text-[#42ea95] flex-shrink-0">•</span>
                <span>OG画像（og:image）は1200x630pxの推奨サイズで作成し、ファイルサイズは8MB以下に抑えてください。</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#42ea95] flex-shrink-0">•</span>
                <span>ディスクリプションは120〜160文字が適切です。現在の文字数: 84文字（問題なし）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#42ea95] flex-shrink-0">•</span>
                <span>タイトルタグは60文字以内が推奨。現在の文字数: 28文字（問題なし）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#42ea95] flex-shrink-0">•</span>
                <span>ファビコンはSVG形式での提供も推奨されます（スケーラビリティのため）</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#42ea95] flex-shrink-0">•</span>
                <span>本番環境ではURLを正しいドメイン（ouverse.co.jp）に置き換えてください。</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
