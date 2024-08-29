import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './TodayDiscovery.css';

const TodaysDiscovery = () => {
    const [playingVideo, setPlayingVideo] = useState(null);
    const videoRefs = useRef({});

    const posts = [
        {
          id: 1,
          type: 'video',
          media: './whattimedev.mp4',
          username: 'youregerm',
          description: '개발자 현실.. 죽어도 프론트는 안한다',
          likes: 8000,
          comments: 40
        },
        {
          id: 2,
          type: 'image',
          media: ['/group5_1.jpg', '/group5_2.jpg'],
          username: 'makevely',
          description: '롬x 블러셔 신상 리뷰',
          likes: 8,
          comments: 2
        },
        {
            id: 3,
            type: 'video',
            media: './maratanghuru.mp4',
            username: 'team_druwa',
            description: '김진수멘토님\n 제발 마루샤브..너무 먹고싶어요ㅠ',
            likes: 8000,
            comments: 40
        },
        {
            id: 4,
            type: 'video',
            media: './PIGGIPIGGI.mp4',
            username: 'team_druwa',
            description: '이주은? ㄴㄴ 5조? ㅇㅇ',
            likes: 8,
            comments: 2
        },
        {
            id: 8,
            type: 'image',
            media: ['/group5_6.jpg'],
            username: 'juh001',
            description: '멘토님 사랑합니다!!!',
            likes: 8,
            comments: 2
        },
        {
            id: 5,
            type: 'video',
            media: './jigubangwidae.mp4',
            username: 'team_druwa',
            description: '지구는 우리가 지킨다.\n 우리만 믿어.',
            likes: '9K',
            comments: 8400
        },
        {
            id: 6,
            type: 'image',
            media: ['/group5_3.jpg', '/group5_4.jpg'],
            username: 'ji9ooo',
            description: '인기 립 발색 비교샷@@@',
            likes: 8,
            comments: 2
        },
        {
            id: 7,
            type: 'image',
            media: ['/group5_5.jpg'],
            username: 'yesuliya',
            description: '프로젝트 시작,,,',
            likes: 8,
            comments: 2
        },
        {
            id: 8,
            type: 'video',
            media: ['/POPIPOPI.mp4'],
            username: '뽀삐뽀삐뽀',
            description: '침묵과 공포의 뽀삐뽀삐뽀',
            likes: '99K',
            comments: 2000
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

    const toggleFullScreen = (id, event) => {
        event.stopPropagation();
        const video = videoRefs.current[id];
        if (!document.fullscreenElement) {
            if (video.requestFullscreen) {
                video.requestFullscreen();
            } else if (video.mozRequestFullScreen) { // Firefox
                video.mozRequestFullScreen();
            } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
                video.webkitRequestFullscreen();
            } else if (video.msRequestFullscreen) { // IE/Edge
                video.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) { // Firefox
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) { // Chrome, Safari and Opera
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) { // IE/Edge
                document.msExitFullscreen();
            }
        }
    };

    const ImageGallery = ({ images }) => {
        const [currentIndex, setCurrentIndex] = useState(0);

        const nextImage = (e) => {
            e.stopPropagation();
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        };

        const prevImage = (e) => {
            e.stopPropagation();
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
        };

        return (
            <div className="video-container image-gallery">
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                <div className="image-counter">{`${currentIndex + 1}/${images.length}`}</div>
                <button className="gallery-nav prev" onClick={prevImage}>&#10094;</button>
                <button className="gallery-nav next" onClick={nextImage}>&#10095;</button>
            </div>
        );
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
                        {post.type === 'video' ? (
                            <div className="video-container" onClick={() => toggleVideo(post.id)}>
                                <video 
                                    ref={el => videoRefs.current[post.id] = el}
                                    src={post.media}
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
                                <button className="fullscreen-button" onClick={(e) => toggleFullScreen(post.id, e)}>
                                  ⛶
                                </button>
                            </div>
                        ) : (
                            <ImageGallery images={post.media} />
                        )}
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

