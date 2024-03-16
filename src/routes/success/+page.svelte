<script>
    import Footer from '$lib/components/Footer.svelte'
</script>

<body class=" bg-[rgb(254,241,24)]">
    <main class=" h-[100vh] flex flex-col items-center justify-center text-center">
        <section class="bg-fixed absolute top-0 left-0 px-10 py-20 text-[rgb(14, 19, 24)]">
            <a href="/" class="flex flex-row items-center font-bold ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
                    Home 
            </a>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgb(29 78 216)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <h1 class="text-2xl font-bold py-2">Payment was successful.</h1> 
        <p>Thank you for your purchase. You credits have been added to you account!</p>
        <span class="fixed bottom-0 pb-10">Please contact <a href="https://ag7phnq517o.typeform.com/to/kEKKBCGF" class="underline" >here</a>, if you have an error.</span>
    </main>
</body>