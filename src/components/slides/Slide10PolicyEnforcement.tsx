import { Highlight, themes } from 'prism-react-renderer';

const policyCode = `const agentPolicy = {
  budget: {
    daily: 100_000_000n,        // 100 USDC max/day
    perTransaction: 1_000_000n  // 1 USDC max/tx
  },
  allowedRecipients: ['G...*'], // Verified providers only
  velocity: { maxPerMinute: 10, maxPerHour: 100 },
  allowedAssets: ['USDC:GA5Z...', 'native'],
  logging: {
    destination: 'compliance.company.com',
    includeTaskContext: true
  }
}`;

export const Slide10PolicyEnforcement = () => {
  return (
    <section>
      <h2 style={{ color: '#d97706' }}>AI is Stochastic. Finance is Deterministic.</h2>

      <p style={{ marginBottom: '16px' }}>
        <strong>The SDK reconciles this with configurable guardrails:</strong>
      </p>

      <div style={{ marginBottom: '20px' }}>
        <Highlight theme={themes.nightOwl} code={policyCode} language="javascript">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre style={{
              ...style,
              padding: '20px',
              borderRadius: '8px',
              fontSize: '13px',
              lineHeight: '1.5',
              margin: 0,
              overflow: 'auto'
            }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </div>

      <div style={{ background: '#f7f8fc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '12px', textAlign: 'center' }}>
        <p style={{ fontWeight: 600, margin: 0, fontSize: '16px', color: '#1a1a2e' }}>
          Every transaction validated before execution. Every transaction logged for compliance.
        </p>
      </div>
    </section>
  );
};
