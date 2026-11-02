'use client';
import { useState } from 'react';
import { TOURNAMENTS, INITIAL_SLOTS, POINT_SYSTEM } from '@/data/mockData';
import { Trophy, Clock, Users, Shield, Zap, Search, ChevronRight, CheckCircle2, AlertTriangle, X, Sparkles, MapPin, Check } from 'lucide-react';

export default function TournamentsHub({ selectedTourneyId, isRegisterOpen, onCloseRegister }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Registration Modal State
  const [registerModalTourney, setRegisterModalTourney] = useState(null);
  const [teamForm, setTeamForm] = useState({
    teamName: '',
    clanTag: '',
    iglName: '',
    iglPhone: '',
    player1Name: '',
    player1Id: '',
    player2Name: '',
    player2Id: '',
    player3Name: '',
    player3Id: '',
    player4Name: '',
    player4Id: '',
    sub1Name: '',
    sub1Id: ''
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(null);

  // Tournament Details Modal State
  const [detailsModalTourney, setDetailsModalTourney] = useState(null);
  const [detailsActiveTab, setDetailsActiveTab] = useState('slots');

  // Filter tournaments
  const filteredTournaments = TOURNAMENTS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          t.organizer.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'BGMI') return t.game === 'BGMI';
    if (activeFilter === 'FREE_FIRE') return t.game === 'Free Fire';
    if (activeFilter === 'SCRIMS') return t.type.includes('Scrims');
    if (activeFilter === 'PAID') return t.type === 'Paid Tournament';
    if (activeFilter === 'FREE') return t.entryFee.includes('FREE');
    return true;
  });

  const handleOpenRegister = (tourney) => {
    setRegisterModalTourney(tourney || TOURNAMENTS[0]);
    setRegistrationSuccess(null);
  };

  const handleSubmitRegistration = (e) => {
    e.preventDefault();
    if (!teamForm.teamName || !teamForm.iglName || !teamForm.player1Id) {
      alert('Please fill in Team Name, IGL Name, and In-Game ID for Player 1.');
      return;
    }
    setRegistrationSuccess({
      slotNumber: 22,
      teamName: teamForm.teamName,
      tourneyTitle: registerModalTourney?.title || "BGMI Championship"
    });
  };

  return (
    <section id="tournaments" style={{
      paddingTop: '60px',
      paddingBottom: '28px',
      paddingLeft: '20px',
      paddingRight: '20px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header with 30% light luminous pill */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '36px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              background: 'linear-gradient(135deg, #ffe4e6 0%, #fef3c7 50%, #cffafe 100%)',
              color: '#0f172a',
              borderRadius: '9999px',
              fontSize: '11.5px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              border: '1.5px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 4px 20px rgba(255, 42, 68, 0.25), 0 0 15px rgba(0, 240, 255, 0.2)'
            }}>
              <Zap size={14} color="#e11d48" />
              <span>Competitive Schedule &amp; Brackets</span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#ffffff'
            }}>
              Tournaments &amp; <span className="text-gradient-red">Live Scrims</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '6px' }}>
              Official 25-slot custom room scrims, verified Krafton tournaments, and cash prize brackets.
            </p>
          </div>

          {/* Search Box - Clean High Contrast */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '340px' }}>
            <Search size={18} color="#64748b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
            <input 
              type="text"
              placeholder="Search tournaments or orgs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field"
              style={{
                paddingLeft: '44px',
                borderRadius: '9999px',
                backgroundColor: '#ffffff',
                color: '#0f172a'
              }}
            />
          </div>
        </div>

        {/* Filter Pills with Clean Light Contrast */}
        <div className="mobile-scroll-x" style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '36px',
          paddingBottom: '16px',
          borderBottom: '1px solid var(--border-subtle)',
          whiteSpace: 'nowrap'
        }}>
          {[
            { id: 'ALL', label: 'All Events' },
            { id: 'BGMI', label: 'BGMI (Battlegrounds)' },
            { id: 'FREE_FIRE', label: 'Free Fire' },
            { id: 'SCRIMS', label: '⚡ Live Scrims' },
            { id: 'PAID', label: 'Paid Cash Tourneys' },
            { id: 'FREE', label: 'Free Entry Scrims' }
          ].map((tab) => {
            const isSelected = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                style={{
                  padding: '9px 20px',
                  borderRadius: '9999px',
                  fontSize: '13px',
                  fontWeight: 800,
                  flexShrink: 0,
                  border: isSelected ? '1.5px solid #fda4af' : '1px solid rgba(255, 255, 255, 0.15)',
                  background: isSelected ? 'linear-gradient(135deg, #ffe4e6 0%, #fef3c7 100%)' : 'rgba(255, 255, 255, 0.05)',
                  color: isSelected ? '#881337' : '#cbd5e1',
                  cursor: 'pointer',
                  transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isSelected ? '0 4px 18px rgba(255, 42, 68, 0.35)' : 'none'
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tournament Cards Grid - Exactly 3 cards per row with compact height */}
        <div className="tournaments-3col-grid">
          {filteredTournaments.map((t) => {
            const slotsPct = Math.round((t.filledSlots / t.totalSlots) * 100);
            return (
              <div key={t.id} className="card" style={{ display: 'flex', flexDirection: 'column', borderRadius: '14px', overflow: 'hidden' }}>
                
                {/* Card Banner Image with Balanced Proportions */}
                <div style={{
                  position: 'relative',
                  height: '152px',
                  backgroundColor: '#000',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={t.bannerImage} 
                    alt={t.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }} 
                  />

                  {/* Badges on Banner */}
                  <div style={{
                    position: 'absolute',
                    top: '8px',
                    left: '10px',
                    display: 'flex',
                    gap: '6px'
                  }}>
                    <span className={`badge ${t.status.includes('LIVE') ? 'badge-live' : 'badge-scrims'}`} style={{ fontSize: '10px', padding: '2px 7px' }}>
                      {t.status}
                    </span>
                    <span className="badge badge-light" style={{ fontSize: '10px', padding: '2px 7px' }}>
                      {t.tier}
                    </span>
                  </div>

                  {/* Game Label */}
                  <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    left: '10px',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '10.5px',
                    fontWeight: 900,
                    letterSpacing: '0.05em',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.35)'
                  }}>
                    {t.game}
                  </div>
                </div>

                {/* Card Body */}
                <div style={{ padding: '16px 18px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  
                  <h3 className="font-display" style={{
                    fontSize: '17px',
                    fontWeight: 800,
                    lineHeight: 1.25,
                    marginBottom: '4px',
                    color: '#ffffff',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {t.title}
                  </h3>

                  <p style={{
                    fontSize: '12px',
                    color: 'var(--text-secondary)',
                    marginBottom: '12px',
                    lineHeight: 1.35,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}>
                    {t.subtitle}
                  </p>

                  {/* Key Details */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '8px 14px',
                    padding: '10px 14px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '12px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Prize:
                      </span>
                      <span className="font-display text-gradient-gold" style={{ fontSize: '15px', fontWeight: 900 }}>
                        {t.prizePool}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Entry:
                      </span>
                      <span className="font-display" style={{ fontSize: '12px', fontWeight: 800, color: t.entryFee.includes('FREE') ? '#10b981' : '#ffffff' }}>
                        {t.entryFee}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Date:
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <Clock size={10} color="var(--accent-cyan)" />
                        {t.date}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Map:
                      </span>
                      <span style={{ fontSize: '11px', fontWeight: 600, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '3px', maxWidth: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        <MapPin size={10} color="var(--accent-red)" />
                        {t.map}
                      </span>
                    </div>
                  </div>

                  {/* Slot Progress Bar */}
                  <div style={{ marginBottom: '14px' }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '10.5px',
                      fontWeight: 700,
                      marginBottom: '4px'
                    }}>
                      <span style={{ color: 'var(--text-secondary)' }}>
                        Slots: <strong style={{ color: '#fff' }}>{t.filledSlots}</strong>/{t.totalSlots}
                      </span>
                      <span style={{ color: t.totalSlots - t.filledSlots <= 4 ? '#ff334b' : '#10b981', fontWeight: 800 }}>
                        {t.totalSlots - t.filledSlots} Left
                      </span>
                    </div>

                    <div style={{
                      width: '100%',
                      height: '5px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '9999px',
                      overflow: 'hidden'
                    }}>
                      <div style={{
                        width: `${slotsPct}%`,
                        height: '100%',
                        background: slotsPct >= 80 
                          ? 'linear-gradient(90deg, #ff334b, #ffb800)'
                          : 'linear-gradient(90deg, #00e5ff, #10b981)',
                        borderRadius: '9999px',
                        transition: 'width 0.4s ease'
                      }}></div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '10px',
                    marginTop: 'auto'
                  }}>
                    <button 
                      onClick={() => setDetailsModalTourney(t)}
                      className="btn btn-outline"
                      style={{ padding: '8px 12px', fontSize: '12px', borderRadius: '8px' }}
                    >
                      <span>View Slots</span>
                    </button>

                    <button 
                      onClick={() => handleOpenRegister(t)}
                      className="btn btn-primary"
                      style={{ padding: '8px 12px', fontSize: '12px', borderRadius: '8px' }}
                    >
                      <Shield size={12} />
                      <span>Book Slot</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          .tournaments-3col-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 24px;
            row-gap: 36px;
          }
          @media (max-width: 1024px) {
            .tournaments-3col-grid {
              grid-template-columns: repeat(2, 1fr);
              column-gap: 20px;
              row-gap: 30px;
            }
          }
          @media (max-width: 640px) {
            .tournaments-3col-grid {
              grid-template-columns: 1fr;
              row-gap: 24px;
            }
          }
        `}</style>

      </div>

      {/* ==================== SQUAD REGISTRATION MODAL (Easy to use, high contrast inputs) ==================== */}
      {registerModalTourney && (
        <div className="modal-overlay" onClick={() => setRegisterModalTourney(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            
            {/* Modal Header */}
            <div style={{
              padding: 'clamp(16px, 4vw, 24px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(255, 255, 255, 0.03)'
            }}>
              <div>
                <span className="badge badge-light" style={{ marginBottom: '6px' }}>
                  {registerModalTourney.game} • {registerModalTourney.tier}
                </span>
                <h3 className="font-display" style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff' }}>
                  Register Squad for {registerModalTourney.title}
                </h3>
              </div>
              <button 
                onClick={() => setRegisterModalTourney(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: 'clamp(16px, 4vw, 28px)' }}>
              {registrationSuccess ? (
                <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                  <div style={{
                    width: '76px',
                    height: '76px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                    border: '3px solid #10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px',
                    boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)'
                  }}>
                    <CheckCircle2 size={44} color="#10b981" />
                  </div>

                  <h3 className="font-display" style={{ fontSize: '30px', fontWeight: 900, marginBottom: '8px', color: '#ffffff' }}>
                    SLOT #{registrationSuccess.slotNumber} CONFIRMED!
                  </h3>

                  <p style={{ color: '#cbd5e1', fontSize: '15px', maxWidth: '440px', margin: '0 auto 24px', lineHeight: 1.5 }}>
                    Squad <strong style={{ color: '#ffffff' }}>{registrationSuccess.teamName}</strong> has been successfully booked in <strong>{registrationSuccess.tourneyTitle}</strong>.
                  </p>

                  <div style={{
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    color: '#0f172a',
                    borderRadius: 'var(--radius-md)',
                    maxWidth: '460px',
                    margin: '0 auto 28px',
                    textAlign: 'left',
                    fontSize: '14px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ color: '#64748b', fontWeight: 600 }}>Assigned Group:</span>
                      <strong style={{ color: '#0f172a' }}>Group A (25 Slots)</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <span style={{ color: '#64748b', fontWeight: 600 }}>Assigned Slot:</span>
                      <strong style={{ color: '#ff334b', fontSize: '16px' }}>Slot #{registrationSuccess.slotNumber}</strong>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span style={{ color: '#64748b', fontWeight: 600 }}>Credentials:</span>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>Sent via WhatsApp 15m prior</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'center', gap: '14px' }}>
                    <a href="#flyer-maker" onClick={() => setRegisterModalTourney(null)} className="btn btn-primary">
                      Generate Slot Flyer
                    </a>
                    <button onClick={() => setRegisterModalTourney(null)} className="btn btn-light">
                      Close
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmitRegistration}>
                  <div style={{ marginBottom: '22px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Team Details *
                    </label>
                    <div className="modal-grid-2col" style={{ gap: '12px' }}>
                      <input 
                        type="text" 
                        placeholder="Team Name (e.g. Soul Esports)"
                        required
                        value={teamForm.teamName}
                        onChange={(e) => setTeamForm({ ...teamForm, teamName: e.target.value })}
                        className="input-field"
                      />
                      <input 
                        type="text" 
                        placeholder="Clan Tag (e.g. SOUL)"
                        value={teamForm.clanTag}
                        onChange={(e) => setTeamForm({ ...teamForm, clanTag: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '22px' }}>
                    <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', marginBottom: '8px' }}>
                      In-Game Leader (IGL) Contact *
                    </label>
                    <div className="modal-grid-equal" style={{ gap: '12px' }}>
                      <input 
                        type="text" 
                        placeholder="IGL Full Name / Alias"
                        required
                        value={teamForm.iglName}
                        onChange={(e) => setTeamForm({ ...teamForm, iglName: e.target.value })}
                        className="input-field"
                      />
                      <input 
                        type="tel" 
                        placeholder="WhatsApp / Mobile Number"
                        required
                        value={teamForm.iglPhone}
                        onChange={(e) => setTeamForm({ ...teamForm, iglPhone: e.target.value })}
                        className="input-field"
                      />
                    </div>
                  </div>

                  {/* 4 Squad Players Roster with High Visibility */}
                  <div style={{
                    marginBottom: '26px',
                    padding: '18px',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <label style={{ fontSize: '12px', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase' }}>
                        4 Squad Players (Mandatory) *
                      </label>
                      <span style={{ fontSize: '12px', color: 'var(--accent-cyan)', fontWeight: 700 }}>
                        Fill In-Game ID &amp; Name
                      </span>
                    </div>

                    {[1, 2, 3, 4].map((num) => (
                      <div key={num} className="modal-grid-equal" style={{ gap: '10px', marginBottom: '10px' }}>
                        <input 
                          type="text"
                          placeholder={`Player ${num} In-Game Name`}
                          required
                          value={teamForm[`player${num}Name`]}
                          onChange={(e) => setTeamForm({ ...teamForm, [`player${num}Name`]: e.target.value })}
                          className="input-field"
                          style={{ padding: '11px 14px' }}
                        />
                        <input 
                          type="text"
                          placeholder={`Player ${num} ${registerModalTourney.game} ID`}
                          required
                          value={teamForm[`player${num}Id`]}
                          onChange={(e) => setTeamForm({ ...teamForm, [`player${num}Id`]: e.target.value })}
                          className="input-field"
                          style={{ padding: '11px 14px' }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                    <button 
                      type="button" 
                      onClick={() => setRegisterModalTourney(null)}
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                    <button 
                      type="submit"
                      className="btn btn-primary"
                      style={{ padding: '13px 28px' }}
                    >
                      <Shield size={16} />
                      <span>Confirm &amp; Book Slot ({registerModalTourney.entryFee})</span>
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      {/* ==================== TOURNAMENT DETAILS & SLOTS MODAL ==================== */}
      {detailsModalTourney && (
        <div className="modal-overlay" onClick={() => setDetailsModalTourney(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '900px' }}>
            
            {/* Modal Header */}
            <div style={{
              padding: 'clamp(16px, 4vw, 24px)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'rgba(255, 255, 255, 0.04)'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <span className="badge badge-live">{detailsModalTourney.status}</span>
                  <span className="badge badge-light">{detailsModalTourney.tier}</span>
                </div>
                <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>
                  {detailsModalTourney.title}
                </h3>
              </div>
              <button 
                onClick={() => setDetailsModalTourney(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#fff',
                  cursor: 'pointer',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Navigation Tabs */}
            <div className="mobile-scroll-x" style={{
              display: 'flex',
              borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
              padding: '0 20px',
              backgroundColor: 'var(--bg-secondary)',
              whiteSpace: 'nowrap'
            }}>
              {[
                { id: 'slots', label: '25-Slot Grid & Roster' },
                { id: 'prizes', label: 'Prize Distribution' },
                { id: 'points', label: 'Points System' },
                { id: 'rules', label: 'Official Rules' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setDetailsActiveTab(tab.id)}
                  style={{
                    padding: '14px 22px',
                    fontSize: '13px',
                    fontWeight: 800,
                    flexShrink: 0,
                    color: detailsActiveTab === tab.id ? '#ffffff' : 'var(--text-muted)',
                    borderBottom: detailsActiveTab === tab.id ? '3px solid #ff334b' : '3px solid transparent',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Tab Contents */}
            <div style={{ padding: 'clamp(16px, 4vw, 28px)', maxHeight: '62vh', overflowY: 'auto' }}>
              
              {/* TAB 1: 25-SLOT GRID */}
              {detailsActiveTab === 'slots' && (
                <div>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '18px'
                  }}>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: 600 }}>
                      Battle Royale Custom Room • 25 Slots / Group
                    </span>
                    <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 800, backgroundColor: 'rgba(16, 185, 129, 0.15)', padding: '4px 10px', borderRadius: '9999px' }}>
                      4 Slots Available
                    </span>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
                    gap: '12px'
                  }}>
                    {INITIAL_SLOTS.map((s) => (
                      <div 
                        key={s.slot}
                        style={{
                          padding: '12px 10px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: s.status === 'CONFIRMED' ? '#ffffff' : 'rgba(16, 185, 129, 0.12)',
                          color: s.status === 'CONFIRMED' ? '#0f172a' : '#ffffff',
                          border: s.status === 'CONFIRMED' ? '1px solid #e2e8f0' : '2px dashed #10b981',
                          textAlign: 'center',
                          boxShadow: s.status === 'CONFIRMED' ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
                        }}
                      >
                        <div style={{
                          fontSize: '11px',
                          fontWeight: 900,
                          color: s.status === 'CONFIRMED' ? '#ff334b' : '#10b981',
                          marginBottom: '4px'
                        }}>
                          SLOT {s.slot}
                        </div>
                        <div style={{ fontSize: '22px', marginBottom: '2px' }}>
                          {s.logo}
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 800, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {s.teamName}
                        </div>
                        <div style={{ fontSize: '11px', color: s.status === 'CONFIRMED' ? '#64748b' : '#10b981', fontWeight: 600 }}>
                          {s.igl}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: PRIZE DISTRIBUTION */}
              {detailsActiveTab === 'prizes' && (
                <div>
                  <div className="font-display text-gradient-gold" style={{ fontSize: '36px', fontWeight: 900, marginBottom: '20px' }}>
                    Total Prize Pool: {detailsModalTourney.prizePool}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '16px' }}>
                    {Object.entries(detailsModalTourney.prizeBreakdown).map(([place, prize]) => (
                      <div key={place} style={{
                        padding: '18px',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        borderRadius: 'var(--radius-md)',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 4px 14px rgba(0,0,0,0.1)'
                      }}>
                        <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800 }}>
                          {place === 'mvp' ? 'Tournament MVP' : `${place} Place`}
                        </div>
                        <div className="font-display" style={{ fontSize: '26px', fontWeight: 900, color: '#ffb800', marginTop: '4px' }}>
                          {prize}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 3: POINTS SYSTEM */}
              {detailsActiveTab === 'points' && (
                <div>
                  <h4 className="font-display" style={{ fontSize: '19px', fontWeight: 800, marginBottom: '14px', color: '#ffffff' }}>
                    Official BGIS 10-Point Scoring System
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '12px' }}>
                    {POINT_SYSTEM.map((pt, idx) => (
                      <div key={idx} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px 16px',
                        backgroundColor: '#ffffff',
                        color: '#0f172a',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid #e2e8f0',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)'
                      }}>
                        <span style={{ fontSize: '13px', fontWeight: 700 }}>{pt.label}</span>
                        <strong className="font-display" style={{ color: '#ff334b', fontSize: '16px', fontWeight: 900 }}>
                          {pt.points} {pt.points === 1 ? 'pt' : 'pts'}
                        </strong>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 4: OFFICIAL RULES */}
              {detailsActiveTab === 'rules' && (
                <div style={{
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '24px',
                  borderRadius: 'var(--radius-md)'
                }}>
                  <h4 className="font-display" style={{ fontSize: '18px', fontWeight: 900, marginBottom: '14px', color: '#0f172a' }}>
                    Official Tournament Guidelines
                  </h4>
                  <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {detailsModalTourney.rules.map((rule, idx) => (
                      <li key={idx} style={{ color: '#334155', fontSize: '14px', lineHeight: 1.5, fontWeight: 500 }}>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div style={{
              padding: '18px 28px',
              borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              backgroundColor: 'rgba(255, 255, 255, 0.03)'
            }}>
              <button 
                onClick={() => setDetailsModalTourney(null)}
                className="btn btn-outline"
              >
                Close
              </button>
              <button 
                onClick={() => {
                  const t = detailsModalTourney;
                  setDetailsModalTourney(null);
                  handleOpenRegister(t);
                }}
                className="btn btn-primary"
              >
                Register Squad Now
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
