export const Slide03TheProblem = () => {
  const gaps = [
    { gap: 'Guardrails & Policy', why: 'AI is stochastic. Finance is deterministic. No reconciliation layer.' },
    { gap: 'Authorization', why: "Who authorized this payment? Who's liable? No proof of human intent." },
    { gap: 'Visibility', why: 'Regulators see a black box. Need transparent, auditable transactions.' },
    { gap: 'Payment Rails', why: 'Must be programmable, low-fee, predictable, instant. Current rails fail.' },
  ];

  return (
    <section>
      <h2>Current Infrastructure Wasn't Built for Agents</h2>

      <p style={{ marginBottom: '16px' }}>
        <strong>Missing pieces for autonomous AI transactions:</strong>
      </p>

      <table className="slide-table" style={{ marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ width: '180px' }}>Gap</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          {gaps.map((row) => (
            <tr key={row.gap}>
              <td style={{ fontWeight: 600 }}>{row.gap}</td>
              <td>{row.why}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px' }}>
          <p style={{ fontWeight: 600, color: '#dc2626', margin: '0 0 4px 0', fontSize: '15px' }}>Fiat rails</p>
          <p style={{ color: '#7f1d1d', margin: 0, fontSize: '14px' }}>Too slow (days), too expensive (2-3% + fixed fees)</p>
        </div>
        <div style={{ background: '#fffbeb', border: '1px solid #fde68a', borderRadius: '8px', padding: '12px' }}>
          <p style={{ fontWeight: 600, color: '#d97706', margin: '0 0 4px 0', fontSize: '15px' }}>Traditional chains</p>
          <p style={{ color: '#92400e', margin: 0, fontSize: '14px' }}>Fee volatility, long finality, gas complexity</p>
        </div>
      </div>

      <div style={{ background: '#f7f8fc', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
        <p style={{ fontWeight: 600, margin: 0, fontSize: '16px' }}>
          Almost all agent transactions will be micropayments settling in seconds, not days.
        </p>
      </div>
    </section>
  );
};
