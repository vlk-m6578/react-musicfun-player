
type TrackDetailsAttributes = {
  title: string
  lyrics: string | null
}

export type TrackDetailsResource = {
  id: string
  attributes: TrackDetailsAttributes
}

type GetTrackDetailsOutput = {
  data: TrackDetailsResource
}

const getHeaders = () => {
  const apiKey = import.meta.env.VITE_API_KEY
  if(!apiKey) return undefined
  return {
    'api-key': apiKey
  }
}

export const getTrack = (trackId: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(`https://musicfun.it-incubator.app/api/1.0/playlists/tracks/${trackId}`, {
    headers: getHeaders()
  }).then(res => res.json())
  return promise
}

type TrackListItemAttributes = {
  title: string
  attachments: Array<TrackAttachment>
}

type TrackAttachment = {
  url: string
}

export type TrackListItemResource = {
  id: string
  attributes: TrackListItemAttributes
}

type GetTrackListOutput = {
  data: Array<TrackListItemResource>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
    headers: getHeaders()
  }).then(res => res.json())
  return promise
}