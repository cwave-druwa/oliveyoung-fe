// // src/Challenge.jsx
// import React from 'react';
// import VideoPlayer from './../../components/VideoPlayer/VideoPlayer';
// import './Challenge.css';  // 스타일시트 연결

// const Challenge = () => {
//   const videoSource = '/videoplayback.mp4';  // 동영상 파일 경로
// //   const videoSource = 'https://olive0-fe.s3.ap-northeast-2.amazonaws.com/videoplayback.mp4';  // 동영상 파일 경로
//   return (
//     <div className="video-container">
//       <VideoPlayer src={videoSource} />
//     </div>
//   );
// };

// export default Challenge;


// 위에 주석처리된 코드는, 기존 삐끼삐끼 영상 재생 페이지
import React from 'react';
import TodaysDiscovery from './../../components/TodayDiscovery/TodayDiscovery';
import './Challenge.css';

const Challenge = () => {
  return (
    <div className="challenge-container">
      <TodaysDiscovery />
    </div>
  );
};

export default Challenge;