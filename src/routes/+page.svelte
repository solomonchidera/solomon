<script lang="ts">
    import { slide, blur } from "svelte/transition";
    import { useLanyard } from "sk-lanyard";
    import { Linked, Link, config } from "$lib";

    let seeMore = false;
    const lanyard = useLanyard({ method: "ws", id: config.discordUid });
</script>

<div class="max-w-screen-md mx-auto bg-blue.gray px-6 py-6 space-y-12 md:py-20">

    <div class="flex flex-col-reverse gap-6 md:flex-row">
        <div class="flex flex-col gap-2">
            <h1 class="font-bricolage.grotesque">Hi, I'm Solomon</h1>
            
            <div>
                <p>
                    I'm a 20/yr developer from Nigeria, I’ve been coding and building stuff since 2018, <Link href="https://docs.python.org/3/">Python</Link> is my go to language with a secret love for <Link href="https://eloquentjavascript.net/">Javascript</Link> :) I'm open to new opportunities!
                </p>

                {#if seeMore}
                    <p transition:slide={{ duration: 100 }}>
                        <br>
                        I code with other languages too, high levels and low level ones, apart from programming I love playing games, mostly survival and football games, Am currently furthering my knowledge on by pursuing computer science degree and am loving it so far, being with computers gives me joy and the joy boost me to solve atleast a problem while having fun, below are among the list of things I’ve built, more to build and some still in development                    </p>
                {/if}

                <button class="mt-2 font-medium text-white text-opacity-50 underline underline-offset-4 hover:text-opacity-75" on:click={() => seeMore = !seeMore}>{seeMore ? "See less" : "Learn more"}</button>
            </div>
        </div>
        
        <div class="p-1 rounded-full ring-1 ring-white ring-opacity-25 max-w-32 max-h-32">
            <img class="w-full h-full rounded-full" src="profile.jpeg" alt="Solomon pics" width="400" height="400">
        </div>
    </div>

    <ul class="grid grid-cols-1 gap-4 md:grid-cols-2">

        {#each config.projects as item}
            <li>
                <a href="{item.url}" target="_blank">
                    <div class="h-full p-4 bg-white rounded-[4px] bg-opacity-5 hover:bg-opacity-7 ring-1 ring-white ring-opacity-15 backdrop-blur-sm space-y-1">
                        
                        <h2 class="font-bricolage.grotesque relative">
                            {item.title}
                            <span class="absolute my-2 ml-1">
                                {@html Linked}
                            </span>
                        </h2>

                        <p>{item.description}</p>
                    </div>
                </a>
            </li>
        {/each}

    </ul>

    <div class="flex flex-col gap-6 md:flex-row md:justify-between md:items-center md:gap-0">
        <div>
            {#if $lanyard}
                <div transition:slide={{ duration: 250 }}>
                    <h2 class="text-opacity-25" transition:blur={{ duration: 500 }}>
                        Currently
    
                        <a href="https://github.com/Phineas/lanyard">
                            <span class="px-1.5 py-0.5 opacity-75 bg-white rounded-md bg-opacity-7 font-mono relative hover:opacity-100">
                                <img class="inline-block animate-pulse" src="{$lanyard.discord_status}.svg" alt="">
                                {$lanyard.discord_status}
                            </span>
                        </a>
    
                        on Discord.
                    </h2>
                </div>
            {/if}
    
            <h2 class="text-opacity-25">© 2024 — All rights reserved</h2>
        </div>

        <ul class="flex flex-wrap gap-3">
            {#each config.socials as item}
                <li>
                    <a href="{item.url}" target="_blank" aria-label="{item.name}">
                        <span class="opacity-25 hover:opacity-75">
                            {@html item.icon}
                        </span>
                    </a>
                </li>
            {/each}
        </ul>
    </div>
</div>
