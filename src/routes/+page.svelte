<script>
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
</script>

<div class="main-container">
    <div>
        <h1>Welcome to Edel.<img src="/newicon.png" alt="Edel icon"></h1>
        <p>Minimal text-to-speech chrome extension.</p>
        <div class="links">
            <div class="links-container">
                <a href="https://chromewebstore.google.com/detail/edel-ai-text-to-speech/mleknmnljocojhodiblcnbgffbhckihd" target="_blank">Install<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                <a href="https://ag7phnq517o.typeform.com/to/kEKKBCGF" target="_blank">Report error<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                <a href="https://ag7phnq517o.typeform.com/to/K5GTEV9L" target="_blank">Give Feeback<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                <a href="https://twitter.com/matthwfrst" target="_blank">Contact<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
                <a href="/privacy" target="_blank">Privacy<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></a>
            </div>
        </div>
        <div class="button-container">
            {#if source}
                <button on:click={() => getAudio()}>Stop sample</button>
            {:else}
                <button on:click={() => getAudio()}>Play sample</button>
            {/if}
            <p>Play a sample of what the extension will sound like. ( Edel voice: "Matt" )</p>
        </div>
    </div>
     <div class="bottom-nav">
        <p>Beta release. {dateString}</p>
    </div>
</div>

<style>
    .main-container {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        line-height: 2px;
    }
    .links {
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .links-container {
        min-width: 500px;
        width: 35vw;
        margin: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        text-align: center;
    }
    h1 {
        font-size: 50px;
        font-weight: 400;
        letter-spacing: 1px;
    }
    img {
        width: 50px;
        height: 50px;
        margin-left: 10px;
    }
    p {
        margin: 0 auto;
        color: #666;
    }
    .button-container {
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    button {
        align-items: center;
        background-color: skyblue;
        border: 2px solid #111;
        border-radius: 8px;
        box-sizing: border-box;
        color: #111;
        cursor: pointer;
        display: flex;
        font-family: Inter,sans-serif;
        font-size: 16px;
        height: 48px;
        justify-content: center;
        line-height: 24px;
        max-width: 100%;
        padding: 0 25px;
        position: relative;
        text-align: center;
        text-decoration: none;
        user-select: none;
        -webkit-user-select: none;
        touch-action: manipulation;
        margin: 30px;
    }

    button:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform .2s ease-out;
    z-index: -1;
    }

    button:hover:after {
    transform: translate(0, 0);
    }

    button:active {
    background-color: #ffdeda;
    outline: 0;
    }

    button:hover {
    outline: 0;
    }

    @media (min-width: 768px) {
    button {
        padding: 0 40px;
    }
    }
    a {
        color: black;
        text-decoration: none;
        font-weight: 500;
    }
    a:active {
        color: none;
    }
    .bottom-nav {
        position: fixed; 
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center;
        margin: 20px;
        font-size: 12px;
    }
    .welcome-text{
        width: 400px;
        height: 350px;
        margin-bottom: 20px;
    }
</style>