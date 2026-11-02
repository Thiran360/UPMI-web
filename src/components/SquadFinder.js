'use client';
import { useState } from 'react';
import { SQUAD_FINDER_POSTS } from '@/data/mockData';
import { Swords, Plus, MessageSquare, Clock, UserCheck, X } from 'lucide-react';

export default function SquadFinder() {
  const [posts, setPosts] = useState(SQUAD_FINDER_POSTS);
  const [modalOpen, setModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    teamName: '',
    tag: '',
    lookingFor: 'Aggressive Assaulter',
    requirements: '',
    contactIGL: ''
  });

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newPost.teamName || !newPost.requirements) {
      alert('Please fill out the team name and requirements.');
      return;
    }
    const created = {
      id: `post-${Date.now()}`,
      teamName: newPost.teamName,
      tag: newPost.tag || 'TEAM',
      lookingFor: newPost.lookingFor,
      game: 'BGMI',
      requirements: newPost.requirements,
      contactIGL: newPost.contactIGL || 'Team Captain',
      postedAgo: 'Just now',
      urgency: 'HIGH',
      avatar: '🔥'
    };
    setPosts([created, ...posts]);
    setModalOpen(false);
    alert('Recruitment post published to the community board!');
  };

  return (
    <section id="squad-finder" style={{
      padding: '80px 20px',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
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
          marginBottom: '36px'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '4px 12px',
              backgroundColor: '#ffffff',
              color: '#0f172a',
              borderRadius: '9999px',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              <Swords size={14} color="#a855f7" />
              <span>UPMI • UNKNOWN PEOPLE MEET &amp; INTERACT</span>
            </div>

            <h2 className="font-display" style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: '#ffffff'
            }}>
              Squad Finder &amp; <span style={{ color: '#a855f7' }}>Team Up</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '6px' }}>
              True to our name (Unknown People Meet &amp; Interact), find your missing fragger, discover friendly squadmates, and team up across BGMI &amp; Free Fire.
            </p>
          </div>

          <button 
            onClick={() => setModalOpen(true)}
            className="btn btn-light"
            style={{ padding: '12px 22px' }}
          >
            <Plus size={16} color="#a855f7" />
            <span>Post Looking For (LFT/LFP)</span>
          </button>
        </div>

        {/* Posts Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {posts.map((post) => (
            <div 
              key={post.id} 
              className="card" 
              style={{ 
                padding: '22px', 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: '16px',
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0, flex: 1 }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '20px',
                      flexShrink: 0
                    }}>
                      {post.avatar}
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      <h3 className="font-display" style={{
                        fontSize: '17px',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      }} title={post.teamName}>
                        {post.teamName}
                      </h3>
                      <div style={{ fontSize: '11.5px', color: 'var(--accent-cyan)', fontWeight: 800, marginTop: '2px' }}>
                        [{post.tag}] • {post.game}
                      </div>
                    </div>
                  </div>

                  <span className="badge" style={{
                    backgroundColor: post.urgency === 'HIGH' ? 'rgba(255, 51, 75, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                    color: post.urgency === 'HIGH' ? '#ff334b' : '#c084fc',
                    border: post.urgency === 'HIGH' ? '1px solid rgba(255, 51, 75, 0.45)' : '1px solid rgba(168, 85, 247, 0.4)',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    padding: '5px 10px',
                    fontSize: '11px',
                    fontWeight: 800
                  }}>
                    {post.urgency === 'HIGH' ? '🔥 URGENT' : 'OPEN RECRUIT'}
                  </span>
                </div>

                {/* 30% Light Accent Info Box with Equalized Height */}
                <div style={{
                  padding: '12px 16px',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  borderRadius: '10px',
                  marginBottom: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                  height: '76px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ fontSize: '10px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800, letterSpacing: '0.04em' }}>
                    WE ARE LOOKING FOR:
                  </div>
                  <div className="font-display" style={{
                    fontSize: '15px',
                    fontWeight: 900,
                    color: '#0f172a',
                    marginTop: '3px',
                    lineHeight: 1.25,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {post.lookingFor}
                  </div>
                </div>

                {/* Equalized Description Height */}
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.5,
                  marginBottom: '18px',
                  height: '58px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.requirements}
                </p>
              </div>

              {/* Card Footer: Timestamp and Action Button */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '14px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                fontSize: '12px'
              }}>
                <div style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px', fontWeight: 600 }}>
                  <Clock size={13} />
                  <span>{post.postedAgo}</span>
                </div>

                <button 
                  onClick={() => alert(`Connect request initiated for ${post.teamName}! Connect with: ${post.contactIGL}`)}
                  className="btn btn-outline"
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    borderColor: 'rgba(168, 85, 247, 0.4)',
                    backgroundColor: 'rgba(168, 85, 247, 0.08)'
                  }}
                >
                  <MessageSquare size={14} color="#c084fc" />
                  <span>{post.tag === 'LFP' ? 'Contact Player' : 'Contact IGL'}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Post Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <div style={{ padding: 'clamp(16px, 4vw, 24px)', borderBottom: '1px solid rgba(255, 255, 255, 0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.04)' }}>
              <h3 className="font-display" style={{ fontSize: '22px', fontWeight: 900, color: '#ffffff' }}>
                Post Recruitment Ad
              </h3>
              <button onClick={() => setModalOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleCreatePost} style={{ padding: 'clamp(16px, 4vw, 28px)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input 
                type="text" 
                placeholder="Team / Clan Name *"
                required
                value={newPost.teamName}
                onChange={(e) => setNewPost({ ...newPost, teamName: e.target.value })}
                className="input-field"
              />

              <select 
                value={newPost.lookingFor}
                onChange={(e) => setNewPost({ ...newPost, lookingFor: e.target.value })}
                className="input-field"
                style={{ fontWeight: 700 }}
              >
                <option value="Aggressive Assaulter">Aggressive Assaulter / Entry Fragger</option>
                <option value="In-Game Leader (IGL)">In-Game Leader (IGL) / Caller</option>
                <option value="Sniper / DMR Support">Sniper / DMR Support</option>
                <option value="Support / Utility Player">Support / Utility Player</option>
                <option value="Looking for Clan (Free Agent)">Looking for Clan (Free Agent)</option>
              </select>

              <textarea 
                rows={3}
                placeholder="Requirements (e.g. KD 5.0+, 90 FPS device, available daily 8 PM)..."
                required
                value={newPost.requirements}
                onChange={(e) => setNewPost({ ...newPost, requirements: e.target.value })}
                className="input-field"
              ></textarea>

              <input 
                type="text" 
                placeholder="Contact Details (IGL BGMI ID or Discord) *"
                value={newPost.contactIGL}
                onChange={(e) => setNewPost({ ...newPost, contactIGL: e.target.value })}
                className="input-field"
              />

              <button type="submit" className="btn btn-primary" style={{ marginTop: '8px', padding: '13px' }}>
                Publish Recruitment Post
              </button>
            </form>
          </div>
        </div>
      )}

    </section>
  );
}
