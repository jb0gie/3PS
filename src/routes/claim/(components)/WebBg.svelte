<div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
	<video
		class="min-w-full min-h-full absolute object-cover"
		src="/migtrix.mp4"
		type="video/mp4"
		autoplay
		muted
		loop
	/>
</div>

<style>
	.video-docker video {
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.video-docker::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
</style>
