import { Settings, Wrench, ShieldCheck, PenTool } from 'lucide-react';

export default function OurEdge() {
  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--bg-card)', padding: '6rem 0 4rem', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            <span className="text-gradient-silver">BUILT TO LAST.</span> <br/><span className="text-gradient-amber">NOT JUST WELDED TO BREAK.</span>
          </h1>
          <p className="text-secondary" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Your customers demand a trailer that survives the salt, the vibration, and the launch ramp. 
            We build the industry's most reliable aluminum boat trailers using our heavy-duty U-bolt system.
          </p>
        </div>
      </section>

      {/* Tech Breakdown */}
      <section className="section-padding">
        <div className="container">
          <div className="grid-split">
            <div>
              <img 
                src="/images/ubolt_detail_1773859844435.png" 
                alt="U-Bolt detail showing heavy duty engineering" 
                style={{ width: '100%', borderRadius: '8px', border: '1px solid var(--border-color)' }}
              />
            </div>
            
            <div>
              <div style={{ display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-color)', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
                PROPRIETARY ENGINEERING
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>WHY U-BOLTS OVER WELDS?</h2>
              <p className="text-secondary" style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>
                Towing a boat is a seismic event. Hard welds on rigid aluminum frames crack under constant marine vibration. 
                Our galvanized U-bolt assembly allows the frame to flex naturally without snapping.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <Wrench className="text-accent" style={{ flexShrink: 0 }} size={24} />
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem' }}>Dockside Serviceability</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem', margin: 0 }}>If a part needs replacing, any mechanic can swap a bolt. No specialized welding required.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <ShieldCheck className="text-accent" style={{ flexShrink: 0 }} size={24} />
                  <div>
                    <h4 style={{ margin: '0 0 0.5rem' }}>Vibration Dampening</h4>
                    <p className="text-secondary" style={{ fontSize: '0.9rem', margin: 0 }}>Natural flexion protects both the trailer frame and the boat hull from road shock.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-card)' }}>
        <div className="container">
          <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>THE "PRO" DIFFERENCE</h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ padding: '1.5rem', fontSize: '1.25rem' }}>Feature</th>
                  <th style={{ padding: '1.5rem', fontSize: '1.25rem', backgroundColor: 'rgba(245, 158, 11, 0.05)', color: 'var(--accent-color)' }}>Panhandle Pro (U-Bolt)</th>
                  <th style={{ padding: '1.5rem', fontSize: '1.25rem', color: 'var(--text-secondary)' }}>"The Other Guys" (Welded)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}><Settings size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> Durability</td>
                  <td style={{ padding: '1.5rem', backgroundColor: 'rgba(245, 158, 11, 0.02)' }}>Flexes with road vibration to prevent cracking</td>
                  <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>Rigid welds eventually crack under heavy marine load</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}><PenTool size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> Maintenance</td>
                  <td style={{ padding: '1.5rem', backgroundColor: 'rgba(245, 158, 11, 0.02)' }}>Easily replaceable parts on the dock with basic tools</td>
                  <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>Requires a professional aluminum welder and major downtime</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 'bold' }}><ShieldCheck size={18} style={{ display: 'inline', marginRight: '8px', verticalAlign: 'text-bottom' }} /> Material Use</td>
                  <td style={{ padding: '1.5rem', backgroundColor: 'rgba(245, 158, 11, 0.02)' }}>Premium Marine-Grade Aluminum I-Beams</td>
                  <td style={{ padding: '1.5rem', color: 'var(--text-secondary)' }}>Standard rectangular tubing that traps saltwater</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
