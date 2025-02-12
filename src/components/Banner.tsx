import video from '../public/video.mp4';

export default function Banner() {
  return (
    <div className="w-full h-screen bg-black bg-opacity-50">
      <video autoPlay muted loop className="w-full h-full object-cover">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
