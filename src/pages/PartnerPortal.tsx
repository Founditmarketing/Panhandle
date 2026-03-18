import { Handshake } from 'lucide-react';
import PricingCalculator from '../components/PricingCalculator';

export default function PartnerPortal() {
  return (
    <div className="animate-fade-in">
      <section style={{ 
        position: 'relative', 
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        padding: '6rem 0'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'linear-gradient(rgba(10, 10, 12, 0.85), rgba(10, 10, 12, 0.98)), url(/images/dealership_marina_1773859860364.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
        }} />
        
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div style={{ display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-color)', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
              B2B WHOLESALE APPLICATION
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', color: '#fff', lineHeight: 1 }}>
              PARTNER WITH <span className="text-accent">PANHANDLE PRO.</span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginTop: '2rem', lineHeight: 1.6 }}>
              We don't do retail. We don't compete with our dealers. We build premium aluminum marine trailers exclusive to authorized dealers in the Gulf Coast. Predictable lead times, protected margins.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: 'var(--bg-main)' }}>
        <div className="container grid-split" style={{ alignItems: 'flex-start' }}>
          
          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>THE DEALER ADVANTAGE</h2>
            <div style={{ width: '80px', height: '4px', backgroundColor: 'var(--accent-color)', marginBottom: '3rem' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0 0 1rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>
                  <Handshake className="text-accent" size={28} /> Protected Margins
                </h4>
                <p className="text-secondary" style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>Our direct-to-dealer pricing structure ensures you make maximum profit on every pull-out. We never undercut you online by selling direct to the public.</p>
              </div>
              
              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0 0 1rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>
                  <Handshake className="text-accent" size={28} /> Strict Service Area
                </h4>
                <p className="text-secondary" style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>By strictly serving the FL Panhandle, AL, GA, and LA, we cut out cross-country transit delays. If you're in our zone, you get priority.</p>
              </div>

              <div>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', margin: '0 0 1rem', fontSize: '1.3rem', fontFamily: 'var(--font-heading)' }}>
                  <Handshake className="text-accent" size={28} /> Ready-to-Sell Inventory
                </h4>
                <p className="text-secondary" style={{ lineHeight: 1.6, fontSize: '1.1rem' }}>Stop losing out on boat sales because the trailer isn't ready. When we guarantee a build slot, it's bolted in reality.</p>
              </div>
            </div>
          </div>
          
          <div style={{ position: 'sticky', top: '100px' }}>
            <PricingCalculator />
          </div>
          
        </div>
      </section>
    </div>
  );
}
