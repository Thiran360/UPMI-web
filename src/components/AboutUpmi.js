'use client';
import { Users, MessageSquare, Gamepad2, Sparkles, HeartHandshake, Compass } from 'lucide-react';

export default function AboutUpmi() {
  const letters = [
    {
      letter: 'U',
      word: 'UNKNOWN',
      color: '#00e5ff',
      tagline: 'Break The Solitary Barrier',
      desc: 'Step beyond solo queues and random matchmaking. Discover thousands of passionate mobile gamers from across India who share your love for gaming.'
    },
    {
      letter: 'P',
      word: 'PEOPLE',
      color: '#ff2a44',
      tagline: '50,000+ Real Gamers',
      desc: 'A safe, verified community of everyday players, clan leaders, competitive enthusiasts, and battle royale lovers ready to connect and play.'
    },
    {
      letter: 'M',
      word: 'MEET',
      color: '#ffb800',
      tagline: 'Find Your Dream Squad',
      desc: 'Match with players based on your favorite game, playstyle, active hours, and language. Turn strangers into your permanent 4-player team.'
    },
    {
      letter: 'I',
      word: 'INTERACT',
      color: '#00e676',
      tagline: 'Chat, Voice & Compete',
      desc: 'Engage through live community polls, voice lobbies, 25-slot custom rooms, match flyers, and celebration of every victory together.'
    }
  ];

  return (
    <section id="about-upmi" style={{
      padding: '48px 20px',
      background: 'linear-gradient(180deg, #0a0e17 0%, #0d1322 50%, #080c14 100%)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '300px',
        backgroundColor: 'rgba(0, 229, 255, 0.08)',
        filter: 'blur(150px)',
        pointerEvents: 'none'
      }}></div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Banner Announcement Pill */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 18px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 184, 0, 0.12)',
            border: '1.5px solid #ffb800',
            boxShadow: '0 0 20px rgba(255, 184, 0, 0.25)',
            marginBottom: '12px'
          }}>
            <HeartHandshake size={16} color="#ffb800" />
            <span style={{
              fontSize: '12px',
              fontWeight: 900,
              letterSpacing: '0.12em',
              color: '#ffffff',
              textTransform: 'uppercase'
            }}>
              THE HEART OF OUR GAMING PLATFORM
            </span>
          </div>

          <h2 className="font-display" style={{
            fontSize: 'clamp(26px, 3.4vw, 42px)',
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.15,
            letterSpacing: '0.02em'
          }}>
            What Is <span style={{ color: '#00e5ff' }}>UPMI</span>?
          </h2>

          <div style={{
            display: 'inline-block',
            marginTop: '8px',
            fontSize: 'clamp(15px, 2vw, 20px)',
            fontWeight: 800,
            background: 'linear-gradient(90deg, #00e5ff 0%, #ff2a44 35%, #ffb800 70%, #00e676 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '0.04em'
          }}>
            UNKNOWN PEOPLE MEET &amp; INTERACT
          </div>

          <p style={{
            color: '#cbd5e1',
            fontSize: '14.5px',
            maxWidth: '680px',
            margin: '12px auto 0',
            lineHeight: 1.6
          }}>
            UPMI is not a cold tournament league. It is a <strong>vibrant social gaming platform</strong> built so unknown gamers across India can connect, team up, chat, play custom rooms, and turn random strangers into lifelong gaming friends.
          </p>
        </div>

        {/* 4 Interactive Acronym Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px'
        }}>
          {letters.map((item, idx) => (
            <div
              key={idx}
              className="card interactive-chip"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                backdropFilter: 'blur(12px)',
                borderRadius: '16px',
                border: `1.5px solid ${item.color}35`,
                padding: '24px 20px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: `0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = item.color;
                e.currentTarget.style.boxShadow = `0 12px 32px rgba(0,0,0,0.7), 0 0 25px ${item.color}40`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = `${item.color}35`;
                e.currentTarget.style.boxShadow = `0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)`;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Massive Glowing Initial */}
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px',
                marginBottom: '10px'
              }}>
                <span className="font-display" style={{
                  fontSize: '48px',
                  fontWeight: 900,
                  color: item.color,
                  lineHeight: 1,
                  textShadow: `0 0 25px ${item.color}80`
                }}>
                  {item.letter}
                </span>
                <span className="font-display" style={{
                  fontSize: '18px',
                  fontWeight: 900,
                  color: '#ffffff',
                  letterSpacing: '0.06em'
                }}>
                  — {item.word}
                </span>
              </div>

              <div style={{
                fontSize: '11px',
                fontWeight: 800,
                color: item.color,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '8px'
              }}>
                {item.tagline}
              </div>

              <p style={{
                fontSize: '13px',
                color: '#94a3b8',
                lineHeight: 1.55,
                margin: 0
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
