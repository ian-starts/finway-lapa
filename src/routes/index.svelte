<script>
    import CompatibilityCard from '../components/CompatibilityCard.svelte'
    import FeatureCard from '../components/FeatureCard.svelte'
    import Head from "../components/Head.svelte";
</script>

<style lang="postcss">
    .section {
        @apply flex flex-col px-10;

        &--full {
            min-height: 100vh;
        }

        &--hero {
            @apply bg-custom-main-blue;
        }

        &--sub-hero {
            @apply flex flex-col py-20 px-0 text-custom-main-blue;
            border-bottom: 2px solid rgba(31, 60, 137, .3);
            background: white;
            font-family: 'Rubik', sans-serif;
        }

        &--features {
            @apply flex flex-col py-20 text-custom-main-blue;
            font-family: 'Rubik', sans-serif;
            background: white;
        }

        &--cta {
            @apply flex flex-row py-20 bg-custom-accent;
            color: white;
            font-family: 'Rubik', sans-serif;
        }

        &--compatibility {
            @apply flex flex-col pt-20 pb-32 px-0 text-custom-main-blue;
            background: white;
            font-family: 'Rubik', sans-serif;
            border-bottom: 2px solid rgba(31, 60, 137, .3);
        }

        &--process {
            @apply flex flex-col pt-20 pb-32 bg-white text-custom-main-blue;
            font-family: 'Rubik', sans-serif;
        }

        &--pricing {
            @apply flex flex-col py-20 bg-white text-custom-main-blue;
            font-family: 'Rubik', sans-serif;
            border-bottom: 2px solid rgba(31, 60, 137, .3);
        }
    }

    .logo {
        &--name {
            font-family: Edmundsbury-Sans-Regular;
            font-style: normal;
            font-weight: 400;
            font-size: 2.5rem;
            line-height: 4rem;
            letter-spacing: 0.28em;
            @apply text-custom-main-blue;
        }

        &--image {
            @apply pt-3 mx-3 h-auto w-12
        }
    }

    .pricing {
        &--title {
            @apply font-bold text-6xl mb-10;
            letter-spacing: 0.12em;
        }

        &--cards {
            @apply flex flex-wrap flex-row justify-between mt-10;
        }
    }

    .pricing-card {
        @apply rounded-lg flex flex-col justify-center items-center mb-10 border shadow-lg;
        height: min-content;
        min-width: 15rem;

        &--title {
            @apply font-bold py-6 px-12 text-xl border-b-8 text-custom-main-blue w-full text-center rounded-t-lg;
            background: #F5F9FA;
            letter-spacing: 0.12em;
        }

        &--subtitle {
            @apply font-bold text-2xl border-b-4 pt-5;
            letter-spacing: 0.12em;
            border-bottom-color: #EE9180;
            line-height: 0.5;
            display: inline-block;

            span {
                @apply text-sm;
                letter-spacing: 0.05em;
            }
        }

        &--form {
            @apply flex flex-col flex-1 w-full px-10;
        }

        &--button {
            @apply text-white p-3 bg-custom-accent;
        }

        &--content {
            @apply flex flex-1 w-full flex-col justify-start px-12 my-10 text-lg;

            li {
                @apply my-2
            }

        }
    }

    .process {
        &--title {
            @apply font-bold text-6xl;
            letter-spacing: 0.12em;
        }

        &--subtitle {
            @apply text-lg mt-5 font-bold pl-2;
            letter-spacing: 0.12em;
        }

        &--list {
            @apply mt-12;
            border-radius: 10px;
            list-style-type: none;
            text-align: start;

            list-style-position: inside;
        }
    }

    li:last-of-type:before {
        @apply bg-custom-main-blue z-0;
        content: '';
        position: absolute;
        bottom: 50%;
        top: 0;
        left: 2.25rem;
        width: 0.5rem;
    }

    li:first-of-type:before {
        @apply bg-custom-main-blue z-0;
        content: '';
        position: absolute;
        bottom: 0;
        top: 50%;
        left: 2.25rem;
        width: 0.5rem;
    }

    li:before {
        @apply bg-custom-main-blue z-0;
        content: '';
        position: absolute;
        bottom: 0;
        top: 0;
        left: 2.25rem;
        width: 0.5rem;
    }

    .list-item {
        @apply relative py-10 z-10;

        &--content {
            @apply flex flex-row items-center relative;
        }

        &--counter {
            .counter--text{
                @apply flex self-center;
            }
            @apply font-bold text-5xl h-20 w-20 text-center text-white bg-custom-main-blue rounded-full flex justify-center;

            &__top-padding {
                @apply mt-10;
            }
        }

        &--image-container {
            @apply flex flex-1 justify-end;
        }

        &--image {
            max-width: 31rem;
        }

        &--text {
            @apply font-normal text-xl ml-5;
            letter-spacing: 0.12em;
        }
    }

    .compatibility {
        &--title {
            @apply font-bold text-6xl;
            letter-spacing: 0.12em;
        }

        &--subtitle {
            @apply text-lg mt-5 font-bold pl-2;
            letter-spacing: 0.12em;
        }

        &--cards {
            @apply flex flex-row flex-grow justify-center mt-16;
        }
    }

    .cta {
        &--content {
            @apply flex flex-col pr-16
        }

        &--title {
            @apply font-bold text-xl;
            letter-spacing: 0.12em;
        }

        &--subtitle {
            @apply text-lg mt-5;
        }

        &--form {
            @apply flex flex-col justify-end flex-1;
        }

        &--input {
            @apply px-2 py-1
        }

        &--button {
            @apply px-2 py-3 font-bold mt-6 text-white uppercase bg-custom-main-blue text-sm self-end;
            min-width: 12rem;
            max-width: 12rem;
            letter-spacing: 0.085em;
        }
    }

    .features {
        &--title {
            @apply font-bold text-6xl mb-10;
        }

        &--cards {
            @apply flex-row flex-wrap flex justify-between;
        }
    }

    .sub-hero {
        &--title {
            @apply font-bold text-6xl leading-tight;
            letter-spacing: 0.12em;
        }

        &--sub-title {
            @apply font-bold text-lg leading-tight mt-4;
            letter-spacing: 0.12em;
        }

        &--list {
            @apply list-disc my-6 text-sm;
            letter-spacing: 0.12em;
            line-height: 142.5%;

            li {
                @apply my-6
            }
        }

        &--features {
            @apply ml-10 my-8 flex flex-row;
        }

        &--image {
            @apply mr-6 w-auto h-56 justify-end flex self-end flex-1;
        }
    }

    .hero {
        &--content {
            @apply flex flex-1 flex-row;
        }

        &--image {
            @apply mr-6 mt-8 w-auto h-48 flex justify-end flex-1;
        }

        &--logo {
            @apply bg-white px-6 pl-10 py-5 pb-8 flex flex-row justify-center items-center;
            width: min-content;
        }

        &--text {
            span {
                @apply text-custom-accent;
            }

            @apply mt-24 text-white text-5xl;
            font-family: 'Maven Pro', sans-serif;
            line-height: 3.5rem;
            letter-spacing: 0.07em;
        }

        &--subtext {
            @apply text-white text-xl mt-5 font-normal;
            font-family: 'Rubik', sans-serif;
            line-height: 1.5rem;
            letter-spacing: 0.085em;
            padding-right: 20rem;
        }

        &--input {
            @apply px-2 py-1

        }

        &--button {
            @apply px-2 py-3 font-bold mt-6 text-white bg-custom-accent;
            letter-spacing: 0.085em;
        }

        &--form {
            @apply flex flex-col mt-24;
            font-family: 'Rubik', sans-serif;
            width: 14rem;
        }

        &--trial {
            @apply text-white font-normal leading-tight text-sm mt-6 mb-10;
            font-family: 'Rubik', sans-serif;
        }
    }

    @screen sm {
        .section {
            @apply px-56;

            &--sub-hero {
                @apply mx-56 px-0;
            }

            &--features {

            }

            &--compatibility {
                @apply mx-56 px-0;
            }

            &--cta {

            }
        }
    }

</style>

<Head>
    <title>Finway - Sync any e-commerce and accounting software</title>
</Head>

<section id="hero" class="section section--full section--hero">
    <div class="hero--logo">
        <span class="logo--name">FINWAY</span>
        <div class="logo--image">
            <svg width="100%" viewBox="0 0 58 59" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <circle cx="21.5556" cy="37.4444" r="19.5556" stroke="#1F3C88" stroke-width="3.55556"/>
                <circle cx="35.7777" cy="22.037" r="19.5556" stroke="#1F3C88" stroke-width="3.55556"/>
            </svg>
        </div>
    </div>
    <h1 class="hero--text">
        <span>Auto sync</span> any e-commerce and accounting platform <span>in one click.</span>
    </h1>
    <h2 class="hero--subtext">
        Stop copy-pasting data between platforms. That’s work for software.
    </h2>
    <div class="hero--content">
        <div>
            <form class="hero--form" on:submit={(e) => e.preventDefault()}>
                <input class="hero--input" placeholder="email"/>
                <button type="submit" class="hero--button">SIGN UP NOW</button>
            </form>
            <div class="hero--trial">
                <p>
                    Sign up for a free 30 day trial.
                </p>
                <p>
                    No strings attached.
                </p>
            </div>
        </div>
        <div class="hero--image">
            <svg height="100%" viewBox="0 0 214 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                        d="M84.9982 97.76H96.7854L100.39 103.829C100.761 104.453 101.576 104.659 102.2 104.288C102.504 104.107 102.72 103.819 102.803 103.478C102.89 103.138 102.839 102.782 102.658 102.478L98.6727 95.7647H98.6779C98.4355 95.3676 98.0076 95.1201 97.5383 95.1201H84.9983C84.2713 95.1201 83.6783 95.7131 83.6783 96.4401C83.6783 97.1672 84.2713 97.7601 84.9983 97.7601L84.9982 97.76Z"
                        fill="#FF8540"/>
                <path
                        d="M118.085 88.7114C117.57 88.1958 116.734 88.1958 116.219 88.7114C115.703 89.227 115.703 90.0623 116.219 90.578L120.761 95.1207H110.959C110.495 95.1207 110.062 95.3682 109.825 95.7652L97.6666 116.241H84.9976C84.2706 116.241 83.6776 116.834 83.6776 117.561C83.6776 118.288 84.2706 118.881 84.9976 118.881H98.4194C98.8834 118.881 99.3166 118.634 99.5537 118.237L111.712 97.7607H120.761L116.219 102.303C115.703 102.819 115.703 103.654 116.219 104.17C116.734 104.686 117.57 104.686 118.085 104.17L124.881 97.374C125.129 97.1265 125.268 96.7914 125.268 96.4408C125.268 96.0901 125.129 95.755 124.881 95.5075L118.085 88.7114Z"
                        fill="#F2F2F2"/>
                <path
                        d="M118.085 109.831C117.57 109.316 116.734 109.316 116.219 109.831C115.703 110.347 115.703 111.182 116.219 111.698L120.761 116.241H110.83L107.896 111.301C107.525 110.677 106.716 110.471 106.092 110.842C105.463 111.213 105.256 112.023 105.628 112.652L108.943 118.236C109.18 118.633 109.613 118.881 110.077 118.881H120.756L116.218 123.423C115.703 123.939 115.703 124.774 116.218 125.29C116.734 125.806 117.569 125.806 118.085 125.29L124.881 118.494C125.128 118.247 125.268 117.911 125.268 117.561C125.268 117.21 125.128 116.875 124.881 116.628L118.085 109.831Z"
                        fill="#FF8540"/>
                <circle cx="106.5" cy="106.5" r="52" stroke="#F2F2F2" stroke-width="3"/>
                <rect x="105" width="4" height="27" rx="2" fill="white"/>
                <rect x="105" y="187" width="4" height="27" rx="2" fill="white"/>
                <rect x="214" y="105" width="4" height="27" rx="2" transform="rotate(90 214 105)"
                      fill="white"/>
                <rect x="27" y="105" width="4" height="27" rx="2" transform="rotate(90 27 105)"
                      fill="white"/>
                <rect x="214" y="105" width="4" height="27" rx="2" transform="rotate(90 214 105)"
                      fill="white"/>
                <rect x="27" y="105" width="4" height="27" rx="2" transform="rotate(90 27 105)"
                      fill="white"/>
                <rect x="29.9254" y="32.7538" width="4" height="27" rx="2"
                      transform="rotate(-45 29.9254 32.7538)" fill="white"/>
                <rect x="162.154" y="164.983" width="4" height="27" rx="2"
                      transform="rotate(-45 162.154 164.983)" fill="white"/>
                <rect x="181.246" y="29.9254" width="4" height="27" rx="2"
                      transform="rotate(45 181.246 29.9254)" fill="white"/>
                <rect x="49.0172" y="162.154" width="4" height="27" rx="2"
                      transform="rotate(45 49.0172 162.154)" fill="white"/>
            </svg>
        </div>
    </div>
</section>
<section id="subhero" class="section section--sub-hero">
    <h1 class="sub-hero--title">
        Sync and forget.
    </h1>
    <h2 class="sub-hero--sub-title">
        We connect your e-commerce and accountancy software.
    </h2>
    <div class="sub-hero--features">
        <ul class="sub-hero--list">
            <li>Never mind numbingly re-enter data again.</li>
            <li>Remove human error.</li>
            <li>One-click set-up.</li>
            <li>Freedom to choose any webshop- and accounting software you want.</li>
        </ul>
        <div class="sub-hero--image">
            <svg height="100%" viewBox="0 0 291 287" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="122.5" cy="186" rx="93.5" ry="96" stroke="#1F3C88" stroke-width="9"/>
                <ellipse cx="192.5" cy="113" rx="93.5" ry="93" stroke="#FF8540" stroke-width="9"/>
                <path
                        d="M6.575 121.175C6.40833 121.175 6.25833 121.117 6.125 121C6.00833 120.867 5.95 120.717 5.95 120.55V115.975H1.5C1.31667 115.975 1.15833 115.917 1.025 115.8C0.908333 115.683 0.85 115.533 0.85 115.35V113.525C0.85 113.342 0.908333 113.192 1.025 113.075C1.15833 112.942 1.31667 112.875 1.5 112.875H5.95V108.45C5.95 108.267 6.00833 108.117 6.125 108C6.25833 107.883 6.40833 107.825 6.575 107.825H8.625C8.80833 107.825 8.95833 107.883 9.075 108C9.19167 108.117 9.25 108.267 9.25 108.45V112.875H13.675C13.8583 112.875 14.0083 112.942 14.125 113.075C14.2417 113.192 14.3 113.342 14.3 113.525V115.35C14.3 115.533 14.2417 115.683 14.125 115.8C14.0083 115.917 13.8583 115.975 13.675 115.975H9.25V120.55C9.25 120.717 9.19167 120.867 9.075 121C8.95833 121.117 8.80833 121.175 8.625 121.175H6.575ZM24.5734 122C24.4068 122 24.2568 121.942 24.1234 121.825C24.0068 121.692 23.9484 121.542 23.9484 121.375V109.475L20.5234 112.1C20.4068 112.2 20.2818 112.25 20.1484 112.25C19.9651 112.25 19.7984 112.15 19.6484 111.95L18.1734 110.025C18.0901 109.892 18.0484 109.767 18.0484 109.65C18.0484 109.417 18.1484 109.242 18.3484 109.125L24.0984 104.675C24.2818 104.558 24.4818 104.5 24.6984 104.5H27.8234C28.0068 104.5 28.1568 104.558 28.2734 104.675C28.3901 104.792 28.4484 104.942 28.4484 105.125V121.375C28.4484 121.542 28.3901 121.692 28.2734 121.825C28.1568 121.942 28.0068 122 27.8234 122H24.5734Z"
                        fill="#1F3C88"/>
                <path
                        d="M262.575 23.175C262.408 23.175 262.258 23.1167 262.125 23C262.008 22.8667 261.95 22.7167 261.95 22.55V17.975H257.5C257.317 17.975 257.158 17.9167 257.025 17.8C256.908 17.6833 256.85 17.5333 256.85 17.35V15.525C256.85 15.3417 256.908 15.1917 257.025 15.075C257.158 14.9417 257.317 14.875 257.5 14.875H261.95V10.45C261.95 10.2667 262.008 10.1167 262.125 10C262.258 9.88333 262.408 9.825 262.575 9.825H264.625C264.808 9.825 264.958 9.88333 265.075 10C265.192 10.1167 265.25 10.2667 265.25 10.45V14.875H269.675C269.858 14.875 270.008 14.9417 270.125 15.075C270.242 15.1917 270.3 15.3417 270.3 15.525V17.35C270.3 17.5333 270.242 17.6833 270.125 17.8C270.008 17.9167 269.858 17.975 269.675 17.975H265.25V22.55C265.25 22.7167 265.192 22.8667 265.075 23C264.958 23.1167 264.808 23.175 264.625 23.175H262.575ZM280.573 24C280.407 24 280.257 23.9417 280.123 23.825C280.007 23.6917 279.948 23.5417 279.948 23.375V11.475L276.523 14.1C276.407 14.2 276.282 14.25 276.148 14.25C275.965 14.25 275.798 14.15 275.648 13.95L274.173 12.025C274.09 11.8917 274.048 11.7667 274.048 11.65C274.048 11.4167 274.148 11.2417 274.348 11.125L280.098 6.675C280.282 6.55833 280.482 6.5 280.698 6.5H283.823C284.007 6.5 284.157 6.55833 284.273 6.675C284.39 6.79167 284.448 6.94167 284.448 7.125V23.375C284.448 23.5417 284.39 23.6917 284.273 23.825C284.157 23.9417 284.007 24 283.823 24H280.573Z"
                        fill="#FF8540"/>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="24" y="85" width="197"
                      height="202">
                    <ellipse cx="122.5" cy="186" rx="93.5" ry="96" stroke="#2B46A6" stroke-width="9"/>
                </mask>
                <g mask="url(#mask0)">
                    <ellipse cx="211" cy="201" rx="38" ry="31" fill="#1F3C88"/>
                </g>
            </svg>
        </div>
    </div>
</section>
<section id="features" class="section section--features">
    <h1 class="features--title">
        What you get.
    </h1>
    <div class="features--cards">
        <FeatureCard title="AUTOMATED" subTitle="CONNECTION"
                     content="Your webshop and accounting software will be fully connected. Updates occur in realtime."
                     maxWidth="4rem" minWidth="4rem">
            <svg width="100%" viewBox="0 0 74 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="46.5478" cy="26.6976" rx="25.3837" ry="24.9535" stroke="#1F3C88"
                         stroke-width="3.44186"/>
                <ellipse cx="27.6181" cy="46.4878" rx="25.3837" ry="25.814" stroke="#1F3C88"
                         stroke-width="3.44186"/>
            </svg>
        </FeatureCard>
        <FeatureCard title="trusted" subTitle="environment"
                     content="You get to choose any webshop- and accounting software.
                                     Can’t find what you’re looking for? We’ll build it."
                     maxWidth="7rem" minWidth="7rem">
            <svg width="100%" viewBox="0 0 119 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" y="70" width="21" height="21" fill="#1F3C88"/>
                <rect opacity="0.2" x="0.860465" y="0.860465" width="19.2791" height="18.2791"
                      stroke="#1F3C88" stroke-width="1.72093" stroke-dasharray="2.58 2.58"/>
                <rect opacity="0.2" x="96.8605" y="37.8605" width="19.2791" height="19.2791"
                      rx="9.63953" stroke="#1F3C88" stroke-width="1.72093"
                      stroke-dasharray="2.58 2.58"/>
                <rect y="37" width="21" height="21" rx="6.24531" fill="#1F3C88"/>
                <rect opacity="0.2" y="103" width="21" height="21" rx="10.5" fill="#1F3C88"/>
                <path opacity="0.2" d="M106.5 0L116.459 18H96.5407L106.5 0Z" fill="#1F3C88"/>
                <path d="M106.5 64L117.437 72.2918L113.26 85.7082H99.7405L95.5628 72.2918L106.5 64Z"
                      fill="#1F3C88"/>
                <path opacity="0.2" d="M107 100L119 112L107 124L95 112L107 100Z" fill="#1F3C88"/>
                <line x1="21" y1="47.9591" x2="59" y2="47.9591" stroke="#1F3C88"
                      stroke-width="2.08177"/>
                <line x1="57.9591" y1="79" x2="57.9591" y2="49" stroke="#1F3C88"
                      stroke-width="2.08177"/>
                <line x1="59" y1="77.9591" x2="104" y2="77.9591" stroke="#1F3C88"
                      stroke-width="2.08177"/>
            </svg>
        </FeatureCard>
        <FeatureCard title="tailored" subTitle="advice"
                     content="Haven’t made a choice on your e-commerce and accountant software yet? We’ll help you choose the right one for your business."
                     maxWidth="4rem" minWidth="4rem">
            <svg width="100%" viewBox="0 0 59 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.2" x="58.3945" y="81.791" width="18.0698" height="18.0698"
                      transform="rotate(-180 58.3945 81.791)" fill="#1F3C88"/>
                <rect x="0.742188" y="0.907227" width="18.0698" height="18.0698" fill="#1F3C88"/>
                <rect opacity="0.2" x="38.6055" y="81.791" width="18.0698" height="18.0698"
                      transform="rotate(-180 38.6055 81.791)" fill="#1F3C88"/>
                <rect x="20.5352" y="0.907227" width="18.0698" height="18.0698" fill="#1F3C88"/>
                <rect opacity="0.2" x="18.8125" y="81.791" width="18.0698" height="18.0698"
                      transform="rotate(-180 18.8125 81.791)" fill="#1F3C88"/>
                <rect x="40.3242" y="0.907227" width="18.0698" height="18.0698" fill="#1F3C88"/>
                <rect x="40.3242" y="20.6973" width="18.0698" height="18.0698" fill="#1F3C88"/>
                <rect opacity="0.2" x="18.8125" y="62" width="18.0698" height="18.0698"
                      transform="rotate(-180 18.8125 62)" fill="#1F3C88"/>
                <rect opacity="0.2" x="38.6055" y="62" width="18.0698" height="18.0698"
                      transform="rotate(-180 38.6055 62)" fill="#1F3C88"/>
            </svg>

        </FeatureCard>
        <FeatureCard title="Automated" subTitle="set-up"
                     content="Manage everything on our platform. No guides needed, one-click to connect
                                     and never think about it again. "
                     maxWidth="4rem" minWidth="4rem">
            <svg width="100%" viewBox="0 0 88 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle opacity="0.2" cx="36.5106" cy="36.5809" r="36.1395" fill="#1F3C88"/>
                <path
                        d="M57.1372 48.4535L87.3559 61.8475L71.7791 65.241L66.3002 80.2121L57.1372 48.4535Z"
                        fill="#1F3C88"/>
            </svg>
        </FeatureCard>
        <FeatureCard title="realtime" subTitle="insights"
                     content="Powerful dashboarding to see what’s happening."
                     maxWidth="4rem" minWidth="4rem">
            <svg width="100%" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="9.09277" width="30.1163" height="30.1163" fill="#D5DAED"/>
                <circle cx="30.1164" cy="9.09293" r="8.60465" fill="#1F3C88"/>
            </svg>
        </FeatureCard>
    </div>
</section>
<section id="cta-1" class="section section--cta">
    <div class="cta--content">
        <h1 class="cta--title">
            Want to feel how this works?
        </h1>
        <p class="cta--subtitle">
            Sign up for a free 30 day trial. No strings attached, but you probably wouldn’t want to go back
            to manually adding the data afterwards.
        </p>
    </div>
    <form class="cta--form" on:submit={(e) => e.preventDefault()}>
        <input class="cta--input" placeholder="email"/>
        <button type="submit" class="cta--button">SIGN UP NOW</button>
    </form>
</section>
<section id="compatibility" class="section section--compatibility">
    <h1 class="compatibility--title">
        Compatibility
    </h1>
    <h2 class="compatibility--subtitle">
        This is what we support right now. Ask our team to add your favourite software.
    </h2>
    <div class="compatibility--cards">
        <CompatibilityCard src="assets/images/woo.svg" alt="woocommerce" name="WooCommerce" fontColor="#fff"
                           backgroundColor="#7F54B3"/>
        <CompatibilityCard src="assets/images/asperion.png" alt="asperion" name="Asperion"
                           backgroundColor="#A7C7E8"/>
    </div>
</section>
<section id="process" class="section section--process">
    <h1 class="process--title">
        Our process.
    </h1>
    <h2 class="process--subtitle">
        No need for complicated guides.
    </h2>
    <ol class="process--list">
        <li class="list-item">
            <div class="list-item--content">
                <div class="list-item--counter list-item--counter__top-padding">
                    <span class="counter--text">1</span>
                </div>
                <span
                        class="list-item--text list-item--counter__top-padding">Select your software.</span>
                <div class="list-item--image-container">
                    <img src="assets/images/process-step-1.svg" class="list-item--image"
                         alt={"process-step-1"}/>
                </div>
            </div>

        </li>
        <li class="list-item">
            <div class="list-item--content">
                <div class="list-item--counter">
                    <span class="counter--text">2</span>
                </div>
                <span class="list-item--text">Login to your accounts.</span>
            </div>
        </li>
        <li class="list-item">
            <div class="list-item--content">
                <div class="list-item--counter">
                    <span class="counter--text">3</span>
                </div>
                <span class="list-item--text">Click to connect.</span>
                <div class="list-item--image-container">
                    <img src="assets/images/process-step-3.svg" class="list-item--image"
                         alt={"process-step-3"}/>
                </div>
            </div>
        </li>
    </ol>
</section>
<section id="cta-2" class="section section--cta">
    <div class="cta--content">
        <h1 class="cta--title">
            Ask our team
        </h1>
        <p class="cta--subtitle">
            Can’t find what you’re looking for or don’t believe it’s this simple?
        </p>
    </div>
    <form class="cta--form" on:submit={(e) => e.preventDefault()}>
        <button type="submit" class="cta--button">book a call</button>
    </form>
</section>
<section id="cta-3" class="section section--pricing">
    <h1 class="pricing--title">
        Pricing Plans.
    </h1>
        <div class="pricing-card pricing-card__cheap">
            <h1 class="pricing-card--title pricing-card--title__cheap">The Complete Package</h1>
            <form class="pricing-card--form pricing-card--form__cheap" on:submit={(e) => e.preventDefault()}>
                <button type="submit" class="pricing-card--button">BUY NOW</button>
            </form>
        </div>
</section>
