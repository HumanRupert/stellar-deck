export const Slide06TheSolution = () => {
  const frameworks = ['LangChain', 'Google ADK', 'Claude MCP', 'OpenAI SDK', 'n8n', 'CrewAI'];
  const chains = ['Ethereum', 'Stellar', 'Solana', 'Spark', 'TON', 'Tron'];
  const components = ['Protocol Integration', 'Policy Enforcement', 'Authorization (AP2)', 'Observability'];

  return (
    <section>
      <h2 style={{ color: '#00a67e' }}>Semantic Pay: The Unified Layer</h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        margin: '20px 0'
      }}>
        {/* Frameworks */}
        <div style={{ width: '160px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#718096', marginBottom: '8px', textTransform: 'uppercase' }}>Frameworks</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {frameworks.map((f) => (
              <div key={f} style={{ background: '#f7f8fc', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '6px 10px', fontSize: '12px', color: '#4a5568' }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div style={{ fontSize: '24px', color: '#cbd5e1' }}>→</div>

        {/* Semantic Pay */}
        <div style={{
          background: 'linear-gradient(135deg, #ecfdf5 0%, #eff6ff 100%)',
          border: '2px solid #00a67e',
          borderRadius: '12px',
          padding: '16px',
          width: '200px'
        }}>
          <p style={{ fontWeight: 700, color: '#00a67e', margin: '0 0 12px 0', fontSize: '14px', textAlign: 'center' }}>SEMANTIC PAY</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {components.map((c) => (
              <div key={c} style={{ background: 'white', borderRadius: '4px', padding: '6px 8px', fontSize: '11px', color: '#1a1a2e', textAlign: 'center', fontWeight: 500 }}>
                {c}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '12px', padding: '8px', background: '#1a1a2e', borderRadius: '6px', textAlign: 'center' }}>
            <p style={{ fontSize: '11px', color: 'white', margin: 0, fontWeight: 500 }}>Tether WDK</p>
            <p style={{ fontSize: '10px', color: '#a0aec0', margin: '2px 0 0 0' }}>Wallet Provider</p>
          </div>
        </div>

        {/* Arrow */}
        <div style={{ fontSize: '24px', color: '#cbd5e1' }}>→</div>

        {/* Chains */}
        <div style={{ width: '160px' }}>
          <p style={{ fontSize: '11px', fontWeight: 600, color: '#718096', marginBottom: '8px', textTransform: 'uppercase' }}>Chains</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {chains.map((c) => (
              <div key={c} style={{ background: '#f7f8fc', border: '1px solid #e2e8f0', borderRadius: '4px', padding: '6px 10px', fontSize: '12px', color: '#4a5568' }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
        <p style={{ fontWeight: 700, color: '#047857', margin: 0, fontSize: '18px' }}>
          N + M integrations, not N × M
        </p>
      </div>
    </section>
  );
};
