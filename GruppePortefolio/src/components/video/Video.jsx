import React, { useState } from "react";
import "./Video.css";

function Video() {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnail = "/images/gruppebilde.jpg";

  return (
    <section id="video" className="video-section">
      <h2>Bli kjent med oss!</h2>
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
            src="https://www.youtube.com/embed/UuVR_5D0p2M?autoplay=1"
            title="Promo Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
}

export default Video;
