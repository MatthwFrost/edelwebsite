<script>
    import Footer from "$lib/components/Footer.svelte";
    import { onMount } from "svelte";
    let isMac = false;
    onMount(() => {
        isMac = navigator.userAgentData?.platform === 'macOS' || /Mac/.test(navigator.userAgent);
    });
    const altKey = () => isMac ? 'Option' : 'Alt';
</script>

<svelte:head>
    <title>Readel — How it works</title>
</svelte:head>

<main class="relative min-h-screen bg-[#2A3EFF] text-white font-sans overflow-hidden">
    <div class="absolute inset-0 halftone-white opacity-[0.12] pointer-events-none"></div>

    <!-- Top bar -->
    <div class="relative z-10 flex items-center justify-between px-6 md:px-10 pt-8">
        <a href="/" class="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase hover:text-[#F9E94A]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Home
        </a>
        <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">READEL · FIELD GUIDE</span>
    </div>

    <section class="relative z-10 px-6 md:px-14 py-16 max-w-5xl mx-auto">
        <!-- Title -->
        <div class="mb-12">
            <div class="inline-block bg-[#F9E94A] text-black border-[2.5px] border-black font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] px-2.5 py-1 mb-5 shadow-[3px_3px_0_#000] -rotate-[1deg]">
                ◆ Issue No. 1
            </div>
            <h1 class="font-black leading-[0.9] tracking-tight text-5xl md:text-7xl mb-3">
                HOW TO<br>
                <span class="inline-block bg-[#F9E94A] text-black px-3 py-0.5 -rotate-[1deg]">USE READEL</span>
            </h1>
            <p class="font-serif italic text-xl md:text-2xl opacity-90">It only takes one key.</p>
        </div>

        <!-- Steps -->
        <ol class="space-y-6">
            <li class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
                <div class="absolute -top-4 -left-2 bg-black text-[#F9E94A] font-mono font-bold text-sm px-3 py-1 -rotate-[4deg]">01</div>
                <h4 class="font-black text-2xl md:text-3xl tracking-tight mb-3">Install the extension</h4>
                <p class="font-serif italic text-lg leading-snug">
                    Install Readel from the
                    <a href="https://chromewebstore.google.com/detail/readel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd"
                       class="underline decoration-[#2A3EFF] decoration-2 underline-offset-4 hover:text-[#2A3EFF]">Chrome Web Store</a>. It's free.
                </p>
            </li>

            <li class="relative bg-white text-black border-[3px] border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
                <div class="absolute -top-4 -left-2 bg-[#FF4F81] text-black border-[2px] border-black font-mono font-bold text-sm px-3 py-1 -rotate-[4deg]">02</div>
                <h4 class="font-black text-2xl md:text-3xl tracking-tight mb-3">Hold {altKey()} to read</h4>
                <p class="font-serif italic text-lg leading-snug mb-3">
                    Navigate to any webpage with text. Hover your cursor over a paragraph and hold the <kbd class="bg-[#2A3EFF] text-white border-[1.5px] border-black rounded-sm px-1.5 py-0.5 font-mono text-xs font-bold tracking-wider">{altKey()}</kbd> key. The paragraph will highlight and start reading aloud.
                </p>
                <p class="font-serif italic text-lg leading-snug">
                    Release {altKey()} to finish the current sentence and stop.
                </p>
            </li>

            <li class="relative bg-[#F0EADB] text-black border-[3px] border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
                <div class="absolute -top-4 -left-2 bg-black text-white font-mono font-bold text-sm px-3 py-1 -rotate-[4deg]">03</div>
                <h4 class="font-black text-2xl md:text-3xl tracking-tight mb-3">Double-tap {altKey()} for continuous reading</h4>
                <p class="font-serif italic text-lg leading-snug mb-3">
                    Double-tap <kbd class="bg-[#FF4F81] text-black border-[1.5px] border-black rounded-sm px-1.5 py-0.5 font-mono text-xs font-bold tracking-wider">{altKey()}</kbd> to start reading from the hovered paragraph through the rest of the page. The highlight follows along as each section is read.
                </p>
                <p class="font-serif italic text-lg leading-snug">
                    Press <kbd class="bg-[#FF4F81] text-black border-[1.5px] border-black rounded-sm px-1.5 py-0.5 font-mono text-xs font-bold tracking-wider">{altKey()}</kbd> once to stop.
                </p>
            </li>

            <li class="relative bg-[#F9E94A] text-black border-[3px] border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
                <div class="absolute -top-4 -left-2 bg-black text-[#F9E94A] font-mono font-bold text-sm px-3 py-1 -rotate-[4deg]">04</div>
                <h4 class="font-black text-2xl md:text-3xl tracking-tight mb-3">Customise your experience</h4>
                <p class="font-serif italic text-lg leading-snug mb-4">Click the Readel icon in your extensions toolbar to open settings. You can change:</p>
                <ul class="space-y-2">
                    <li class="border-[2px] border-black bg-white py-2 px-4 font-mono text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]"><strong class="text-[#2A3EFF]">Voice</strong> — 7 natural AI voices</li>
                    <li class="border-[2px] border-black bg-white py-2 px-4 font-mono text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]"><strong class="text-[#2A3EFF]">Speed</strong> — 0.5x to 2x playback</li>
                    <li class="border-[2px] border-black bg-white py-2 px-4 font-mono text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]"><strong class="text-[#2A3EFF]">Volume</strong> — adjust to taste</li>
                </ul>
            </li>

            <li class="relative bg-white text-black border-[3px] border-black p-6 md:p-8 shadow-[6px_6px_0_#000]">
                <div class="absolute -top-4 -left-2 bg-[#B3E637] text-black border-[2px] border-black font-mono font-bold text-sm px-3 py-1 -rotate-[4deg]">05</div>
                <h4 class="font-black text-2xl md:text-3xl tracking-tight mb-3">That's it.</h4>
                <p class="font-serif italic text-lg leading-snug">
                    No right-clicking, no buttons, no menus. Just hover and hold {altKey()}. Try it on this page.
                </p>
            </li>
        </ol>

        <div class="mt-16 flex justify-between font-mono text-[10px] tracking-[0.25em] uppercase opacity-70 border-t-[1.5px] border-dashed border-white/40 pt-4">
            <span>— End of the guide —</span>
            <span>PG. 5 / 5</span>
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
