import React, { useState } from 'react';
import { Calculator, ArrowRight, AlertTriangle } from 'lucide-react';

export default function PricingCalculator() {
  const [volume, setVolume] = useState(1);
  const [capacity, setCapacity] = useState(5000);
  const [email, setEmail] = useState('');
  const [compareMode, setCompareMode] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const basePrice = capacity * 0.85; 
  const discount = volume >= 5 ? 0.15 : volume >= 3 ? 0.10 : 0;
  const wholesalePrice = basePrice * (1 - discount);
  const retailMSRP = basePrice * 1.3;
  const totalMargin = (retailMSRP - wholesalePrice) * volume;
  
  // The competitor penalty: 9 month wait vs 1 month wait = 8 months of lost sales volume
  const lostMarginPenalty = totalMargin * 8;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="glass-panel delay-3" style={{ padding: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Calculator size={32} className="text-amber-500" />
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--text-main)' }}>MARGIN CALCULATOR</h3>
      </div>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Monthly Volume (Trailers)</label>
              <input 
                type="number" 
                min="1" 
                value={volume} 
                onChange={(e) => setVolume(Number(e.target.value))}
                className="glass-input"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Average Payload (lbs)</label>
              <select 
                value={capacity} 
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="glass-input"
              >
                <option value={3000}>3,000 lbs (Single Axle)</option>
                <option value={5000}>5,000 lbs (Tandem)</option>
                <option value={8000}>8,000 lbs (HD)</option>
                <option value={12000}>12,000 lbs (Commercial)</option>
              </select>
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
              <input 
                type="checkbox" 
                checked={compareMode}
                onChange={(e) => setCompareMode(e.target.checked)}
                style={{ width: '1.25rem', height: '1.25rem', accentColor: 'var(--amber-500)' }}
              />
              <span className="text-main" style={{ fontWeight: 600 }}>Compare against "Welded Frames" (9-Month Lead Time)</span>
            </label>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '6px', borderLeft: '3px solid var(--amber-500)', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="text-muted">Est. Wholesale Price (unit):</span>
              <span style={{ fontWeight: 600, color: 'var(--silver-300)' }}>${wholesalePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
              <span className="text-muted">Suggested Retail MSRP:</span>
              <span style={{ fontWeight: 600, color: 'var(--silver-300)' }}>${retailMSRP.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
            </div>
            
            <div style={{ padding: '1rem', backgroundColor: 'rgba(245, 158, 11, 0.1)', borderRadius: '4px', marginBottom: compareMode ? '1.5rem' : '0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="text-amber-500" style={{ fontWeight: 800, fontSize: '1.1rem' }}>PANHANDLE PRO MONTHLY PROFIT:</span>
                <span className="text-amber-500" style={{ fontWeight: 900, fontSize: '1.5rem' }}>${totalMargin.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
              </div>
            </div>
            
            {compareMode && (
              <div className="animate-fade-in" style={{ padding: '1rem', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderRadius: '4px', borderLeft: '3px solid #ef4444' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <AlertTriangle size={18} color="#ef4444" />
                  <span style={{ color: '#ef4444', fontWeight: 800, fontSize: '1.1rem' }}>COMPETITOR OPPORTUNITY COST</span>
                </div>
                <p className="text-muted" style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                  Waiting 9 months for a welded competitor costs you 8 months of ready-to-sell inventory.
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#f87171', fontWeight: 600 }}>Total Lost Margin (8 Mo Delay):</span>
                  <span style={{ color: '#ef4444', fontWeight: 900, fontSize: '1.25rem' }}>-${lostMarginPenalty.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
                </div>
              </div>
            )}
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Send Official Quote & Application to Dealership Email</label>
            <input 
              type="email" 
              required
              placeholder="sales@yourdealership.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input"
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%' }}>
            REQUEST DEALER STATUS <ArrowRight size={18} />
          </button>
        </form>
      ) : (
        <div className="animate-fade-in" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'rgba(245, 158, 11, 0.2)', marginBottom: '1.5rem' }}>
            <Calculator size={32} className="text-amber-500" />
          </div>
          <h3 className="text-gradient-amber" style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>APPLICATION RECEIVED.</h3>
          <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
            Your wholesale pricing and lead time guarantee have been sent to <strong>{email}</strong>. 
            A Panhandle Pro representative will reach out in less than 24 hours to verify your dealership details.
          </p>
        </div>
      )}
    </div>
  );
}
