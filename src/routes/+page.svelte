<script>
    import { onMount } from "svelte";

    let isMac = false;
    let showBanner = true;
    let currentIndex = 0;
    const texts = [
        "Listen to articles while you browse.",
        "Hear any paragraph with a single key.",
        "Catch grammar errors in your writing.",
        "Turn any webpage into a podcast.",
    ];

    function cycleText() {
        currentIndex = (currentIndex + 1) % texts.length;
    }

    onMount(() => {
        isMac = navigator.userAgentData?.platform === 'macOS' || /Mac/.test(navigator.userAgent);
        const interval = setInterval(cycleText, 4000);
        return () => clearInterval(interval);
    });
</script>

<svelte:head>
    <title>Readel — Hold Alt to Read Aloud</title>
</svelte:head>

{#if showBanner}
<div class="fixed top-0 left-0 right-0 z-50 bg-black text-center py-2 px-4 flex items-center justify-center font-mono text-[10px] tracking-[0.25em] uppercase text-white">
    <span>▼ PDF reader coming soon ▼</span>
    <button on:click={() => showBanner = false} class="absolute right-4 text-white/70 hover:text-white text-base leading-none">&times;</button>
</div>
{/if}

<main class="relative min-h-screen flex justify-center items-center bg-[#2A3EFF] px-4 py-16 font-sans overflow-hidden">
    <!-- Halftone dots -->
    <div class="absolute inset-0 halftone-white opacity-[0.12] pointer-events-none"></div>

    <!-- Corner labels -->
    <div class="absolute top-12 left-6 md:left-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white z-20">READEL · CHROME EXTENSION</div>
    <div class="absolute top-12 right-6 md:right-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white z-20">+ FREE · NO SIGN-UP</div>
    <div class="absolute bottom-6 left-6 md:left-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white z-20">← READEL.APP</div>
    <div class="absolute bottom-6 right-6 md:right-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-white z-20">100% FREE · FOREVER</div>

    <div class="relative z-10 w-full max-w-2xl">
        <!-- Hero card -->
        <div class="relative bg-[#F9E94A] text-black border-[3px] border-black rounded-sm p-8 md:p-12 shadow-[10px_10px_0_#000]">
            <div class="absolute inset-0 halftone-black opacity-[0.07] pointer-events-none rounded-sm"></div>

            <div class="relative z-10 flex flex-col items-center text-center">
                <!-- Logo + Title -->
                <div class="flex items-center gap-3 mb-5">
                    <img src="/pixel-icon.png" alt="Readel" class="w-12 h-12 md:w-16 md:h-16" onerror="this.style.display='none'"/>
                    <h1 class="font-black tracking-tight uppercase text-5xl md:text-7xl leading-none">Readel</h1>
                </div>

                <!-- Tagline -->
                <p class="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase mb-2">Modern · Minimal · Free</p>

                <!-- Rotating sub-tagline -->
                <p class="font-serif italic text-lg md:text-xl max-w-md mb-2 leading-snug">
                    {texts[currentIndex]}
                </p>
                <p class="font-serif italic text-sm md:text-base text-black/80 max-w-sm leading-snug">
                    No buttons, no menus, no sign-up. Just hold {isMac ? 'Option' : 'Alt'} over any text and listen.
                </p>

                <!-- Shortcut card -->
                <div class="mt-8 bg-white border-[2.5px] border-black w-full max-w-xs shadow-[4px_4px_0_#000] divide-y-[1.5px] divide-dashed divide-black/40">
                    <div class="flex items-center justify-between px-4 py-3">
                        <span class="font-mono text-[11px] font-bold tracking-[0.15em] uppercase">Read paragraph</span>
                        <div class="flex items-center gap-1.5">
                            <span class="font-mono text-[9px] tracking-[0.2em] uppercase opacity-70">hold</span>
                            <kbd class="bg-[#2A3EFF] text-white border-[1.5px] border-black rounded-sm px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest shadow-[2px_2px_0_#000]">{isMac ? '⌥' : 'Alt'}</kbd>
                        </div>
                    </div>
                    <div class="flex items-center justify-between px-4 py-3">
                        <span class="font-mono text-[11px] font-bold tracking-[0.15em] uppercase">Read full page</span>
                        <div class="flex items-center gap-1.5">
                            <span class="font-mono text-[9px] tracking-[0.2em] uppercase opacity-70">double tap</span>
                            <kbd class="bg-[#FF4F81] text-black border-[1.5px] border-black rounded-sm px-2 py-0.5 text-[10px] font-mono font-bold tracking-widest shadow-[2px_2px_0_#000]">{isMac ? '⌥' : 'Alt'}</kbd>
                        </div>
                    </div>
                </div>

                <!-- CTA -->
                <a
                    class="mt-8 inline-flex items-center gap-2 bg-white text-black border-[2.5px] border-black px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all"
                    href="https://chromewebstore.google.com/detail/edel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd"
                    target="_blank">▶ Install for free</a
                >

                <!-- Nav -->
                <nav class="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
                    <a href="/howto" class="underline underline-offset-4 decoration-black/40 hover:decoration-black hover:text-[#2A3EFF] transition-colors">How it works</a>
                    <a href="/free" class="underline underline-offset-4 decoration-black/40 hover:decoration-black hover:text-[#2A3EFF] transition-colors">How is it free?</a>
                    <a href="/updates" class="underline underline-offset-4 decoration-black/40 hover:decoration-black hover:text-[#2A3EFF] transition-colors">Updates</a>
                    <a href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" target="_blank" class="underline underline-offset-4 decoration-black/40 hover:decoration-black hover:text-[#2A3EFF] transition-colors">Feedback</a>
                </nav>
            </div>

            <!-- Speech-bubble tail -->
            <div class="absolute -bottom-[3px] left-14 translate-y-full">
                <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L42 0 L8 34 Z" fill="#F9E94A" stroke="#000" stroke-width="3" stroke-linejoin="miter"/>
                    <rect x="0" y="0" width="42" height="3" fill="#F9E94A"/>
                </svg>
            </div>
        </div>
    </div>
</main>

<style>
    .halftone-white {
        background-image: radial-gradient(circle, #fff 1px, transparent 1px);
        background-size: 10px 10px;
    }
    .halftone-black {
        background-image: radial-gradient(circle, #000 1px, transparent 1px);
        background-size: 10px 10px;
    }
</style>
