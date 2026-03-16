import WorkspaceLayout from '../workspace/layout/WorkspaceLayout';
// import StartScanner from '../layouts/kraken/StartScanner';
import KrakenStreamManager from '../providers/kraken/KrakenStreamManager';
import ProvidersLayer from '../providers/ProvidersLayer';


export default function KrakenPage() {
  return (
    <WorkspaceLayout>
      <ProvidersLayer />
        <p>Kraken Page</p>
    </WorkspaceLayout>
  );
}