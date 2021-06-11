<script>
    export let content;
    import Head from "../../components/Head.svelte";
</script>

<Head>
    <title>{content}</title>
</Head>
<div class="px-4 py-5 mx-auto w-full md:px-24 lg:px-8 bg-custom-main-blue">
    <div class="relative flex grid items-center max-w-6xl grid-cols-2 mx-auto lg:grid-cols-3">
        <ul class="flex items-center hidden space-x-8 lg:flex">
            <li><a href="#process" aria-label="Our product" title="Our product"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">How it works</a>
            </li>
            <li><a href="#pricing" aria-label="Our product" title="Our product"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">Pricing</a>
            </li>
            <li><a href="#compatibility" aria-label="Product pricing" title="Product pricing"
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">Integration</a>
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
                   class="font-medium tracking-wide text-gray-200 transition-colors duration-200">Login</a>
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
            Finway Privacy Policy
        </h2>
            <button aria-label="Scroll down"
                    class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                    <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
                </svg>
            </button>
        </div>
    </div>
</div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!---->
<div class="px-4 py-16 mx-auto w-full md:px-24 lg:px-8 lg:py-20 bg-gray-50">
    <div class="p-8 rounded shadow-xl sm:p-16 max-w-6xl mx-auto">
        <p class="py-2">
            Finway "the App” provides Automated Dropshipping "the Service" to merchants who use Shopify to
            power their stores. This Privacy Policy describes how personal information is collected, used, and shared
            when
            you install or use the App in connection with your Shopify-supported store.
        </p>
        <p class="py-2">
            Personal Information the App Collects
        </p>
        <p class="py-2">
            When you install the App, we are automatically able to access certain types of information from your Shopify
            account:
        </p>
        <ul>
            <li>ReadCustomers: To deliver to them</li>
            <li>WriteCustomers: To sync customer data</li>
            <li>ReadProducts: To prevent duplicates</li>
            <li>WriteProducts: T sync from your supplier</li>
            <li>ReadOrders: To order at supplier</li>
            <li>WriteOrders: To sync back order status</li>
            <li>WriteInventory: Keep track of stock</li>
            <li>ReadInventory: Check if stock needs updating</li>
            <li>ReadShipping: Check track and trace data</li>
            <li>WriteShipping: Sync track and trace links back</li>
        </ul>

        <p class="pt-2">
            Additionally, we collect the
            following personal information from you and/or your customers once you have installed the App:
            Information about you and others who may access the App on behalf of your store, such as your
            name,
            address, email address, phone number, and billing information; Information about individuals who visit your store,
            such
            as their IP address, web browser details, time zone, and information about the cookies installed on the
            particular device.
        </p>
        <p class="py-2">
            We collect personal information directly from the relevant individual, through your Shopify account
            , or using the following technologies: “Cookies” are data files that are placed on your device or
            computer and often include an anonymous unique identifier. For more information about cookies, and how to
            disable cookies, visit http://www.allaboutcookies.org. “Log files” track actions occurring on the Site, and
            collect data including your IP address, browser type, Internet service provider, referring/exit pages, and
            date/time stamps. “Web beacons,” “tags,” and “pixels” are electronic files used to record information about
            how
            you browse the Site.
        </p>
        <p class="py-2">
            How Do We Use Your Personal Information?
        </p>
        <p class="py-2">
            We use the personal information we collect from you and your customers in order to provide the Service and
            to
            operate the App. Additionally, we use this personal information to: Communicate with you;
            Optimize or improve the App; and Provide you with information or advertising relating to our products or
            services.
        </p>
        <p class="py-2">
            Sharing Your Personal Information
        </p>
        <p class="py-2">
            We share data with EDC to provide the dropshipping services.
        </p>
        <p class="py-2">
            Finally, we may also share your Personal Information to comply with applicable laws and regulations, to
            respond
            to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect
            our
            rights.
        </p>
        <p class="py-2">
            Your Rights If you are a European
            resident, you have the right to access personal information we hold about you and to ask that your personal
            information be corrected, updated, or deleted. If you would like to exercise this right, please contact us
            through the contact information below.
        </p>
        <p class="py-2">
            Additionally, if you are a European resident we note that we are processing your information in order to
            fulfill
            contracts we might have with you (for example if you make an order through the Site), or otherwise to pursue
            our
            legitimate business interests listed above. Additionally, please note that your information will be
            transferred
            outside of Europe, including to Canada and the United States.
        </p>
        <p class="py-2">
            Data Retention
        </p>
        <p class="py-2">
            When you place an order through the Site, we will maintain your Order Information for our
            records for 9 months, unless and until you ask us to delete this information.
        </p>
        <p class="py-2">
            Changes We may update this privacy policy from time to time in order to reflect, for example, changes to our
            practices or for other operational, legal or regulatory reasons.
        </p>
        <p class="py-2">
            Contact Us For more information about our privacy practices, if you have questions, or if you would like to
            make
            a complaint, please contact us by e-mail at support@finway.tech or by mail using the details provided
            below:
        </p>
        <p class="py-2">
            Vijfmeilaan 2B, 2321RL Leiden, The Netherlands
        </p>
    </div>
</div> <!----> <!----> <!----> <!----> <!----> <!----> <!----> <!----><!----> <!----> <!----> <!----> <!----> <!---->
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
                <span class="text-base font-medium tracking-wide text-gray-900">asdasdasd</span>
                <form id="newsletter-signup" data-netlify=true
                      name="newsletter-signup" method="post" class="flex flex-col mt-4 md:flex-row">
                    <input type="hidden" name="form-name" value="newsletter-signup"/>
                    <input placeholder="Email" required="required" type="text" name="email"
                           class="flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-900 border-opacity-10 rounded shadow-sm appearance-none md:mr-2 md:mb-0 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline">
                    <button type="submit">
                        sadasd
                    </button>
                </form>
                <p class="mt-4 text-sm text-gray-900">
                    asdasd
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