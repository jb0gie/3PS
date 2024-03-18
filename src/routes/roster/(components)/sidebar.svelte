<script>
	import { cn } from '../../../lib/utils';
	import { Button } from '../../../lib/components/ui/button';

	import { activeTab } from '../store';
	export { className as class };
	
    let className;

	function switchTab(tab) {
		activeTab.set(tab); 
        console.log($activeTab)
	}
</script>

<div class={cn('pb-12', className)}>
	<div class="space-y-4 p-4">
		<div class="py-2">
			<h2 class="mb-2 px-4 text-3xl font-semibold tracking-tight text-center">Discover 🔍</h2>
			<div class="space-y-10">
                <div class="flex flex-auto">
                    <Button variant="link" class="justify-start" on:click={() => switchTab('music')}>
                        <div class="text-3xl">
                            <span class="mr-2">🎸 Music</span>
                        </div>
                    </Button>
                    <div class="h-4"/>
                    <Button variant="link" class="justify-start" on:click={() => switchTab('art')}>
                        <div class="text-3xl">
                            <span class="mr-2">🎨 Art</span>
                        </div>
                    </Button>
                </div>
			</div>
		</div>
	</div>
</div>

<!-- <div class="px-3 py-2">
            <h2 class="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
            <div class="space-y-1">
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="M21 15V6" />
                        <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path d="M12 12H3" />
                        <path d="M16 6H3" />
                        <path d="M12 18H3" />
                    </svg>
                    Playlists
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <circle cx="8" cy="18" r="4" />
                        <path d="M12 18V2l7 4" />
                    </svg>
                    Songs
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    Made for You
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                        <circle cx="17" cy="7" r="5" />
                    </svg>
                    Artists
                </Button>
                <Button variant="ghost" class="w-full justify-start">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="mr-2 h-4 w-4"
                    >
                        <path d="m16 6 4 14" />
                        <path d="M12 6v14" />
                        <path d="M8 8v12" />
                        <path d="M4 4v16" />
                    </svg>
                    Albums
                </Button>
            </div>
        </div> -->
<!-- <div class="py-2">
            <h2 class="relative px-7 text-lg font-semibold tracking-tight">Playlists</h2>
            <div class="h-[300px] overflow-y-auto px-1">
                <div class="space-y-1 p-2">
                    {#each playlists as playlist}
                        <Button variant="ghost" class="w-full justify-start font-normal">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="mr-2 h-4 w-4"
                            >
                                <path d="M21 15V6" />
                                <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                <path d="M12 12H3" />
                                <path d="M16 6H3" />
                                <path d="M12 18H3" />
                            </svg>
                            {playlist}
                        </Button>
                    {/each}
                </div>
            </div>
        </div> -->
<!-- </div>
</div> -->
