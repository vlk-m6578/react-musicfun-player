import { useEffect, useState } from "react";
import { getTracks, type TrackListItemResource } from "../dal/api";

export function useTracks() {
  const [tracks, setTracks] = useState<Array<TrackListItemResource> | null>(null);

  useEffect(() => {
    getTracks().then(data => setTracks(data.data));
  }, []);

  return { tracks }
}