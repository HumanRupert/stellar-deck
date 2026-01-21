export const Slide07Architecture = () => {
  const layers = [
    { layer: 'Negotiation', component: 'x402 Protocol', fn: 'HTTP 402 headers for payment requirements' },
    { layer: 'Authorization', component: 'Google AP2 VDCs', fn: 'Cryptographic proof of human intent' },
    { layer: 'Wallet', component: 'Tether WDK', fn: 'HD wallet infrastructure, per-agent isolation' },
    { layer: 'Settlement', component: 'Stellar Network', fn: '$0.00001 fees, 5-second finality, native multi-asset' },
  ];

  return (
    <section>
      <h2>A Complete Stack for Agent Payments</h2>

      <table className="slide-table" style={{ marginBottom: '24px' }}>
        <thead>
          <tr>
            <th style={{ width: '140px' }}>Layer</th>
            <th style={{ width: '180px' }}>Component</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          {layers.map((row) => (
            <tr key={row.layer}>
              <td style={{ fontWeight: 600 }}>{row.layer}</td>
              <td style={{ color: '#0066ff', fontWeight: 500 }}>{row.component}</td>
              <td>{row.fn}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '16px' }}>
          <h3 style={{ color: '#1e40af', margin: '0 0 8px 0', fontSize: '16px' }}>x402 Extended</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#4a5568', lineHeight: '1.5' }}>
            We expand x402 beyond EIP-3009 tokens. Stellar's native asset model doesn't require{' '}
            <code style={{ background: '#dbeafe', padding: '1px 4px', borderRadius: '3px', fontSize: '13px' }}>transferWithAuthorization</code>{' '}
            — all assets work identically at the protocol level.
          </p>
        </div>

        <div style={{ background: '#f5f3ff', border: '1px solid #ddd6fe', borderRadius: '8px', padding: '16px' }}>
          <h3 style={{ color: '#6d28d9', margin: '0 0 8px 0', fontSize: '16px' }}>AP2 Integration</h3>
          <p style={{ margin: 0, fontSize: '14px', color: '#4a5568', lineHeight: '1.5' }}>
            Every agent transaction includes a Verifiable Digital Credential proving human authorization.
            No more "who approved this?" ambiguity.
          </p>
        </div>
      </div>
    </section>
  );
};
