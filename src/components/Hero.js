'use client';
import { useState, useEffect } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight, Play, Zap, Trophy, ShieldCheck, Download, Shield
} from 'lucide-react';

// 5 HIGH-RESOLUTION 1376 x 768 WIDESCREEN BANNER SLIDES - FULLY VISIBLE & BALANCED
const BANNER_SLIDES = [
  {
    id: "tourney-1",
    badge: "UPMI • UNKNOWN PEOPLE MEET & INTERACT",
    badgeColor: "#00e676",
    headlineLine1: "Where Unknown Gamers Meet.",
    headlineLine2: "Interact, Team Up & Win Together.",
    description: "UPMI stands for 'Unknown People Meet & Interact' — India's premier social gaming platform where unknown players connect, discover squadmates, and drop into custom rooms.",
    image: "/assets/bgmi_banner1_unique.jpg",
    accentColor: "#00e575",
    buttonTextColor: "#070b14",
    gradient: "linear-gradient(135deg, #00e676 0%, #00c853 100%)",
    glowColor: "rgba(0, 229, 117, 0.45)",
    ctaPrimary: "Find Squad & Meet Gamers",
    ctaSecondary: "Community Arena"
  },
  {
    id: "tourney-2",
    badge: "UNKNOWN PEOPLE MEET & INTERACT • SQUAD ROOMS",
    badgeColor: "#00f0ff",
    headlineLine1: "Meet Unknown Squadmates.",
    headlineLine2: "Drop Into Night Custom Rooms.",
    description: "No gamer plays alone on UPMI. Connect with thousands of active players across India, jump into automated 25-slot custom lobbies, and build lasting friendships.",
    image: "/assets/bgmi_banner2.jpg",
    accentColor: "#00f0ff",
    buttonTextColor: "#070b14",
    gradient: "linear-gradient(135deg, #00f0ff 0%, #00b4d8 100%)",
    glowColor: "rgba(0, 240, 255, 0.45)",
    ctaPrimary: "Join Custom Rooms",
    ctaSecondary: "Slot Flyer Maker"
  },
  {
    id: "tourney-3",
    badge: "INDIA'S SOCIAL GAMING PLATFORM",
    badgeColor: "#ffb800",
    headlineLine1: "Connect. Chat. Compete.",
    headlineLine2: "The Gaming Platform For Everyone.",
    description: "Whether you play for fun, want friendly scrims, or are looking for your permanent 4-player roster, UPMI is built for gamers to meet and interact.",
    image: "/assets/bgmi_banner3.jpg",
    accentColor: "#ffb800",
    buttonTextColor: "#070b14",
    gradient: "linear-gradient(135deg, #ffb800 0%, #ff8800 100%)",
    glowColor: "rgba(255, 184, 0, 0.45)",
    ctaPrimary: "Explore Community",
    ctaSecondary: "Download APK"
  },
  {
    id: "tourney-4",
    badge: "ALL-INDIA GAMER NETWORK",
    badgeColor: "#ff3366",
    headlineLine1: "Never Play With Randoms Alone.",
    headlineLine2: "Find Your Permanent Roster Today.",
    description: "Meet verified players matching your gameplay style and language. Team up, strategize over voice chat, and conquer battlegrounds together.",
    image: "/assets/bgmi_banner4.jpg",
    accentColor: "#ff3366",
    buttonTextColor: "#ffffff",
    gradient: "linear-gradient(135deg, #ff3366 0%, #e11d48 100%)",
    glowColor: "rgba(255, 51, 102, 0.55)",
    ctaPrimary: "Find Squad Now",
    ctaSecondary: "Slot Flyer Maker"
  },
  {
    id: "tourney-5",
    badge: "UPMI GAMING COMMUNITY",
    badgeColor: "#a855f7",
    headlineLine1: "Meet People. Build Clans.",
    headlineLine2: "Level Up Your Gaming Network.",
    description: "From custom match flyers to daily community rooms, UPMI brings unknown players together into active, thriving gaming networks.",
    image: "/assets/bgmi_banner5.jpg",
    accentColor: "#a855f7",
    buttonTextColor: "#ffffff",
    gradient: "linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)",
    glowColor: "rgba(168, 85, 247, 0.55)",
    ctaPrimary: "Meet Gamers Now",
    ctaSecondary: "Download APK"
  }
];

export default function Hero({ onOpenRegister }) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Safe clamped index to prevent any out-of-bounds errors
  const safeIndex = (activeSlide >= 0 && activeSlide < BANNER_SLIDES.length)
    ? activeSlide
    : (activeSlide % BANNER_SLIDES.length + BANNER_SLIDES.length) % BANNER_SLIDES.length;
  const slide = BANNER_SLIDES[safeIndex] || BANNER_SLIDES[0];

  // Auto rotate banner slides every 3 seconds with buttery smooth transition
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % BANNER_SLIDES.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  };

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      minWidth: '100%',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      
      {/* FULL-BLEED HERO BANNER: SLEEK PROPORTIONATE HEIGHT & FULL WIDTH */}
      <div 
        style={{
          position: 'relative',
          width: '100%',
          height: 'clamp(420px, 64vh, 500px)',
          minHeight: '420px',
          maxHeight: '500px',
          overflow: 'hidden',
          backgroundColor: '#070b14',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* ALL 3 BANNER IMAGES IDENTICALLY SIZED (1376x768) WITH SMOOTH CROSSFADE */}
        <div style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          zIndex: 1,
          pointerEvents: 'none'
        }}>
          {BANNER_SLIDES.map((s, idx) => {
            const isActive = activeSlide === idx;
            return (
              <img 
                key={s.id}
                src={s.image} 
                alt={s.headlineLine1} 
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.025)',
                  transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  display: 'block'
                }} 
              />
            );
          })}

          {/* Translucent cinematic gradient: BG image is clearly visible on the left side too */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, rgba(7, 11, 20, 0.6) 0%, rgba(7, 11, 20, 0.4) 45%, rgba(7, 11, 20, 0.12) 80%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>

          {/* Subtle Top & Bottom Fades for seamless integration */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '50px',
            background: 'linear-gradient(to bottom, rgba(7, 11, 20, 0.4) 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '50px',
            background: 'linear-gradient(to top, rgba(7, 11, 20, 0.5) 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none'
          }}></div>
        </div>

        {/* LEFT NAVIGATION ARROW */}
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="hero-nav-arrow interactive-chip"
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(10, 14, 23, 0.8)',
            border: '1.5px solid rgba(255, 255, 255, 0.25)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 20,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.7)'
          }}
        >
          <ChevronLeft size={22} />
        </button>

        {/* RIGHT NAVIGATION ARROW */}
        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="hero-nav-arrow interactive-chip"
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(10, 14, 23, 0.8)',
            border: '1.5px solid rgba(255, 255, 255, 0.25)',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 20,
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.7)'
          }}
        >
          <ChevronRight size={22} />
        </button>

        {/* MAIN HERO CONTENT - ALIGNED WITH HEADER LOGO */}
        <div style={{
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 28px',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center'
        }}>
          <div 
            key={`content-${activeSlide}`}
            style={{
              maxWidth: '660px',
              animation: 'text-fade-in 0.35s ease-out'
            }}
          >
            {/* Top Pill Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '5px 13px',
              borderRadius: '9999px',
              backgroundColor: `${slide?.badgeColor || '#00e676'}14`,
              border: `1px solid ${slide?.badgeColor || '#00e676'}40`,
              boxShadow: `0 2px 10px ${slide?.badgeColor || '#00e676'}20`,
              marginBottom: '16px'
            }}>
              {/* Pulsing Dot */}
              <span style={{
                position: 'relative',
                display: 'inline-flex',
                width: '7px',
                height: '7px'
              }}>
                <span style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  backgroundColor: slide?.badgeColor || '#00e676',
                  opacity: 0.75,
                  animation: 'radar-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite'
                }}></span>
                <span style={{
                  position: 'relative',
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: slide?.badgeColor || '#00e676',
                  boxShadow: `0 0 8px ${slide?.badgeColor || '#00e676'}`
                }}></span>
              </span>

              <Zap size={12} color={slide?.badgeColor || '#00e676'} />

              <span style={{
                fontSize: '10.5px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}>
                {slide?.badge || "INDIA'S #1 COMPETITIVE ESPORTS PLATFORM"}
              </span>
            </div>

            {/* Headline - Clean 2-Line Title Case with High Contrast & Professional Legibility */}
            <h1 style={{
              fontSize: 'clamp(28px, 3.8vw, 46px)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '22px'
            }}>
              <span style={{
                display: 'inline-block',
                color: '#ffffff',
                textShadow: '0 2px 4px rgba(0, 0, 0, 1), 0 4px 18px rgba(0, 0, 0, 0.95), 0 8px 30px rgba(0, 0, 0, 0.85)'
              }}>
                {slide?.headlineLine1}
              </span>
              <br />
              <span style={{
                display: 'inline-block',
                color: slide?.accentColor || '#00f0ff',
                textShadow: `0 2px 4px rgba(0, 0, 0, 1), 0 4px 18px rgba(0, 0, 0, 0.95), 0 8px 30px rgba(0, 0, 0, 0.85), 0 0 35px ${slide?.glowColor || 'rgba(0, 240, 255, 0.55)'}`
              }}>
                {slide?.headlineLine2}
              </span>
            </h1>

            {/* Action Buttons - Moved from Header to Hero Banner */}
            <div className="hero-buttons-container" style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '12px'
            }}>
              {/* GET APK Button (Clean High-Contrast White) */}
              <a
                href="/downloads/stgapp-release.apk"
                download="stgapp-release.apk"
                className="interactive-chip"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 22px',
                  borderRadius: '10px',
                  backgroundColor: '#ffffff',
                  color: '#070b14',
                  fontSize: '13.5px',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 4px 18px rgba(255, 255, 255, 0.25), 0 2px 8px rgba(0, 0, 0, 0.4)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Download size={16} color="#070b14" strokeWidth={2.4} />
                <span>GET APK</span>
              </a>

              {/* REGISTER SQUAD Button (Brand Red) */}
              <button
                onClick={() => onOpenRegister(slide?.id || 'tourney-1')}
                className="interactive-chip shimmer-container"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '11px 24px',
                  borderRadius: '10px',
                  backgroundColor: '#ff2a44',
                  background: 'linear-gradient(135deg, #ff2a44 0%, #d8142c 100%)',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 6px 24px rgba(255, 42, 68, 0.45)',
                  transition: 'all 0.25s ease'
                }}
              >
                <Shield size={16} color="#ffffff" strokeWidth={2.4} />
                <span>REGISTER SQUAD</span>
              </button>
            </div>

          </div>
        </div>

        {/* SLIDE PAGINATION PILL DOTS (Bottom Left aligned with text) */}
        <div style={{
          position: 'absolute',
          bottom: '24px',
          left: '0',
          right: '0',
          zIndex: 15,
          pointerEvents: 'none'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 28px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            pointerEvents: 'auto'
          }}>
            {BANNER_SLIDES.map((s, idx) => {
              const isCurrent = activeSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Switch to slide ${idx + 1}`}
                  style={{
                    width: isCurrent ? '26px' : '8px',
                    height: '5px',
                    borderRadius: '9999px',
                    backgroundColor: isCurrent ? (slide?.accentColor || '#00e575') : 'rgba(255, 255, 255, 0.3)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: isCurrent ? `0 0 10px ${slide?.accentColor || '#00e575'}` : 'none'
                  }}
                />
              );
            })}
          </div>
        </div>

      </div>

      {/* Global Platform Counters Below Hero (Visible on scrolling down) */}
      <div style={{
        backgroundColor: '#0a0e17',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '24px 20px',
        position: 'relative',
        zIndex: 10
      }}>
        <div className="stats-counter-grid" style={{
          maxWidth: '1280px',
          margin: '0 auto',
          gap: '14px'
        }}>
          {[
            { value: '50,000+', label: 'Unknown Gamers Connected', color: '#00f0ff' },
            { value: '18,500+', label: 'Squads Met & Interacted', color: '#ff2a44' },
            { value: '25-Slot', label: 'Daily Custom Match Rooms', color: '#ffb800' },
            { value: '100%', label: 'Friendly & Safe Community', color: '#00e676' }
          ].map((stat, idx) => (
            <div 
              key={idx}
              className="card stats-counter-card"
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.65)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div className="font-display stats-counter-value" style={{ fontSize: '28px', fontWeight: 900, color: stat.color, lineHeight: 1.1 }}>
                {stat.value}
              </div>
              <div className="stats-counter-label" style={{ fontSize: '11px', color: 'var(--text-secondary)', textTransform: 'uppercase', fontWeight: 800, marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
