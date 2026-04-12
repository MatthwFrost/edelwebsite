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

{#if showBanner}
<div class="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-center py-2.5 px-4 flex items-center justify-center">
    <span class="text-blue-100 text-sm">PDF reader coming soon</span>
    <button on:click={() => showBanner = false} class="absolute right-4 text-blue-300 hover:text-white text-lg leading-none">&times;</button>
</div>
{/if}

<main
    class="h-[100vh] flex justify-center items-center text-slate-100 font-sans bg-blue-600 content"
>
    <div class="fixed">
        <h1 class="font-sans text-[50vw] opacity-10">2.0</h1>
    </div>
    <div class="fixed w-[100vw] h-[100vh] filter blur-[0.7px] opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2000 2000" width="2000" height="2000"><defs><filter id="nnnoise-filter" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
            <feTurbulence type="turbulence" baseFrequency="0.178" numOctaves="4" seed="15" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"></feTurbulence>
            <feSpecularLighting surfaceScale="18" specularConstant="2" specularExponent="20" lighting-color="#0094ff" x="0%" y="0%" width="100%" height="100%" in="turbulence" result="specularLighting">
                    <feDistantLight azimuth="3" elevation="150"></feDistantLight>
              </feSpecularLighting>
        </filter></defs><rect width="2000" height="2000" fill="transparent"></rect><rect width="2000" height="2000" fill="#0094ff" filter="url(#nnnoise-filter)"></rect></svg>
    </div>
    <div
        class="w-[60vw] h-[60vw] bg-blue-200 rounded-full filter blur-md fixed mix-blend-multiply animate-blob left-10 top-[-50] animation-delay-4000"
    ></div>
    <div
        class="w-[40vw] h-[40vw] bg-blue-200 rounded-full filter blur-md fixed mix-blend-multiply animate-blob left-30 top-60 animation-delay-3000"
    ></div>
    <div
        class="w-[50vw] h-[50vw] bg-blue-200 rounded-full filter blur-md fixed mix-blend-multiply animate-blob right-0 bottom-10 animation-delay-1000"
    ></div>

    <div class="flex flex-col items-center z-10 px-6">
        <!-- Logo + Title -->
        <div class="flex items-center gap-3 mb-3">
            <img src="/newicon.png" alt="Readel icon" class="md:w-20 md:h-20 w-12 h-12" />
            <h1 class="lg:text-7xl text-5xl font-bold">Readel</h1>
        </div>

        <!-- Tagline -->
        <p class="font-medium text-white text-lg tracking-wide mb-2">Modern. Minimal. Free.</p>
        <p class="text-blue-200 text-sm text-center max-w-sm">
            No buttons, no menus, no sign-up. Just hold {isMac ? 'Option' : 'Alt'} over any text and listen.
        </p>

        <!-- Shortcut card -->
        <div class="mt-10 bg-blue-500/20 backdrop-blur-sm border border-blue-400/20 rounded-2xl px-8 py-5 w-full max-w-xs">
            <div class="flex items-center justify-between mb-3">
                <span class="text-blue-100 text-sm font-medium">Read paragraph</span>
                <div class="flex items-center gap-1.5">
                    <span class="text-blue-300 text-xs">hold</span>
                    <kbd class="bg-blue-400/20 border border-blue-300/30 rounded px-2.5 py-1 text-xs font-mono text-white">{isMac ? '⌥' : 'Alt'}</kbd>
                </div>
            </div>
            <div class="w-full h-px bg-blue-400/20 mb-3"></div>
            <div class="flex items-center justify-between">
                <span class="text-blue-100 text-sm font-medium">Read full page</span>
                <div class="flex items-center gap-1.5">
                    <span class="text-blue-300 text-xs">double tap</span>
                    <kbd class="bg-blue-400/20 border border-blue-300/30 rounded px-2.5 py-1 text-xs font-mono text-white">{isMac ? '⌥' : 'Alt'}</kbd>
                </div>
            </div>
        </div>

        <!-- CTA -->
        <a
            class="mt-10 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
            href="https://chromewebstore.google.com/detail/edel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd"
            target="_blank">Install for free</a
        >

        <!-- Nav links -->
        <nav class="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-100/80">
            <a href="/howto" class="hover:text-white transition-colors">How it works</a>
            <a href="/free" class="hover:text-white transition-colors">How is it free?</a>
            <a href="/updates" class="hover:text-white transition-colors">Updates</a>
            <a href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" target="_blank" class="hover:text-white transition-colors">Feedback</a>
        </nav>
    </div>
</main>
