import { useState, useEffect, useRef } from 'react';
import './MainBanner.css';

const MainBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [
    { 
      image: '/olive2.jpg', 
      url: 'https://www.oliveyoung.co.kr/store/main/getBestList.do?dispCatNo=900000100100001&fltDispCatNo=10000010002&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_content=pc_makeup_base&utm_source=google&utm_medium=pmax&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gclid=EAIaIQobChMI4N6ur4iSiAMVANMWBR0SahjzEAAYASAAEgLZpvD_BwE',
      className: 'banner-one', // 고유 클래스 이름
      title: '시간 대신',
      subtitle: '피부 탄력을 되돌려요',
      buttonText: '안티에이징 런칭 특가',
    },
    { 
      image: '/kimjiwon.jpg', 
      url: 'https://www.oliveyoung.co.kr/store/main/getBestList.do?dispCatNo=900000100100001&fltDispCatNo=10000010002&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_content=pc_makeup_base&utm_source=google&utm_medium=pmax&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gclid=EAIaIQobChMI4N6ur4iSiAMVANMWBR0SahjzEAAYASAAEgLZpvD_BwE',
      title: '슬로우에이징의 첫 시작,',
      subtitle: '더 후와 함께',
      buttonText: '김지원 PICK 보러가기',
      className: 'banner-two', // 고유 클래스 이름
    },
    { 
      image: '/small_cute.jpg', 
      url: 'https://www.oliveyoung.co.kr/store/main/getBestList.do?dispCatNo=900000100100001&fltDispCatNo=10000010002&utm_source=google&utm_medium=shopping_search&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_content=pc_makeup_base&utm_source=google&utm_medium=pmax&utm_campaign=onpro_emnet_googlepmax_0101_1231&utm_term=&_CAD=google_pmax&gad_source=1&gclid=EAIaIQobChMI4N6ur4iSiAMVANMWBR0SahjzEAAYASAAEgLZpvD_BwE',
      title: '먼가 작고 귀여워',
      subtitle: '웃음짓게 해',
      buttonText: '먼작귀 x 콜라보 기획전',
      className: 'banner-three', // 고유 클래스 이름
    },
    // { 
    //   image: '/centerjang.jpg', 
    //   url: 'https://m.post.naver.com/viewer/postView.naver?volumeNo=37561585&memberNo=20717909',
    //   title: '퀄컴 2024 DX 서밋 코리아',
    //   subtitle: '가장 빛나는 센터장님',
    //   buttonText: '기사 바로읽어보기',
    //   className: 'banner-six', // 고유 클래스 이름
    // },
    { 
      image: '/cwave5.jpg', 
      title: '드루와드루와',
      subtitle: '5조.. 누가 막을 것인가',
      className: 'banner-four', // 고유 클래스 이름
    },
    { 
      image: '/cwave3.jpg', 
      title: '고생했다 전우들이여',
      subtitle: '다음에 또 만나자',
      className: 'banner-five', // 고유 클래스 이름
    },
  ];

  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 1300);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleBannerClick = () => {
    window.location.href = banners[currentBanner].url;
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
          <a href={banners[currentBanner].url} className="banner-button">
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
