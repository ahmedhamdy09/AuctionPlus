import { useState } from 'react';
import { VideoRoom } from './videoRoom';
function MainAgora() {
  const [joined, setJoined] = useState(false);
  return (
    <div className="MainAgora">
      <h1>WDJ Virtual Call</h1>

      {!joined && (
        <button onClick={() => setJoined(true)}>
          Join Room
        </button>
      )}

      {joined && <VideoRoom />}
    </div>
  );
}

export default MainAgora;