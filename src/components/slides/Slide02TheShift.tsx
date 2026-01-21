export const Slide02TheShift = () => {
  const useCases = [
    { label: 'Data', desc: 'Pay for BTCUSD price feeds, SEC filings, market sentiment' },
    { label: 'Compute', desc: 'Pay for on-demand GPU cycles, backtesting infrastructure' },
    { label: 'Services', desc: 'Pay other agents for analysis, translation, specialized tasks' },
    { label: 'Goods', desc: 'Pay for physical resources to complete objectives' },
  ];

  return (
    <section>
      <h2>Agents Are Becoming Economic Actors</h2>

      <p style={{ marginBottom: '20px' }}>
        AI agents are graduating from answering questions to executing workflows that require payment:
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        {useCases.map((item) => (
          <div key={item.label} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{
              background: '#0066ff',
              color: 'white',
              padding: '4px 12px',
              borderRadius: '4px',
              fontSize: '14px',
              fontWeight: 600,
              minWidth: '80px',
              textAlign: 'center',
              display: 'inline-block'
            }}>
              {item.label}
            </span>
            <span style={{ fontSize: '16px', color: '#4a5568' }}>{item.desc}</span>
          </div>
        ))}
      </div>

      <div style={{
        background: '#f7f8fc',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '20px'
      }}>
        <p style={{ margin: 0, fontSize: '16px' }}>
          Think of an agent as an employee. Employees need to pay for things.
        </p>
      </div>

      <p style={{ fontSize: '18px', fontWeight: 600, color: '#1a1a2e', margin: 0 }}>
        The bottleneck isn't intelligence. It's the ability to transact.
      </p>
    </section>
  );
};
