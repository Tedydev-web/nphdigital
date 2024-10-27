import React, { useEffect, useRef } from 'react';

const VideoBackground = ({ videoSrc }) => {
	const videoRef = useRef(null);

	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = 0.75;
		}
	}, []);

	return (
		<div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }}>
			<video
				ref={videoRef}
				crossOrigin="anonymous"
				autoPlay
				playsInline
				loop
				muted
				style={{
					width: '100%',
					height: '100%',
					objectFit: 'cover',
					objectPosition: 'center',
				}}>
				<source
					src={`${videoSrc}?f_auto,q_auto`}
					type="video/mp4"
				/>
			</video>
		</div>
	);
};

export default VideoBackground;
