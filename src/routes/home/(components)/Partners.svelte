<script>
	import db from '$lib/db';
	import * as Avatar from '$lib/components/ui/avatar';
	import * as Tooltip from '$lib/components/ui/tooltip';
	let partner;
	db.partner.subscribe((p) => (partner = p));
    const box = 'max-w-7xl mx-auto flex flex-wrap justify-around gap-8 py-12 px-4'
	const title =
		'w-full mb-4 -mt-4 text-center text-base font-semibold uppercase text-gray-400 tracking-wider';
	const link = 'flex items-center justify-center text-gray-400 hover:text-gray-200';
</script>

<div class={box}>
	<p class={title}>3PS Partners & Affiliates</p>
	{#each partner as partner}
		<a class={link} href={partner?.site} target="_blank">
			<Tooltip.Root>
				<Tooltip.Trigger>
					<Avatar.Root>
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