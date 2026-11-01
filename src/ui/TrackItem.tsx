import type { TrackListItemResource } from "../dal/api"
import styles from './TrackItem.module.css'
import clsx from 'clsx'

type TrackItemProps = {
  track: TrackListItemResource
  onSelect: (trackId: string) => void
  isSelected: boolean
}

export function TrackItem({ track, onSelect, isSelected }: TrackItemProps) {

  const className = clsx({
    [styles.track]: true,
    [styles.selected]: isSelected
  })

  return (
    <li className={className} key={track.id}>
      <div onClick={() => { onSelect(track.id) }}>
        {track.attributes.title}
      </div>
      <audio src={track.attributes.attachments[0].url} controls></audio>
    </li>
  )
}