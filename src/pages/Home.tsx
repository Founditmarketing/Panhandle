import { Link } from 'react-router-dom';
import { Shield, Clock, Anchor, Factory } from 'lucide-react';
import CapacityTracker from '../components/CapacityTracker';

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem 0'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(10, 10, 12, 0.75), rgba(10, 10, 12, 0.95)), url(/images/aluminum_boat_trailer_hero_1773859830241.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }} />
        
        <div className="container">
          <div className="hero-grid">
            <div>
              <div style={{ 
                display: 'inline-block', 
                backgroundColor: 'rgba(245, 158, 11, 0.1)', 
                border: '1px solid rgba(245, 158, 11, 0.3)', 
                color: 'var(--accent-color)', 
                padding: '0.5rem 1rem', 
                borderRadius: '4px', 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 'bold', 
                letterSpacing: '2px', 
                marginBottom: '1.5rem', 
                fontSize: '0.85rem' 
              }}>
                DEALER-ONLY EXCLUSIVE
              </div>
              <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#fff', textShadow: '0 4px 20px rgba(0,0,0,0.5)', lineHeight: 1 }}>
                THE <span className="text-accent">"ANTI-FLAKY"</span><br/>GUARANTEE.
              </h1>
              <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', margin: '2rem 0', maxWidth: '540px', lineHeight: 1.6 }}>
                Stop waiting 9 months for aluminum boat trailers. We deliver on time, every time. Built exclusively for dealers in FL, GA, AL, and LA who protect their margins.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to="/partner" className="btn-primary">View Dealer Benefits</Link>
                <Link to="/our-edge" className="btn-secondary">Technical Specs</Link>
              </div>
            </div>
            
            <div style={{ maxWidth: '500px', margin: '0 auto', width: '100%' }}>
              <CapacityTracker />
            </div>
          </div>
        </div>
      </section>

      {/* The Backstory Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <div className="grid-split">
            <div>
              <h2 style={{ fontSize: '2.5rem' }}>WHY WE BUILT <span className="text-accent">IT RIGHT.</span></h2>
              <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--accent-color)', marginBottom: '2rem' }}></div>
              <p className="text-secondary" style={{ fontSize: '1.15rem', marginBottom: '1.5rem' }}>
                We got tired of being burned by vendors who promised 2-week lead times and delivered in 9 months. 
                Your sales team is on the dock trying to close a deal, and they shouldn't have to apologize for a manufacturer's excuses.
              </p>
              <p className="text-secondary" style={{ fontSize: '1.15rem', marginBottom: '2.5rem' }}>
                So we built our own facility in the Gulf Coast to do it right. Panhandle Pro Trailers stands for uncompromised trust and velocity. 
                No retail static. Just reliable wholesale margins.
              </p>
              <div style={{ display: 'flex', gap: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Shield className="text-accent" size={32} />
                  <span style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', fontSize: '1.1rem' }}>Zero Excuses</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Clock className="text-accent" size={32} />
                  <span style={{ fontWeight: 700, fontFamily: 'var(--font-heading)', textTransform: 'uppercase', fontSize: '1.1rem' }}>On Time</span>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
               <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                 <Factory size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
                 <h4 style={{ margin: 0, fontSize: '1.3rem' }}>Dealer-Only</h4>
                 <p className="text-secondary" style={{ fontSize: '1rem', marginTop: '0.75rem' }}>We don't compete with you for retail clients.</p>
               </div>
               <div className="glass-panel" style={{ padding: '3rem 2rem', textAlign: 'center', transform: 'translateY(2rem)' }}>
                 <Anchor size={48} className="text-accent" style={{ margin: '0 auto 1.5rem' }} />
                 <h4 style={{ margin: 0, fontSize: '1.3rem' }}>Gulf Coast Fast</h4>
                 <p className="text-secondary" style={{ fontSize: '1rem', marginTop: '0.75rem' }}>Minimized logistics time to the Panhandle & beyond.</p>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
