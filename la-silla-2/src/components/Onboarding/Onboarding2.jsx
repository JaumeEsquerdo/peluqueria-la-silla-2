import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";

const subtitles = ["ESTILO PROPIO", "CORTA. RENUEVA.", "ACTITUD"];

export const Onboarding2 = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const navigate = useNavigate();

  const videoRef = useRef();

  // cambiar de subtitulos
  useEffect(() => {
    if (subtitleIndex === subtitles.length - 1) return;

    const interval = setInterval(() => {
      setSubtitleIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [subtitleIndex]);

  // navegar al home cuando acabe el último
  useEffect(() => {
    if (subtitleIndex !== subtitles.length - 1) return;

    const timeout = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [subtitleIndex, navigate]);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.playbackRate = 1.08;
  }, []);

  return (
    <div className="Onboarding2">
      <div className="Onboarding2-videoWrapper">
        <h2 className="Onboarding2-h2">LA (2) SILLA</h2>
        <video
          ref={videoRef}
          className="Onboarding2-video"
          src="/video/video-silla.mp4"
          autoPlay
          muted
          playsInline
          auto
          loop
        />
        <h3 className="Onboarding2-h3">{subtitles[subtitleIndex]}</h3>
      </div>
    </div>
  );
};
