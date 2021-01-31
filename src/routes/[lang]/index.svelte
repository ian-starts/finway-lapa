<script>
    export let content;
    import Head from "../../components/Head.svelte";
    import CompatibilityCard from "../../components/CompatibilityCard.svelte";
    let loading = false;
    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        loading = true;
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": e.target.getAttribute("name"),
                ...name
            })
        }).then(() => {
            console.log('test');
            Snackbar.show({pos: 'bottom-right', text: 'Thanks for submitting!', actionTextColor: '#FF8540'});
            loading = false;
        }).catch((error) => {
            loading = false;
            console.log(error)
        });
    }
</script>

<!-- src/routes/blog/[slug].svelte -->
<script context="module">

    // the (optional) preload function takes a
    // `{ path, params, query }` object and turns it into
    // the data we need to render the page
    export async function preload(page, session) {
        // the `slug` parameter is available because this file
        // is called [slug].svelte
        const {lang} = page.params;

        try {
            const response = await this.fetch(`../data/i18n/${lang}.json`);
            const responseJson = await response.json();
            return {
                content: responseJson
            }
        } catch (e) {
            this.redirect(302, 'en')
        }
    }


</script>
<Head>
    <title>{content.title}</title>
</Head>
<div class="px-4 py-5 mx-auto w-full md:px-24 lg:px-8 bg-custom-main-blue">
    <div class="relative flex grid items-center max-w-6xl grid-cols-2 mx-auto lg:grid-cols-3">
        <ul class="flex items-center hidden space-x-8 lg:flex">
            <li><a href="#process" aria-label="Our product" title="Our product"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">{content.nav.workings}</a>
            </li>
            <li><a href="#pricing" aria-label="Our product" title="Our product"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">{content.nav.pricing}</a>
            </li>
            <li><a href="#compatibility" aria-label="Product pricing" title="Product pricing"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">{content.nav.integrations}</a>
            </li>
        </ul>
        <a href="/" aria-label="Company" title="Company" class="inline-flex items-center lg:mx-auto">
            <svg viewBox="0 0 58 59" fill="none"
                 xmlns="http://www.w3.org/2000/svg" class="w-8 text-gray-200">
                <circle cx="21.5556" cy="37.4444" r="19.5556" stroke="#e5e7eb" stroke-width="3.55556"/>
                <circle cx="35.7777" cy="22.037" r="19.5556" stroke="#e5e7eb" stroke-width="3.55556"/>
            </svg>
            <span class="ml-2 text-xl font-bold tracking-wide text-gray-200 uppercase">Finway</span></a>
        <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li><a href="https://app.finway.tech" aria-label="Sign in" title="Sign in"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">{content.nav.login}</a>
            </li>
            <!--            <li><a href="/" aria-label="Sign up" title="Sign up"-->
            <!--                   class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-gray-200 transition duration-200 rounded shadow-md bg-custom-accent hover:bg-custom-accent focus:shadow-outline focus:outline-none">-->
            <!--                {content.nav.try}-->
            <!--            </a></li>-->
        </ul>
        <div class="ml-auto lg:hidden">
            <button aria-label="Open Menu" title="Open Menu"
                    class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50">
                <svg viewBox="0 0 24 24" class="w-5 text-gray-200">
                    <path fill="currentColor"
                          d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                    <path fill="currentColor"
                          d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                    <path fill="currentColor"
                          d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                </svg>
            </button>
        </div>
    </div>
</div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!---->
<div class="relative bg-custom-main-blue w-full">
    <div class="absolute inset-x-0 bottom-0">
        <svg viewBox="0 0 224 12" fill="#f9fafb" preserveAspectRatio="none" class="w-full -mb-1 text-white">
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
        </svg>
    </div>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center"><h2
                class="mb-6 font-sans text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl sm:leading-none">
            {content.hero.title}
        </h2>
            <p class="mb-6 text-base text-gray-200 md:text-lg">
                {content.hero.subTitle}
            </p>
            <form id="beta-signup" on:submit|preventDefault={handleSubmit} name="beta-signup"
                  class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16" data-netlify=true method="post">
                <input type="hidden" name="form-name" value="beta-signup"  />
                <input
                    placeholder="Email"
                    required="required"
                    type="text"
                    name="email"
                    class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline">
                <button type="submit"
                        class="flex flex-grow w-full items-center justify-center h-12 px-6 font-semibold tracking-wide text-white transition duration-200 rounded shadow-md hover:text-gray-200 bg-custom-accent hover:yellow-300 focus:shadow-outline focus:outline-none">
                    {#if loading}
                        <div class="loader"/>
                    {:else}
                        {content.hero.try}
                    {/if}
                </button>
            </form>
            <a href="/" aria-label="Scroll down"
               class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
                </svg>
            </a></div>
    </div>
</div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!---->
<div class="px-4 py-16 mx-auto bg-gray-50 w-full md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"><h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        {content.features.title}
    </h2>
        <p class="text-base text-gray-900 md:text-lg">
            {content.features.subTitle}
        </p></div>
    <div class="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
        <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-custom-accent-100">
                    <svg stroke="currentColor" viewBox="0 0 52 52" class="w-10 h-10 text-custom-accent-300">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                 points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div><h6 class="mb-3 text-xl font-bold leading-5 text-gray-900">
                {content.features.feat[0].title}
            </h6>
                <p class="mb-3 text-sm text-gray-900">
                    {content.features.feat[0].subTitle}
                </p> <a href="/" aria-label=""
                        class="inline-flex items-center font-semibold text-custom-accent-300 transition-colors duration-200 hover:text-custom-accent-300">{content.features.learn}</a>
            </div>
        </div>
        <div class="flex flex-col max-w-md sm:mx-auto sm:flex-row">
            <div class="mr-4">
                <div class="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-custom-accent-100">
                    <svg stroke="currentColor" viewBox="0 0 52 52" class="w-10 h-10 text-custom-accent-300">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                                 points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </div>
            <div><h6 class="mb-3 text-xl font-bold leading-5 text-gray-900">
                {content.features.feat[1].title}
            </h6>
                <p class="mb-3 text-sm text-gray-900">
                    {content.features.feat[1].subTitle}
                </p> <a href="/" aria-label=""
                        class="inline-flex items-center font-semibold text-custom-accent-300 transition-colors duration-200 hover:text-custom-accent-300">{content.features.learn}</a>
            </div>
        </div>
    </div>
</div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!----> <!----> <!---->
<div class="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-gray-50">
    <div class="p-8 rounded shadow-xl sm:p-16 max-w-6xl mx-auto">
        <div class="flex flex-col lg:flex-row">
            <div class="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5"><h2
                    class="font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                {content.centerCard.title}
            </h2></div>
            <div class="lg:w-1/2"><p class="mb-4 text-base text-gray-900">
                {content.centerCard.subTitle}
            </p> <a href="/" aria-label=""
                    class="inline-flex items-center font-semibold transition-colors duration-200 text-custom-accent-300 hover:text-custom-accent-300">{content.centerCard.start}</a>
            </div>
        </div>
    </div>
</div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!----> <!----> <!----> <!----> <!----> <!---->
<section id="compatibility" class="section section--compatibility">
    <div class="px-4 py-16 mx-auto bg-gray-50 w-full md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"><h2
                class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {content.compatibility.title}
        </h2>
            <p class="text-base text-gray-900 md:text-lg">
                {content.compatibility.subTitle}
            </p></div>
        <div class="flex flex-row flex-wrap justify-around lg:max-w-lg xl:max-w-lg sm:mx-auto">
            <CompatibilityCard src="assets/images/woo.svg" alt="woocommerce" name="WooCommerce" fontColor="#fff"
                               backgroundColor="#7F54B3"/>
            <CompatibilityCard src="assets/images/asperion.png" alt="asperion" name="Asperion"
                               backgroundColor="#A7C7E8"/>
        </div>
    </div>
</section>
<section id="process">
    <div class="px-4 py-16 mx-auto w-full bg-gray-50 md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"><h2
                class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            {content.process.title}
        </h2>
            <p class="text-base text-gray-900 md:text-lg">
                {content.process.subTitle}
            </p></div>
        <div class="mx-auto max-w-6xl grid gap-10 lg:grid-cols-3 sm:grid-cols-1">
            <div>
                <div class="flex items-start mt-2 justify-between mb-6"><p class="text-2xl font-bold text-gray-900">
                    {content.process.steps[0].title}
                </p>
                    <svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         viewBox="0 0 24 24" class="w-6 text-custom-accent-300 transform rotate-90 sm:rotate-0">
                        <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                    </svg>
                </div>
                <p class="text-gray-900">
                    {content.process.steps[0].subTitle}
                </p></div>
            <div>
                <div class="flex  items-start mt-2 justify-between mb-6"><p class="text-gray-900 text-2xl font-bold">
                    {content.process.steps[1].title}
                </p>
                    <svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         viewBox="0 0 24 24" class="w-6 text-custom-accent-300 transform rotate-90 sm:rotate-0">
                        <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                    </svg>
                </div>
                <p class="text-gray-900">
                    {content.process.steps[1].subTitle}
                </p></div>
            <div>
                <div class="flex  items-start mt-2 justify-between mb-6"><p class="text-gray-900 text-2xl font-bold">
                    {content.process.steps[2].title}
                </p>
                    <svg stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         viewBox="0 0 24 24" class="w-6 text-custom-accent-300 transform rotate-90 sm:rotate-0">
                        <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
                        <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
                    </svg>
                </div>
                <p class="text-gray-900">
                    {content.process.steps[2].subTitle}
                </p></div>
        </div>
    </div> <!----> <!----> <!----> <!----> <!----><!----> <!----> <!----> <!---->
</section>
<section id="pricing">
    <div class="px-4 py-16 mx-auto md:px-24 lg:px-8 lg:py-20 w-full bg-gray-50">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <div>
                <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-custom-accent">
                    {content.pricing.header}
                </p></div>
            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                {content.pricing.title}
            </h2>
            <p class="text-base text-gray-900 md:text-lg">
                {content.pricing.subTitle}
            </p></div>
        <div class="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
            <div style="height: max-content;"
                 class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div class="text-center">
                    <div class="text-lg font-semibold">
                        {content.pricing.cards[0].title}
                    </div>
                    <div class="flex items-center justify-center mt-2">
                        <div class="mr-1 text-5xl font-bold">
                            {content.pricing.cards[0].cost}
                        </div>
                        <div class="text-gray-700">
                            / m
                        </div>
                    </div>
                    <ul class="mt-2 space-y-4 text-left">
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[0]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[1]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[2]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[3]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[4]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[5]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[0].features[6]}
                        </li>
                    </ul>
                </div>
                <div class="flex flex-1 w-full"><a href="/"
                                                   class="inline-flex items-center justify-center flex-1 h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                    {content.pricing.cards[0].cta}
                </a>
                </div>
            </div>
            <div style="height: max-content;"
                 class="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
                <div class="absolute inset-x-0 top-0 flex justify-center -mt-3">
                    <div class="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-custom-accent">
                        {content.pricing.accentText}
                    </div>
                </div>
                <div class="text-center">
                    <div class="text-lg font-semibold">
                        {content.pricing.cards[1].title}
                    </div>
                    <div class="flex items-center justify-center mt-2">
                        <div class="mr-1 text-5xl font-bold">
                            {content.pricing.cards[1].cost}
                        </div>
                        <div class="text-gray-700">
                            / mo
                        </div>
                    </div>
                    <ul class="mt-2 space-y-4 text-left">
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[0]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[1]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[2]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[3]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[4]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[5]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[6]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[7]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[1].features[8]}
                        </li>
                    </ul>
                </div>
                <div class="flex flex-1 w-full"><a href="/"
                                                   class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-custom-accent hover:bg-custom-accent focus:shadow-outline focus:outline-none">
                    {content.pricing.cards[1].cta}
                </a>
                </div>
            </div>
            <div style="height: max-content;"
                 class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                <div class="text-center">
                    <div class="text-lg font-semibold">
                        {content.pricing.cards[2].title}
                    </div>
                    <div class="flex items-center justify-center mt-2">
                        <div class="mr-1 text-5xl font-bold">
                            {content.pricing.cards[2].cost}
                        </div>
                        <div class="text-gray-700">
                            / mo
                        </div>
                    </div>
                    <ul class="mt-2 space-y-4 text-left">
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[0]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[1]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[2]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[3]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[4]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[5]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[6]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[7]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[8]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[9]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[10]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[11]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[12]}
                        </li>
                        <li class="text-gray-700">
                            {content.pricing.cards[2].features[13]}
                        </li>
                    </ul>
                </div>
                <div class="flex flex-1 w-full"><a href="/"
                                                   class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                    {content.pricing.cards[2].cta}
                </a>
                </div>
            </div>
        </div>
    </div> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!----> <!----> <!----> <!----> <!----> <!---->
    <!---->
</section>
<!----> <!----> <!---->
<div class="bg-gray-150 w-full">
    <div class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div class="grid row-gap-10 mb-8 lg:grid-cols-6">
            <div class="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
                <div><p class="font-medium tracking-wide text-gray-900">
                    Social
                </p>
                    <ul class="mt-2 space-y-2">
                        <li><a href="https://twitter.com/ian-starts" target="_blank"
                               class="text-gray-900 transition-colors duration-300 hover:gray-900">Twitter</a>
                        </li>
                        <li><a href="https://github.com/ian-starts" target="_blank"
                               class="text-gray-900 transition-colors duration-300 hover:gray-900">Github</a>
                        </li>
                        <li><a href="https://linkedin.com/company/finwaytech" target="_blank"
                               class="text-gray-900 transition-colors duration-300 hover:gray-900">LinkedIn</a>
                        </li>
                    </ul>
                </div>
                <div><p class="font-medium tracking-wide text-gray-900">
                    Partners
                </p>
                    <ul class="mt-2 space-y-2">
                        <li><a href="https://asperion.nl" target="_blank"
                               class="text-gray-900 transition-colors duration-300 hover:gray-900">Asperion</a>
                        </li>
                        <li><a href="https://www.snelstart.nl" target="_blank"
                               class="text-gray-900 transition-colors duration-300 hover:gray-900">SnelStart</a>
                        </li>
                    </ul>
                </div>
                <div><p class="font-medium tracking-wide text-gray-900">
                    Blog
                </p>
                    <ul class="mt-2 space-y-2">
                        <li><a href="/"
                               class="text-gray-900 transition-colors duration-300 hover:gray-900">Automate your
                            work</a></li>
                    </ul>
                </div>
            </div>
            <div class="md:max-w-md lg:col-span-2">
                <span class="text-base font-medium tracking-wide text-gray-900">{content.footer.title}</span>
                <form id="newsletter-signup" on:submit|preventDefault={handleSubmit} data-netlify=true
                      name="newsletter-signup" method="post" class="flex flex-col mt-4 md:flex-row">
                    <input type="hidden" name="form-name" value="newsletter-signup" />
                    <input placeholder="Email" required="required" type="text" name="email"
                           class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-900 border-opacity-10 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">
                    <button type="submit"
                            class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-custom-accent hover:bg-custom-accent focus:shadow-outline focus:outline-none">
                        {#if loading}
                            <div class="loader"/>
                        {:else}
                            {content.footer.cta}
                        {/if}
                    </button>
                </form>
                <p class="mt-4 text-sm text-gray-900">
                    {content.footer.subTitle}
                </p>
            </div>
        </div>
        <div class="flex flex-col justify-between pt-5 pb-10 border-t border-gray-900 border-opacity-10 sm:flex-row"><p
                class="text-sm text-gray-900">
            © Copyright 2021 Finway. All rights reserved.
        </p>
        </div>
    </div>
</div>