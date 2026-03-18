import { useState } from 'react';
import { AlertCircle, CheckCircle2, CreditCard } from 'lucide-react';

export default function CapacityTracker() {
  const [slotsRemaining] = useState(4); // Configurable state
  
  return (
    <div className="glass-panel delay-1" style={{ padding: '2.5rem', borderLeft: '4px solid var(--accent-color)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        {slotsRemaining > 0 ? (
          <CheckCircle2 className="text-amber-500" size={28} />
        ) : (
          <AlertCircle style={{ color: '#ef4444' }} size={28} />
        )}
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>BUILD CAPACITY</h3>
      </div>
      <p style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--amber-400)', margin: '1rem 0' }}>
        {slotsRemaining} Slots Remaining
      </p>
      
      <div style={{ background: 'rgba(255,255,255,0.05)', height: '12px', borderRadius: '6px', overflow: 'hidden', margin: '1.5rem 0 2rem' }}>
        <div style={{ 
          background: 'var(--amber-500)', 
          height: '100%', 
          width: `${Math.max(0, Math.min(100, (10 - slotsRemaining) * 10))}%`,
          transition: 'width 1s ease-in-out'
        }}></div>
      </div>
      
      {slotsRemaining > 0 ? (
        <button className="btn-primary" style={{ width: '100%', marginBottom: '1.5rem' }} onClick={() => alert('Stripe Checkout simulated. Would redirect to $500 payment capture.')}>
          <CreditCard size={18} /> DROP $500 DEPOSIT & CLAIM SLOT
        </button>
      ) : null}

      <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
        *Our capacity is strictly managed to enforce our "Anti-Flaky" Guarantee. Deposits are 100% refundable upon dealer verification failure.
      </p>
    </div>
  );
}
