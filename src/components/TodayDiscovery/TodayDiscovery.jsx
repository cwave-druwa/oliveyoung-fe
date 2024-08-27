import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './TodayDiscovery.css';

const TodaysDiscovery = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef({});

    const posts = [
        {
          id: 1,
          video: './videoplayback.mp4',
          username: '이주은 사생팬',
          description: '기아 치어리더 이주은.. 화제의 삐끼삐끼 영상',
          likes: 8000,
          comments: 40
        },
        {
          id: 2,
          video: './videoplayback.mp4',
          username: '유재균',
          description: '하 힘들다 왜 안되는걸까..',
          likes: 8,
          comments: 2
        },
    ];

    const toggleVideo = (id) => {
        setPlayingVideo(prevId => {
            if (prevId) {
                videoRefs.current[prevId].pause();
            }
            if (prevId !== id) {
                videoRefs.current[id].play();
                return id;
            }
            return null;
        });
    };

    return (
        <div className="feed-container">
            <div className="header">
                <Link to="/">
                    <img src="/Oliveyoung-Logo.jpg" alt="Olive Young" className="logo" />
                </Link>
                <h2>오늘의 발견</h2>
            </div>
            <div className="filter-bar">
                {['#챌린지', '#삐끼삐끼', '#드루와드루와', '#좀비서버', '#올리브네트웍스', '#승승장구', '#Cwave3기 화이팅', '#1등은 우리조'].map((tag, index) => (
                    <button key={index} className="filter-button">{tag}</button>
                ))}
                <button className="add-button">+</button>
            </div>
            <p className="guide-text">관심있는 상품을 선택하고 관련 게시물을 추천 받아보세요!</p>
      
            <div className="video-grid">
                {posts.map(post => (
                    <div key={post.id} className="video-item">
                        <div className="video-container" onClick={() => toggleVideo(post.id)}>
                            <video 
                                ref={el => videoRefs.current[post.id] = el}
                                src={post.video}
                                loop
                                playsInline
                            >
                                Your browser does not support the video tag.
                            </video>
                            {playingVideo !== post.id && (
                                <div className="play-overlay">
                                    <span>▶</span>
                                </div>
                            )}
                        </div>
                        <div className="user-info">
                            <span className="username">{post.username}</span>
                        </div>
                        <p className="description">{post.description}</p>
                        <div className="engagement">
                            <span className="likes">좋아요 {post.likes}</span>
                            <span className="comments">댓글 {post.comments}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="load-more">+</button>
        </div>
    );
};

export default TodaysDiscovery;