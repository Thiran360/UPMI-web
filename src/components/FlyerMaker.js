'use client';
import { useState, useRef } from 'react';
import { 
  Download, Sparkles, Share2, Palette, Shield, Flame, Check, 
  Trophy, Calendar, Clock, RotateCcw, Copy, Users, Zap, 
  ChevronDown, ChevronUp, Edit3, CheckCircle2
} from 'lucide-react';

const DEFAULT_T1_CLANS = [
  "Soul Esports", "GodLike", "Team Tamilas", "Blind Esports",
  "Entity Gaming", "Orangutan", "Revenant", "Global Esports",
  "Gladiators", "Team XSpark", "Hydras", "Medal Esports",
  "Enigma", "Reckoning", "Big Brother", "Team Insane",
  "Numen Gaming", "Gujarat Tigers", "WSB Gaming", "Team Forever",
  "Team Strikers", "Open Slot #22", "Open Slot #23", "Open Slot #24", "Open Slot #25"
];

const PRESETS = [
  {
    name: "T1 Night Scrims",
    title: "UPMI NIGHT T1 BATTLE ROYALE",
    tagline: "Official Tier-1 Daily Scrims • Season 4",
    prize: "₹50,000 PRIZE POOL",
    date: "TONIGHT @ 08:30 PM IST",
    theme: "crimson",
    mode: 25
  },
  {
    name: "₹1,00,000 Grand Finals",
    title: "UPMI ULTIMATE SHOWDOWN 2026",
    tagline: "Krafton Licensed National Invitational",
    prize: "₹1,00,000 GRAND POOL",
    date: "TOMORROW @ 07:00 PM IST",
    theme: "gold",
    mode: 25
  },
  {
    name: "Free Community Cup",
    title: "BGMI GRINDERS OPEN QUALIFIER",
    tagline: "Open Battlegrounds Practice & Roster Trials",
    prize: "₹15,000 PRIZE POOL",
    date: "EVERY WEEKEND @ 06:00 PM",
    theme: "cyan",
    mode: 25
  }
];

export default function FlyerMaker() {
  const [tournamentName, setTournamentName] = useState('UPMI BATTLE ROYALE SHOWDOWN');
  const [tagline, setTagline] = useState('Official Tier 1 Scrims • Season 4');
  const [prizePool, setPrizePool] = useState('₹50,000 PRIZE POOL');
  const [matchDate, setMatchDate] = useState('TONIGHT @ 08:30 PM IST');
  const [theme, setTheme] = useState('crimson');
  const [mode, setMode] = useState(25);
  const [copied, setCopied] = useState(false);
  const [captionCopied, setCaptionCopied] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showRosterEditor, setShowRosterEditor] = useState(false);
  const [editingSlotIdx, setEditingSlotIdx] = useState(null);

  const [slotNames, setSlotNames] = useState(DEFAULT_T1_CLANS);

  const previewRef = useRef(null);

  const themeStyles = {
    crimson: {
      name: 'Crimson Rage',
      border: '#ff2a44',
      glow: 'rgba(255, 42, 68, 0.45)',
      accent: '#ff2a44',
      gradient: 'linear-gradient(145deg, #18080a 0%, #0a0d14 60%, #07090e 100%)',
      headerBg: 'linear-gradient(90deg, #b91c1c 0%, #ff2a44 100%)',
      slotBg: 'rgba(255, 42, 68, 0.08)',
      slotBorder: 'rgba(255, 42, 68, 0.35)',
      badgeBg: 'rgba(255, 42, 68, 0.15)'
    },
    cyan: {
      name: 'Cyber Cyan',
      border: '#00e5ff',
      glow: 'rgba(0, 229, 255, 0.45)',
      accent: '#00e5ff',
      gradient: 'linear-gradient(145deg, #041624 0%, #070f1a 60%, #05070a 100%)',
      headerBg: 'linear-gradient(90deg, #0088cc 0%, #00e5ff 100%)',
      slotBg: 'rgba(0, 229, 255, 0.08)',
      slotBorder: 'rgba(0, 229, 255, 0.35)',
      badgeBg: 'rgba(0, 229, 255, 0.15)'
    },
    gold: {
      name: 'Trophy Gold',
      border: '#ffb800',
      glow: 'rgba(255, 184, 0, 0.45)',
      accent: '#ffb800',
      gradient: 'linear-gradient(145deg, #1c1305 0%, #0e0e12 60%, #07090e 100%)',
      headerBg: 'linear-gradient(90deg, #b45309 0%, #ffb800 100%)',
      slotBg: 'rgba(255, 184, 0, 0.08)',
      slotBorder: 'rgba(255, 184, 0, 0.35)',
      badgeBg: 'rgba(255, 184, 0, 0.15)'
    },
    emerald: {
      name: 'Emerald Surge',
      border: '#00e676',
      glow: 'rgba(0, 230, 118, 0.45)',
      accent: '#00e676',
      gradient: 'linear-gradient(145deg, #051a10 0%, #081110 60%, #07090e 100%)',
      headerBg: 'linear-gradient(90deg, #059669 0%, #00e676 100%)',
      slotBg: 'rgba(0, 230, 118, 0.08)',
      slotBorder: 'rgba(0, 230, 118, 0.35)',
      badgeBg: 'rgba(0, 230, 118, 0.15)'
    }
  };

  const currentTheme = themeStyles[theme] || themeStyles.crimson;

  const handleApplyPreset = (preset) => {
    setTournamentName(preset.title);
    setTagline(preset.tagline);
    setPrizePool(preset.prize);
    setMatchDate(preset.date);
    setTheme(preset.theme);
    setMode(preset.mode);
  };

  const handleSlotChange = (index, value) => {
    const updated = [...slotNames];
    updated[index] = value;
    setSlotNames(updated);
  };

  const handleResetSlots = () => {
    setSlotNames(DEFAULT_T1_CLANS);
  };

  const handleClearSlots = () => {
    const cleared = Array.from({ length: 25 }, (_, i) => `Open Slot #${i + 1}`);
    setSlotNames(cleared);
  };

  const handleCopyCaption = () => {
    const confirmedCount = slotNames.slice(0, mode).filter(s => !s.toLowerCase().includes('open')).length;
    const captionText = 
`🔥 ${tournamentName} 🔥
⚔️ ${tagline}
🏆 Prize Pool: ${prizePool}
📅 Schedule: ${matchDate}
🎮 Platform: UPMI Esports (Mobile Only)

📌 CONFIRMED SLOTS (${confirmedCount}/${mode}):
${slotNames.slice(0, mode).map((name, i) => `${i + 1}. ${name}`).join('\n')}

⚡ Book your remaining slots on the UPMI Esports Web Platform!
#BGMI #Esports #UPMIEsports #BattlegroundsMobileIndia #Scrims`;

    navigator.clipboard.writeText(captionText);
    setCaptionCopied(true);
    setTimeout(() => setCaptionCopied(false), 2500);
  };

  const handleDownloadFlyer = () => {
    setIsExporting(true);
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');

    // Background Gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 1080, 1350);
    if (theme === 'crimson') {
      bgGrad.addColorStop(0, '#1c080a');
      bgGrad.addColorStop(0.5, '#0a0d14');
      bgGrad.addColorStop(1, '#05070a');
    } else if (theme === 'cyan') {
      bgGrad.addColorStop(0, '#041624');
      bgGrad.addColorStop(0.5, '#070f1a');
      bgGrad.addColorStop(1, '#05070a');
    } else if (theme === 'emerald') {
      bgGrad.addColorStop(0, '#051b11');
      bgGrad.addColorStop(0.5, '#070f1a');
      bgGrad.addColorStop(1, '#05070a');
    } else {
      bgGrad.addColorStop(0, '#1c1305');
      bgGrad.addColorStop(0.5, '#0d0d0f');
      bgGrad.addColorStop(1, '#05070a');
    }
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, 1080, 1350);

    // Frame border
    ctx.strokeStyle = currentTheme.border;
    ctx.lineWidth = 10;
    ctx.strokeRect(24, 24, 1032, 1302);

    // Subtle corner brackets
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 4;
    // Top-left
    ctx.beginPath();
    ctx.moveTo(35, 70);
    ctx.lineTo(35, 35);
    ctx.lineTo(70, 35);
    ctx.stroke();
    // Top-right
    ctx.beginPath();
    ctx.moveTo(1045, 70);
    ctx.lineTo(1045, 35);
    ctx.lineTo(1010, 35);
    ctx.stroke();

    // Header Title
    ctx.fillStyle = '#ffffff';
    ctx.font = '900 46px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(tournamentName.toUpperCase(), 540, 110);

    ctx.fillStyle = currentTheme.accent;
    ctx.font = 'bold 24px sans-serif';
    ctx.fillText(tagline.toUpperCase(), 540, 155);

    // Prize & Schedule Banner
    ctx.fillStyle = '#111827';
    ctx.fillRect(60, 185, 960, 72);
    ctx.strokeStyle = currentTheme.border;
    ctx.lineWidth = 2.5;
    ctx.strokeRect(60, 185, 960, 72);

    ctx.fillStyle = '#ffb800';
    ctx.font = '900 28px sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText(`🏆 ${prizePool}`, 90, 230);

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'right';
    ctx.fillText(`📅 ${matchDate}`, 990, 230);

    // Slot Grid
    const cols = 5;
    const startX = 60;
    const startY = 285;
    const cellW = 180;
    const cellH = 172;
    const gap = 15;

    for (let i = 0; i < (mode === 25 ? 25 : 16); i++) {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const x = startX + col * (cellW + gap);
      const y = startY + row * (cellH + gap);
      const isConfirmed = !slotNames[i]?.toLowerCase().includes('open');

      ctx.fillStyle = isConfirmed ? 'rgba(255, 255, 255, 0.08)' : 'rgba(16, 185, 129, 0.14)';
      ctx.fillRect(x, y, cellW, cellH);

      ctx.strokeStyle = isConfirmed ? currentTheme.border : '#10b981';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, cellW, cellH);

      ctx.fillStyle = isConfirmed ? currentTheme.border : '#10b981';
      ctx.fillRect(x, y, cellW, 30);
      ctx.fillStyle = '#070b14';
      ctx.font = '900 15px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(`SLOT ${i + 1}`, x + cellW / 2, y + 21);

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 16px sans-serif';
      ctx.fillText(slotNames[i] || `Team ${i + 1}`, x + cellW / 2, y + 90);

      ctx.fillStyle = isConfirmed ? '#cbd5e1' : '#10b981';
      ctx.font = '12px sans-serif';
      ctx.fillText(isConfirmed ? 'CONFIRMED' : 'OPEN SLOT', x + cellW / 2, y + 128);
    }

    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 16px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('UPMI ESPORTS • STG APP • POWERED BY KRAFTON OFFICIAL COMMUNITY RULES', 540, 1295);

    const link = document.createElement('a');
    link.download = `${tournamentName.toLowerCase().replace(/\s+/g, '_')}_slot_flyer.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setIsExporting(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="flyer-maker" style={{
      padding: '76px 20px',
      backgroundColor: '#070b14',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute',
        top: '15%',
        left: '20%',
        width: '500px',
        height: '500px',
        backgroundColor: currentTheme.glow,
        filter: 'blur(160px)',
        opacity: 0.25,
        pointerEvents: 'none',
        transition: 'all 0.6s ease'
      }}></div>

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '5px 16px',
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            border: `1px solid ${currentTheme.border}60`,
            borderRadius: '9999px',
            fontSize: '11.5px',
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '14px',
            boxShadow: `0 2px 14px ${currentTheme.glow}`,
            color: '#ffffff'
          }}>
            <Sparkles size={14} color={currentTheme.accent} />
            <span>Built-in Canva For Esports</span>
          </div>

          <h2 className="font-display" style={{
            fontSize: 'clamp(30px, 3.8vw, 46px)',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.03em',
            color: '#ffffff',
            lineHeight: 1.15
          }}>
            Slot List &amp; <span style={{ color: currentTheme.accent, textShadow: `0 0 24px ${currentTheme.glow}` }}>Tournament Flyer</span> Studio
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '10px', lineHeight: 1.5 }}>
            Customize match banners, edit team rosters in real time, and export studio-quality 1080×1350 HD flyers for Instagram &amp; WhatsApp.
          </p>
        </div>

        {/* Builder Layout: Left Studio Suite & Right Live Preview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          
          {/* ==================== LEFT CUSTOMIZER: SLEEK COMPACT CYBER STUDIO ==================== */}
          <div style={{
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            color: '#ffffff',
            padding: '20px 22px',
            borderRadius: '20px',
            border: `1.5px solid ${currentTheme.border}50`,
            boxShadow: `0 20px 50px rgba(0, 0, 0, 0.7), 0 0 30px ${currentTheme.glow}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            transition: 'all 0.3s ease'
          }}>

            <div>
              {/* Header with Title & Compact Match Presets */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
                paddingBottom: '12px',
                marginBottom: '14px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <div>
                  <div style={{
                    fontSize: '10.5px',
                    fontWeight: 800,
                    color: currentTheme.accent,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}>
                    <span style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: currentTheme.accent,
                      boxShadow: `0 0 8px ${currentTheme.accent}`
                    }}></span>
                    Studio Customizer
                  </div>
                  <h3 className="font-display" style={{ fontSize: '18px', fontWeight: 900, color: '#ffffff', marginTop: '2px' }}>
                    Flyer Settings
                  </h3>
                </div>

                {/* Fast Presets Chips & Reset */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', flexWrap: 'wrap' }}>
                  {PRESETS.map((p, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleApplyPreset(p)}
                      className="interactive-chip"
                      title={`Apply ${p.name}`}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.06)',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        color: '#ffffff',
                        fontSize: '11px',
                        fontWeight: 800,
                        cursor: 'pointer'
                      }}
                    >
                      {p.name.split(' ')[0]}
                    </button>
                  ))}
                  <button
                    onClick={handleResetSlots}
                    title="Reset to default T1 clan list"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '4px 8px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#94a3b8',
                      fontSize: '11px',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    <RotateCcw size={11} />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Row 1: Tournament Name & Subtitle (2 Columns) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '5px' }}>
                    <Trophy size={12} color={currentTheme.accent} />
                    <span>Tournament Name</span>
                  </label>
                  <input 
                    type="text" 
                    value={tournamentName}
                    onChange={(e) => setTournamentName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(10, 14, 23, 0.8)',
                      border: `1.5px solid rgba(255, 255, 255, 0.15)`,
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700,
                      outline: 'none',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = currentTheme.border}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '5px' }}>
                    <Flame size={12} color={currentTheme.accent} />
                    <span>Subtitle / Tagline</span>
                  </label>
                  <input 
                    type="text" 
                    value={tagline}
                    onChange={(e) => setTagline(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(10, 14, 23, 0.8)',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 600,
                      outline: 'none',
                      boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = currentTheme.border}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                  />
                </div>
              </div>

              {/* Row 2: Prize & Schedule (2 Columns) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '5px' }}>
                    <Zap size={12} color="#ffb800" />
                    <span>Prize Label</span>
                  </label>
                  <input 
                    type="text" 
                    value={prizePool}
                    onChange={(e) => setPrizePool(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(10, 14, 23, 0.8)',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffb800',
                      fontSize: '13px',
                      fontWeight: 800,
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = currentTheme.border}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '5px' }}>
                    <Calendar size={12} color={currentTheme.accent} />
                    <span>Date &amp; Schedule</span>
                  </label>
                  <input 
                    type="text" 
                    value={matchDate}
                    onChange={(e) => setMatchDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(10, 14, 23, 0.8)',
                      border: '1.5px solid rgba(255, 255, 255, 0.15)',
                      color: '#ffffff',
                      fontSize: '13px',
                      fontWeight: 700,
                      outline: 'none'
                    }}
                    onFocus={(e) => e.target.style.borderColor = currentTheme.border}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.15)'}
                  />
                </div>
              </div>

              {/* Row 3: Color Palette Theme & Room Format (2 Columns) */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '14px' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '5px' }}>
                    <Palette size={12} color={currentTheme.accent} />
                    <span>Color Theme</span>
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '6px' }}>
                    {Object.entries(themeStyles).map(([key, th]) => {
                      const isSelected = theme === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setTheme(key)}
                          title={th.name}
                          style={{
                            height: '34px',
                            borderRadius: '8px',
                            border: isSelected ? `2px solid ${th.border}` : '1.5px solid rgba(255, 255, 255, 0.1)',
                            backgroundColor: isSelected ? `${th.border}22` : 'rgba(255, 255, 255, 0.04)',
                            color: isSelected ? '#ffffff' : '#94a3b8',
                            fontSize: '11px',
                            fontWeight: 800,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '4px',
                            boxShadow: isSelected ? `0 0 14px ${th.glow}` : 'none',
                            transition: 'all 0.2s'
                          }}
                        >
                          <span style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: th.border,
                            boxShadow: `0 0 8px ${th.border}`
                          }}></span>
                          <span>{th.name.split(' ')[0]}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#cbd5e1', textTransform: 'uppercase', marginBottom: '5px' }}>
                    Room Format
                  </label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                    <button
                      onClick={() => setMode(25)}
                      style={{
                        height: '34px',
                        borderRadius: '8px',
                        border: mode === 25 ? `2px solid ${currentTheme.border}` : '1.5px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: mode === 25 ? `${currentTheme.border}22` : 'rgba(255, 255, 255, 0.04)',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: mode === 25 ? `0 0 12px ${currentTheme.glow}` : 'none',
                        transition: 'all 0.2s'
                      }}
                    >
                      BGMI 25-Slot
                    </button>
                    <button
                      onClick={() => setMode(16)}
                      style={{
                        height: '34px',
                        borderRadius: '8px',
                        border: mode === 16 ? `2px solid ${currentTheme.border}` : '1.5px solid rgba(255, 255, 255, 0.12)',
                        backgroundColor: mode === 16 ? `${currentTheme.border}22` : 'rgba(255, 255, 255, 0.04)',
                        color: '#ffffff',
                        fontSize: '11.5px',
                        fontWeight: 800,
                        cursor: 'pointer',
                        boxShadow: mode === 16 ? `0 0 12px ${currentTheme.glow}` : 'none',
                        transition: 'all 0.2s'
                      }}
                    >
                      Free Fire 16-Slot
                    </button>
                  </div>
                </div>
              </div>

              {/* Accordion: Quick Roster Slot Editor */}
              <div style={{
                marginBottom: '14px',
                backgroundColor: 'rgba(10, 14, 23, 0.6)',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setShowRosterEditor(!showRosterEditor)}
                  style={{
                    width: '100%',
                    padding: '9px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 800,
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <Edit3 size={14} color={currentTheme.accent} />
                    <span>Customize Team Slot Names ({mode} Slots)</span>
                  </div>
                  {showRosterEditor ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>

                {showRosterEditor && (
                  <div style={{ padding: '10px 14px 14px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
                      <button
                        onClick={handleResetSlots}
                        style={{
                          flex: 1,
                          padding: '5px',
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#cbd5e1',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        Fill Top T1 Clans
                      </button>
                      <button
                        onClick={handleClearSlots}
                        style={{
                          flex: 1,
                          padding: '5px',
                          fontSize: '11px',
                          fontWeight: 700,
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#cbd5e1',
                          borderRadius: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        Reset All To Open
                      </button>
                    </div>

                    <div style={{
                      maxHeight: '180px',
                      overflowY: 'auto',
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '6px',
                      paddingRight: '4px'
                    }}>
                      {slotNames.slice(0, mode).map((name, idx) => (
                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <span style={{ fontSize: '10px', fontWeight: 800, color: currentTheme.accent, width: '20px' }}>
                            #{idx + 1}
                          </span>
                          <input
                            type="text"
                            value={name}
                            onChange={(e) => handleSlotChange(idx, e.target.value)}
                            style={{
                              flex: 1,
                              padding: '5px 7px',
                              fontSize: '11px',
                              fontWeight: 700,
                              borderRadius: '6px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              border: '1px solid rgba(255, 255, 255, 0.12)',
                              color: '#ffffff',
                              outline: 'none'
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons: Download, Copy Caption, Share */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: 'auto' }}>
              <button 
                onClick={handleDownloadFlyer}
                disabled={isExporting}
                className="interactive-chip shimmer-container"
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '10px',
                  backgroundColor: currentTheme.border,
                  background: currentTheme.headerBg,
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 900,
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  boxShadow: `0 6px 22px ${currentTheme.glow}`,
                  transition: 'all 0.25s'
                }}
              >
                <Download size={17} />
                <span>{isExporting ? 'Generating Studio PNG (1080×1350)...' : 'Download HD Flyer (PNG)'}</span>
              </button>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                <button 
                  onClick={handleCopyCaption}
                  className="interactive-chip"
                  style={{
                    padding: '9px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  {captionCopied ? <CheckCircle2 size={15} color="#00e676" /> : <Copy size={15} />}
                  <span>{captionCopied ? 'Caption Copied!' : 'Copy IG Caption'}</span>
                </button>

                <button 
                  onClick={handleCopyLink}
                  className="interactive-chip"
                  style={{
                    padding: '9px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  {copied ? <CheckCircle2 size={15} color="#00e676" /> : <Share2 size={15} />}
                  <span>{copied ? 'Link Copied!' : 'Share Tool'}</span>
                </button>
              </div>
            </div>

          </div>

          {/* ==================== RIGHT SIDE: STUDIO LIVE PREVIEW MOCKUP ==================== */}
          <div>
            {/* Top Device / Canvas Meta Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 14px',
              backgroundColor: 'rgba(15, 23, 42, 0.8)',
              border: `1px solid ${currentTheme.border}40`,
              borderRadius: '12px 12px 0 0',
              fontSize: '11px',
              fontWeight: 800,
              color: '#94a3b8'
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: currentTheme.accent, boxShadow: `0 0 8px ${currentTheme.accent}` }}></span>
                LIVE FLYER PREVIEW • {mode} SLOTS
              </span>
              <span style={{ color: currentTheme.accent, letterSpacing: '0.05em' }}>
                1080 × 1350 INSTAGRAM READY
              </span>
            </div>

            {/* Poster Canvas Frame */}
            <div 
              ref={previewRef}
              style={{
                background: currentTheme.gradient,
                border: `2.5px solid ${currentTheme.border}`,
                borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
                padding: 'clamp(14px, 3.5vw, 26px) clamp(10px, 2.5vw, 22px)',
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.95), 0 0 40px ${currentTheme.glow}`,
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Corner Sci-Fi Brackets */}
              <div style={{ position: 'absolute', top: '8px', left: '8px', width: '16px', height: '16px', borderTop: `2px solid ${currentTheme.border}`, borderLeft: `2px solid ${currentTheme.border}` }}></div>
              <div style={{ position: 'absolute', top: '8px', right: '8px', width: '16px', height: '16px', borderTop: `2px solid ${currentTheme.border}`, borderRight: `2px solid ${currentTheme.border}` }}></div>
              <div style={{ position: 'absolute', bottom: '8px', left: '8px', width: '16px', height: '16px', borderBottom: `2px solid ${currentTheme.border}`, borderLeft: `2px solid ${currentTheme.border}` }}></div>
              <div style={{ position: 'absolute', bottom: '8px', right: '8px', width: '16px', height: '16px', borderBottom: `2px solid ${currentTheme.border}`, borderRight: `2px solid ${currentTheme.border}` }}></div>

              {/* Top Branding Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img 
                    src="/assets/logo.png" 
                    alt="UPMI Logo" 
                    style={{ 
                      width: '38px', 
                      height: '38px', 
                      borderRadius: '8px', 
                      border: `1.5px solid ${currentTheme.border}`,
                      boxShadow: `0 0 12px ${currentTheme.glow}`
                    }} 
                  />
                  <div>
                    <div className="font-display" style={{ fontSize: '18px', fontWeight: 900, color: '#fff', letterSpacing: '0.08em', lineHeight: 1.1 }}>
                      UPMI ESPORTS
                    </div>
                    <div style={{ fontSize: '9px', fontWeight: 800, color: currentTheme.accent, letterSpacing: '0.1em' }}>
                      OFFICIAL TOURNAMENT ARENA
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '5px 12px',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  color: '#070b14',
                  fontSize: '11px',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.3)'
                }}>
                  OFFICIAL SLOT LIST
                </div>
              </div>

              {/* Tournament Title Header Box */}
              <div style={{
                textAlign: 'center',
                padding: '16px 14px',
                background: currentTheme.headerBg,
                borderRadius: '8px',
                marginBottom: '14px',
                color: '#ffffff',
                boxShadow: `0 6px 20px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)`
              }}>
                <div className="font-display" style={{ fontSize: '21px', fontWeight: 900, letterSpacing: '0.04em', lineHeight: 1.15, textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                  {tournamentName}
                </div>
                <div style={{ fontSize: '11.5px', fontWeight: 700, opacity: 0.95, marginTop: '4px', letterSpacing: '0.04em' }}>
                  {tagline}
                </div>
              </div>

              {/* Prize & Schedule Pill Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '11px 16px',
                backgroundColor: '#ffffff',
                color: '#070b14',
                borderRadius: '8px',
                fontSize: '12.5px',
                fontWeight: 900,
                marginBottom: '16px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}>
                <span style={{ color: '#b45309', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  🏆 {prizePool}
                </span>
                <span style={{ color: '#0f172a', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  📅 {matchDate}
                </span>
              </div>

              {/* The 25-Slot Grid Preview (5 cols) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: mode === 25 ? 'repeat(5, 1fr)' : 'repeat(4, 1fr)',
                gap: '7px',
                marginBottom: '18px'
              }}>
                {slotNames.slice(0, mode).map((name, idx) => {
                  const isOpen = name.toLowerCase().includes('open');
                  return (
                    <div 
                      key={idx}
                      title="Click to edit slot name in editor"
                      onClick={() => {
                        setShowRosterEditor(true);
                      }}
                      style={{
                        backgroundColor: isOpen ? 'rgba(16, 185, 129, 0.12)' : currentTheme.slotBg,
                        border: isOpen ? '1px solid rgba(16, 185, 129, 0.45)' : `1px solid ${currentTheme.slotBorder}`,
                        borderRadius: '6px',
                        padding: '6px 4px',
                        textAlign: 'center',
                        minHeight: '48px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <div style={{
                        fontSize: '9px',
                        fontWeight: 900,
                        color: isOpen ? '#10b981' : currentTheme.accent,
                        lineHeight: 1
                      }}>
                        #{idx + 1}
                      </div>
                      <div style={{
                        fontSize: '10.5px',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginTop: '3px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }}>
                        {name}
                      </div>
                      <div style={{
                        fontSize: '8px',
                        fontWeight: 700,
                        color: isOpen ? '#10b981' : '#94a3b8',
                        marginTop: '1px'
                      }}>
                        {isOpen ? 'OPEN' : 'LOCKED'}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Footer Stamp */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
                paddingTop: '12px',
                fontSize: '10.5px',
                fontWeight: 600,
                color: '#94a3b8'
              }}>
                <span>🎮 STG App • Anti-Cheat Verified</span>
                <span>YT: /UPMIEsports</span>
                <span>Powered by Krafton Rules</span>
              </div>
            </div>

            {/* Quick Helper Text */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginTop: '14px',
              fontSize: '12.5px',
              color: '#94a3b8',
              textAlign: 'center'
            }}>
              <CheckCircle2 size={14} color={currentTheme.accent} />
              <span>Full 1080×1350 resolution • Optimized for Instagram Stories &amp; WhatsApp Status</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}