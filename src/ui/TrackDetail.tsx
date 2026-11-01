import { useTrackDetail } from "../bll/useTrackDetail"
import styles from './TrackDetail.module.css'

type TrackDetailProps = {
  trackId: string | null
}

export function TrackDetail({ trackId }: TrackDetailProps) {
  const { trackDetals } = useTrackDetail(trackId)

  return (
    <div className={styles.track}>
      <h3>Details</h3>
      {!trackDetals && !trackId && 'Track is not selected'}
      {!trackDetals && trackId && 'Loading...'}
      {trackDetals && trackId && trackDetals?.id !== trackId && 'Loading...'}
      {trackDetals && (
        <div>
          {trackDetals.attributes.title}
          <p>{!trackDetals.attributes.lyrics ? 'no lyrics' : trackDetals.attributes.lyrics}</p>
        </div>
      )}
    </div>
  )
}