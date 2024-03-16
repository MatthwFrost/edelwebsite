
<script>
    import Footer from '$lib/components/Footer.svelte'
</script>
<section class="bg-fixed absolute top-0 left-0 md:px-24 px-4 py-20 text-[rgb(14, 19, 24)]">
    <a href="/" class="flex flex-row items-center font-bold text-green-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
            Home 
    </a>
</section>
<main class="bg-[#01634F] w-full min-h-[100vh] h-full pt-56">
    <div class="md:px-24 p-4">
        <div class="Title">
            <h1 class="text-green-100 font-bold md:text-6xl text-4xl">Readel updates</h1>
            <p class="text-green-400 text-2xl">Find the recent updates and learn what's new to Readel.</p>
        </div>
        <div class="update-main">
            <h2 class="update-heading">15/03/2024 • 1.4.1</h2>
            <div class="update-container">
                <h4 class="update-item"><a href="/buycredits" class="underline">Purchase Credits</a>.</h4>
                <p class="update-desc">
                    You are now able to purchase credits for Readel. <strong>This is where your feedback is important.</strong>
                    Please be candid on what you think about the prices or payment model. I want 
                    to pick one you are all happy with. Let me know via the feedback<a href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" class="underline">feedback</a>
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">New UI updates.</h4>
                <p class="update-desc">
                    Readel's got some new paint. I have updated the UI, added some new buttons (such as Purchase credits & Updates) and removed ones I didn't think added
                    any value.
                </p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Voices, Voices, Voices.</h4>
                <p class="update-desc"><strong>4 new voices have arrived to Readel.</strong> (Chris, Anna, James, Zues). All voices are free and I will continue to add more as updates come.</p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Pick where you start listening.</h4>
                <p class="update-desc">When you highlight text to listen, Readel will continue reading the rest of the page from where you selected.</p>
            </div>
            <div class="update-container">
                <h4 class="update-item">New volume slider.</h4>
                <p class="update-desc">Control the audio volume by hovering over the Readel play button, then clicking on the volume button. *NOTE* Currently, the volume slider position is wrong. This will be fixed in the next patch.</p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Where the play button shows.</h4>
                <p class="update-desc">I have change the way the play button pops up on websites. There is a new 
                    criteria the button needs to meet. The page needs atleast 300 characters and for 
                    some websites like OpenAi's <a href="https://chat.openai.com" class="underline">ChatGPT</a> and <a href="https://www.youtube.com" class="underline">Youtube</a> has been disabled as 
                    I don't have an implementation for these yet. However, you are still able to use the highlight-read feature.</p>
            </div>
            <div class="update-container">
                <h4 class="update-item">Improved account handling.</h4>
                <p class="update-desc">
                    Previously, there was no way to tell if you were signed in to Readel. Which, doesn't help, as the whole program fails if you aren't signed in.
                    I have added a new method, if the first method (Sign in on install) fails. You will also be notified if you aren't signed in and you will be prompted to do so.
                    *NOTE* You can view your email via Readel's extension pop up.
                </p>
            </div>
        </div>
        <p class="px-10 text-green-50 py-20">*End of updates*</p>
    </div>
    <Footer />
</main>