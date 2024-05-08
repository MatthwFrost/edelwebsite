<script>
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="fixed -z-1 opacity-50">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        xmlns:svgjs="http://svgjs.dev/svgjs"
        viewBox="0 0 1920 1080"
        width="1920"
        height="1080"
        opacity="0.48"
        ><defs
            ><filter
                id="nnnoise-filter"
                x="-20%"
                y="-20%"
                width="140%"
                height="140%"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
                color-interpolation-filters="linearRGB"
            >
                <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.102"
                    numOctaves="4"
                    seed="15"
                    stitchTiles="stitch"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    result="turbulence"
                ></feTurbulence>
                <feSpecularLighting
                    surfaceScale="15"
                    specularConstant="0.75"
                    specularExponent="20"
                    lighting-color="#7ed321"
                    x="0%"
                    y="0%"
                    width="100%"
                    height="100%"
                    in="turbulence"
                    result="specularLighting"
                >
                    <feDistantLight azimuth="3" elevation="100"
                    ></feDistantLight>
                </feSpecularLighting>
            </filter></defs
        ><rect width="1920" height="1080" fill="transparent"></rect><rect
            width="1920"
            height="1080"
            fill="#7ed321"
            filter="url(#nnnoise-filter)"
        ></rect></svg
    >
</div>
<section
    class="bg-fixed absolute top-0 left-0 md:px-24 px-4 py-20 text-[rgb(14, 19, 24)]"
>
    <a href="/" class="flex flex-row items-center font-bold text-green-100">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-arrow-left"
            ><line x1="19" y1="12" x2="5" y2="12" /><polyline
                points="12 19 5 12 12 5"
            /></svg
        >
        Home
    </a>
</section>
<main class="bg-blue-600 w-full min-h-[100vh] h-full pt-56 font-sans">
    <div class="md:px-24 p-4 z-0">
        <div class="Title">
            <h1 class="text-blue-100 font-bold md:text-6xl text-4xl">
                Getting started - Guide.
            </h1>
            <p class="text-blue-100 text-2xl">Learn how to use Readel.</p>
        </div>
        <div class="blue-update-main">
            <div class="blue-update-container">
                <h4 class="blue-update-item">Install the extension.</h4>
                <p class="blue-update-desc">
                    You can install the extension here, the <a
                        href="https://chromewebstore.google.com/detail/readel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd?hl=en-US&utm_source=ext_sidebar"
                        class="underline">Google Chrome store</a
                    >. You will be prompted to login to a Google account.
                </p>
                <p class="blue-update-desc mt-2">
                    <strong>If you aren't pompted to sign in</strong> click on
                    the "Readel icon" in the extension tab, where you will find
                    a login button.
                </p>
            </div>
            <div class="blue-update-container">
                <h4 class="blue-update-item">Get listening.</h4>
                <p class="blue-update-desc">
                    Once Readel is installed, you will be able to find a blue
                    play button on pages with more than 200 characters. You will see the icon on the right, middle side of the screen when available.
                </p>
                <p class="blue-update-desc mt-2">
                    The play button will appear one webpages with lots of text
                    content, like this one.
                </p>
            </div>
            <div class="blue-update-container">
                <h4 class="blue-update-item">Change settings.</h4>
                <p class="blue-update-desc">
                    You can change settings like playback speed, volume, voice and voice quality.
                </p>
                <p class="blue-update-desc mt-2">
                    <strong>PLAYBACK BACK AND VOLUME:</strong>
                </p>
                <p class="blue-update-desc">
                    Change these settings by hovering over the play button displayed on any webpage. A row of buttons will apear. These will allow you to change the settings.
                </p>
                <p class="blue-update-desc mt-2">
                    <strong>CHANGE VOICE AND VOICE QUALITY:</strong>
                </p>
                <p class="blue-update-desc ">
                    You can find these settings in the pop up. Find the extensions tab on your browser, and click on the Readel icon. Here you will be able to change the voice and voice quality.
                    Make this more accessible by pinning the Readel extension.
                </p>
            </div>
            <div class="blue-update-container">
                <h4 class="blue-update-item">
                    Try the <strong>Playground</strong>.
                </h4>
                <p class="blue-update-desc">
                    I have built a place where you can try and explore the
                    extension. Be aware that using the playground will use up
                    your daily character quota. The playground is 1724
                    characters long. This may vary, if I change the story and
                    forget to update this stat.
                </p>
            </div>
            <div class="blue-update-container">
                <h4 class="blue-update-item">Try it out.</h4>
                <p class="blue-update-desc">
                    Try out the extension. Either click the play button on the
                    right of the screen, or highlight this text, right click and
                    select "Read aloud".
                </p>
            </div>
        </div>
        <p class="px-10 text-green-50 py-20">*End of the guide*</p>
    </div>
    <Footer />
</main>
