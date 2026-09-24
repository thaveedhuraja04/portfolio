import React from 'react';
import { User, MapPin, Calendar, Monitor, CheckCircle2 } from 'lucide-react';

export default function About() {
  const details = [
    {
      icon: <Calendar size={20} color="#111111" />,
      label: 'Experience',
      value: '2 Years',
      sub: 'Freelance Editing & Post-Production',
    },
    {
      icon: <MapPin size={20} color="#111111" />,
      label: 'Location',
      value: 'Tirunelveli, India',
      sub: 'Available for Remote Collaborations',
    },
    {
      icon: <Monitor size={20} color="#111111" />,
      label: 'Software',
      value: 'DaVinci Resolve',
      sub: 'Editorial, Color Page & Fairlight Audio',
    },
  ];

  return (
    <section
      id="about"
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #F5F5F5',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '60px',
            alignItems: 'center',
          }}
        >
          {/* Left Column: Story & Philosophy */}
          <div>
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
              <User size={14} />
              <span>Personal Profile</span>
            </div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#111111',
                marginBottom: '24px',
              }}
            >
              A Little About Me
            </h2>

            <p
              style={{
                fontSize: '1.075rem',
                lineHeight: 1.75,
                color: '#555555',
                marginBottom: '28px',
              }}
            >
              I'm a freelance video editor passionate about transforming ideas into engaging visual stories. With 2 years of experience using DaVinci Resolve, I focus on storytelling, sound design, and color grading to create impactful video content.
            </p>

            <p
              style={{
                fontSize: '0.975rem',
                lineHeight: 1.7,
                color: '#777777',
                marginBottom: '36px',
              }}
            >
              Working as an independent freelancer allows me to give every cut my direct, undivided creative dedication. From initial assembly to precise sound layering and polished color grading, I collaborate closely with clients to turn raw footage into compelling motion.
            </p>

            {/* Core Freelancer Commitments */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
              }}
            >
              {[
                'Direct communication & fast turnaround',
                'Precision sound design & clean audio balance',
                'Professional DaVinci Resolve color science',
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 size={18} color="#333333" />
                  <span style={{ fontSize: '0.925rem', color: '#333333', fontWeight: 500 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Minimal Details Cards */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {details.map((detail, idx) => (
              <div
                key={idx}
                className="card-clean"
                style={{
                  padding: '28px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #ECECEC',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    backgroundColor: '#F7F7F7',
                    border: '1px solid #ECECEC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {detail.icon}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      color: '#888888',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '4px',
                    }}
                  >
                    {detail.label}
                  </div>
                  <div
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: '#111111',
                      letterSpacing: '-0.02em',
                      marginBottom: '4px',
                    }}
                  >
                    {detail.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#777777' }}>
                    {detail.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
