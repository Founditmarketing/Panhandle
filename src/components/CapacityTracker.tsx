import { useState } from 'react';
import { AlertCircle, CheckCircle2, CreditCard, Loader2 } from 'lucide-react';

export default function CapacityTracker() {
  const [slotsRemaining, setSlotsRemaining] = useState(4);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSecured, setIsSecured] = useState(false);
  
  const handleDeposit = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSecured(true);
      setSlotsRemaining(prev => prev - 1);
    }, 2000);
  };

  return (
    <div className="glass-panel delay-1" style={{ padding: '2.5rem', borderLeft: `4px solid ${isSecured ? '#10b981' : 'var(--accent-color)'}` }}>
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
      
      {isSecured ? (
        <div className="animate-fade-in" style={{ padding: '1rem', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderRadius: '6px', borderLeft: '3px solid #10b981', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <CheckCircle2 color="#10b981" size={24} />
          <div>
            <span style={{ color: '#10b981', fontWeight: 800, display: 'block' }}>$500 DEPOSIT SECURED</span>
            <span className="text-muted" style={{ fontSize: '0.85rem' }}>Slot #00{slotsRemaining + 1} locked for your dealership.</span>
          </div>
        </div>
      ) : slotsRemaining > 0 ? (
        <button 
          className="btn-primary" 
          style={{ width: '100%', marginBottom: '1.5rem', opacity: isProcessing ? 0.7 : 1 }} 
          disabled={isProcessing}
          onClick={handleDeposit}
        >
          {isProcessing ? (
            <><Loader2 size={18} className="animate-spin" /> SECURING CONNECTION...</>
          ) : (
            <><CreditCard size={18} /> DROP $500 DEPOSIT & CLAIM SLOT</>
          )}
        </button>
      ) : null}

      <p className="text-muted" style={{ fontSize: '0.9rem', lineHeight: 1.6 }}>
        *Our capacity is strictly managed to enforce our "Anti-Flaky" Guarantee. Deposits are 100% refundable upon dealer verification failure.
      </p>
    </div>
  );
}
