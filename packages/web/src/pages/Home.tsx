import { Link } from 'react-router-dom';
import { PLATFORMS } from '@mkt/shared';
import { adapters, kits } from '../lib/registry.ts';

export function Home() {
  return (
    <div className="app">
      <h2>Marketplace chat: one build, nine platforms</h2>
      <table>
        <thead>
          <tr><th>Platform</th><th>Adapter view</th><th>Kit view</th></tr>
        </thead>
        <tbody>
          {PLATFORMS.map((p) => (
            <tr key={p}>
              <td>{p}</td>
              <td>
                {adapters[p] ? (
                  <>
                    <Link to={`/adapter/${p}?user=buyer_ana`}>Ana</Link> · <Link to={`/adapter/${p}?user=seller_ben`}>Ben</Link> · <Link to={`/adapter/${p}?user=agent_sam`}>Sam</Link>
                  </>
                ) : (
                  <span style={{ color: '#999' }}>not implemented</span>
                )}
              </td>
              <td>{kits[p] ? <Link to={`/kit/${p}?user=seller_ben`}>open</Link> : <span style={{ color: '#999' }}>none</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p><Link to="/order/ord_1001">Order page</Link></p>
    </div>
  );
}
