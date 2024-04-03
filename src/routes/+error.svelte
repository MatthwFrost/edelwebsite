<script>
    import { page } from '$app/stores';
</script>
<main class="h-[100vh] bg-blue-500 justify-center items-center text-center">
    <h1 class="font-sans font-bold text-white text-[40px]">{$page.status}: {$page.error.message}</h1>
</main>