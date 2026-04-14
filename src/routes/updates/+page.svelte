<script>
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Readel — Updates</title>
</svelte:head>

<main class="relative min-h-screen bg-[#2A3EFF] text-white font-sans overflow-hidden">
    <div class="absolute inset-0 halftone-white opacity-[0.12] pointer-events-none"></div>

    <div class="relative z-10 flex items-center justify-between px-6 md:px-10 pt-8">
        <a href="/" class="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase hover:text-[#F9E94A]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Home
        </a>
        <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">READEL · CHANGELOG</span>
    </div>

    <section class="relative z-10 px-6 md:px-14 py-16 max-w-5xl mx-auto">
        <!-- Title -->
        <div class="mb-12">
            <div class="inline-block bg-[#F9E94A] text-black border-[2.5px] border-black font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] px-2.5 py-1 mb-5 shadow-[3px_3px_0_#000] -rotate-[1deg]">
                ◆ Dispatches
            </div>
            <h1 class="font-black leading-[0.9] tracking-tight text-5xl md:text-7xl mb-3">
                READEL<br>
                <span class="inline-block bg-[#FF4F81] text-black px-3 py-0.5 -rotate-[1deg]">UPDATES</span>
            </h1>
            <p class="font-serif italic text-xl md:text-2xl opacity-90">What's new and what changed.</p>
        </div>

        <!-- 2.0.0 release -->
        <div class="mb-14">
            <div class="flex items-baseline justify-between flex-wrap gap-2 mb-6 border-b-[2.5px] border-dashed border-white/40 pb-3">
                <h2 class="font-mono text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Vol. 2.0 · 13 Apr 2026</h2>
                <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-60">Latest issue</span>
            </div>
            <div class="space-y-5">
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Okay, big one. Readel 2.0.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        I've been wanting to do this for a while. I scrapped the old Readel app and built a new one. It should be faster, more reliable, and have better audio quality. My motivation was the idea of interacting with the tool — pressing Alt and hovering to read is something that felt missing when using the old Readel.
                    </p>
                </div>
                <div class="relative bg-white text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">It's free now.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        No more character limits, no more sign-in. Just install and use it. I wrote a bit about why on the
                        <a href="/free" class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">how is it free</a>
                        page if you're curious. Basically, I enjoy it and think it's cool. And hope you do too.
                    </p>
                </div>
                <div class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">And finally.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        The popup is just voice, speed, and volume now. That's all you need. As always, if something breaks or you have an idea, I'm easy to reach. Use the feedback link on the home page.
                    </p>
                </div>
            </div>
        </div>

        <!-- 1.4.4 release -->
        <div class="mb-14">
            <div class="flex items-baseline justify-between flex-wrap gap-2 mb-6 border-b-[2.5px] border-dashed border-white/40 pb-3">
                <h2 class="font-mono text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Vol. 1.4.4 · 08 May 2024</h2>
                <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-60">Archive</span>
            </div>
            <div class="space-y-5">
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Big update time, PHEW.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Hello, everyone. Big update time. When I say this was a long process, I mean it. A lot of effort went into 1.4.4. From re-writing the whole project to cloud service mishaps, I hope you like the new update.
                    </p>
                </div>
                <div class="relative bg-white text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">The elephant in the room. Readel is no longer free.</h4>
                    <p class="font-serif italic text-lg leading-snug mb-3">
                        Let's start by addressing the elephant in the room — Readel now has in-app purchases. For context, Readel was selected to be part of the ElevenLabs grant program, which provided a free key service. However, you all exceeded the limit of the grant, which meant I had to come up with something. I spent a long time thinking about how to implement a paid version and I wanted to do it the right way.
                    </p>
                    <p class="font-serif italic text-lg leading-snug mb-3">
                        Each user gets 10,000 characters per day by default. If you wish to raise the daily limit, you can purchase more characters. When you buy more characters, they add to the daily limit. For example, if you buy 30,000 characters, your new limit will be 40,000 daily characters (30,000 + the default 10,000).
                    </p>
                    <p class="font-serif italic text-lg leading-snug">You will still get access to all voices and quality settings for free.</p>
                </div>
                <div class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Playback speed.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        The highly requested feature is here. You can now control the playback speed of the audio. FYI, this was the source of re-writing the program. You wouldn't believe it, but it was quite complicated.
                    </p>
                </div>
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Pause / Resume.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Quality-of-life improvement and requested feature. You can now pause and resume audio without losing your spot. The audio will start to play from where you left off, instead of restarting the playback.
                    </p>
                </div>
                <div class="relative bg-white text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">NEW Reset button.</h4>
                    <p class="font-serif italic text-lg leading-snug">A new button has been added to reset the audio playback to the beginning.</p>
                </div>
                <div class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Fresh paint.</h4>
                    <p class="font-serif italic text-lg leading-snug">Readel has a subtle new look. I like this look better than the old one. Please, let me know what you think.</p>
                </div>
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">And finally.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Enjoy the extension. Remember, I'm easy to contact. If you need any help or have any questions, feedback or errors, you can send me an email or use one of the forms on the home page.
                    </p>
                </div>
            </div>
        </div>

        <!-- 1.4.2 release -->
        <div class="mb-14">
            <div class="flex items-baseline justify-between flex-wrap gap-2 mb-6 border-b-[2.5px] border-dashed border-white/40 pb-3">
                <h2 class="font-mono text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Vol. 1.4.2 · 31 Mar 2024</h2>
                <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-60">Archive</span>
            </div>
            <div class="space-y-5">
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Readel is now FREE.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Readel was successfully picked to be part of
                        <a href="https://elevenlabs.io/text-to-speech" class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">ElevenLabs' grant</a>
                        program and now has access to better resources and free credits. This means I can remove the cost of Readel for the time being.
                    </p>
                </div>
                <div class="relative bg-white text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Skip to the next track.</h4>
                    <p class="font-serif italic text-lg leading-snug">You can now skip to the next sentence. Personally, my favourite feature in this update.</p>
                </div>
                <div class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">More UI updates.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        I've made some improvements to Readel's UI again. The button is now in the middle-right of the screen to stop it from getting in the way. Please let me know what you think of the change.
                    </p>
                </div>
            </div>
        </div>

        <!-- 1.4.1 release -->
        <div class="mb-14">
            <div class="flex items-baseline justify-between flex-wrap gap-2 mb-6 border-b-[2.5px] border-dashed border-white/40 pb-3">
                <h2 class="font-mono text-lg md:text-2xl font-bold tracking-[0.2em] uppercase">Vol. 1.4.1 · 15 Mar 2024</h2>
                <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-60">Archive</span>
            </div>
            <div class="space-y-5">
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">
                        <a href="/buycredits" class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">Purchase Credits</a>.
                    </h4>
                    <p class="font-serif italic text-lg leading-snug">
                        You are now able to purchase credits for Readel.
                        <strong>This is where your feedback is important.</strong>
                        Please be candid on what you think about the prices or payment model. I want to pick one you are all happy with. Let me know via the
                        <a href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">feedback</a> link.
                    </p>
                </div>
                <div class="relative bg-white text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">New UI updates.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Readel's got some new paint. I have updated the UI, added some new buttons (such as Purchase credits & Updates) and removed ones I didn't think added any value.
                    </p>
                </div>
                <div class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Voices, Voices, Voices.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        <strong>4 new voices have arrived in Readel.</strong> (Chris, Anna, James, Zeus.) All voices are free and I will continue to add more as updates come.
                    </p>
                </div>
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Pick where you start listening.</h4>
                    <p class="font-serif italic text-lg leading-snug">When you highlight text to listen, Readel will continue reading the rest of the page from where you selected.</p>
                </div>
                <div class="relative bg-white text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">New volume slider.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Control the audio volume by hovering over the Readel play button, then clicking the volume button. <em>Note:</em> currently the volume slider position is wrong. This will be fixed in the next patch.
                    </p>
                </div>
                <div class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Where the play button shows.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        I have changed the way the play button pops up on websites. There is a new criteria the button needs to meet: the page needs at least 300 characters, and for some websites like OpenAI's
                        <a href="https://chat.openai.com" class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">ChatGPT</a>
                        and
                        <a href="https://www.youtube.com" class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">YouTube</a>
                        it has been disabled as I don't have an implementation for these yet. However, you are still able to use the highlight-read feature.
                    </p>
                </div>
                <div class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-7 shadow-[6px_6px_0_#000]">
                    <h4 class="font-black text-xl md:text-2xl tracking-tight mb-2">Improved account handling.</h4>
                    <p class="font-serif italic text-lg leading-snug">
                        Previously, there was no way to tell if you were signed in to Readel — which doesn't help, as the whole program fails if you aren't signed in. I have added a new method. If the first method (sign-in on install) fails, you will also be notified if you aren't signed in and prompted to do so. <em>Note:</em> you can view your email via Readel's extension popup.
                    </p>
                </div>
            </div>
        </div>

        <div class="mt-16 flex justify-between font-mono text-[10px] tracking-[0.25em] uppercase opacity-70 border-t-[1.5px] border-dashed border-white/40 pt-4">
            <span>— End of updates —</span>
            <span>ARCHIVE</span>
        </div>
    </section>

    <div class="relative z-10"><Footer /></div>
</main>

<style>
    .halftone-white {
        background-image: radial-gradient(circle, #fff 1px, transparent 1px);
        background-size: 10px 10px;
    }
</style>
