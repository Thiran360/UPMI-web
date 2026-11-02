'use client';
import { Shield, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#05070a',
      borderTop: '1px solid var(--border-subtle)',
      padding: '60px 20px 30px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '2px solid rgba(255, 51, 75, 0.7)',
                boxShadow: '0 0 20px rgba(255, 51, 75, 0.4)',
                backgroundColor: '#000'
              }}>
                <img src="/assets/logo.png" alt="UPMI Esports Logo" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="font-display" style={{ fontSize: '22px', fontWeight: 900, color: '#fff' }}>
                UPMI <span style={{ color: '#00e5ff' }}>PLATFORM</span>
              </div>
            </div>

            <div style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: '6px',
              backgroundColor: 'rgba(255, 184, 0, 0.1)',
              border: '1px solid rgba(255, 184, 0, 0.35)',
              color: '#ffb800',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              marginBottom: '12px'
            }}>
              Unknown People Meet &amp; Interact
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '13.5px', lineHeight: 1.6, marginBottom: '20px' }}>
              UPMI is a social gaming platform created for gamers to meet, interact, find teammates, and play together in custom lobbies and community matches.
            </p>

            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
              Package: <code>com.stg_app</code> • Release v1.0
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="font-display" style={{ fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Competitive Navigation
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#tournaments" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Live Scrims Schedule</a></li>
              <li><a href="#tournaments" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Cash Prize Tournaments</a></li>
              <li><a href="#flyer-maker" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Slot List Flyer Maker</a></li>
              <li><a href="#talent" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Hire BGMI Coaches</a></li>
              <li><a href="#squad-finder" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Squad Finder (LFT/LFP)</a></li>
              <li><a href="#pro-club" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>PRO Club Membership</a></li>
            </ul>
          </div>

          {/* Official Disclaimers from APK */}
          <div>
            <div className="font-display" style={{ fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Official Community Policies
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <p>
                <strong>Fair Play:</strong> Any form of cheating, toxicity, or harassment in tournaments will result in an immediate permanent ban.
              </p>
              <p>
                <strong>Age Eligibility:</strong> Users must be 13 years or older to participate in cash prize tournaments.
              </p>
              <p>
                <strong>Refunds:</strong> PRO memberships and paid tournament entries are non-refundable unless specified otherwise.
              </p>
            </div>
          </div>

          {/* Krafton / IP Disclaimer */}
          <div>
            <div className="font-display" style={{ fontSize: '16px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>
              Gaming Disclaimer
            </div>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
              Battlegrounds Mobile India (BGMI) is a registered trademark of KRAFTON, Inc. Free Fire is a trademark of Garena. UPMI / STG Esports is a grassroots community competition and scrim management platform.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--accent-emerald)' }}>
              <Shield size={16} />
              <span>Official Community Guidelines Compliant</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '13px',
          color: 'var(--text-muted)'
        }}>
          <div>
            © 2026 UPMI ESPORTS (STG App). All rights reserved.
          </div>
          <div>
            Engineered with modern Next.js &amp; Vanilla CSS • Built for Esports Excellence
          </div>
        </div>

      </div>
    </footer>
  );
}
