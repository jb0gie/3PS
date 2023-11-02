<script lang="ts">
    export let musician:any
    //Classes
    const imgHover = 'hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25'
    const linkHover = 'font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out'
</script>

<div class="card card-hover variant-ghost-error overflow-hidden shadow-lg">
    <a href={musician?.route}>
        <div class="relative">
            <div class="relative h-64 bg-cover bg-center" style="background-image:url({musician?.pic[0]});">
                <div class={imgHover}></div>
            </div>
            <div class="px-6 py-4">
                <h2 class={linkHover}>{musician?.name}</h2>
                <p class="text-gray-500 text-sm">Genre: {musician?.genre}</p>
            </div>
        </div>
    </a>
</div>