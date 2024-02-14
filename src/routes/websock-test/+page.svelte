<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let audioQueue = [];
    let playing = false;

    function getAudio(){
        const voiceId = "2I50w4rWXPRGPkMR4A5K"; // replace with your voice_id
        const model = 'eleven_monolingual_v1';
        const wsUrl = `wss://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream-input?model_id=${model}`;
        const socket = new WebSocket(wsUrl);

        // 2. Initialize the connection by sending the BOS message
        socket.onopen = function (event) {
            const bosMessage = {
                "text": " ",
                "voice_settings": {
                    "stability": 0.5,
                    "similarity_boost": 0.8
                },
                "xi_api_key": "e984bddc60684104360f6079cf8832c3", // replace with your API key
            };

            socket.send(JSON.stringify(bosMessage));

            // 3. Send the input text message ("Hello World")
            const textMessage = {
                "text": "Hello world, is this quick at all or is it just the same speed as what im doing now.",
                "try_trigger_generation": true,
            };

            socket.send(JSON.stringify(textMessage));

            // 4. Send the EOS message with an empty string
            const eosMessage = {
                "text": ""
            };

            socket.send(JSON.stringify(eosMessage));
        };

        // 5. Handle server responses
        socket.onmessage = function (event) {
            const response = JSON.parse(event.data);

            console.log("Server response:", response);

            if (response.audio) {
                // decode and handle the audio data (e.g., play it)
                const audioChunk = base64ToArrayBuffer(response.audio);
                enqueueAudio(audioChunk);
                console.log("Received audio chunk");
            } else {
                console.log("No audio data in the response");
            }

            if (response.isFinal) {
                // the generation is complete
            }

            if (response.normalizedAlignment) {
                // use the alignment info if needed
            }
        };

        // Handle errors
        socket.onerror = function (error) {
            console.error(`WebSocket Error: ${error}`);
        };

        // Handle socket closing
        socket.onclose = function (event) {
            if (event.wasClean) {
                console.info(`Connection closed cleanly, code=${event.code}, reason=${event.reason}`);
            } else {
                console.warn('Connection died');
            }
        };

    }

    // function playAudio(audioData) {
    // const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    // audioContext.decodeAudioData(audioData, buffer => {
    //     let source;
    //     playing = true;
    //     source = audioContext.createBufferSource();
    //     source.buffer = buffer;
    //     source.connect(audioContext.destination);
    //     source.start();
    // }, error => {
    //     console.error('Error decoding audio data:', error);
    //     setError(error);
    // });
    // }


    function enqueueAudio(base64String) {
        audioQueue.push(base64String);
        if (audioQueue.length === 1) {
            playAudio();
        }
    }
    function playAudio() {
        if (audioQueue.length === 0) {
            console.log("Audio queue is empty.");
            return;
        }
        const audioContext = audioQueue.shift();

        const source = audioContext.createBufferSource(); // Creates a sound source
        source.buffer = audioBuffer; // Tell the source which sound to play
        source.connect(audioContext.destination); // Connect the source to the context's destination (the speakers)
        source.start(0); // Start playback immediately
    }

    function base64ToArrayBuffer(base64) {
        var binaryString = atob(base64);
        var bytes = new Uint8Array(binaryString.length);
        for (var i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    }

    // GPT
    class Queue {
        constructor() {
            this.items = [];
        }

        // Enqueue item to the queue
        enqueue(item) {
            this.items.push(item);
        }

        // Dequeue item from the queue
        dequeue() {
            if (this.isEmpty()) {
                return 'Queue is empty';
            }
            return this.items.shift();
        }

        // Check if the queue is empty
        isEmpty() {
            return this.items.length === 0;
        }

        // View the first item of the queue
        front() {
            if (this.isEmpty()) {
                return 'Queue is empty';
            }
            return this.items[0];
        }

        // View the size of the queue
        size() {
            return this.items.length;
        }

        // Clear the queue
        clear() {
            this.items = [];
        }
    }
</script>


<button on:click={() => {getAudio()}}>Play audio</button>