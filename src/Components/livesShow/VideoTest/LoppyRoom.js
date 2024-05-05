import React from "react";

const LoppyRoom = () => {
    const [joined, setJoined] = useState(false);

  return (
    <div>
      {!joined && (
        <button
          type="button"
          className="btn btn-info live-btn"
          onClick={() => setJoined(true)}
        >
          Join Now
        </button>
      )}
    </div>
  );
};

export default LoppyRoom;
