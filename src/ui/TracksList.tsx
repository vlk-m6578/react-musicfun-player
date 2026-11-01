import { TrackItem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from './TracksList.module.css';

type TracksListProps = {
  selectedTrackId: string | null
  onTrackSelect: (id: string | null) => void
}

export function TracksList({ selectedTrackId, onTrackSelect }: TracksListProps) {
  const { tracks } = useTracks()

  if (tracks === null) {
    return <span>loading...</span>
  }

  if (tracks.length === 0) {
    return <span>no tracks</span>
  }

  const hadleResetClick = () => {
    onTrackSelect?.(null);
  }

  const handleClick = (trackId: string) => {
    onTrackSelect?.(trackId)
  }

  return (
    <div>
      <button onClick={hadleResetClick}>reset</button>

      <ul className={styles.tracks}>
        {tracks.map(track => {
          return (
            <TrackItem key={track.id} track={track} onSelect={handleClick} isSelected={selectedTrackId === track.id ? true : false} />
          )
        })}
      </ul>
    </div>
  )
}