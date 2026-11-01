import { useEffect, useState } from "react";
import { getTrack, type TrackDetailsResource } from "../dal/api";

export function useTrackDetail(trackId: string | null) {
  const [trackDetals, setTrackDetals] = useState<TrackDetailsResource | null>(null);

  useEffect(() => {

    if (!trackId) {
      setTrackDetals(null);
      return;
    }

    getTrack(trackId).then(data => setTrackDetals(data.data));
  }, [trackId])

  return { trackDetals }
}