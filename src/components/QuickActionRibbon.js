'use client';
import { Trophy, Palette, Users, Calculator, Vote, Sparkles, Smartphone, Flame } from 'lucide-react';

export default function QuickActionRibbon() {
  const actions = [
    {
      label: "Live Tournaments",
      badge: "4 Active",
      badgeColor: "#ff2a44",
      icon: Trophy,
      iconColor: "#ff2a44",
      targetId: "tournaments",
      desc: "Daily T1 scrims & prize pools"
    },
    {
      label: "25-Slot Flyer Maker",
      badge: "Instant Export",
      badgeColor: "#00f0ff",
      icon: Palette,
      iconColor: "#00f0ff",
      targetId: "flyer-maker",
      desc: "Generate Krafton slot flyer"
    },
    {
      label: "Points Calculator",
      badge: "BGIS System",
      badgeColor: "#ffb800",
      icon: Calculator,
      iconColor: "#ffb800",
      targetId: "community-hub",
      desc: "Simulate match standings"
    },
    {
      label: "Fan MVP Vote",
      badge: "Live Poll",
      badgeColor: "#00e676",
      icon: Vote,
      iconColor: "#00e676",
      targetId: "community-hub",
      desc: "Vote for tonight's champion"
    },
    {
      label: "Squad Recruitment",
      badge: "LFT / LFP",
      badgeColor: "#b388ff",
      icon: Users,
      iconColor: "#b388ff",
      targetId: "squad-finder",
      desc: "Find verified assaulters & IGLs"
    },
    {
      label: "Download APK",
      badge: "v1.0 Ready",
      badgeColor: "#ffffff",
      badgeTextColor: "#000",
      icon: Smartphone,
      iconColor: "#00f0ff",
      targetId: "download-app",
      desc: "Instant push alerts on phone"
    }
  ];

  const handleScrollTo = (targetId) => {
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      padding: '10px 20px 40px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Quick Nav Bar Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '16px',
          paddingBottom: '10px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Flame size={18} color="#ff2a44" />
            <span className="font-display" style={{ fontSize: '14px', fontWeight: 900, letterSpacing: '0.08em', color: '#ffffff' }}>
              QUICK COMMAND DOCK
            </span>
            <span style={{ fontSize: '11px', color: '#94a3b8' }}>• Jump directly to interactive features</span>
          </div>

          <div style={{ fontSize: '12px', color: '#00f0ff', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '5px' }}>
            <Sparkles size={14} />
            <span>Interactive Tools</span>
          </div>
        </div>

        {/* Action Grid Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '14px'
        }}>
          {actions.map((act, idx) => (
            <button
              key={idx}
              onClick={() => handleScrollTo(act.targetId)}
              className="interactive-chip"
              style={{
                backgroundColor: 'rgba(13, 19, 32, 0.75)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-md)',
                padding: '16px 14px',
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                cursor: 'pointer',
                transition: 'all 0.22s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = act.iconColor;
                e.currentTarget.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.6), 0 0 20px ${act.iconColor}33`;
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: `${act.iconColor}18`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${act.iconColor}44`
                }}>
                  <act.icon size={18} color={act.iconColor} />
                </div>

                <span style={{
                  fontSize: '10px',
                  fontWeight: 900,
                  backgroundColor: act.badgeColor,
                  color: act.badgeTextColor || '#ffffff',
                  padding: '2px 8px',
                  borderRadius: '9999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em'
                }}>
                  {act.badge}
                </span>
              </div>

              <div>
                <div className="font-display" style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '3px' }}>
                  {act.label}
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.3 }}>
                  {act.desc}
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

