export const Slide05ProtocolGap = () => {
  return (
    <section>
      <h2>The Protocol Gap</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
        {/* x402 */}
        <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', borderTop: '4px solid #0066ff' }}>
          <div style={{ padding: '16px' }}>
            <h3 style={{ color: '#0066ff', margin: '0 0 12px 0', fontSize: '18px' }}>x402 (Coinbase)</h3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li style={{ marginBottom: '6px', fontSize: '14px' }}>HTTP 402 revival for pay-per-request APIs</li>
              <li style={{ marginBottom: '6px', fontSize: '14px' }}>Relies on EIP-3009 (transferWithAuthorization)</li>
              <li style={{ marginBottom: '6px', fontSize: '14px', fontWeight: 600 }}>After 6 years, only USDC implements EIP-3009</li>
              <li style={{ marginBottom: '6px', fontSize: '14px' }}>USDT, PYUSD, DAI — none support it</li>
              <li style={{ marginBottom: '0', fontSize: '14px' }}>x402 is effectively USDC-only</li>
            </ul>
          </div>
        </div>

        {/* L402 */}
        <div style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '8px', borderTop: '4px solid #f59e0b' }}>
          <div style={{ padding: '16px' }}>
            <h3 style={{ color: '#d97706', margin: '0 0 12px 0', fontSize: '18px' }}>L402 (Lightning Labs)</h3>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li style={{ marginBottom: '6px', fontSize: '14px' }}>Macaroons + Lightning for API monetization</li>
              <li style={{ marginBottom: '6px', fontSize: '14px' }}>Relies on Lightning Network routing</li>
              <li style={{ marginBottom: '6px', fontSize: '14px' }}>Channel management complexity</li>
              <li style={{ marginBottom: '0', fontSize: '14px', fontWeight: 600 }}>Not positioned to scale to billions of agent transactions</li>
            </ul>
          </div>
        </div>
      </div>

      <div style={{
        background: '#1a1a2e',
        borderRadius: '8px',
        padding: '16px',
        textAlign: 'center'
      }}>
        <p style={{ color: 'white', fontWeight: 600, margin: 0, fontSize: '16px' }}>
          Both are chain-specific. Neither solves N×M. Neither has authorization.
        </p>
      </div>
    </section>
  );
};
