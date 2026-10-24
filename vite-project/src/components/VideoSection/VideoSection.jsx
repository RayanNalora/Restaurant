import './VideoSection.css';

function VideoSection({ videoSrc, poster }) {
  return (
    <section className="video-section">
      <video
        className="video-section__video"
        src={videoSrc}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
      />
    </section>
  );
}

export default VideoSection;
