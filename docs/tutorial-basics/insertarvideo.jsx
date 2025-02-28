import React from "react";
import './intro.css';

function VideoIntro({ title, videoUrl }) {
  return (
    <>
      <hr className="block-div" />
      <div className="contenedor-video-2">
        <h1 className="title-intro">{title}</h1>
      </div>
      <div className="contenedor-video">
        <iframe
          className="video"
          width="580"
          height="345"
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
}

export default VideoIntro;