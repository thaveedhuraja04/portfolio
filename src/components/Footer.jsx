import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #ECECEC',
        padding: '50px 0 40px 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          {/* Brand & Personal Attribution */}
          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111111', letterSpacing: '-0.02em' }}>
              Thaveedhu Raja
            </div>
            <div style={{ fontSize: '0.875rem', color: '#777777', marginTop: '4px' }}>
              Freelance Video Editor | Tirunelveli
            </div>
          </div>

          {/* Copyright text exact as specified */}
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.875rem', color: '#888888' }}>
              &copy; 2026 Thaveedhu Raja. All rights reserved.
            </p>
          </div>

          {/* Scroll to Top button */}
          <div>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '9px 18px',
                borderRadius: '9999px',
                backgroundColor: '#F8F8F8',
                border: '1px solid #ECECEC',
                color: '#333333',
                fontSize: '0.825rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EEEEEE';
                e.currentTarget.style.borderColor = '#CCCCCC';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#F8F8F8';
                e.currentTarget.style.borderColor = '#ECECEC';
              }}
            >
              Back to Top
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
