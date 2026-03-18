import React, { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';

export default function PricingCalculator() {
  const [volume, setVolume] = useState(1);
  const [capacity, setCapacity] = useState(5000);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Fake logic for demo purposes based on requirements
  const basePrice = capacity * 0.85; // $0.85 per lb of capacity est.
  const discount = volume >= 5 ? 0.15 : volume >= 3 ? 0.10 : 0;
  const wholesalePrice = basePrice * (1 - discount);
  const retailMSRP = basePrice * 1.3; // 30% markup for retail
  const totalMargin = (retailMSRP - wholesalePrice) * volume;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // In a real app, send to CRM via automation workflow API here
    }
  };

  return (
    <div className="glass-panel" style={{ padding: '2.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Calculator size={32} className="text-accent" />
        <h3 style={{ margin: 0, fontSize: '1.5rem' }}>WHOLESALE MARGIN CALCULATOR</h3>
      </div>
      
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Monthly Volume (Trailers)</label>
              <input 
                type="number" 
                min="1" 
                value={volume} 
                onChange={(e) => setVolume(Number(e.target.value))}
                className="glass-input"
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Average Payload Req (lbs)</label>
              <select 
                value={capacity} 
                onChange={(e) => setCapacity(Number(e.target.value))}
                className="glass-input"
              >
                <option value={3000}>3,000 lbs (Single Axle)</option>
                <option value={5000}>5,000 lbs (Tandem)</option>
                <option value={8000}>8,000 lbs (Heavy Duty)</option>
                <option value={12000}>12,000 lbs (Commercial)</option>
              </select>
            </div>
          </div>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '1.5rem', borderRadius: '4px', borderLeft: '3px solid var(--accent-color)', marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="text-secondary">Est. Wholesale Price (per unit):</span>
              <span style={{ fontWeight: 600 }}>${wholesalePrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <span className="text-secondary">Suggested Retail MSRP:</span>
              <span style={{ fontWeight: 600 }}>${retailMSRP.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '0.5rem' }}>
              <span className="text-accent" style={{ fontWeight: 700 }}>Your Protected Margin (Total):</span>
              <span className="text-accent" style={{ fontWeight: 700, fontSize: '1.25rem' }}>${totalMargin.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</span>
            </div>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Send Official Quote & Application to Dealership Email</label>
            <input 
              type="email" 
              required
              placeholder="sales@yourdealership.com"
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              className="glass-input"
            />
          </div>
          
          <button type="submit" className="btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            REQUEST DEALER STATUS <ArrowRight size={18} />
          </button>
        </form>
      ) : (
        <div style={{ textAlign: 'center', padding: '2rem 0' }}>
          <h3 className="text-accent" style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>APPLICATION RECEIVED.</h3>
          <p className="text-secondary">
            Your estimated wholesale pricing and lead time guarantee have been sent to <strong>{email}</strong>. 
            A Panhandle Pro representative will reach out in less than 24 hours to verify your dealership details.
          </p>
        </div>
      )}
    </div>
  );
}
