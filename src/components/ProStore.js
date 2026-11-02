'use client';
import { PRO_STORE_ITEMS } from '@/data/mockData';
import { Sparkles, ShoppingBag, Check, ShieldCheck, Zap } from 'lucide-react';

export default function ProStore() {
  return (
    <section id="pro-club" style={{
      padding: '80px 20px',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* VIP Pass Banner (30% Light Crisp Highlight Card) */}
        <div style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          color: '#0f172a',
          borderRadius: 'var(--radius-xl)',
          border: '2px solid #e2e8f0',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.4), 0 0 35px rgba(255, 184, 0, 0.2)',
          padding: 'clamp(20px, 4vw, 44px)',
          marginBottom: '60px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '36px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: '9999px',
              backgroundColor: '#ffb800',
              color: '#090e17',
              fontSize: '11px',
              fontWeight: 900,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              marginBottom: '16px',
              boxShadow: '0 2px 8px rgba(255, 184, 0, 0.3)'
            }}>
              <Sparkles size={14} />
              <span>UPMI PRO CLUB MEMBERSHIP</span>
            </div>

            <h2 className="font-display" style={{ fontSize: 'clamp(30px, 3.5vw, 44px)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', color: '#0f172a' }}>
              Elevate Your Clan with the <span style={{ color: '#d97706' }}>Pro Esports Pass</span>
            </h2>

            <p style={{ color: '#475569', fontSize: '15px', lineHeight: 1.6, marginBottom: '24px', fontWeight: 500 }}>
              Unlock priority booking in daily Tier 1 Scrims, exclusive Pro Flyer designer templates, verified organization badge, and automatic room slot reservations.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
              {[
                "Guaranteed daily Tier 1 custom room slot reservation",
                "Unrestricted access to Pro Flyer & Points Table templates",
                "Verified Gold Clan Badge in community and bracket views",
                "Direct match dispute priority arbitration with tournament referees"
              ].map((perk, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: '#1e293b', fontWeight: 600 }}>
                  <div style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Check size={14} color="#d97706" />
                  </div>
                  <span>{perk}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#64748b', textTransform: 'uppercase', fontWeight: 800 }}>Membership</div>
                <div className="font-display" style={{ fontSize: '36px', fontWeight: 900, color: '#0f172a' }}>
                  ₹499 <span style={{ fontSize: '16px', color: '#64748b', fontWeight: 600 }}>/ mo</span>
                </div>
              </div>

              <button 
                onClick={() => alert("Redirecting to UPMI PRO checkout portal!")}
                className="btn btn-primary" 
                style={{ padding: '14px 30px', fontSize: '15px' }}
              >
                Join PRO Club
              </button>
            </div>
          </div>

          {/* Right Artwork */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            aspectRatio: '16/10',
            border: '2px solid #cbd5e1',
            boxShadow: '0 15px 35px rgba(0,0,0,0.2)'
          }}>
            <img 
              src="/assets/bgmi_banner1.jpg" 
              alt="Pro Club VIP"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9) 0%, transparent 60%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '22px'
            }}>
              <span className="font-display" style={{ fontSize: '18px', fontWeight: 800, color: '#fff' }}>
                OVER 350+ CLANS POWERED BY PRO PASS
              </span>
            </div>
          </div>
        </div>

        {/* Store Merchandise Grid */}
        <div>
          <div style={{ marginBottom: '28px' }}>
            <h3 className="font-display" style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>
              UPMI Official <span className="text-gradient-red">Esports Store</span>
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
              Exclusive Clan jerseys, sweat-proof finger sleeves, and gaming accessories.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {PRO_STORE_ITEMS.map((item) => (
              <div key={item.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  position: 'relative',
                  height: '200px',
                  backgroundColor: '#000',
                  overflow: 'hidden'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <span className="badge badge-light" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                    {item.badge}
                  </span>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h4 className="font-display" style={{ fontSize: '20px', fontWeight: 800, marginBottom: '6px', color: '#ffffff' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '18px', flex: 1 }}>
                    {item.subtitle}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                    <div>
                      <div className="font-display" style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff' }}>
                        {item.price}
                      </div>
                      <div style={{ fontSize: '12px', color: '#94a3b8', textDecoration: 'line-through' }}>
                        {item.originalPrice}
                      </div>
                    </div>

                    <button 
                      onClick={() => alert(`Order placed for ${item.title}! Check your email for shipping confirmation.`)}
                      className="btn btn-primary"
                      style={{ padding: '10px 20px', fontSize: '13px' }}
                    >
                      <ShoppingBag size={15} />
                      <span>Order Now</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
