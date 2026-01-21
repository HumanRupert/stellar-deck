export const Slide08WhyStellar = () => {
  const comparison = [
    { req: 'Micropayment viable', eth: { val: '$0.50+', status: 'no' }, sol: { val: '$0.001', status: 'partial' }, stellar: { val: '$0.00001', status: 'yes' } },
    { req: 'Predictable fees', eth: { val: 'Gas auctions', status: 'no' }, sol: { val: 'Priority fees', status: 'partial' }, stellar: { val: 'Flat 100 stroops', status: 'yes' } },
    { req: 'True finality', eth: { val: '15 min (reorg risk)', status: 'no' }, sol: { val: 'Reorg possible', status: 'no' }, stellar: { val: '5 sec, final', status: 'yes' } },
    { req: 'Native multi-asset', eth: { val: 'ERC-20 contracts', status: 'no' }, sol: { val: 'SPL tokens', status: 'no' }, stellar: { val: 'Protocol-level', status: 'yes' } },
    { req: 'Fiat off-ramps', eth: { val: 'Limited', status: 'partial' }, sol: { val: 'Limited', status: 'partial' }, stellar: { val: '475K+ access points', status: 'yes' } },
  ];

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === 'yes') return <span style={{ color: '#00a67e' }}>✓</span>;
    if (status === 'no') return <span style={{ color: '#e53e3e' }}>✗</span>;
    return <span style={{ color: '#dd6b20' }}>⚠</span>;
  };

  return (
    <section>
      <h2 style={{ color: '#0066ff' }}>Purpose-Built for Payments</h2>

      <table className="slide-table" style={{ marginBottom: '20px' }}>
        <thead>
          <tr>
            <th>Requirement</th>
            <th>Ethereum</th>
            <th>Solana</th>
            <th>Stellar</th>
          </tr>
        </thead>
        <tbody>
          {comparison.map((row) => (
            <tr key={row.req}>
              <td style={{ fontWeight: 600 }}>{row.req}</td>
              <td><StatusIcon status={row.eth.status} /> {row.eth.val}</td>
              <td><StatusIcon status={row.sol.status} /> {row.sol.val}</td>
              <td style={{ background: '#f0fdf4' }}><StatusIcon status={row.stellar.status} /> {row.stellar.val}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ marginBottom: '16px' }}>
        <p style={{ fontWeight: 600, marginBottom: '8px', fontSize: '15px' }}>The math:</p>
        <table className="slide-table">
          <thead>
            <tr>
              <th>Scenario</th>
              <th>Ethereum</th>
              <th>Stellar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>$0.01 API call</td>
              <td style={{ color: '#e53e3e' }}>Fee {'>'} value</td>
              <td style={{ color: '#00a67e', fontWeight: 500 }}>Fee = 0.0001% of value</td>
            </tr>
            <tr>
              <td>1M daily agent txs</td>
              <td style={{ color: '#e53e3e' }}>$500K/day in gas</td>
              <td style={{ color: '#00a67e', fontWeight: 500 }}>$10/day</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style={{ background: '#eff6ff', border: '1px solid #bfdbfe', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
        <p style={{ fontWeight: 600, color: '#1e40af', margin: 0, fontSize: '15px' }}>
          Stellar doesn't need EIP-3009. Native transfers are already programmable.
        </p>
      </div>
    </section>
  );
};
