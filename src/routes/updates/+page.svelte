<script>
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="fixed -z-1">
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
<main class="bg-[#01634F] w-full min-h-[100vh] h-full pt-56 font-sans">
    <div class="md:px-24 p-4 z-0">
        <div class="Title">
            <h1 class="text-green-100 font-bold md:text-6xl text-4xl">
                Readel updates
            </h1>
            <p class="text-green-400 text-2xl">
                Find the recent updates and learn what's new to Readel.
            </p>
        </div>
        <div class="update-main">
            <h2 class="update-heading">08/05/2024 • 1.4.4</h2>
            <div class="update-container">
                <h4 class="update-item">Big update time, PHEW.</h4>
                <p class="update-desc">
                    Hello, everyone. Big update time. When I say this was a long
                    process, I mean it. A lot of effort went into 1.4.4. From
                    re-writing the whole project to cloud service mishaps, I
                    hope you like the new update.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">
                    The elephant in the room. Readel is no longer free.
                </h4>
                <p class="update-desc">
                    Let's start by addressing the elephant in the room, Readel
                    now has in-app purchases. For context, Readel was selected
                    to be part of the Elevenlabs grant program, which provided a
                    free key service to Readel. However, you all exceeded the
                    limit of the grant...this meant I had to come up with
                    something. I spent a long time thinking about how I should
                    implement a paid version and I wanted to do it the right
                    way.
                </p>
                <p class="update-desc">
                    Each user gets 10,000 characters per day by default. If you
                    wish to raise the daily limit, you can purchase more
                    characters. When you buy more characters, this will be added
                    to the daily limit. For example, if you buy 30,000
                    characters, your new limit will be 40,000 daily characters
                    (30,000 + the default 10,000).
                </p>
                <p class="update-desc">
                    You will still get access to all voices and quality settings
                    for free.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Playback speed.</h4>
                <p class="update-desc">
                    The highly requested feature is here. You can now control
                    the playback speed of the audio. FYI, this was the source of
                    re-writing the program. You wouldn't believe it, but it was
                    quite complicated.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Pause/Resume.</h4>
                <p class="update-desc">
                    Quality life improvement and requested feature. You can now
                    pause/resume audio without losing your spot. The audio will
                    start to play from where you left off, instead of restarting
                    the playback.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">NEW Reset button.</h4>
                <p class="update-desc">
                    A new button has been added to reset the audio playback to
                    the beginning.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Fresh paint.</h4>
                <p class="update-desc">
                    Readel has a subtle new look. I like this look better than
                    the old one. Please, let me know what you think.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">And finally.</h4>
                <p class="update-desc">
                    Enjoy the extension. Remember, I'm easy to contact. If you
                    need any help or have any questions, feedback or errors. You
                    can send me an email or use one of the forms provided on the
                    home page.
                </p>
            </div>
        </div>
        <div class="update-main">
            <h2 class="update-heading">31/03/2024 • 1.4.2</h2>
            <div class="update-container">
                <h4 class="update-item">Readel is now FREE.</h4>
                <p class="update-desc">
                    Readel was succesfully picked to be part of <a
                        href="https://elevenlabs.io/text-to-speech"
                        class="underline">ElevenLabs grant</a
                    > program and now has access to better recources and free credits.
                    This means that I can remove the cost of Readel for the time
                    being.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Skip to the next track.</h4>
                <p class="update-desc">
                    You can now skip to the next sentence. Personally, my
                    favourite feature in this update.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">More UI updates.</h4>
                <p class="update-desc">
                    I've made some improvements to Readel's UI again. The button
                    is now in the middle right side of the screen to stop the
                    button from getting in the way. Please let me know what you
                    think of the change.
                </p>
            </div>
        </div>
        <div class="update-main">
            <h2 class="update-heading">15/03/2024 • 1.4.1</h2>
            <div class="update-container">
                <h4 class="update-item">
                    <a href="/buycredits" class="underline">Purchase Credits</a
                    >.
                </h4>
                <p class="update-desc">
                    You are now able to purchase credits for Readel. <strong
                        >This is where your feedback is important.</strong
                    >
                    Please be candid on what you think about the prices or payment
                    model. I want to pick one you are all happy with. Let me know
                    via the
                    <a
                        href="https://ag7phnq517o.typeform.com/to/K5GTEV9L"
                        class="underline">feedback</a
                    >.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">New UI updates.</h4>
                <p class="update-desc">
                    Readel's got some new paint. I have updated the UI, added
                    some new buttons (such as Purchase credits & Updates) and
                    removed ones I didn't think added any value.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Voices, Voices, Voices.</h4>
                <p class="update-desc">
                    <strong>4 new voices have arrived to Readel.</strong> (Chris,
                    Anna, James, Zues). All voices are free and I will continue to
                    add more as updates come.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Pick where you start listening.</h4>
                <p class="update-desc">
                    When you highlight text to listen, Readel will continue
                    reading the rest of the page from where you selected.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">New volume slider.</h4>
                <p class="update-desc">
                    Control the audio volume by hovering over the Readel play
                    button, then clicking on the volume button. *NOTE*
                    Currently, the volume slider position is wrong. This will be
                    fixed in the next patch.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Where the play button shows.</h4>
                <p class="update-desc">
                    I have change the way the play button pops up on websites.
                    There is a new criteria the button needs to meet. The page
                    needs atleast 300 characters and for some websites like
                    OpenAi's <a href="https://chat.openai.com" class="underline"
                        >ChatGPT</a
                    >
                    and
                    <a href="https://www.youtube.com" class="underline"
                        >Youtube</a
                    > has been disabled as I don't have an implementation for these
                    yet. However, you are still able to use the highlight-read feature.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Improved account handling.</h4>
                <p class="update-desc">
                    Previously, there was no way to tell if you were signed in
                    to Readel. Which, doesn't help, as the whole program fails
                    if you aren't signed in. I have added a new method, if the
                    first method (Sign in on install) fails. You will also be
                    notified if you aren't signed in and you will be prompted to
                    do so. *NOTE* You can view your email via Readel's extension
                    pop up.
                </p>
            </div>
        </div>
        <p class="px-10 text-green-50 py-20">*End of updates*</p>
    </div>
    <Footer />
</main>
