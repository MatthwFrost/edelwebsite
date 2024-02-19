<script>
    /** @type {import('./$types').PageData} */
    import { ElevenLabsClient, play } from 'elevenlabs'

    const elevenlabs = new ElevenLabsClient({
        apiKey: 'e984bddc60684104360f6079cf8832c3'
    })

    async function getAudio(){

        const audio = await elevenlabs.generate({
            voice: "Rachel",
            text: "Hello how is it going",
            model_id: 'eleven_turbo_v2'
        })

        await play(audio);
    }

</script>


<button on:click={() => {getAudio()}}>Play audio</button>