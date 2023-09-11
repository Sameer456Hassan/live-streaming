import React, { useEffect, useRef, useState } from "react";
import Axios from "axios";

export default function HeroSection() {
  const [live, setLive] = useState("on");
  const videoRef = useRef(null);
  const videoSrc = "http://localhost:8080/hls/abdi.m3u8";

  useEffect(() => {
    function makePostRequest() {
      Axios.post(process.env.REACT_APP_BACK_URL + "/get_stream")
        .then((response) => {
          console.log(response.data.streaming);
          var live_rep = response.data.streaming;
          if (live_rep === 1) {
            setLive("on");
          } else if (live_rep === 0) {
            setLive("off");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    makePostRequest();

    setInterval(makePostRequest, 5000);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return; // Check if videoRef has a value

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
  }, [videoRef, videoSrc]);

  return (
    <section className="hero_section">
      <div className="container-fluid p-0" style={{ position: "relative" }}>
        {live === "on" ? (
          <video
            src=""
            controls
            autoPlay
            ref={videoRef}
            style={{ height: "100vh", width: "100%" }}
          ></video>
        ) : (
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
        )}
      </div>
    </section>
  );
}
