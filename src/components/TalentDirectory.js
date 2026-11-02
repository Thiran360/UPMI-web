'use client';
import { useState } from 'react';
import { TALENT_PROFILES } from '@/data/mockData';
import { Users, Star, CheckCircle, Video, Mic, Award, Plus, X, Phone, Mail } from 'lucide-react';

export default function TalentDirectory() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [registerTalentOpen, setRegisterTalentOpen] = useState(false);
  const [talentType, setTalentType] = useState('Coach');

  const filteredTalent = TALENT_PROFILES.filter((item) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'COACH') return item.type === 'Coach';
    if (activeTab === 'CASTER') return item.type === 'Commentator';
    if (activeTab === 'STREAMER') return item.type === 'Streamer';
    if (activeTab === 'ORGANISER') return item.type === 'Organiser';
    return true;
  });

  // Multiply list so track is always wide enough for continuous smooth looping
  const repeatMultiplier = Math.max(2, Math.ceil(6 / Math.max(1, filteredTalent.length)));
  const baseList = Array(repeatMultiplier).fill(filteredTalent).flat();
  const marqueeCards = [...baseList, ...baseList];

  return (
    <section id="talent" style={{
      padding: '80px 20px',
      position: 'relative'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          gap: '20px',
          marginBottom: '32px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
              color: '#78350f',
              borderRadius: '9999px',
              fontSize: '11.5px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              border: '1.5px solid #fcd34d',
              boxShadow: '0 4px 18px rgba(255, 184, 0, 0.25)'
            }}>
              <Award size={14} color="#78350f" />
              <span>Esports Talent Marketplace</span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#ffffff'
            }}>
              Verified <span className="text-gradient-gold">Talent &amp; Creators</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '6px' }}>
              Hire elite BGMI coaches, professional casters, streamers, and tournament organizers. Hover to pause.
            </p>
          </div>

          <button 
            onClick={() => setRegisterTalentOpen(true)}
            className="btn btn-light"
            style={{ padding: '12px 22px' }}
          >
            <Plus size={16} color="#ffb800" />
            <span>Join as Talent / Org</span>
          </button>
        </div>

        {/* Filter Pills with 30% Light Accent Contrast */}
        <div className="mobile-scroll-x" style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '28px',
          whiteSpace: 'nowrap'
        }}>
          {[
            { id: 'ALL', label: 'All Talent' },
            { id: 'COACH', label: 'Strategy Coaches' },
            { id: 'CASTER', label: 'Casters & Commentators' },
            { id: 'STREAMER', label: 'Esports Streamers' },
            { id: 'ORGANISER', label: 'Scrims Organizers' }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 800,
                  flexShrink: 0,
                  border: isSelected ? '1.5px solid #fcd34d' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: isSelected ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#78350f' : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isSelected ? '0 4px 18px rgba(255, 184, 0, 0.35)' : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Talent Cards Moving Slowly from Right to Left (Marquee) */}
        <div className="talent-marquee-wrapper">
          <div className="talent-marquee-track">
            {marqueeCards.map((t, idx) => (
              <div 
                key={`${t.id}-${idx}`} 
                className="card talent-card" 
                style={{ 
                  width: '320px',
                  flexShrink: 0,
                  padding: '22px', 
                  display: 'flex', 
                  flexDirection: 'column',
                  backgroundColor: 'rgba(15, 23, 42, 0.85)',
                  border: '1.5px solid rgba(255, 255, 255, 0.12)',
                  borderRadius: '16px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
                  transition: 'all 0.25s ease'
                }}
              >
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2.5px solid #ffb800',
                      boxShadow: '0 4px 15px rgba(255, 184, 0, 0.35)'
                    }} 
                  />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h3 className="font-display" style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '190px' }}>
                        {t.name}
                      </h3>
                      <CheckCircle size={15} color="#10b981" />
                    </div>
                    <div style={{ fontSize: '12px', color: '#ffb800', fontWeight: 700 }}>
                      {t.title}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px', fontSize: '11.5px', color: '#94a3b8' }}>
                      <Star size={12} color="#ffb800" fill="#ffb800" />
                      <strong style={{ color: '#fff' }}>{t.rating}</strong>
                      <span style={{ fontSize: '11px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>• {t.experience}</span>
                    </div>
                  </div>
                </div>

                <p style={{ 
                  fontSize: '12.5px', 
                  color: 'var(--text-secondary)', 
                  lineHeight: 1.45, 
                  marginBottom: '16px', 
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {t.bio}
                </p>

                {/* 30% Light Accent Info Box */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 14px',
                  background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                  border: '1px solid #fde68a',
                  color: '#0f172a',
                  borderRadius: '10px',
                  marginBottom: '14px',
                  boxShadow: '0 4px 14px rgba(255, 184, 0, 0.15)'
                }}>
                  <div>
                    <div style={{ fontSize: '10px', color: '#78350f', textTransform: 'uppercase', fontWeight: 800 }}>
                      {t.metricLabel}
                    </div>
                    <div className="font-display" style={{ fontSize: '18px', fontWeight: 900, color: '#0369a1' }}>
                      {t.matchesCount}+
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '10px', color: '#78350f', textTransform: 'uppercase', fontWeight: 800 }}>
                      Starting Rate
                    </div>
                    <div className="font-display" style={{ fontSize: '15px', fontWeight: 900, color: '#b45309' }}>
                      {t.rate}
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setSelectedTalent(t)}
                  className="btn btn-outline"
                  style={{ width: '100%', padding: '9px', fontSize: '12.5px', borderRadius: '8px' }}
                >
                  Hire / Contact Profile
                </button>
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          .talent-marquee-wrapper {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 10px 0 20px;
            mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
            -webkit-mask-image: linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%);
          }

          .talent-marquee-track {
            display: flex;
            gap: 22px;
            width: max-content;
            animation: talent-marquee-left 85s linear infinite;
          }

          .talent-marquee-wrapper:hover .talent-marquee-track {
            animation-play-state: paused;
          }

          .talent-card:hover {
            border-color: #ffb800 !important;
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.8), 0 0 25px rgba(255, 184, 0, 0.3) !important;
            transform: translateY(-4px);
          }

          @keyframes talent-marquee-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

      </div>

      {/* Talent Booking Modal */}
      {selectedTalent && (
        <div className="modal-overlay" onClick={() => setSelectedTalent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
            <div style={{ padding: 'clamp(16px, 4vw, 24px)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff' }}>
                Hire {selectedTalent.name}
              </h3>
              <button onClick={() => setSelectedTalent(null)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: 'clamp(16px, 4vw, 28px)' }}>
              <div style={{ marginBottom: '18px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                You are requesting a booking with <strong style={{ color: '#fff' }}>{selectedTalent.name}</strong> ({selectedTalent.title}) at <strong style={{ color: '#ffb800' }}>{selectedTalent.rate}</strong>.
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                <input 
                  type="text" 
                  placeholder="Your Team or Clan Name *"
                  className="input-field"
                />
                <input 
                  type="tel" 
                  placeholder="Your WhatsApp / Mobile Number *"
                  className="input-field"
                />
                <textarea 
                  rows={3}
                  placeholder="Briefly describe match requirements, dates, and timings..."
                  className="input-field"
                ></textarea>
              </div>

              <button 
                onClick={() => {
                  alert(`Booking request sent to ${selectedTalent.name}! Their team will connect with you via WhatsApp.`);
                  setSelectedTalent(null);
                }}
                className="btn btn-gold" 
                style={{ width: '100%', padding: '13px' }}
              >
                Send Booking Request
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Register as Talent Modal */}
      {registerTalentOpen && (
        <div className="modal-overlay" onClick={() => setRegisterTalentOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '540px' }}>
            <div style={{ padding: 'clamp(16px, 4vw, 24px)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff' }}>
                Join UPMI Talent Network
              </h3>
              <button onClick={() => setRegisterTalentOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: 'clamp(16px, 4vw, 28px)' }}>
              <div className="mobile-scroll-x" style={{ display: 'flex', gap: '8px', marginBottom: '18px', whiteSpace: 'nowrap' }}>
                {['Coach', 'Commentator', 'Streamer', 'Organiser'].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setTalentType(role)}
                    style={{
                      flex: 1,
                      flexShrink: 0,
                      padding: '10px 12px',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '12px',
                      fontWeight: 800,
                      backgroundColor: talentType === role ? '#ff334b' : '#ffffff',
                      color: talentType === role ? '#ffffff' : '#0f172a',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      boxShadow: talentType === role ? '0 4px 12px rgba(255, 51, 75, 0.3)' : '0 2px 6px rgba(0,0,0,0.1)'
                    }}
                  >
                    {role}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                <input 
                  type="text" 
                  placeholder={`${talentType} Name *`}
                  className="input-field"
                />
                <input 
                  type="tel" 
                  placeholder={`${talentType} Contact Number *`}
                  className="input-field"
                />
                <input 
                  type="text" 
                  placeholder="Portfolio / YouTube Channel Link"
                  className="input-field"
                />
                <textarea 
                  rows={3}
                  placeholder={`Tell us about your experience and previous tournaments ${talentType.toLowerCase()}ed...`}
                  className="input-field"
                ></textarea>
              </div>

              <button 
                onClick={() => {
                  alert(`Application submitted! Our verification team will review your profile.`);
                  setRegisterTalentOpen(false);
                }}
                className="btn btn-primary" 
                style={{ width: '100%', padding: '13px' }}
              >
                Submit Verification Profile
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
