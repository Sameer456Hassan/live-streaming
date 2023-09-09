import React, { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const videoSrc = "http://localhost:8080/hls/abdi.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    const Hls = window.Hls;

    const handleCanPlay = () => {
      video.currentTime = video.duration;
      video.removeEventListener("canplay", handleCanPlay);
    };

    video.addEventListener("canplay", handleCanPlay);

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      console.log(videoSrc);
      console.log("HLS supported");
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = videoSrc;
      console.log(videoSrc);
      console.log("HLS not supported");
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section className="hero_section">
      <div className="container-fluid p-0" style={{ position: "relative" }}>
        <h1
          style={{
            position: "absolute",
            top: "40%",
            left: "40%",
            color: "white",
            zIndex: "222",
          }}
        >
          No Live Stream Available
        </h1>
        <video
          src=""
		  controls
          autoPlay
          ref={videoRef}
          style={{ height: "100vh", width: "100%" }}
        ></video>
      </div>
    </section>
  );
}
