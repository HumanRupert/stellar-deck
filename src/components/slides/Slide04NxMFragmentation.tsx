export const Slide04NxMFragmentation = () => {
  const frameworks = ['LangChain', 'Google ADK', 'Claude MCP', 'OpenAI SDK', 'n8n', 'CrewAI'];
  const chains = ['Ethereum', 'Stellar', 'Solana', 'Spark', 'TON', 'Tron'];

  return (
    <section>
      <h2>Every Framework × Every Chain = Chaos</h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '24px 0'
      }}>
        {/* Frameworks */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#718096', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Agent Frameworks
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {frameworks.map((f) => (
              <div key={f} style={{
                background: '#eff6ff',
                border: '1px solid #bfdbfe',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#1e40af'
              }}>
                {f}
              </div>
            ))}
          </div>
        </div>

        {/* Middle - N×M */}
        <div style={{
          background: '#fef2f2',
          border: '2px solid #fecaca',
          borderRadius: '12px',
          padding: '24px 32px',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '32px', fontWeight: 700, color: '#dc2626', margin: 0 }}>N × M</p>
          <p style={{ fontSize: '13px', color: '#7f1d1d', margin: '8px 0 0 0' }}>integrations</p>
        </div>

        {/* Chains */}
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: '13px', fontWeight: 600, color: '#718096', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Settlement Chains
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {chains.map((c) => (
              <div key={c} style={{
                background: '#f0fdf4',
                border: '1px solid #bbf7d0',
                borderRadius: '6px',
                padding: '8px 16px',
                fontSize: '14px',
                fontWeight: 500,
                color: '#166534'
              }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: '8px', padding: '12px', marginBottom: '16px' }}>
        <p style={{ textAlign: 'center', color: '#991b1b', margin: 0, fontSize: '15px' }}>
          <strong>Result:</strong> Fragmented tooling. Duplicated effort. Inconsistent security.
        </p>
      </div>

      <p style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a2e', textAlign: 'center', margin: 0 }}>
        Without abstraction, every framework must integrate every chain.
      </p>
    </section>
  );
};
