'use client';
import { Flame, Radio, Trophy, Zap, ShieldCheck } from 'lucide-react';

export default function LiveTickerMarquee() {
  const tickerItems = [
    { icon: Radio, text: "LIVE T1 SCRIMS: Lobby 1 Room ID & Password releasing in 14 mins", color: "#ff2a44" },
    { icon: Trophy, text: "WWCD UPDATE: Team Soul secured Match 2 with 14 finishes (24 pts)", color: "#ffb800" },
    { icon: Zap, text: "₹1,00,000 Mega Series Registration Active (21/25 Slots Booked)", color: "#00f0ff" },
    { icon: ShieldCheck, text: "Krafton Anti-Cheat Synced: 100% Mobile Phone Lobby Verified", color: "#00e676" },
    { icon: Flame, text: "Instant UPI Payouts: ₹30,000 distributed to today's tournament winners", color: "#ff334b" }
  ];

  return (
    <div style={{
      width: '100%',
      backgroundColor: '#05070a',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
      overflow: 'hidden',
      padding: '8px 0',
      position: 'relative',
      zIndex: 20
    }}>
      <div className="marquee-container">
        <div className="marquee-content">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginRight: '36px',
                fontSize: '12px',
                fontWeight: 700,
                color: '#e2e8f0',
                letterSpacing: '0.02em'
              }}
            >
              <item.icon size={14} color={item.color} />
              <span>{item.text}</span>
              <span style={{ color: 'rgba(255, 255, 255, 0.25)', marginLeft: '12px' }}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

