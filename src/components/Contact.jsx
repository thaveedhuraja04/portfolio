import React, { useRef, useState } from 'react';
import { Mail, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';

const InstagramIcon = ({ size = 22, color = '#111111' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Contact() {
  const email = 'thaveedhurajapc@gmail.com';
  const instagramUrl = 'https://www.instagram.com/d4.studios?stkn=MTU2ZDJwYTJ6d2Rveg==';
  const instagramHandle = '@d4.studios';
  const phoneNumber = '6369823726';
  const whatsappUrl = 'https://wa.me/916369823726';
  const callUrl = 'tel:+916369823726';

  const channelsRef = useRef(null);
  const [highlight, setHighlight] = useState(false);

  const scrollToChannelsCenter = () => {
    if (channelsRef.current) {
      channelsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setHighlight(true);
      setTimeout(() => setHighlight(false), 2000);
    }
  };

  const channels = [
    {
      id: 'email',
      icon: <Mail size={24} color="#111111" />,
      label: 'Email',
      value: email,
      sub: 'Direct project inquiries & creative briefs',
      href: `mailto:${email}`,
      isExternal: false,
      btnLabel: 'Send Email',
    },
    {
      id: 'instagram',
      icon: <InstagramIcon size={24} color="#111111" />,
      label: 'Instagram',
      value: instagramHandle,
      sub: 'D4 Studios & portfolio updates',
      href: instagramUrl,
      isExternal: true,
      btnLabel: 'Open Instagram',
    },
    {
      id: 'whatsapp',
      icon: <MessageSquare size={24} color="#111111" />,
      label: 'WhatsApp',
      value: `+91 ${phoneNumber}`,
      sub: 'Instant chat & project discussions',
      href: whatsappUrl,
      isExternal: true,
      btnLabel: 'Open WhatsApp',
    },
  ];

  return (
    <section
      id="contact"
      className="section"
      style={{
        backgroundColor: '#FFFFFF',
        borderTop: '1px solid #F5F5F5',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Contact Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 60px auto' }}>
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
            <MessageSquare size={14} />
            <span>Get In Touch</span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              color: '#111111',
              marginBottom: '16px',
            }}
          >
            Have a Project in Mind?
          </h2>

          <p
            style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#666666',
              lineHeight: 1.6,
              marginBottom: '36px',
            }}
          >
            Let's work together and bring your ideas to life.
          </p>

          {/* Action buttons: Contact Me (centers cards) and Let's Talk (Call) */}
          <div
            className="contact-buttons-row"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
            }}
          >
            <button
              type="button"
              onClick={scrollToChannelsCenter}
              className="btn-primary"
              style={{
                minWidth: '170px',
              }}
            >
              <Mail size={16} />
              Contact Me
            </button>

            <a
              href={callUrl}
              className="btn-secondary"
              style={{
                minWidth: '170px',
              }}
            >
              <Phone size={16} />
              Let's Talk
            </a>
          </div>
        </div>

        {/* Centered Direct Contact Channels (Email, Instagram, WhatsApp) */}
        <div
          id="contact-channels"
          ref={channelsRef}
          style={{
            maxWidth: '1040px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '24px',
            transition: 'all 0.4s ease',
          }}
        >
          {channels.map((ch) => (
            <a
              key={ch.id}
              href={ch.href}
              target={ch.isExternal ? '_blank' : undefined}
              rel={ch.isExternal ? 'noopener noreferrer' : undefined}
              className="card-clean"
              style={{
                flex: '1 1 290px',
                maxWidth: '330px',
                padding: '36px 28px',
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                border: highlight ? '1.5px solid #111111' : '1px solid #ECECEC',
                boxShadow: highlight ? '0 12px 30px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                textDecoration: 'none',
                color: 'inherit',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Centered Icon Container */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    backgroundColor: '#F8F8F8',
                    border: '1px solid #ECECEC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px',
                  }}
                >
                  {ch.icon}
                </div>

                {/* Centered Category Label */}
                <div
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#888888',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '6px',
                  }}
                >
                  {ch.label}
                </div>

                {/* Centered Value */}
                <div
                  style={{
                    fontSize: '1.075rem',
                    fontWeight: 700,
                    color: '#111111',
                    marginBottom: '8px',
                    wordBreak: 'break-all',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {ch.value}
                </div>

                {/* Centered Subtitle */}
                <p style={{ fontSize: '0.85rem', color: '#777777', lineHeight: 1.5, maxWidth: '240px' }}>
                  {ch.sub}
                </p>
              </div>

              {/* Centered Action Button */}
              <div style={{ marginTop: '28px', paddingTop: '18px', borderTop: '1px solid #F2F2F2', width: '100%' }}>
                <div
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '11px 20px',
                    fontSize: '0.875rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                  }}
                >
                  {ch.btnLabel}
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
