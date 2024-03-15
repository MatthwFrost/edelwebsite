<script>
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';
    let source;
    let show = null;
    let currentDate = new Date();
  
    // Format the date as a string (e.g., "October 5, 2023")
    let dateString = currentDate.toLocaleDateString('en-UK', {
        year: 'numeric',
        month: 'short',
    });

    async function getAudio(){
        show = true;
        const get = false;
        try {
            if (source){
                source.stop();
                source = undefined;
            }else{
            if (get) {
                    const sentence = "Welcome, This is an example of what the voice quality is like when using this extension! Don't believe me!? why not download and give it a go! - I hope you enjoy using the application, if you have feedback, an error or a question, use the links below."
                    const url = `https://x6oh96vkd8.execute-api.eu-central-1.amazonaws.com/fetchAudioAPI/?sentence=${sentence}&index=0&voice=british-male&quality=high`;

                    const res = await fetch(url);
                    const response = await res.json();
                    const readyToPlay = base64ToArrayBuffer(response.audioBase64);
                    playAudio(readyToPlay)
                    console.log(response.audioBase64);
                }else {
                    const response = await fetch("audio.txt");
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }

                    // Extract the text from the response stream
                    const text = await response.text();
                    const audioData = text;
                    const readyToPlay = base64ToArrayBuffer(audioData);
                    playAudio(readyToPlay)
                }
                source = undefined;
            }
        } catch (error) {
            console.error('Error in fetchTTS:', error);
            throw error;  // Re-throw the error for further handling if necessary
        }
    }

    function base64ToArrayBuffer(base64) {
        // Trim whitespace and line breaks from the base64 string
        var trimmedBase64 = base64.replace(/\s+/g, '');
        try {
            var binaryString = atob(trimmedBase64);
            var bytes = new Uint8Array(binaryString.length);
            for (var i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            return bytes.buffer;
        } catch (error) {
            console.error('Error in base64ToArrayBuffer:', error);
            throw error;  // Re-throw the error for further handling if necessary
        }
    }
    function playAudio(audioData, onEnded) {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContext.decodeAudioData(audioData, buffer => {
            source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.addEventListener('ended', onEnded);
            source.start();
        }, error => {
            console.error('Error decoding audio data:', error);
        });
    }

    let currentIndex = 0;
    const texts = [
        "Listen to an exciting Reddit story.",
        "Listen to a Wikipedia article while browsing.",
        "Spot grammar errors by listening to your writing.",
        "Listen to long articles."
    ];

    // Function to cycle texts
    function cycleText() {
        currentIndex = (currentIndex + 1) % texts.length;
    }

    // Start the cycle on component mount
    onMount(() => {
        const interval = setInterval(cycleText, 4000); // Change text every 4 seconds

        return () => {
            clearInterval(interval); // Cleanup on component unmount
        };
    });
</script>

<!-- <div class="banner">
    <span>There has been failure with Edel. An update is being released soon, addressing this issue.</span>
</div> -->
<main class="w-[100vw] h-[100vh] flex justify-center items-center bg-cover text-slate-100" style="background-image: url('/main4.png')">
    <div class="flex flex-col items-center">
        <div class="flex flex-row">
            <!-- <img src="/newicon.png" alt="Edel icon" class="md:w-24 md:h-24 w-14 h-14"> -->
            <h1 class="lg:text-8xl text-6xl font-bold text-center">Readel</h1>
        </div>
        <div class="flex flex-row">
            <div class="font-medium text-zinc-300">
                Minimal <strong>text-to-speech</strong> browser extension. 
            </div>
        </div>
        <div class="flex flex-row pt-10">
            <div class="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0 font-medium">
                <div class="flex flex-row items-center justify-center transform transition duration-100 hover:scale-125">
                    <a class="mr-2" href="https://chromewebstore.google.com/detail/edel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd" target="_blank">Install</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <div class="flex flex-row items-center justify-center transform transition duration-100 hover:scale-125">
                    <a class="mr-2" href="/buycredits">Buy credits</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <div class="flex flex-row items-center justify-center  transform transition duration-100 hover:scale-125">
                    <a class="mr-2" href="https://ag7phnq517o.typeform.com/to/kEKKBCGF" target="_blank">Report error</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <div class="flex flex-row items-center justify-center transform transition duration-100 hover:scale-125">
                    <a class="mr-2" href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" target="_blank">Give Feeback</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <div class="flex flex-row items-center justify-center transform transition duration-100 hover:scale-125">
                    <a class="mr-2" href="https://twitter.com/matthwfrst" target="_blank">Contact</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <div class="flex flex-row items-center justify-center transform transition duration-100 hover:scale-125">
                    <a class="mr-2" href="/privacy" target="_blank">Privacy</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
            </div>
        </div>
        <div class="my-10">
            <button on:click={() => getAudio()} type="button" class="text-blue-100 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{source ? 'Pause audio' : 'Play sample'}</button>
        </div>
    </div>
</main>