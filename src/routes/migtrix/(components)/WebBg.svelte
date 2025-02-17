<div class="video-docker absolute left-0 top-0 h-full w-full overflow-hidden">
	<video class="absolute min-h-full min-w-full object-cover" src="/migtrix.mp4" autoplay muted loop
	></video>
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
