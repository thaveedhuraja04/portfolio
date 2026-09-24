import React from 'react';
import { ArrowDown, Sparkles, Film, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id) => {
    if (id === 'contact') {
      const el = document.getElementById('contact-channels') || document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '130px',
        paddingBottom: '80px',
        backgroundColor: '#FFFFFF',
        position: 'relative',
      }}
    >
      <div className="container" style={{ textAlign: 'center', maxWidth: '880px' }}>
        {/* Subtle Label / Status Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '7px 16px',
            backgroundColor: '#FAFAFA',
            border: '1px solid #ECECEC',
            borderRadius: '9999px',
            marginBottom: '28px',
          }}
          className="animate-fade-in"
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#22C55E',
              display: 'inline-block',
              boxShadow: '0 0 0 3px rgba(34, 197, 94, 0.15)',
            }}
          />
          <span style={{ fontSize: '0.85rem', fontWeight: 500, color: '#444444' }}>
            Freelance Video Editor | 2 Years of Experience
          </span>
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.75rem)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            color: '#111111',
            marginBottom: '24px',
          }}
        >
          Turning Ideas Into Motion.
        </h1>

        {/* Introduction */}
        <p
          style={{
            fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
            lineHeight: 1.65,
            color: '#777777',
            maxWidth: '680px',
            margin: '0 auto 36px auto',
            fontWeight: 400,
          }}
        >
          I'm Thaveedhu Raja, a freelance video editor from Tirunelveli with 2 years of experience. I specialize in storytelling, sound design, and color grading to create engaging and visually compelling videos.
        </p>

        {/* Action Buttons */}
        <div
          className="hero-buttons"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '56px',
          }}
        >
          <button
            onClick={() => scrollTo('work')}
            className="btn-primary"
            style={{
              minWidth: '175px',
            }}
          >
            View My Work
            <ArrowDown size={17} />
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className="btn-secondary"
            style={{
              minWidth: '185px',
            }}
          >
            Let's Work Together
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Micro Highlights strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid #F0F0F0',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <div style={{ padding: '8px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111' }}>2 Years</div>
            <div style={{ fontSize: '0.825rem', color: '#777777', marginTop: '2px' }}>Editing Experience</div>
          </div>
          <div style={{ padding: '8px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111' }}>DaVinci Resolve</div>
            <div style={{ fontSize: '0.825rem', color: '#777777', marginTop: '2px' }}>Primary Creative Suite</div>
          </div>
          <div style={{ padding: '8px' }}>
            <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111111' }}>Tirunelveli, India</div>
            <div style={{ fontSize: '0.825rem', color: '#777777', marginTop: '2px' }}>Remote Freelancer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
