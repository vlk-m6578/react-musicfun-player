import { createRoot } from 'react-dom/client'
import './index.css'
import { TracksList } from './ui/TracksList';
import { TrackDetail } from './ui/TrackDetail';
import { useTrackSelection } from './bll/useTrackSelection';
// import { App } from './App.tsx'

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);
reactRoot.render(
  <MainPage />
)

function MainPage() {
  const { trackId, setTrackId } = useTrackSelection()

  const handleTrackSelect = (id: string | null) => {
    setTrackId(id);
  }

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <TracksList selectedTrackId={trackId} onTrackSelect={handleTrackSelect} />
        <TrackDetail trackId={trackId} />
      </div>
    </div>
  )
}
