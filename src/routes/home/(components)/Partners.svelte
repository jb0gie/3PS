<script lang="ts">
	import db from '$lib/db';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Tooltip from '$lib/components/ui/tooltip';
	let partner: any;
	db.partner.subscribe((p) => (partner = p));
	const box = 'max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4';
	const title = 'w-full mb-4 -mt-4 text-center text-2xl font-semibold uppercase tracking-wider';
	const link = 'flex items-center justify-center text-gray-400 hover:text-gray-200';
</script>

<div class={box}>
	<p class={title}>Partners & Affiliates</p>
	{#each partner as partner}
		<a class={link} href={partner?.site} target="_blank">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Avatar.Root class="w-24 h-24 md:w-12 md:h-12">
						<Avatar.Image src={partner?.pic} alt={partner?.name} />
					</Avatar.Root>
				</Tooltip.Trigger>
				<Tooltip.Content>
					<p>{partner?.name}</p>
				</Tooltip.Content>
			</Tooltip.Root>
		</a>
	{/each}
</div>
