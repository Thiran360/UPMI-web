'use client';
import { useState } from 'react';
import { 
  Vote, Calculator, Trophy, Flame, HelpCircle, CheckCircle2, 
  ChevronDown, ChevronUp, Copy, Check, Sparkles, Award, Shield,
  ArrowRight, Users, Zap
} from 'lucide-react';

const INITIAL_TEAMS = [
  { id: 'soul', name: 'Team Soul', tag: 'SOUL', igl: 'Manya', votes: 5420, logo: '👑', color: '#ff2a44' },
  { id: 'godl', name: 'GodLike Esports', tag: 'GODL', igl: 'Jonathan', votes: 4010, logo: '⚡', color: '#ffb800' },
  { id: 'tx', name: 'Team XSpark', tag: 'TX', igl: 'Shadow', votes: 2190, logo: '✨', color: '#00f0ff' },
  { id: 'blind', name: 'Blind Esports', tag: 'BLIND', igl: 'Spower', votes: 1290, logo: '🎯', color: '#00e676' }
];

const POINT_TABLE_RULES = [
  { rank: 1, pts: 10, label: "1st (WWCD)" },
  { rank: 2, pts: 6, label: "2nd Place" },
  { rank: 3, pts: 5, label: "3rd Place" },
  { rank: 4, pts: 4, label: "4th Place" },
  { rank: 5, pts: 3, label: "5th Place" },
  { rank: 6, pts: 2, label: "6th Place" },
  { rank: 7, pts: 1, label: "7th-8th" },
  { rank: 9, pts: 0, label: "9th-16th" }
];

const FAQS = [
  {
    q: "How & when do we receive the Custom Room ID and Password?",
    a: "Room credentials are automatically released 15 minutes prior to match start directly inside the UPMI Android App and posted into your registered Discord channel. Ensure your IGL phone number is verified."
  },
  {
    q: "What devices and peripherals are permitted under official Krafton rules?",
    a: "Only Android and iOS smartphones are allowed. Tablets, iPads, Emulators (Gameloop, BlueStacks), and hardware triggers or key-mappers are strictly prohibited and caught by our server-side anti-cheat."
  },
  {
    q: "How fast are prize pools and MVP bounties paid out?",
    a: "100% of cash prizes are transferred via instant UPI / Bank transfer within 120 minutes of match completion after gameplay recording verification."
  },
  {
    q: "Can clan managers use the 25-Slot Flyer Maker for free?",
    a: "Yes! The 25-Slot Flyer Maker is 100% free with unlimited exports in high-res (1080x1350) for Instagram, WhatsApp, and Discord."
  }
];

export default function InteractiveCommunityHub() {
  const [activeTab, setActiveTab] = useState('poll'); // 'poll' | 'calc' | 'hallOfFame' | 'faq'
  
  // Fan Poll State
  const [teams, setTeams] = useState(INITIAL_TEAMS);
  const [userVotedId, setUserVotedId] = useState(null);
  const [voteToast, setVoteToast] = useState(null);

  // Score Calculator State
  const [selectedRank, setSelectedRank] = useState(1);
  const [killCount, setKillCount] = useState(8);
  const [calcTeamName, setCalcTeamName] = useState('Team Soul');
  const [copiedScore, setCopiedScore] = useState(false);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  // Vote calculation
  const totalVotes = teams.reduce((acc, t) => acc + t.votes, 0);

  const handleVote = (teamId) => {
    if (userVotedId === teamId) return;

    setTeams((prev) =>
      prev.map((t) => {
        if (t.id === teamId) return { ...t, votes: t.votes + 1 };
        if (userVotedId && t.id === userVotedId) return { ...t, votes: Math.max(0, t.votes - 1) };
        return t;
      })
    );

    setUserVotedId(teamId);
    const selectedTeam = teams.find((t) => t.id === teamId);
    setVoteToast(`Vote Cast for ${selectedTeam?.name || 'Your Clan'}! 🔥`);
    setTimeout(() => setVoteToast(null), 3500);
  };

  // Calculate score points
  const getPlacementPoints = (rank) => {
    if (rank === 1) return 10;
    if (rank === 2) return 6;
    if (rank === 3) return 5;
    if (rank === 4) return 4;
    if (rank === 5) return 3;
    if (rank === 6) return 2;
    if (rank <= 8) return 1;
    return 0;
  };

  const placementPts = getPlacementPoints(selectedRank);
  const finishPts = Math.max(0, killCount);
  const totalScore = placementPts + finishPts;

  const getTierRating = (pts) => {
    if (pts >= 18) return { label: "🔥 WWCD Dominance (Champion Pace)", color: "#ffb800" };
    if (pts >= 12) return { label: "⚡ Elite Top-Bracket Qualifier", color: "#00f0ff" };
    if (pts >= 7) return { label: "🎯 Mid-Table Qualified Pace", color: "#00e676" };
    return { label: "⚠️ Danger Zone - Need Edge Rotation Kills", color: "#ff2a44" };
  };

  const tierRating = getTierRating(totalScore);

  const handleCopyScore = () => {
    const text = `🏆 ${calcTeamName} Match Score Card:\n• Placement: #${selectedRank} (${placementPts} pts)\n• Finishes: ${finishPts} kills (${finishPts} pts)\n• Total Score: ${totalScore} Points (${tierRating.label})\nCalculated via UPMI Esports Arena`;
    navigator.clipboard.writeText(text);
    setCopiedScore(true);
    setTimeout(() => setCopiedScore(false), 2500);
  };

  return (
    <section id="community-hub" style={{
      paddingTop: '28px',
      paddingBottom: '60px',
      paddingLeft: '20px',
      paddingRight: '20px',
      position: 'relative',
      zIndex: 10,
      backgroundColor: 'rgba(8, 12, 20, 0.75)'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Section Header */}
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
              gap: '6px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, #ffe4e6 0%, #fef3c7 50%, #cffafe 100%)',
              color: '#0f172a',
              fontSize: '11px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              border: '1.5px solid rgba(255, 255, 255, 0.8)',
              boxShadow: '0 4px 20px rgba(255, 42, 68, 0.25), 0 0 15px rgba(0, 240, 255, 0.2)'
            }}>
              <Sparkles size={14} color="#e11d48" />
              <span>FAN &amp; PLAYER ENGAGEMENT ARENA</span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#ffffff',
              lineHeight: 1.05
            }}>
              Interactive <span className="text-gradient-cyan">Community Hub</span>
            </h2>
          </div>

          {/* Interactive Feature Tabs - 30% Vibrant Light Mode Color Accents */}
          <div className="mobile-scroll-x" style={{
            display: 'flex',
            gap: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '6px',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            flexWrap: 'nowrap',
            whiteSpace: 'nowrap',
            width: '100%',
            maxWidth: '100%'
          }}>
            {[
              { 
                id: 'poll', 
                label: 'Fan MVP Poll', 
                icon: Vote, 
                color: '#e11d48',
                activeBg: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
                activeColor: '#881337',
                activeBorder: '1.5px solid #fda4af',
                activeGlow: '0 4px 18px rgba(255, 42, 68, 0.4), 0 0 10px #ffe4e6'
              },
              { 
                id: 'calc', 
                label: 'BGIS Calculator', 
                icon: Calculator, 
                color: '#d97706',
                activeBg: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                activeColor: '#78350f',
                activeBorder: '1.5px solid #fcd34d',
                activeGlow: '0 4px 18px rgba(255, 184, 0, 0.4), 0 0 10px #fef3c7'
              },
              { 
                id: 'hallOfFame', 
                label: 'Hall of Fame', 
                icon: Trophy, 
                color: '#0891b2',
                activeBg: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
                activeColor: '#164e63',
                activeBorder: '1.5px solid #67e8f9',
                activeGlow: '0 4px 18px rgba(0, 240, 255, 0.4), 0 0 10px #cffafe'
              },
              { 
                id: 'faq', 
                label: 'Tournament FAQ', 
                icon: HelpCircle, 
                color: '#059669',
                activeBg: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                activeColor: '#14532d',
                activeBorder: '1.5px solid #86efac',
                activeGlow: '0 4px 18px rgba(0, 230, 118, 0.4), 0 0 10px #dcfce7'
              }
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="interactive-chip"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '9px 18px',
                    flexShrink: 0,
                    borderRadius: 'var(--radius-sm)',
                    border: isActive ? tab.activeBorder : '1px solid rgba(255, 255, 255, 0.1)',
                    background: isActive ? tab.activeBg : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? tab.activeColor : '#cbd5e1',
                    fontWeight: 800,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: isActive ? tab.activeGlow : 'none',
                    transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                >
                  <tab.icon size={15} color={isActive ? tab.activeColor : tab.color} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Fan MVP Poll */}
        {activeTab === 'poll' && (
          <div style={{
            background: 'linear-gradient(135deg, #0d1527 0%, #080d18 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 42, 68, 0.2)',
            padding: 'clamp(18px, 4vw, 36px)',
            animation: 'fadeIn 0.25s ease'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '28px' }}>
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)',
                  color: '#9f1239',
                  fontSize: '11px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '8px',
                  border: '1px solid #fda4af',
                  boxShadow: '0 2px 10px rgba(255, 42, 68, 0.2)'
                }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', backgroundColor: '#e11d48', animation: 'pulse-glow 1.5s infinite' }}></span>
                  MATCH 1 PREDICTION OF THE DAY
                </div>
                <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>
                  Who Will Secure The Chicken Dinner Tonight?
                </h3>
                <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
                  Cast your vote to support your clan. Live community results update instantly!
                </p>
              </div>

              <div style={{
                background: 'linear-gradient(135deg, rgba(254, 243, 199, 0.12) 0%, rgba(254, 243, 199, 0.04) 100%)',
                border: '1.5px solid #fde68a',
                borderRadius: 'var(--radius-md)',
                padding: '10px 18px',
                textAlign: 'right',
                boxShadow: '0 4px 16px rgba(255, 184, 0, 0.15)'
              }}>
                <div style={{ fontSize: '11px', color: '#fef08a', textTransform: 'uppercase', fontWeight: 800 }}>Total Votes Cast</div>
                <div className="font-mono text-gradient-gold" style={{ fontSize: '22px', fontWeight: 900 }}>
                  {totalVotes.toLocaleString()} Votes
                </div>
              </div>
            </div>

            {/* Voting Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '18px'
            }}>
              {teams.map((team) => {
                const percentage = Math.round((team.votes / totalVotes) * 100);
                const isUserChoice = userVotedId === team.id;

                return (
                  <div
                    key={team.id}
                    onClick={() => handleVote(team.id)}
                    className="interactive-chip"
                    style={{
                      backgroundColor: isUserChoice ? 'rgba(255, 42, 68, 0.12)' : 'rgba(255, 255, 255, 0.04)',
                      border: isUserChoice ? '2px solid #ff2a44' : '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '22px',
                      position: 'relative',
                      overflow: 'hidden',
                      boxShadow: isUserChoice ? '0 0 25px rgba(255, 42, 68, 0.35)' : 'none'
                    }}
                  >
                    {/* Background fill percentage bar */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      top: 0,
                      width: `${percentage}%`,
                      backgroundColor: `${team.color}15`,
                      zIndex: 0,
                      transition: 'width 0.5s ease'
                    }}></div>

                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <span style={{ fontSize: '32px' }}>{team.logo}</span>
                        
                        <div style={{ textAlign: 'right' }}>
                          <span className="font-display" style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff' }}>
                            {percentage}%
                          </span>
                          <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                            {team.votes.toLocaleString()} votes
                          </div>
                        </div>
                      </div>

                      <div className="font-display" style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', marginBottom: '4px' }}>
                        {team.name}
                      </div>

                      <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '16px' }}>
                        IGL: <strong style={{ color: '#cbd5e1' }}>{team.igl}</strong>
                      </div>

                      <button
                        style={{
                          width: '100%',
                          padding: '9px 14px',
                          borderRadius: 'var(--radius-sm)',
                          border: isUserChoice ? 'none' : '1px solid #7dd3fc',
                          background: isUserChoice 
                            ? 'linear-gradient(135deg, #ff2a44 0%, #ff4d63 100%)' 
                            : 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)',
                          color: isUserChoice ? '#ffffff' : '#0369a1',
                          fontWeight: 800,
                          fontSize: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          cursor: 'pointer',
                          boxShadow: isUserChoice 
                            ? '0 4px 14px rgba(255, 42, 68, 0.4)' 
                            : '0 2px 8px rgba(186, 230, 253, 0.4)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        {isUserChoice ? (
                          <>
                            <CheckCircle2 size={14} />
                            <span>Voted Choice</span>
                          </>
                        ) : (
                          <>
                            <Vote size={14} />
                            <span>Vote For {team.tag}</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {voteToast && (
              <div style={{
                marginTop: '20px',
                padding: '12px 18px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0, 230, 118, 0.15)',
                border: '1px solid #00e676',
                color: '#00e676',
                fontWeight: 700,
                fontSize: '13px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Sparkles size={16} />
                <span>{voteToast} Check back after the match to see if your prediction won!</span>
              </div>
            )}
          </div>
        )}

        {/* Tab 2: BGIS 10-Point Score & Standings Calculator */}
        {activeTab === 'calc' && (
          <div style={{
            background: 'linear-gradient(135deg, #0f1728 0%, #090e1a 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(255, 184, 0, 0.2)',
            padding: 'clamp(18px, 4vw, 36px)',
            animation: 'fadeIn 0.25s ease'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                color: '#78350f',
                fontSize: '11px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '8px',
                border: '1px solid #fcd34d',
                boxShadow: '0 2px 10px rgba(255, 184, 0, 0.2)'
              }}>
                <Calculator size={14} color="#78350f" />
                <span>OFFICIAL KRAFTON 10-POINT SYSTEM CALCULATOR</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>
                Simulate Your Clan&apos;s Match Standings
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
                Select placement position and kill count to instantly calculate official BGIS tournament match points.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '32px',
              alignItems: 'center'
            }}>
              
              {/* Left Controls */}
              <div>
                {/* Team Name Input */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Clan / Team Name
                  </label>
                  <input
                    type="text"
                    value={calcTeamName}
                    onChange={(e) => setCalcTeamName(e.target.value)}
                    placeholder="Enter your team name"
                    className="input-field"
                    style={{ maxWidth: '360px' }}
                  />
                </div>

                {/* Placement Rank Selection Buttons */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Match Placement (Rank #1 - #16)
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', maxWidth: '420px' }}>
                    {[
                      { rank: 1, label: '#1 WWCD', pts: '10 pts' },
                      { rank: 2, label: '#2', pts: '6 pts' },
                      { rank: 3, label: '#3', pts: '5 pts' },
                      { rank: 4, label: '#4', pts: '4 pts' },
                      { rank: 5, label: '#5', pts: '3 pts' },
                      { rank: 6, label: '#6', pts: '2 pts' },
                      { rank: 7, label: '#7-#8', pts: '1 pt' },
                      { rank: 9, label: '#9-#16', pts: '0 pts' }
                    ].map((item) => (
                      <button
                        key={item.rank}
                        type="button"
                        onClick={() => setSelectedRank(item.rank)}
                        style={{
                          padding: '10px 8px',
                          borderRadius: 'var(--radius-sm)',
                          border: selectedRank === item.rank ? '2px solid #00f0ff' : '1px solid rgba(255, 255, 255, 0.12)',
                          backgroundColor: selectedRank === item.rank ? 'rgba(0, 240, 255, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                          color: selectedRank === item.rank ? '#00f0ff' : '#ffffff',
                          cursor: 'pointer',
                          fontWeight: 800,
                          fontSize: '12px',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '2px',
                          transition: 'all 0.18s ease'
                        }}
                      >
                        <span>{item.label}</span>
                        <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: 600 }}>{item.pts}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Kill / Finish Stepper */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '12px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Team Finish Points (1 pt per kill)
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <button
                      type="button"
                      onClick={() => setKillCount((prev) => Math.max(0, prev - 1))}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        fontSize: '20px',
                        fontWeight: 900,
                        cursor: 'pointer'
                      }}
                    >
                      -
                    </button>

                    <div style={{
                      minWidth: '70px',
                      textAlign: 'center',
                      fontSize: '24px',
                      fontWeight: 900,
                      color: '#ffffff',
                      fontFamily: 'var(--font-mono)'
                    }}>
                      {killCount}
                    </div>

                    <button
                      type="button"
                      onClick={() => setKillCount((prev) => prev + 1)}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#ffffff',
                        fontSize: '20px',
                        fontWeight: 900,
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>

                    <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                      ({killCount} Kills = {killCount} Points)
                    </span>
                  </div>
                </div>

              </div>

              {/* Right Output Scorecard HUD */}
              <div style={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                border: '2px solid rgba(255, 184, 0, 0.4)',
                borderRadius: 'var(--radius-xl)',
                padding: '30px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(255, 184, 0, 0.2)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span className="font-display" style={{ fontSize: '20px', fontWeight: 900, color: '#ffffff' }}>
                    {calcTeamName || 'YOUR CLAN'}
                  </span>
                  <span style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    color: '#78350f',
                    border: '1px solid #fcd34d',
                    fontWeight: 900,
                    fontSize: '11px',
                    padding: '3px 12px',
                    borderRadius: '9999px',
                    textTransform: 'uppercase',
                    boxShadow: '0 2px 8px rgba(255, 184, 0, 0.25)'
                  }}>
                    MATCH SCORECARD
                  </span>
                </div>

                {/* Score Breakdown Boxes */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Placement Points
                    </div>
                    <div className="font-display" style={{ fontSize: '28px', fontWeight: 900, color: '#00f0ff' }}>
                      +{placementPts}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>
                      Rank #{selectedRank}
                    </div>
                  </div>

                  <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 800 }}>
                      Finish Points
                    </div>
                    <div className="font-display" style={{ fontSize: '28px', fontWeight: 900, color: '#ff2a44' }}>
                      +{finishPts}
                    </div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>
                      {killCount} Kills
                    </div>
                  </div>
                </div>

                {/* Grand Total */}
                <div style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(255, 184, 0, 0.12)',
                  border: '1px solid rgba(255, 184, 0, 0.5)',
                  marginBottom: '20px',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '12px', color: '#ffb800', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    TOTAL MATCH POINTS
                  </div>
                  <div className="font-display" style={{ fontSize: '52px', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                    {totalScore}
                  </div>
                  <div style={{ fontSize: '13px', color: tierRating.color, fontWeight: 800, marginTop: '6px' }}>
                    {tierRating.label}
                  </div>
                </div>

                {/* Copy Score CTA */}
                <button
                  type="button"
                  onClick={handleCopyScore}
                  className="interactive-chip"
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid #facc15',
                    background: 'linear-gradient(135deg, #fef08a 0%, #fde047 100%)',
                    color: '#713f12',
                    fontWeight: 900,
                    fontSize: '13px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 4px 18px rgba(250, 204, 21, 0.35)'
                  }}
                >
                  {copiedScore ? (
                    <>
                      <Check size={16} color="#00e676" />
                      <span>Copied Score Card to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copy Score Card For WhatsApp / Discord</span>
                    </>
                  )}
                </button>

              </div>

            </div>
          </div>
        )}

        {/* Tab 3: Hall of Fame */}
        {activeTab === 'hallOfFame' && (
          <div style={{
            background: 'linear-gradient(135deg, #0e1320 0%, #060910 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.2)',
            padding: 'clamp(18px, 4vw, 36px)',
            animation: 'fadeIn 0.25s ease'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
                color: '#164e63',
                fontSize: '11px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '8px',
                border: '1px solid #67e8f9',
                boxShadow: '0 2px 10px rgba(0, 240, 255, 0.2)'
              }}>
                <Trophy size={14} color="#164e63" />
                <span>TOURNAMENT LEGENDS &amp; PRO ROSTERS</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>
                UPMI Hall Of Fame Champions
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
                Celebrating the tier 1 teams who conquered our major championships and took home the golden trophies.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {[
                {
                  title: "BGIS Community Invitational 2026",
                  winner: "Team Soul",
                  prize: "₹5,00,000 WWCD",
                  mvp: "Spower (38 Finishes)",
                  image: "/assets/arena_stage.jpg",
                  tag: "CHAMPIONS",
                  tagBg: "linear-gradient(135deg, #ffe4e6 0%, #fecdd3 100%)",
                  tagColor: "#881337",
                  tagBorder: "#fda4af"
                },
                {
                  title: "UPMI Night Scrims Grand Masters",
                  winner: "GodLike Esports",
                  prize: "₹2,50,000 Series Winner",
                  mvp: "Jonathan (44 Finishes)",
                  image: "/assets/bgmi_banner2.jpg",
                  tag: "SEASON 3 CHAMPION",
                  tagBg: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
                  tagColor: "#78350f",
                  tagBorder: "#fcd34d"
                },
                {
                  title: "Free Fire Clash of Titans Pro",
                  winner: "Team XSpark",
                  prize: "₹1,00,000 Winner",
                  mvp: "SprayGod (29 Finishes)",
                  image: "/assets/airdrop_poster.jpg",
                  tag: "WARRIOR CUP CHAMPION",
                  tagBg: "linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)",
                  tagColor: "#164e63",
                  tagBorder: "#67e8f9"
                }
              ].map((hall, idx) => (
                <div
                  key={idx}
                  className="card"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.12)'
                  }}
                >
                  <div style={{ position: 'relative', height: '170px' }}>
                    <img
                      src={hall.image}
                      alt={hall.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(10, 14, 23, 0.95) 0%, transparent 80%)'
                    }}></div>
                    
                    <span style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: hall.tagBg,
                      color: hall.tagColor,
                      border: `1px solid ${hall.tagBorder}`,
                      fontSize: '10px',
                      fontWeight: 900,
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      letterSpacing: '0.06em',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)'
                    }}>
                      {hall.tag}
                    </span>
                  </div>

                  <div style={{ padding: '20px' }}>
                    <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '4px' }}>
                      {hall.title}
                    </div>
                    <div className="font-display" style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff', marginBottom: '8px' }}>
                      {hall.winner}
                    </div>

                    <div style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      marginBottom: '10px'
                    }}>
                      <div style={{ fontSize: '11px', color: '#cbd5e1' }}>Prize Claimed:</div>
                      <div className="font-display text-gradient-gold" style={{ fontSize: '18px', fontWeight: 900 }}>
                        {hall.prize}
                      </div>
                    </div>

                    <div style={{ fontSize: '12px', color: '#00f0ff', fontWeight: 700 }}>
                      Tournament MVP: {hall.mvp}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Interactive FAQ Accordion */}
        {activeTab === 'faq' && (
          <div style={{
            background: 'linear-gradient(135deg, #0e1625 0%, #070c16 100%)',
            borderRadius: 'var(--radius-xl)',
            border: '2px solid rgba(255, 255, 255, 0.15)',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 230, 118, 0.2)',
            padding: 'clamp(18px, 4vw, 36px)',
            animation: 'fadeIn 0.25s ease'
          }}>
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                color: '#14532d',
                fontSize: '11px',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '8px',
                border: '1px solid #86efac',
                boxShadow: '0 2px 10px rgba(0, 230, 118, 0.2)'
              }}>
                <HelpCircle size={14} color="#14532d" />
                <span>FREQUENTLY ASKED QUESTIONS &amp; RULES</span>
              </div>
              <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff' }}>
                Player Quick Help &amp; Guidelines
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginTop: '4px' }}>
                Everything you need to know about slot booking, payouts, devices, and anti-cheat verification.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: openFaqIdx === idx ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.03)',
                    border: openFaqIdx === idx ? '1px solid #00e676' : '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: 'var(--radius-md)',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <button
                    onClick={() => setOpenFaqIdx(openFaqIdx === idx ? -1 : idx)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      fontWeight: 800,
                      fontSize: '15px',
                      cursor: 'pointer',
                      gap: '16px'
                    }}
                  >
                    <span>{faq.q}</span>
                    {openFaqIdx === idx ? <ChevronUp size={18} color="#00e676" /> : <ChevronDown size={18} color="#94a3b8" />}
                  </button>

                  {openFaqIdx === idx && (
                    <div style={{
                      padding: '0 22px 20px',
                      fontSize: '14px',
                      color: '#cbd5e1',
                      lineHeight: 1.6,
                      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                      paddingTop: '14px'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

