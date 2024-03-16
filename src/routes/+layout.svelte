<script>
    /** @type {import('./$types').LayoutData} */
    import "../app.css";
    import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    import Footer from '$lib/components/Footer.svelte'
 
    inject({ mode: dev ? 'development' : 'production' });
    injectSpeedInsights();
</script>

<slot />