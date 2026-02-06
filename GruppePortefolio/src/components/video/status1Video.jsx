import React, { useState } from "react";
import "./Video.css";

function Status1Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = "/images/gruppebilde.jpg";

  return (
    <section id="video" className="video-section">
      <h2>Status 1 - video!</h2>
      <div className="video-container">
        {!isPlaying ? (
          <div
            className="video-thumbnail"
            style={{ backgroundImage: `url(${thumbnail})` }}
            onClick={() => setIsPlaying(true)}
          >
            <div className="play-button">&#9658;</div>
          </div>
        ) : (
            <iframe
              src="https://www.youtube.com/embed/YdMm0BlLg2c?autoplay=1"
              title="Status1 Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
        )}
      </div>
    </section>
  );
}

export default Status1Video;
