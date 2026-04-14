<script>
    import Footer from "$lib/components/Footer.svelte";
</script>

<svelte:head>
    <title>Readel — How is it free?</title>
</svelte:head>

<main class="relative min-h-screen bg-[#2A3EFF] text-white font-sans flex flex-col justify-between overflow-hidden">
    <div class="absolute inset-0 halftone-white opacity-[0.12] pointer-events-none"></div>

    <!-- Top bar -->
    <div class="relative z-10 flex items-center justify-between px-6 md:px-10 pt-8">
        <a href="/" class="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase hover:text-[#F9E94A]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Home
        </a>
        <span class="font-mono text-[10px] tracking-[0.25em] uppercase opacity-70">READEL · MANIFESTO</span>
    </div>

    <!-- Hero card -->
    <section class="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <div class="relative bg-[#F0EADB] text-black border-[3px] border-black rounded-sm p-10 md:p-14 max-w-2xl w-full shadow-[10px_10px_0_#000]">
            <div class="absolute inset-0 halftone-black opacity-[0.05] pointer-events-none rounded-sm"></div>

            <div class="relative z-10">
                <div class="flex gap-2 mb-6 flex-wrap">
                    <div class="bg-black text-white font-mono text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">◆ Manifesto</div>
                    <div class="bg-[#FF4F81] text-black border-[2px] border-black font-mono text-[10px] font-bold uppercase tracking-[0.25em] px-2.5 py-1">Non-negotiable</div>
                </div>

                <h1 class="font-black leading-[0.9] tracking-tight text-5xl md:text-7xl mb-8">
                    HOW<br>
                    <span class="font-serif italic text-[#2A3EFF] font-black">IS IT</span><br>
                    FREE?
                </h1>

                <p class="font-serif italic text-xl md:text-2xl leading-snug mb-5">
                    I don't collect any data on you. No accounts, no tracking, no analytics.
                </p>
                <p class="font-serif italic text-xl md:text-2xl leading-snug mb-8">
                    I just like making things.
                </p>
                <p class="font-mono text-xs leading-relaxed tracking-wide opacity-70 border-t-[1.5px] border-dashed border-black/40 pt-4 max-w-md">
                    Readel is a solo project, built because I wanted a text-to-speech tool that's not bloated, free, and sounds good.
                </p>

                <div class="mt-8 flex flex-wrap gap-3">
                    <div class="border-[2px] border-black bg-white py-2 px-4 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]">No sign-up</div>
                    <div class="border-[2px] border-black bg-white py-2 px-4 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]">No tracking</div>
                    <div class="border-[2px] border-black bg-white py-2 px-4 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]">No accounts</div>
                    <div class="border-[2px] border-black bg-[#B3E637] py-2 px-4 font-mono text-[11px] font-bold uppercase tracking-widest shadow-[3px_3px_0_#000]">No paywall</div>
                </div>
            </div>

            <!-- Tail -->
            <div class="absolute -bottom-[3px] left-14 translate-y-full">
                <svg width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0 L42 0 L8 34 Z" fill="#F0EADB" stroke="#000" stroke-width="3" stroke-linejoin="miter"/>
                    <rect x="0" y="0" width="42" height="3" fill="#F0EADB"/>
                </svg>
            </div>
        </div>
    </section>

    <div class="relative z-10"><Footer /></div>
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
