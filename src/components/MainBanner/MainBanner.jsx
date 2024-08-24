import { useState, useEffect } from 'react';
import './MainBanner.css';

const MainBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    { image: '/news.png', url: 'https://www.cjolivenetworks.co.kr/news/press_release/detail/737?ca=ALL' },
    { image: '/news2.png', url: 'https://www.cjolivenetworks.co.kr/news/press_release/detail/734?ca=ALL' },
    { image: '/news3.png', url: 'https://www.cjolivenetworks.co.kr/news/press_release/detail/736?ca=ALL' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleBannerClick = () => {
    window.location.href = banners[currentBanner].url;
  };

  return (
    <div className="banner-wrapper">
      <img 
        className="banner-image"
        src={banners[currentBanner].image} 
        alt={`Banner ${currentBanner + 1}`} 
        onClick={handleBannerClick}
        aria-label={`배너 ${currentBanner + 1} 클릭하여 자세히 보기`}
      />
      <div className="banner-controls">
        <button onClick={(e) => {
          e.stopPropagation();
          setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
        }}>←</button>
        <button onClick={(e) => {
          e.stopPropagation();
          setCurrentBanner((prev) => (prev + 1) % banners.length);
        }}>→</button>
      </div>
    </div>
  );
};

export default MainBanner;