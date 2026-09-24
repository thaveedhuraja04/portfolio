import React from 'react';
import { Film, Volume2, Palette, Sparkles, Check } from 'lucide-react';

export default function Skills() {
  const skillsData = [
    {
      id: 'storytelling',
      icon: <Film size={26} color="#111111" strokeWidth={1.75} />,
      title: 'Storytelling',
      description: 'Creating engaging narratives that capture attention and connect with audiences.',
      highlights: ['Pacing & Rhythm', 'Emotional Arc', 'Audience Retention', 'Hook Construction'],
    },
    {
      id: 'sound-design',
      icon: <Volume2 size={26} color="#111111" strokeWidth={1.75} />,
      title: 'Sound Design',
      description: 'Enhancing videos with immersive audio, sound effects, and precise audio timing.',
      highlights: ['Audio Foley & SFX', 'Music Beat Sync', 'Dialogue Clarity', 'Dynamic Ducking'],
    },
    {
      id: 'color-grading',
      icon: <Palette size={26} color="#111111" strokeWidth={1.75} />,
      title: 'Color Grading',
      description: 'Creating a consistent visual mood through professional color correction and grading.',
      highlights: ['DaVinci Resolve Color Page', 'Skin Tone Perfection', 'Look LUT Creation', 'HDR & SDR Balance'],
    },
  ];

  return (
    <section
      id="skills"
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #F5F5F5',
      }}
    >
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto 60px auto' }}>
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
            <Sparkles size={14} />
            <span>Core Competencies</span>
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
            Areas of Expertise
          </h2>
          <p style={{ fontSize: '1.05rem', color: '#777777', lineHeight: 1.6 }}>
            Specialized post-production skills developed over 2 years of editing with DaVinci Resolve.
          </p>
        </div>

        {/* 3 Minimal Skill Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '28px',
          }}
        >
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="card-clean"
              style={{
                padding: '36px 30px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: '1px solid #ECECEC',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Minimal Icon Container */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: '#F8F8F8',
                    border: '1px solid #EAEAEA',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  {skill.icon}
                </div>

                {/* Skill Title */}
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#111111',
                    letterSpacing: '-0.02em',
                    marginBottom: '14px',
                  }}
                >
                  {skill.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: '#666666',
                    lineHeight: 1.65,
                    marginBottom: '28px',
                  }}
                >
                  {skill.description}
                </p>
              </div>

              {/* Highlights Pill List */}
              <div
                style={{
                  borderTop: '1px solid #F0F0F0',
                  paddingTop: '20px',
                }}
              >
                <div
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: '#999999',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '10px',
                  }}
                >
                  Key Highlights
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {skill.highlights.map((h, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '0.85rem',
                        color: '#444444',
                      }}
                    >
                      <Check size={14} color="#333333" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
