import ReactPlayer from 'react-player';

export default function VideoPlayer({ url }) {
  return (
    <div className="relative w-full" style={{ paddingTop: '56.25%' /* 16:9 Aspect Ratio */ }}>
      <ReactPlayer
        url={url}
        width="100%"
        height="100%"
        controls
        className="absolute top-0 left-0"
      />
    </div>
  );
}