<script context="module">
    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload() {
        // the `slug` parameter is available because this file
        // is called [slug].svelte
        this.redirect(302, 'nl')
    }

</script>