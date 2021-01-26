<script>
    export let src;
    export let alt;
    export let name;
    export let fontColor;
    export let backgroundColor;
</script>

<style lang="postcss">
    .card {
        @apply rounded-xl flex flex-col items-center justify-center mx-3 my-3;
        background: #1F3C8842;
        opacity: 0.7;
        height: 10rem;
        width: 10rem;
        transition: opacity .3s ease-out;

        &:hover {
            opacity: 1;
        }

        &--image {
            @apply flex ;
            height: 50%;
        }

        &--name {
            @apply mt-3
        }
    }
</style>
<div class="card" style={`background-color: ${backgroundColor};`}>
    <img class="card--image" src={src} alt={alt}/>
    <span class="card--name" style={`color:${fontColor};`}>{name}</span>
</div>