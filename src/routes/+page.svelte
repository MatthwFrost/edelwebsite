<script>
    import { onMount } from "svelte";

    let isMac = false;
    let showBanner = true;
    const INSTALL_URL = "https://chromewebstore.google.com/detail/edel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd";

    onMount(() => {
        isMac = navigator.userAgentData?.platform === 'macOS' || /Mac/.test(navigator.userAgent);
    });

    const sites = [
        { name: 'SUBSTACK', status: 'ok' },
        { name: 'MEDIUM',   status: 'ok' },
        { name: 'REDDIT',   status: 'ok' },
        { name: 'TWITTER',  status: 'ok' },
        { name: 'LINKEDIN', status: 'highlight' },
        { name: 'GMAIL',    status: 'ok' },
        { name: 'WIKIPEDIA', status: 'ok' },
        { name: 'NEWS',     status: 'ok' },
        { name: 'BLOGS',    status: 'ok' },
        { name: 'PDFS',     status: 'soon' },
        { name: 'GOOGLE DOCS', status: 'soon' },
        { name: 'KINDLE',   status: 'ok' }
    ];

    const voices = [
        { name: 'ARIA',  tier: 'FREE' },
        { name: 'FINN',  tier: 'FREE' },
        { name: 'MIRA',  tier: 'FREE' },
        { name: '+ EMBER', tier: 'BETA' },
        { name: '+ ATLAS', tier: 'BETA' },
        { name: '+ SABLE', tier: 'BETA' },
        { name: '+ QUILL', tier: 'BETA' }
    ];

    const altKey = isMac ? 'OPTION' : 'ALT';
</script>

<svelte:head>
    <title>Readel — Hold Alt to Read Aloud</title>
    <meta name="description" content="The free, minimal text-to-speech extension for Chrome. Hover text, hold Alt, listen." />
</svelte:head>

<!-- Global dotted background + shared tokens used via arbitrary Tailwind values -->
<div class="zine min-h-screen font-sans antialiased text-black">

    {#if showBanner}
    <div class="fixed top-0 left-0 right-0 z-50 bg-black text-center py-2 px-4 flex items-center justify-center font-mono text-[10px] tracking-[0.2em] uppercase text-white">
        <span>▼ PDF reader coming soon ▼</span>
        <button on:click={() => showBanner = false} class="absolute right-4 text-white/70 hover:text-white text-base leading-none">&times;</button>
    </div>
    {/if}

    <!-- ========== SECTION 1 · HERO ========== -->
    <section class="relative min-h-screen bg-[#2A3EFF] text-white overflow-hidden flex items-center justify-center px-4 pt-16 pb-10">
        <div class="absolute inset-0 halftone-white opacity-[0.12] pointer-events-none"></div>

        <!-- Corner labels -->
        <div class="absolute top-12 left-6 md:left-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase">READEL · CHROME EXTENSION</div>
        <div class="absolute top-12 right-6 md:right-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase">+ FREE · NO SIGN-UP</div>
        <div class="absolute bottom-6 left-6 md:left-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase">← READEL.APP</div>
        <div class="absolute bottom-6 right-6 md:right-10 font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase">100% FREE · FOREVER</div>

        <!-- Hero card -->
        <div class="relative z-10 w-full max-w-4xl">
            <div class="relative bg-[#F9E94A] text-black border-[3px] border-black rounded-sm p-8 md:p-12 shadow-[10px_10px_0_#000]">
                <div class="absolute inset-0 halftone-black opacity-[0.08] pointer-events-none rounded-sm"></div>

                <div class="relative z-10">
                    <!-- Eyebrow -->
                    <div class="flex items-center gap-2 mb-5 font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase">
                        <span class="w-6 h-[2px] bg-black"></span>
                        <span>Text-to-speech for your browser</span>
                    </div>

                    <!-- Headline -->
                    <h1 class="font-black leading-[0.95] tracking-tight mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
                        <span class="inline-block bg-[#FF4F81] text-black px-2 md:px-3 py-0.5 -rotate-[1deg] -ml-1 mr-1 align-middle">READ</span><span class="align-middle">LESS.</span><br>
                        <span class="inline-block bg-[#2A3EFF] text-white px-2 md:px-3 py-0.5 -rotate-[1deg] -ml-1 mr-1 align-middle">HEAR</span><span class="align-middle">MORE.</span>
                    </h1>

                    <!-- Body -->
                    <p class="font-serif italic text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                        Any article, any page — read aloud the second you hit {altKey.charAt(0) + altKey.slice(1).toLowerCase()}. No buttons, no sign-up, no subscription.
                    </p>

                    <!-- CTAs -->
                    <div class="flex flex-wrap items-center gap-4">
                        <a href={INSTALL_URL} target="_blank"
                           class="inline-flex items-center gap-2 bg-white border-[2.5px] border-black px-5 py-2.5 font-mono text-sm font-bold uppercase tracking-widest shadow-[4px_4px_0_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_#000] transition-all">
                            ▶ Press play
                        </a>
                        <a href="/howto" class="font-mono text-xs uppercase tracking-[0.2em] underline underline-offset-4 hover:text-[#2A3EFF]">How it works →</a>
                    </div>
                </div>

                <!-- Speech bubble tail -->
                <div class="absolute -bottom-[3px] left-16 translate-y-full">
                    <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0 L42 0 L8 34 Z" fill="#F9E94A" stroke="#000" stroke-width="3" stroke-linejoin="miter"/>
                        <rect x="0" y="0" width="42" height="3" fill="#F9E94A"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>

    <!-- ========== SECTION 2 · WORKS ON EVERY SITE ========== -->
    <section class="relative bg-[#F9E94A] text-black overflow-hidden px-6 md:px-14 py-20">
        <div class="absolute inset-0 halftone-black opacity-[0.06] pointer-events-none"></div>

        <div class="relative z-10 max-w-6xl mx-auto">
            <div class="flex items-start justify-between flex-wrap gap-4 mb-10">
                <h2 class="font-black leading-[0.95] tracking-tight text-5xl md:text-7xl lg:text-[96px]">
                    WORKS ON<br>
                    <span class="inline-block bg-black text-[#F9E94A] px-3 py-1 -rotate-[1.5deg] my-2">EVERY</span><br>
                    SITE YOU OPEN.<span class="text-[#FF4F81]">*</span>
                </h2>
                <div class="bg-[#FF4F81] text-black border-[2.5px] border-black font-mono text-xs font-bold uppercase tracking-widest px-3 py-1.5 -rotate-[3deg] shadow-[3px_3px_0_#000] self-start mt-2">*ALMOST</div>
            </div>

            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {#each sites as s}
                    <div class="relative border-[2.5px] border-black bg-white py-3 px-3 font-mono text-xs font-bold uppercase tracking-wider text-center shadow-[3px_3px_0_#000]"
                         class:bg-[#B3E637]={s.status === 'highlight'}>
                        {s.name}
                        {#if s.status === 'soon'}
                            <div class="absolute -top-2 -right-2 bg-[#FF4F81] text-black border-[1.5px] border-black font-mono text-[8px] px-1.5 py-0.5 tracking-widest -rotate-[6deg]">SOON</div>
                        {/if}
                    </div>
                {/each}
            </div>

            <div class="mt-10 flex justify-between items-end flex-wrap gap-4 border-t-[1.5px] border-dashed border-black/40 pt-4 font-mono text-[10px] tracking-[0.2em] uppercase">
                <span>— Not a reader view. Not a new tab. The page you're on, read aloud.</span>
                <span>PG. 3</span>
            </div>
        </div>
    </section>

    <!-- ========== SECTION 3 · POINT. HOLD. LISTEN. ========== -->
    <section class="relative bg-[#2A3EFF] text-white overflow-hidden px-6 md:px-14 py-20">
        <div class="absolute inset-0 halftone-white opacity-[0.1] pointer-events-none"></div>

        <div class="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div class="inline-block bg-[#F9E94A] text-black border-[2.5px] border-black font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] px-2.5 py-1 mb-6 shadow-[3px_3px_0_#000] -rotate-[1.5deg]">
                    ◆ The entire interface ↓
                </div>
                <h2 class="font-black leading-[0.95] tracking-tight text-5xl md:text-7xl lg:text-8xl mb-6">
                    POINT.<br>
                    <span class="inline-block bg-[#F9E94A] text-black px-3 py-0.5 -rotate-[1deg]">HOLD.</span><br>
                    LISTEN.
                </h2>
                <p class="font-serif italic text-xl md:text-2xl leading-snug max-w-md text-white/95">
                    Hover any paragraph, hold {altKey === 'OPTION' ? 'Option' : 'Alt'}, and Readel reads it aloud. Press it again to stop. That's the whole thing.
                </p>
            </div>

            <!-- Alt key card -->
            <div class="relative mx-auto w-full max-w-sm rotate-[-2deg]">
                <div class="relative bg-[#FAF1D6] text-black border-[3px] border-black aspect-square shadow-[10px_10px_0_#000] flex flex-col">
                    <div class="absolute inset-0 halftone-black opacity-[0.08] pointer-events-none"></div>
                    <div class="relative z-10 text-center pt-6 font-mono text-sm font-bold tracking-[0.3em]">ALT</div>
                    <div class="relative z-10 text-center text-[10px] font-mono tracking-[0.3em] opacity-60 mb-4">— OR —</div>
                    <div class="relative z-10 text-center font-mono text-sm font-bold tracking-[0.3em] mb-6">OPTION</div>
                    <div class="relative z-10 flex-1 flex items-center justify-center">
                        <!-- Option/Alt glyph -->
                        <svg width="55%" viewBox="0 0 120 60" fill="none" stroke="black" stroke-width="8" stroke-linecap="square">
                            <path d="M6 10 L36 10 L66 50 L114 50" />
                            <path d="M80 10 L114 10" />
                        </svg>
                    </div>
                </div>
                <div class="absolute -bottom-9 right-0 bg-black text-[#F9E94A] font-mono text-[9px] md:text-[10px] uppercase tracking-[0.25em] px-3 py-1.5 -rotate-[2deg]">
                    † Whichever one you've got
                </div>
            </div>
        </div>
    </section>

    <!-- ========== SECTION 4 · TICKET / VOICES ========== -->
    <section class="relative bg-[#2A3EFF] text-black overflow-hidden px-6 md:px-14 py-20 border-t-[3px] border-black">
        <div class="absolute inset-0 halftone-white opacity-[0.08] pointer-events-none"></div>

        <div class="relative z-10 max-w-5xl mx-auto">
            <div class="inline-block bg-[#F9E94A] text-black border-[2.5px] border-black font-mono text-xs font-bold uppercase tracking-[0.25em] px-3 py-1.5 mb-6 shadow-[3px_3px_0_#000] -rotate-[1deg]">
                ▼ Limited · Beta users only ▼
            </div>

            <div class="ticket grid md:grid-cols-[1.1fr_1fr] border-[3px] border-black bg-[#FAF1D6] shadow-[10px_10px_0_#000]">
                <!-- Left stub -->
                <div class="relative p-8 md:p-10 border-b-[3px] md:border-b-0 md:border-r-[3px] border-dashed border-black">
                    <div class="font-mono text-[10px] tracking-[0.25em] uppercase mb-5 opacity-70">— Admit one / No. 107 / Non-transferable</div>
                    <h3 class="font-black leading-[0.95] tracking-tight text-4xl md:text-5xl lg:text-6xl mb-5">
                        INSTALL<br>TODAY,<br>KEEP<br>
                        <span class="inline-block bg-[#FF4F81] text-black px-2 py-0.5 -rotate-[1deg]">7 VOICES</span><br>
                        FREE.
                    </h3>
                    <p class="font-serif italic text-lg leading-snug mb-6 max-w-xs">
                        Seven premium voices. Locked in forever. No subscription, no catch.
                    </p>
                    <div class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">
                        Serial #R-2026-BETA-0107 · Valid until V3.0
                    </div>
                </div>

                <!-- Right stub -->
                <div class="relative bg-[#F9E94A] p-8 md:p-10">
                    <div class="font-mono text-[10px] tracking-[0.25em] uppercase text-center mb-4 opacity-70">— Included voices —</div>
                    <ul class="divide-y-[1.5px] divide-dashed divide-black/40 font-mono font-bold uppercase tracking-[0.15em]">
                        {#each voices as v}
                            <li class="flex items-center justify-between py-2.5 text-base md:text-lg"
                                class:text-[#FF4F81]={v.tier === 'BETA'}>
                                <span>{v.name}</span>
                                <span class="text-[10px] tracking-[0.3em] opacity-70">{v.tier}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>

            <div class="mt-8 flex justify-between flex-wrap gap-4 font-mono text-[10px] tracking-[0.25em] uppercase text-white">
                <span>READEL · FREE FOREVER · NO SIGN-UP · NO TRACKING</span>
                <span>READEL.APP</span>
            </div>
        </div>
    </section>

    <!-- ========== SECTION 5 · MANIFESTO ========== -->
    <section class="relative bg-[#F0EADB] text-black overflow-hidden px-6 md:px-14 py-24">
        <div class="absolute inset-0 halftone-black opacity-[0.05] pointer-events-none"></div>

        <div class="relative z-10 max-w-6xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-start">
            <div>
                <div class="flex gap-2 mb-6 flex-wrap">
                    <div class="bg-black text-white font-mono text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">◆ Manifesto</div>
                    <div class="bg-[#FF4F81] text-black border-[2px] border-black font-mono text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">Non-negotiable</div>
                </div>
                <h2 class="font-black leading-[0.9] tracking-tight text-5xl md:text-7xl lg:text-8xl">
                    FREE.<br>
                    <span class="font-serif italic text-[#2A3EFF] font-black">FOREVER.</span><br>
                    NO<br>
                    ASTERISKS.
                </h2>
                <p class="mt-6 font-serif italic text-lg md:text-xl max-w-md">
                    Install it. Use it. Forget you did. The way extensions used to be.
                </p>
                <p class="mt-10 font-serif italic text-5xl md:text-6xl text-[#FF4F81] -rotate-[2deg] inline-block" style="text-shadow: 2px 2px 0 #000;">VOID.</p>
            </div>

            <ul class="space-y-3">
                <li class="border-[2.5px] border-black bg-white py-3 px-5 font-mono text-sm md:text-base font-bold uppercase tracking-widest shadow-[4px_4px_0_#000]">No sign-up</li>
                <li class="border-[2.5px] border-black bg-white py-3 px-5 font-mono text-sm md:text-base font-bold uppercase tracking-widest shadow-[4px_4px_0_#000]">No accounts</li>
                <li class="border-[2.5px] border-black bg-white py-3 px-5 font-mono text-sm md:text-base font-bold uppercase tracking-widest shadow-[4px_4px_0_#000]">No tracking</li>
                <li class="border-[2.5px] border-black bg-[#B3E637] py-3 px-5 font-mono text-sm md:text-base font-bold uppercase tracking-widest shadow-[4px_4px_0_#000]">No paywall</li>
            </ul>
        </div>
    </section>

    <!-- ========== FOOTER ========== -->
    <footer class="bg-black text-white px-6 md:px-14 py-10">
        <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-6">
            <div class="flex items-center gap-3">
                <img src="/pixel-icon.png" alt="Readel" class="w-10 h-10" onerror="this.style.display='none'"/>
                <span class="font-black text-xl tracking-tight uppercase">Readel</span>
                <span class="font-mono text-[10px] tracking-[0.25em] opacity-50 uppercase">[beta]</span>
            </div>
            <nav class="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[10px] tracking-[0.25em] uppercase">
                <a href="/howto" class="hover:text-[#F9E94A]">How it works</a>
                <a href="/free" class="hover:text-[#F9E94A]">Why free</a>
                <a href="/updates" class="hover:text-[#F9E94A]">Updates</a>
                <a href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" target="_blank" class="hover:text-[#F9E94A]">Feedback</a>
                <a href="/privacy" class="hover:text-[#F9E94A]">Privacy</a>
            </nav>
            <a href={INSTALL_URL} target="_blank" class="bg-[#F9E94A] text-black border-[2.5px] border-black font-mono text-xs font-bold uppercase tracking-widest px-4 py-2 shadow-[3px_3px_0_#F9E94A]/60 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#F9E94A]/60 transition-all">▶ Install free</a>
        </div>
    </footer>
</div>

<style>
    .halftone-black {
        background-image: radial-gradient(circle, #000 1px, transparent 1px);
        background-size: 10px 10px;
    }
    .halftone-white {
        background-image: radial-gradient(circle, #fff 1px, transparent 1px);
        background-size: 10px 10px;
    }
    .zine {
        font-family: Rubik, system-ui, sans-serif;
    }
</style>
