import React, { useRef, useEffect } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  opacity?: number;
  overlayOpacity?: number;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  src,
  className = '',
  opacity = 0.3,
  overlayOpacity = 0.2
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ opacity }}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div 
        className="absolute inset-0 bg-gradient-to-b from-white to-white" 
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default VideoBackground; 