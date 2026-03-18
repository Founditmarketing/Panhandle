import { useState } from 'react';
import { Download, FileText, Image as ImageIcon, CheckCircle, Loader2 } from 'lucide-react';

export default function DealerAssets() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = (filename: string, isZip: boolean = false) => {
    setDownloading(filename);
    setTimeout(() => {
      // Create a simulated downloadable file blob
      const content = isZip ? "SIMULATED_ZIP_BINARY_DATA" : "Simulated PDF Content for " + filename;
      const blob = new Blob([content], { type: isZip ? 'application/zip' : 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
      setDownloading(null);
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      {/* Header Section */}
      <section style={{ backgroundColor: 'var(--bg-card)', padding: '6rem 0 4rem', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(245, 158, 11, 0.1)', color: 'var(--accent-color)', padding: '0.5rem 1rem', borderRadius: '4px', fontFamily: 'var(--font-heading)', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem', fontSize: '0.85rem' }}>
            AUTHORIZED DEALER ASSETS
          </div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1rem' }}>
            <span className="text-gradient-silver">DOCK-READY</span> <br/><span className="text-gradient-amber">SALES MATERIAL.</span>
          </h1>
          <p className="text-muted" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
            Unbranded spec sheets and technical breakdowns designed to hand directly to your retail buyers. 
            Close the sale faster with undeniable engineering proof.
          </p>
        </div>
      </section>

      {/* Assets Grid */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            
            {/* Asset 1 */}
            <div className="glass-panel delay-1">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <FileText size={40} className="text-amber-500" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>PDF (1.2MB)</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>U-Bolt System Technical Spec</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>A 1-page breakdown of how our U-Bolts absorb marine vibration better than welded frames. Unbranded for direct customer handover.</p>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--silver-300)' }}><CheckCircle size={16} className="text-amber-500"/> Includes structural diagrams</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--silver-300)' }}><CheckCircle size={16} className="text-amber-500"/> Outlines the vibration damping benefits</li>
              </ul>
              <button 
                className="btn-secondary" 
                style={{ width: '100%', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', opacity: downloading === 'ubolt-specs.pdf' ? 0.7 : 1 }} 
                onClick={() => handleDownload('ubolt-specs.pdf')}
                disabled={downloading !== null}
              >
                {downloading === 'ubolt-specs.pdf' ? <><Loader2 size={18} className="animate-spin" /> DOWNLOADING...</> : <><Download size={18} /> Download Spec Sheet</>}
              </button>
            </div>

            {/* Asset 2 */}
            <div className="glass-panel delay-2">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <FileText size={40} className="text-amber-500" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>PDF (2.4MB)</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>The "Anti-Flaky" Guarantee</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>The wholesale contract overview and our rigid 2-4 week lead time breakdown. Use this to reassure buyers on delivery schedules.</p>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--silver-300)' }}><CheckCircle size={16} className="text-amber-500"/> Lead time promises</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--silver-300)' }}><CheckCircle size={16} className="text-amber-500"/> Dealership exclusivity terms</li>
              </ul>
              <button 
                className="btn-secondary" 
                style={{ width: '100%', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', opacity: downloading === 'guarantee-contract.pdf' ? 0.7 : 1 }} 
                onClick={() => handleDownload('guarantee-contract.pdf')}
                disabled={downloading !== null}
              >
                {downloading === 'guarantee-contract.pdf' ? <><Loader2 size={18} className="animate-spin" /> DOWNLOADING...</> : <><Download size={18} /> Download Guarantee</>}
              </button>
            </div>

            {/* Asset 3 */}
            <div className="glass-panel delay-3">
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                <ImageIcon size={40} className="text-amber-500" />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', background: 'rgba(255,255,255,0.05)', padding: '0.25rem 0.5rem', borderRadius: '4px' }}>ZIP (18MB)</span>
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>HD Retail Photography</h3>
              <p className="text-muted" style={{ marginBottom: '1.5rem' }}>High-resolution shots of tandem & single axle builds. Perfect for injecting into your own dealership website listings.</p>
              
              <ul style={{ listStyle: 'none', marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--silver-300)' }}><CheckCircle size={16} className="text-amber-500"/> Web-optimized 1080p shots</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.95rem', color: 'var(--silver-300)' }}><CheckCircle size={16} className="text-amber-500"/> Unbranded backgrounds</li>
              </ul>
              <button 
                className="btn-secondary" 
                style={{ width: '100%', display: 'flex', gap: '0.5rem', alignItems: 'center', justifyContent: 'center', opacity: downloading === 'hd-photos-panhandle.zip' ? 0.7 : 1 }} 
                onClick={() => handleDownload('hd-photos-panhandle.zip', true)}
                disabled={downloading !== null}
              >
                {downloading === 'hd-photos-panhandle.zip' ? <><Loader2 size={18} className="animate-spin" /> DOWNLOADING...</> : <><Download size={18} /> Download Photo Pack</>}
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
