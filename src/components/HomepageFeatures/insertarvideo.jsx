import React from "react";
import './intro.css';

function VideoIntro({ title, videoUrl }) {
  return (
    <>
      <div className="contenedor-video">
        <iframe 
          className="full-width-video" 
          src={videoUrl} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
        </iframe>
      </div>
    </>
  );
}

export default VideoIntro;