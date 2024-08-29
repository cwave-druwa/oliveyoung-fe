import React from 'react';
import { Link } from 'react-router-dom'; // react-router-dom에서 Link 컴포넌트를 불러옵니다.
import './DigitalTwin.css';

const DigitalTwin = () => {
  return (
    <div className="digitaltwin">
      <div className="olive-young-logo">
        <Link to="/">
          <img src="/Oliveyoung-Logo.jpg" alt="Olive Young Logo" className="olive-young-logo" />
        </Link>
      </div>
      <div className="container3D">
        <iframe
          src="https://saas-composer-kwonjangwoo-ews.education.wise-paas.com/scene.html?org_id=10&tag=scenes/builtIn/engine%20room.json&allCacheTime=1724252538831"
          title="3D View"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  );
};

export default DigitalTwin;
