'use client';
import { Download, Smartphone, Bell, Shield, Wifi, Zap } from 'lucide-react';

export default function DownloadSection() {
  return (
    <section id="download-app" style={{
      padding: '36px 20px',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        <div style={{
          background: 'linear-gradient(135deg, #182235 0%, #0c121e 100%)',
          borderRadius: 'var(--radius-xl)',
          border: '1.5px solid rgba(255, 255, 255, 0.15)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 35px rgba(0, 229, 255, 0.18)',
          padding: 'clamp(18px, 4vw, 32px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 14px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
              color: '#164e63',
              fontSize: '11px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              marginBottom: '10px',
              border: '1.5px solid #67e8f9',
              boxShadow: '0 2px 10px rgba(0, 240, 255, 0.25)'
            }}>
              <Smartphone size={14} color="#0891b2" />
              <span>OFFICIAL ANDROID APP (RELEASE BUILD)</span>
            </div>

            <h2 className="font-display" style={{ fontSize: 'clamp(28px, 3.4vw, 38px)', fontWeight: 900, lineHeight: 1.15, marginBottom: '10px', color: '#ffffff' }}>
              Download <span className="text-gradient-cyan">UPMI Platform App</span>
            </h2>

            <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.5, marginBottom: '18px', maxWidth: '540px' }}>
              UPMI (Unknown People Meet &amp; Interact) connects gamers on the go. Get instant room ID notifications, real-time live squad chat, and match flyers directly on your Android phone.
            </p>

            {/* Feature List (Sleek Compact Pills) */}
            <div className="modal-grid-equal" style={{ gap: '10px', marginBottom: '22px' }}>
              {[
                { icon: Bell, label: "Instant Room ID Push", color: "#00e5ff" },
                { icon: Wifi, label: "Real-time Live Chat", color: "#10b981" },
                { icon: Shield, label: "Anti-Cheat Verified", color: "#ff334b" },
                { icon: Zap, label: "Auto Slot Flyer Export", color: "#ffb800" }
              ].map((feat, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  padding: '7px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}>
                  <feat.icon size={15} color={feat.color} />
                  <span style={{ fontSize: '12px', color: '#ffffff', fontWeight: 600 }}>{feat.label}</span>
                </div>
              ))}
            </div>

            {/* Download Button with File Specs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px' }}>
              <a 
                href="/downloads/stgapp-release.apk" 
                download="stgapp-release.apk"
                className="btn btn-cyan"
                style={{ padding: '11px 22px', fontSize: '14.5px' }}
              >
                <Download size={18} />
                <span>Download APK (84.9 MB)</span>
              </a>

              <div style={{ fontSize: '11.5px', color: '#94a3b8', lineHeight: 1.4 }}>
                <div><strong style={{ color: '#fff' }}>Package:</strong> com.stg_app</div>
                <div><strong style={{ color: '#fff' }}>Compatibility:</strong> Android 7.0+ (ARM64 / x86_64)</div>
              </div>
            </div>
          </div>

          {/* Mockup / Graphic: Square Proportioned Showcase Frame */}
          <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{
              width: '100%',
              maxWidth: '380px',
              aspectRatio: '1 / 1',
              borderRadius: '22px',
              border: '2.5px solid rgba(255, 255, 255, 0.22)',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.95), 0 0 35px rgba(0, 229, 255, 0.22)',
              backgroundColor: '#000',
              position: 'relative'
            }}>
              <img 
                src="/assets/airdrop_poster.jpg" 
                alt="UPMI Mobile App Poster" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  objectPosition: 'center 30%',
                  display: 'block' 
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1.5px solid #86efac',
                color: '#14532d',
                borderRadius: '12px',
                padding: '8px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                textAlign: 'left',
                boxShadow: '0 8px 24px rgba(0,0,0,0.45)'
              }}>
                <img 
                  src="/assets/logo.png" 
                  alt="UPMI Logo" 
                  style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1.5px solid rgba(255, 51, 75, 0.6)', backgroundColor: '#000', flexShrink: 0 }} 
                />
                <div>
                  <div className="font-display" style={{ fontSize: '14px', fontWeight: 900, color: '#14532d' }}>
                    stgapp-release.apk
                  </div>
                  <div style={{ fontSize: '10.5px', color: '#166534', fontWeight: 800 }}>
                    ✓ 100% Virus Free • Release Signed
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
