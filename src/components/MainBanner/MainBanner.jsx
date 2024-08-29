import { useState, useEffect, useRef } from 'react';
import './MainBanner.css';

const MainBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    { 
      image: '/olive2.jpg', 
      url: 'https://www.oliveyoung.co.kr/store/main/getBestList.do?dispCatNo=900000100100001&fltDispCatNo=10000010002&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_content=pc_makeup_base&utm_source=google&utm_medium=pmax&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gclid=EAIaIQobChMI4N6ur4iSiAMVANMWBR0SahjzEAAYASAAEgLZpvD_BwE',
      className: 'banner-one',
      title: '시간 대신',
      subtitle: '피부 탄력을 되돌려요',
      buttonText: '안티에이징 런칭 특가',
    },
    { 
      image: '/kimjiwon.jpg', 
      url: 'https://www.oliveyoung.co.kr/store/main/getBestList.do?dispCatNo=900000100100001&fltDispCatNo=10000010002&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_content=pc_makeup_base&utm_source=google&utm_medium=pmax&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gclid=EAIaIQobChMI4N6ur4iSiAMVANMWBR0SahjzEAAYASAAEgLZpvD_BwE',
      className: 'banner-two',
      title: '슬로우에이징의 첫 시작,',
      subtitle: '더 후와 함께',
      buttonText: '김지원 PICK 보러가기',
    },
    { 
      image: '/small_cute.jpg', 
      url: 'https://www.oliveyoung.co.kr/store/main/getBestList.do?dispCatNo=900000100100001&fltDispCatNo=10000010002&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_content=pc_makeup_base&utm_source=google&utm_medium=pmax&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gclid=EAIaIQobChMI4N6ur4iSiAMVANMWBR0SahjzEAAYASAAEgLZpvD_BwE',
      className: 'banner-three',
      title: '먼가 작고 귀여워',
      subtitle: '웃음짓게 해',
      buttonText: '먼작귀 x 콜라보 기획전',
    },
    { 
      image: '/techking.png', 
      url: 'https://kr.linkedin.com/posts/seo-byunghwan-7b0669123_tencentcloud-cj%EC%98%AC%EB%A6%AC%EB%B8%8C%EB%84%A4%ED%8A%B8%EC%9B%8D%EC%8A%A4-activity-7234248778566787073-69oR',
      className: 'banner-seven',
      title: 'Tencent Cloud Day Korea 2024',
      subtitle: 'CJ올리브네트웍스의 자랑',
      buttonText: '기사 바로읽어보기',
    },
    { 
      image: '/dtking.jpg',
      url: 'https://www.ntoday.co.kr/news/articleView.html?idxno=94749',
      className: 'banner-eight',
      title: '지속가능한 ESG분야',
      subtitle: '청년 인재 육성 방안',
      buttonText: '자세히 보기',
    },
    { 
      image: '/cwave3.jpg', 
      className: 'banner-five',
      title: '고생했다 전우들이여',
      subtitle: '다음에 또 만나자',
    },
  ];

  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleBannerClick = () => {
    if (banners[currentBanner].url) {
      window.open(banners[currentBanner].url, '_blank');
    }
  };

  return (
    <div
      className={`banner-wrapper ${banners[currentBanner].className}`}
      onMouseEnter={stopAutoSlide}
      onMouseLeave={startAutoSlide}
      onTouchStart={stopAutoSlide}
      onTouchEnd={startAutoSlide}
    >
      <img 
        className="banner-image"
        src={banners[currentBanner].image} 
        alt={`Banner ${currentBanner + 1}`} 
        onClick={handleBannerClick}
        aria-label={`배너 ${currentBanner + 1} 클릭하여 자세히 보기`}
      />
      <div className="banner-text">
        <h2>{banners[currentBanner].title}</h2>
        <p>{banners[currentBanner].subtitle}</p>
        {banners[currentBanner].buttonText && (
          <a href={banners[currentBanner].url} className="banner-button" onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (banners[currentBanner].url) {
              window.open(banners[currentBanner].url, '_blank');
            }
          }}>
            {banners[currentBanner].buttonText}
          </a>
        )}
      </div>
      <div className="banner-controls">
        <button onClick={(e) => {
          e.stopPropagation();
          setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
        }}>&lt;</button>
        <span>{currentBanner + 1}/{banners.length}</span>
        <button onClick={(e) => {
          e.stopPropagation();
          setCurrentBanner((prev) => (prev + 1) % banners.length);
        }}>&gt;</button>
      </div>
    </div>
  );
};

export default MainBanner;