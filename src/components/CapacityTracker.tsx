import { useState } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export default function CapacityTracker() {
  const [slotsRemaining] = useState(4); // Configurable state
  
  return (
    <div className="glass-panel delay-1" style={{ padding: '2rem', borderLeft: '4px solid var(--accent-color)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        {slotsRemaining > 0 ? (
          <CheckCircle2 className="text-accent" size={28} />
        ) : (
          <AlertCircle style={{ color: '#ef4444' }} size={28} />
        )}
        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>BUILD CAPACITY</h3>
      </div>
      <p style={{ fontSize: '1.5rem', fontWeight: 600, color: 'var(--text-primary)', margin: '1rem 0' }}>
        {slotsRemaining} Slots Remaining This Month
      </p>
      <div style={{ background: 'rgba(255,255,255,0.05)', height: '12px', borderRadius: '6px', overflow: 'hidden', margin: '1.5rem 0' }}>
        <div style={{ 
          background: 'var(--accent-color)', 
          height: '100%', 
          width: `${Math.max(0, Math.min(100, (10 - slotsRemaining) * 10))}%`,
          transition: 'width 1s ease-in-out'
        }}></div>
      </div>
      <p className="text-secondary" style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
        *Our capacity is strictly managed to enforce our "Anti-Flaky" Guarantee. We will not take your order if we cannot deliver it on time.
      </p>
    </div>
  );
}
