import React, { useState } from 'react';
import { Play, Film } from 'lucide-react';
import VideoModal from './VideoModal';

export default function Portfolio() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoProjects = [
    {
      id: 'video-1',
      src: '/videos/video1.mp4',
    },
    {
      id: 'video-2',
      src: '/videos/video2.mp4',
    },
    {
      id: 'video-3',
      src: '/videos/video3.mp4',
    },
  ];

  const handleCardClick = (project) => {
    setSelectedVideo(project);
  };

  return (
    <section
      id="work"
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #F5F5F5',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '640px', marginBottom: '48px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.825rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#777777',
              marginBottom: '12px',
            }}
          >
            <Film size={14} />
            <span>Featured Work</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#111111',
              marginBottom: '16px',
            }}
          >
            Crafted for Impact.
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#777777', lineHeight: 1.6 }}>
            Selected video editing projects showcasing storytelling, sound design, and color grading refined in DaVinci Resolve.
          </p>
        </div>

        {/* Video Grid: Only Video and Play Button */}
        <div
          className="portfolio-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            maxWidth: '1040px',
            margin: '0 auto',
            gap: '32px',
          }}
        >
          {videoProjects.map((project) => (
            <div
              key={project.id}
              className="video-card"
              onClick={() => handleCardClick(project)}
              role="button"
              tabIndex={0}
              aria-label="Play video project"
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardClick(project);
                }
              }}
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '9 / 16',
                backgroundColor: '#000000',
                borderRadius: '20px',
                cursor: 'pointer',
                overflow: 'hidden',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
                border: '2.5px solid #222222',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* HTML5 Video element */}
              <video
                src={`${project.src}#t=0.001`}
                preload="metadata"
                playsInline
                muted
                onLoadedMetadata={(e) => {
                  if (e.target.currentTime === 0) e.target.currentTime = 0.1;
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.currentTime = 0.5;
                  e.target.play().catch(() => {});
                }}
                onMouseLeave={(e) => {
                  e.target.pause();
                  e.target.currentTime = 0.5;
                }}
              />

              {/* Centered Play Button Overlay */}
              <div className="play-overlay-btn" aria-hidden="true">
                <Play size={26} style={{ marginLeft: '3px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Cinema Lightbox Modal */}
      {selectedVideo && (
        <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </section>
  );
}
