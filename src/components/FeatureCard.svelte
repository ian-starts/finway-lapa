<script>
    export let title;
    export let subTitle;
    export let content;
    export let maxWidth;
    export let minWidth;
</script>
<style lang="postcss">
    .feature-card {
        @apply flex flex-row mb-8;
        max-width: 45%;
        min-width: 20rem;

        &--content {
            @apply flex flex-col;
        }

        &--image {
            @apply h-auto flex justify-center;
        }
    }

    .content {
        font-family: 'Rubik', sans-serif;
        @apply text-custom-main-blue;

        &--title {
            @apply text-2xl leading-none font-extralight;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        &--subtitle {
            @apply font-black text-2xl leading-none;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        &--content {
            @apply mt-8 leading-normal pr-10;
            letter-spacing: 0.06em;
            font-size: 0.9rem;
        }
    }

</style>
<div class="feature-card">
    <div class="feature-card--content">
        <h1 class="content content--title">
            {title}
        </h1>
        <h2 class="content content--subtitle">
            {subTitle}
        </h2>
        <p class="content content--content">
            {content}
        </p>
    </div>
    <div class="feature-card--image" style={`max-width: ${maxWidth}; min-width: ${minWidth};`}>
        <slot/>
    </div>
</div>