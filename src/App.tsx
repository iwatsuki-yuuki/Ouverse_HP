import { useState, useEffect } from 'react';
import OptinetWebsite from './components/OptinetWebsite';
import PrivacyPolicy from './components/PrivacyPolicy';
import AIFuturePage from './components/AIFuturePage';
import IdentityPage from './components/IdentityPage';
import SecurityPolicy from './components/SecurityPolicy';
import MetadataSpecPage from './components/MetadataSpecPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'ai-future' | 'identity' | 'security' | 'metadata-spec'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#privacy') {
        setCurrentPage('privacy');
        window.scrollTo(0, 0);
      } else if (hash === '#ai-future') {
        setCurrentPage('ai-future');
        window.scrollTo(0, 0);
      } else if (hash === '#identity') {
        setCurrentPage('identity');
        window.scrollTo(0, 0);
      } else if (hash === '#security') {
        setCurrentPage('security');
        window.scrollTo(0, 0);
      } else if (hash === '#metadata-spec') {
        setCurrentPage('metadata-spec');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
        // ホームに戻る場合のみ先頭にスクロール（内部リンクの場合はスクロールしない）
        if (hash === '' || hash === '#') {
          window.scrollTo(0, 0);
        }
      }
    };

    // 初回ロード時のハッシュチェック
    handleHashChange();

    // ハッシュ変更イベントをリッスン
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentPage === 'privacy') return <PrivacyPolicy />;
  if (currentPage === 'ai-future') return <AIFuturePage />;
  if (currentPage === 'identity') return <IdentityPage />;
  if (currentPage === 'security') return <SecurityPolicy />;
  if (currentPage === 'metadata-spec') return <MetadataSpecPage />;
  return <OptinetWebsite />;
}