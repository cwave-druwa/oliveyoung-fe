// components/VideoPlayer.jsx
import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <video src={src} autoPlay loop style={{ width: '20%', height: 'auto' }}>
      Sorry, your browser does not support embedded videos.
    </video>
  );
};

export default VideoPlayer;

// components/VideoPlayer.jsx
// import React from 'react';

// const VideoPlayer = ({ src }) => {
//   return (
//     <iframe
//       width="560"
//       height="315"
//       src={src}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       style={{ width: '100%', height: 'auto' }}>
//     </iframe>
//   );
// };

// export default VideoPlayer;
