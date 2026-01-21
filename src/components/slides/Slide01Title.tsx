export const Slide01Title = () => {
  return (
    <section>
      <div style={{ marginTop: '80px' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '8px' }}>
          Financial Rails for AI Agents
        </h1>

        <p style={{ fontSize: '24px', color: '#4a5568', marginBottom: '48px' }}>
          <strong>Stellar</strong> × <strong>Semantic Pay</strong> × <strong>Tether WDK</strong>
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          maxWidth: '800px'
        }}>
          {[
            { name: 'Stellar', desc: 'Settlement Rails' },
            { name: 'WDK', desc: 'Wallet Provider' },
            { name: 'AP2', desc: 'Authorization' },
            { name: 'x402', desc: 'Negotiation Protocol' },
          ].map((item) => (
            <div
              key={item.name}
              style={{
                background: '#f7f8fc',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                padding: '16px',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a2e' }}>
                {item.name}
              </div>
              <div style={{ fontSize: '13px', color: '#718096', marginTop: '4px' }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <p style={{ fontSize: '14px', color: '#718096', marginTop: '48px' }}>
          January 2026
        </p>
      </div>
    </section>
  );
};
