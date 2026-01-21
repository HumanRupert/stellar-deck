export const Slide12TheAsk = () => {
  const whatWeNeed = [
    'Technical partnership for wdk-wallet-stellar development',
    'Anchor introductions (Circle, MoneyGram) for off-ramp integration',
    'Grants/funding consideration',
    'Co-announcement: "Stellar: The Payment Rail for AI Agents"',
  ];

  const whatStellarGets = [
    'First-mover position in agentic payments',
    'Tether WDK integration',
    'Agent transaction volume from framework ecosystem',
    'Enterprise credibility via compliance layer',
  ];

  return (
    <section>
      <h2 style={{ color: '#00a67e' }}>Let's Build the Settlement Layer for AI</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '20px' }}>
          <h3 style={{ color: '#1e40af', margin: '0 0 16px 0', fontSize: '18px' }}>What we need:</h3>
          <ol style={{ margin: 0, paddingLeft: '20px' }}>
            {whatWeNeed.map((item, i) => (
              <li key={i} style={{ fontSize: '14px', color: '#4a5568', marginBottom: '8px' }}>
                {item}
              </li>
            ))}
          </ol>
        </div>

        <div style={{ background: '#ecfdf5', border: '1px solid #a7f3d0', borderRadius: '8px', padding: '20px' }}>
          <h3 style={{ color: '#047857', margin: '0 0 16px 0', fontSize: '18px' }}>What Stellar gets:</h3>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            {whatStellarGets.map((item, i) => (
              <li key={i} style={{ fontSize: '14px', color: '#4a5568', marginBottom: '8px' }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        background: '#1a1a2e',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#a0aec0', margin: '0 0 8px 0', fontSize: '15px' }}>
          The agentic economy needs rails that are instant, cheap, and verifiable.
        </p>
        <p style={{ color: 'white', fontWeight: 700, margin: 0, fontSize: '20px' }}>
          Stellar was built for exactly this.
        </p>
      </div>
    </section>
  );
};
