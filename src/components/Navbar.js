'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Trophy, Swords, Palette, Users, Sparkles, Download, Menu, X, Shield, Vote, HeartHandshake } from 'lucide-react';

export default function Navbar({ onOpenRegister }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        zIndex: 9999,
        backgroundColor: 'rgba(10, 14, 23, 0.95)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
      }}>
      <div style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '0 20px',
        height: '74px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px'
      }}>
        {/* Brand Logo with Metallic Red Glow */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '12px',
            overflow: 'hidden',
            border: '2px solid rgba(255, 51, 75, 0.7)',
            boxShadow: '0 0 20px rgba(255, 51, 75, 0.4), 0 4px 14px rgba(0, 0, 0, 0.6)',
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img 
              src="/assets/logo.png" 
              alt="UPMI Platform Official Logo" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          </div>
          <div>
            <div className="font-display" style={{
              fontSize: '20px',
              fontWeight: 900,
              letterSpacing: '0.06em',
              lineHeight: 1.1,
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>UPMI</span>
              <span style={{ color: '#00e5ff' }}>PLATFORM</span>
            </div>
            <div style={{
              fontSize: '9.5px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              color: '#ffb800',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              Unknown People Meet &amp; Interact
            </div>
          </div>
        </Link>

        {/* Desktop Navigation - Spatially Occupies Header Proportionately */}
        <nav style={{
          display: 'none',
          alignItems: 'center',
          justifyContent: 'flex-end',
          flex: 1,
          gap: 'clamp(6px, 0.9vw, 12px)'
        }} className="desktop-nav">
          
          <a href="#about-upmi" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <HeartHandshake size={15} color="#00e5ff" />
            <span>About UPMI</span>
          </a>

          <a href="#tournaments" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <Trophy size={15} color="#ff334b" />
            <span>Tournaments</span>
          </a>

          <a href="#community-hub" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <Vote size={15} color="#00e676" />
            <span>Community Poll</span>
          </a>

          <a href="#flyer-maker" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <Palette size={15} color="#00e5ff" />
            <span>Flyer Maker</span>
          </a>

          <a href="#talent" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <Users size={15} color="#ffb800" />
            <span>Talent</span>
          </a>

          <a href="#squad-finder" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <Swords size={15} color="#c084fc" />
            <span>Squad Finder</span>
          </a>

          <a href="#pro-club" className="nav-chip" style={{
            color: '#e2e8f0',
            textDecoration: 'none',
            fontSize: 'clamp(12px, 0.92vw, 13.5px)',
            fontWeight: 800,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '7px clamp(8px, 0.9vw, 13px)',
            borderRadius: '10px',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            whiteSpace: 'nowrap'
          }}>
            <Sparkles size={15} color="#ffb800" />
            <span>PRO Club</span>
          </a>

          {/* Far-Right Live Community Pulse Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '7px',
            padding: '6px 12px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(0, 230, 118, 0.08)',
            border: '1px solid rgba(0, 230, 118, 0.3)',
            fontSize: '11.5px',
            fontWeight: 800,
            color: '#ffffff',
            marginLeft: '4px',
            flexShrink: 0,
            boxShadow: '0 0 12px rgba(0, 230, 118, 0.15)'
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: '#00e676',
              boxShadow: '0 0 8px #00e676',
              display: 'inline-block'
            }}></span>
            <span style={{ color: '#00e676', fontWeight: 900 }}>3,840</span>
            <span style={{ color: '#94a3b8', fontSize: '10.5px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>LIVE</span>
          </div>

        </nav>

        {/* Mobile Menu Toggle (Header Buttons moved to Hero Banner) */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#ffffff',
              cursor: 'pointer',
              display: 'flex',
              padding: '6px'
            }}
            className="mobile-toggle"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#0f1624',
          borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
          padding: '24px 20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px'
        }}>
          <a 
            href="#about-upmi" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <HeartHandshake size={18} color="#00e5ff" />
            About UPMI (Unknown People Meet &amp; Interact)
          </a>
          <a 
            href="#tournaments" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Trophy size={18} color="#ff334b" />
            Tournaments &amp; Live Scrims
          </a>
          <a 
            href="#community-hub" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Vote size={18} color="#00e676" />
            Fan MVP Poll &amp; BGIS Calculator
          </a>
          <a 
            href="#flyer-maker" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Palette size={18} color="#00e5ff" />
            Slot Flyer &amp; Poster Maker
          </a>
          <a 
            href="#talent" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Users size={18} color="#ffb800" />
            Talent Marketplace (Coaches &amp; Casters)
          </a>
          <a 
            href="#squad-finder" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Swords size={18} color="#c084fc" />
            Squad Finder (LFT/LFP)
          </a>
          <a 
            href="#pro-club" 
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: '#ffffff', textDecoration: 'none', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            <Sparkles size={18} color="#ffb800" />
            PRO Club &amp; Store
          </a>
          <a 
            href="/downloads/stgapp-release.apk" 
            download="stgapp-release.apk"
            className="btn btn-cyan"
            style={{ marginTop: '10px', width: '100%', padding: '12px' }}
          >
            <Download size={18} />
            Download Android APK (84.9 MB)
          </a>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        .nav-chip {
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-chip:hover {
          background-color: rgba(255, 255, 255, 0.12) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </header>
      {/* Spacer so page content starts cleanly below the fixed header */}
      <div style={{ height: '74px', width: '100%', flexShrink: 0 }} aria-hidden="true" />
    </>
  );
}