export const Slide11WhatWeBuild = () => {
  const deliverables = [
    { component: 'wdk-wallet-stellar', desc: 'Full Tether WDK module for Stellar (SLIP-0010 derivation, USDC/EURC/PYUSD support, trustline management)' },
    { component: 'Semantic SDK for Stellar', desc: 'x402-compatible negotiation, AP2 authorization, policy engine, audit logging' },
    { component: 'Framework Adapters', desc: 'Google ADK, OpenAI SDK, LangChain, Claude MCP integrations' },
    { component: 'Agent Marketplace', desc: "KYC'd agent registry, verified service providers, reputation system" },
  ];

  const partnership = [
    'Stellar added to Tether WDK as part of collaboration',
    'Co-development on SDK and marketplace',
    'Co-marketing for agentic payments use case',
  ];

  return (
    <section>
      <h2>The Stellar Proposal</h2>

      <p style={{ fontWeight: 600, marginBottom: '12px', fontSize: '16px' }}>Deliverables:</p>

      <table className="slide-table" style={{ marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={{ width: '220px' }}>Component</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {deliverables.map((row) => (
            <tr key={row.component}>
              <td style={{ fontWeight: 600, color: '#0066ff' }}>{row.component}</td>
              <td>{row.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #f5f3ff 100%)', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '16px' }}>
        <p style={{ fontWeight: 600, color: '#1e40af', margin: '0 0 12px 0', fontSize: '15px' }}>Partnership Structure:</p>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          {partnership.map((point, i) => (
            <li key={i} style={{ fontSize: '14px', color: '#4a5568', marginBottom: '6px' }}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
