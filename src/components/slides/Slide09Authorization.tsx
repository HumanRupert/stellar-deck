export const Slide09Authorization = () => {
  const mandates = [
    {
      title: 'CART MANDATE',
      subtitle: '(Human Present)',
      items: ['Exact items, amounts, payee', 'Signed at transaction time', 'Non-repudiable proof'],
      color: '#0066ff',
      bg: '#eff6ff',
      border: '#bfdbfe'
    },
    {
      title: 'INTENT MANDATE',
      subtitle: '(Human Not Present)',
      items: ['"Pay up to $10/day for weather data"', 'Spending limits, categories, TTL', 'Signed before agent acts autonomously'],
      color: '#7c3aed',
      bg: '#f5f3ff',
      border: '#ddd6fe'
    },
    {
      title: 'PAYMENT MANDATE',
      subtitle: '(Network Visibility)',
      items: ['Signals AI involvement to networks', 'Enables appropriate risk rules', 'Creates audit trail'],
      color: '#00a67e',
      bg: '#ecfdf5',
      border: '#a7f3d0'
    },
  ];

  return (
    <section>
      <h2 style={{ color: '#7c3aed' }}>Who Approved This Payment?</h2>

      <p style={{ marginBottom: '16px' }}>
        <strong>Google AP2 Verifiable Digital Credentials solve accountability.</strong>
      </p>

      <div style={{
        display: 'inline-block',
        background: '#f7f8fc',
        border: '1px solid #e2e8f0',
        borderRadius: '6px',
        padding: '8px 16px',
        marginBottom: '16px'
      }}>
        <span style={{ fontWeight: 600, fontSize: '14px', color: '#4a5568' }}>AP2 MANDATE TYPES</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '20px' }}>
        {mandates.map((m) => (
          <div key={m.title} style={{ background: m.bg, border: `1px solid ${m.border}`, borderRadius: '8px', padding: '16px' }}>
            <h3 style={{ color: m.color, margin: '0 0 4px 0', fontSize: '14px' }}>{m.title}</h3>
            <p style={{ color: '#718096', margin: '0 0 12px 0', fontSize: '12px' }}>{m.subtitle}</p>
            <ul style={{ margin: 0, paddingLeft: '16px' }}>
              {m.items.map((item, i) => (
                <li key={i} style={{ fontSize: '13px', color: '#4a5568', marginBottom: '4px' }}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #eff6ff 100%)', border: '1px solid #ddd6fe', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: '15px', color: '#4a5568' }}>
          <strong>Result:</strong> Every agent transaction traces back to a verified human.
          Regulators get transparency. Merchants get confidence.
        </p>
      </div>
    </section>
  );
};
