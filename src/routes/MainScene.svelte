<script lang="ts">

  import { T } from '@threlte/core'
	import { Float, interactivity, OrbitControls, Stars } from '@threlte/extras'
	import { Spring } from 'svelte/motion'

	import PlanetLogo from '$lib/components/planet-logo.svelte';

	interactivity()
	const scale = new Spring(1)

</script>

<T.DirectionalLight position={[0, 10, 10]} />

<Float
  rotationIntensity={0.15}
  rotationSpeed={2}
>
  <T.PerspectiveCamera
    makeDefault
    position.z={2}
    fov={120}
    oncreate={(ref) => {
      ref.lookAt(0, 0, 0)
    }}
  />
</Float>

<Stars />
<PlanetLogo />
