import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//use the initReactI18next plugin with i18next to make it easier for 
//internationalization of react app easier
i18n.use(initReactI18next).init({
  lng: "en", //default language
  fallbackLng: "en", //lang that will be loaded in case the translations the user is looking for are not available
  interpolation: {
    escapeValue: false,//used to escape the values and avoid XSS attacks, we will set it to false, because React already does it by default
  },
  resources: { //an object with the translations to be used in the application
    en: {
      translation: {
        bannerTitle: "Find Your Desired Domain Now!",
        bannerSearchPlaceHolder: "Your Domain name",
        bannerSearchBtn: "Search",
        navTitle: "DomainHub",
        navHome: "Home",
        navAbout: "About us",
        navContact: "Contact",
        navReview: "Reviews",
        navDashboard: "Dashboard",
        navLogin:"Login",
        //about us
        aboutDes: "Explore Our Website",
        aboutH1: "Welcome to DomainHub – Your Premier Destination for Domain Buying and Selling!At DomainHub, we are passionate about connecting individuals, businesses, and visionaries with the perfect domain names to elevate their online presence. As a leading domain selling platform, we offer a seamless and secure marketplace where buyers and sellers come together to explore a world of possibilities.",
        mission: "Our Mission",
        exploreMission: "Explore Our Mission",
        mission1: "Empowering Online Ventures",
        mission2: "Simplifying the Process",
        mission3: "Fostering Trust and Security",
        mission4: "Providing Expert Guidance",
        mission5: "Building a Global Community",
        mission6: "Feedback-Driven Development",
        whyUs: "Why DomainHub",
        whyDes: "Explore Our Motive",
        why1: "Discover premium domains with ease on DomainHub.",
        why2: "Our user-friendly platform simplifies the buying and selling process.",
        why3: "providing a secure and transparent experience.",
        why4: "Benefit from expert guidance, a diverse domain portfolio, and a global community.",
        joinUs: "Join us and unlock the potential of your online presence today.",
        ourTeam: "Our Team",
        exploreTeam: "Explore Our Team",
        //domain TLD
        TldTitle: "Domain TLD",

        //Best hosting plan
        planHeader: "Chose The Best Hosting Plan",
        planDes: "Choose from our best hosting plans to unlock the full potential of your online presence.",
        planDes2: "Elevate your website with our premium hosting plans crafted for excellence.",
        plan1: "BASIC DUO",
        plan1Btn: "Get Started",
        plan2: "Comfort Duo",
        plan2Btn: "Get Comfort Duo",
        plan3: "Premium Duo",
        plan3Btn: "Get Premium Family",

        //FAQ
        FaqTitle: "Frequently Asked Questions",
        FaqDes: "Find answers to common questions about choosing, registering, and managing your domain.",
        Faq1Q: "What is domain hosting?",
        Faq1A: "Domain hosting refers to the service of storing and managing website files and data on a server connected to the internet. It allows your website to be accessible to users worldwide",
        Faq2Q: "How do I choose the right domain name for my website?",
        Faq2A: "We provide a domain name search tool to help you find and register an available domain. Consider a name that reflects your brand, is easy to remember, and relevant to your content.",
        Faq3Q: "What types of hosting plans do you offer?",
        Faq3A: "We offer a range of hosting plans, including shared hosting, VPS hosting, and dedicated hosting. Each plan caters to different needs, from personal blogs to large business websites.",
        Faq4Q: "Do you provide customer support, and how can I reach you?",
        Faq4A: "Yes, we offer 24/7 customer support through various channels, including live chat, email, and phone. Our support team is ready to assist you with any questions or issues you may encounter.",

        //Success showcase
        successTitle: "Success showcase",
        successDes: "DomainHub.com: Where E-Commerce Excellence Meets Cutting-Edge Technology, Redefining Web Hosting and Selling with Top-Tier Packages and Seamless Experiences.",
        success1Title: "Top Selling",
        success1Des: "DomainHub.com excels as a leading E-Commerce platform with top-selling packages that set industry standards,showcasing our commitment to quality and value.",
        success2Title: "Total Users",
        success2Des: "Our thriving user community reflects the trust and satisfaction of a diverse range of individuals, businesses, bloggers, and developers who rely on DomainHub.com for their web hosting and selling needs.",
        success3Title: "Total Reviews",
        success3Des: "Positive reviews abound, underscoring the streamlined and efficient experience we provide. Users commend our platform for features such as live chat support, subscription management, and a user-friendly domain search.",
        success4Title: "User Engagement Focus",
        success4Des: "With category-based pricing, special discounts, and a free trial option, DomainHub.com actively enhances user engagement, offering flexibility and affordability to our valued customers.",
        success5Title: "Advanced Technology Integration",
        success5Des: "The incorporation of Redux for centralized and scalable state management showcases our dedication to advanced technology, ensuring a seamless and adaptable solution for large-scale web applications.",
        success6Title: "Robust Player in E-Commerce",
        success6Des: "Our commitment to a seamless user experience, coupled with cutting-edge technology, positions DomainHub.com as a robust player in the e-commerce landscape, particularly in the web infrastructure services sector",
        success7Title: "Innovation and Collaboration",
        success7Des: "The DomainHub.com team collectively pushes limits, exploring new technologies to create a significant and positive difference in the marketplace, demonstrating our ongoing commitment to innovation and collaboration.",
        totalSell: "Total Sellings",
        totalUser: "Total Users",
        totalReview: "Total Reviews",

        //free trial
        trialTitle: "Freetrial",
        trialTitlesDes:"Enjoy a free domain on us! Simply apply by sending us your favorite domain name, and we'll take care of the rest. Secure your online presence with a personalized domain that reflects your identity. Don't miss out on this opportunity to enhance your web presence.",
        trialSectionTitle: "Free Trial Application",
        trialSelect: "Select Domain",
        trialDes: "Sign up for 7 days a free trial and explore our amazing features! We understand the importance of finding the perfect domain to elevate your online presence.",

        //price by category
        categoryTitle: "Price by category",
        category1: "Education",
        category2: "Commerce",
        category3: "Health",
        category4: "Government",
        category5: "Industrial",
        category6: "Media",
        category7: "Sport",
        category8: "Technology",
        categorySelect: "Select Category",
        showDetails: "Show Details",

        //offer and discounts
        discountTitle: "Special Offers and Discounts",
        discountDes: "Explore exclusive deals on domain hosting and selling at our website! Unlock special offers and discounts to elevate your online presence. Don't miss out on limited-time savings for powerful web solutions.",

        //Footer
        footerTitle: "Domainhub",
        footerDes: "At DomainHub, we empower your online journey with seamless domain hosting solutions. Our commitment to excellence is reflected in our top-rated packages, trusted by a vast community of users. Join our growing network of satisfied clients and discover a world of possibilities for your online presence. Your success is our priority. Explore our services today and experience the reliability, efficiency, and innovation that define DomainHub.",
        navigation:"Navigations",
        faq:"FAQs",
        privacy:"Privacy Policy",
        terms:"Terms & Conditions ",
        company:"Company",
        about:"About",
        team:"Team",
        contact:"Contact",
        contactInfo:"Contact Information",
        copyright:"Copyright © 2023 DomainHub. | Powered by Devengers.",
        locationInfo:"Mohakhali, Dhaka 1212.",

        //contact us
        contactUS:"Contact us",
        call:"Call",
        location:"Location",
        contactNameTitle:"Name",
        contactName:"Your Name",
        contactEmailTitle:"Email",
        contactEmail:"Your Email",
        message:"Write Your Message",
        messageTitle:"Message",
        send:"Send",

        //review
        reviewTitle:"What People Say About Us",

        //Dashboard Admin Nav
        navProfile:"Profile",
        logout:"Logout",
        create:"Create Domain",
        allDomain:"All Domains",
        allDomainReq:"All Domain Request",
        allFreeTrial:"All Free Tail Applications",
        allReviews:"All Reviews",
        allUser:"All Users",

        //Dashboard user nav
        myCartNav:"My Cart",
        freeTrialNav:"My Free Tail Application",
        myDomainNav:"My All Domains",
        myReviewNav:"My All Review",
        supportNav:"Support",


      },
    },
    bn: {
      translation: {
        bannerTitle: "এখন আপনার পছন্দসই ডোমেন খুঁজুন!",
        bannerSearchPlaceHolder: "আপনার ডোমেইন নাম",
        bannerSearchBtn: "অনুসন্ধান",
        navTitle: "ডোমেইন হাব",
        navHome: "বাড়ি",
        navAbout: "আমাদের সম্পর্কে",
        navContact: "যোগাযোগ",
        navReview: "পর্যালোচনা",
        navDashboard: "ড্যাশবোর্ড",
        navLogin:"লগইন",
        //about us
        aboutDes: "আমাদের ওয়েবসাইট অন্বেষণ",
        aboutH1: "DomainHub-এ স্বাগতম - ডোমেন কেনা-বেচার জন্য আপনার প্রধান গন্তব্য! DomainHub-এ, আমরা ব্যক্তি, ব্যবসা, এবং স্বপ্নদর্শীদের সাথে তাদের অনলাইন উপস্থিতি বাড়াতে নিখুঁত ডোমেন নামগুলির সাথে সংযোগ করার বিষয়ে উত্সাহী। একটি নেতৃস্থানীয় ডোমেন বিক্রির প্ল্যাটফর্ম হিসাবে, আমরা একটি নিরবচ্ছিন্ন এবং নিরাপদ মার্কেটপ্লেস অফার করি যেখানে ক্রেতা এবং বিক্রেতারা একত্রিত হয়ে সম্ভাবনার বিশ্ব অন্বেষণ করে।",
        mission: "আমাদের মিশন",
        exploreMission: "আমাদের মিশন অন্বেষণ",
        mission1: "অনলাইন উদ্যোগ ক্ষমতায়ন",
        mission2: "প্রক্রিয়া সরলীকরণ",
        mission3: "ট্রাস্ট এবং নিরাপত্তা বৃদ্ধি",
        mission4: "বিশেষজ্ঞ গাইডেন্স প্রদান",
        mission5: "একটি গ্লোবাল কমিউনিটি বিল্ডিং",
        mission6: "প্রতিক্রিয়া-চালিত উন্নয়ন",
        whyUs: "কেন DomainHub",
        whyDes: "আমাদের উদ্দেশ্য অন্বেষণ",
        why1: "DomainHub-এ সহজেই প্রিমিয়াম ডোমেন আবিষ্কার করুন",
        why2: "আমাদের ব্যবহারকারী-বান্ধব প্ল্যাটফর্ম ক্রয়-বিক্রয় প্রক্রিয়াকে সহজতর করে",
        why3: "একটি নিরাপদ এবং স্বচ্ছ অভিজ্ঞতা প্রদান",
        why4: "বিশেষজ্ঞ নির্দেশিকা, একটি বৈচিত্র্যময় ডোমেন পোর্টফোলিও এবং একটি বিশ্ব সম্প্রদায় থেকে উপকৃত হন",
        joinUs: "আমাদের সাথে যোগ দিন এবং আজ আপনার অনলাইন উপস্থিতির সম্ভাবনা আনলক করুন",
        ourTeam: "আমাদের টিম",
        exploreTeam: 'আমাদের দল অন্বেষণ',
        TldTitle: "ডোমেন TLD",

        //plan
        planHeader: "সেরা হোস্টিং পরিকল্পনা চয়ন করুন",
        planDes: "সেরা হোস্টিং পরিকল্পনা চয়ন করুন",
        planDes2: "শ্রেষ্ঠত্বের জন্য তৈরি করা আমাদের প্রিমিয়াম হোস্টিং পরিকল্পনার মাধ্যমে আপনার ওয়েবসাইটকে উন্নত করুন",
        plan1: "বেসিক ডুও",
        plan1Btn: "শুরু করুন",
        plan2: "কমফোর্ট ডুও",
        plan2Btn: "কমফোর্ট ডুও পান",
        plan3: "প্রিমিয়াম ডুও",
        plan3Btn: "প্রিমিয়াম পরিবার পান",

        //FAQ
        FaqTitle: "সচরাচর জিজ্ঞাস্য",
        FaqDes: "আপনার ডোমেন নির্বাচন, নিবন্ধন এবং পরিচালনা সম্পর্কে সাধারণ প্রশ্নের উত্তর খুঁজুন",
        Faq1Q: "ডোমেইন হোস্টিং কি?",
        Faq1A: "ডোমেন হোস্টিং ইন্টারনেটের সাথে সংযুক্ত একটি সার্ভারে ওয়েবসাইট ফাইল এবং ডেটা সংরক্ষণ এবং পরিচালনার পরিষেবাকে বোঝায়। এটি আপনার ওয়েবসাইটকে বিশ্বব্যাপী ব্যবহারকারীদের কাছে অ্যাক্সেসযোগ্য করার অনুমতি দেয়",
        Faq2Q: "আমি কিভাবে আমার ওয়েবসাইটের জন্য সঠিক ডোমেইন নাম নির্বাচন করব?",
        Faq2A: "আমরা আপনাকে একটি উপলব্ধ ডোমেন খুঁজে পেতে এবং নিবন্ধন করতে সাহায্য করার জন্য একটি ডোমেন নাম অনুসন্ধান টুল প্রদান করি। এমন একটি নাম বিবেচনা করুন যা আপনার ব্র্যান্ডকে প্রতিফলিত করে, মনে রাখা সহজ এবং আপনার সামগ্রীর সাথে প্রাসঙ্গিক।",
        Faq3Q: "আপনি কি ধরনের হোস্টিং পরিকল্পনা অফার করেন?",
        Faq3A: "আমরা শেয়ার্ড হোস্টিং, ভিপিএস হোস্টিং এবং ডেডিকেটেড হোস্টিং সহ বিভিন্ন হোস্টিং পরিকল্পনা অফার করি। প্রতিটি প্ল্যান ব্যক্তিগত ব্লগ থেকে শুরু করে বৃহৎ ব্যবসায়িক ওয়েবসাইট পর্যন্ত বিভিন্ন চাহিদা পূরণ করে।",
        Faq4Q: "আপনি কি গ্রাহক সহায়তা প্রদান করেন এবং আমি কিভাবে আপনার সাথে যোগাযোগ করতে পারি?",
        Faq4A: "হ্যাঁ, আমরা লাইভ চ্যাট, ইমেল এবং ফোন সহ বিভিন্ন চ্যানেলের মাধ্যমে 24/7 গ্রাহক সহায়তা অফার করি। আমাদের সহায়তা টিম আপনার সম্মুখীন হতে পারে এমন যেকোনো প্রশ্ন বা সমস্যায় আপনাকে সহায়তা করতে প্রস্তুত।",

        //Success showcase
        successTitle: "সফলতার প্রদর্শনী",
        successDes: "DomainHub.com: যেখানে ই-কমার্স এক্সিলেন্স অত্যাধুনিক প্রযুক্তির সাথে মিলিত হয়, ওয়েব হোস্টিংকে পুনরায় সংজ্ঞায়িত করে এবং শীর্ষ-স্তরের প্যাকেজ এবং নিরবিচ্ছিন্ন অভিজ্ঞতার সাথে বিক্রি করে।",
        success1Title: "সর্বাধিক বিক্রিত",
        success1Des: "DomainHub.com এর সাথে একটি নেতৃস্থানীয় ই-কমার্স প্ল্যাটফর্ম হিসাবে উৎকৃষ্ট শীর্ষ-বিক্রয় প্যাকেজ যা শিল্প মান সেট করে, আমাদের প্রদর্শন করে গুণমান এবং মূল্য প্রতিশ্রুতি ",
        success2Title: "মোট ব্যবহারকারী",
        success2Des: "আমাদের সমৃদ্ধ ব্যবহারকারী সম্প্রদায় বিভিন্ন ব্যক্তি, ব্যবসা, ব্লগার এবং ডেভেলপারদের বিশ্বাস এবং সন্তুষ্টিকে প্রতিফলিত করে যারা তাদের ওয়েব হোস্টিং এবং বিক্রয়ের প্রয়োজনের জন্য DomainHub.com এর উপর নির্ভর করে",
        success3Title: "মোট পর্যালোচনা",
        success3Des: "ইতিবাচক পর্যালোচনা প্রচুর, আমরা যে সুবিন্যস্ত এবং দক্ষ অভিজ্ঞতা প্রদান করি তা আন্ডারস্কোর করে। ব্যবহারকারীরা লাইভ চ্যাট সমর্থন, সদস্যতা ব্যবস্থাপনা, এবং একটি ব্যবহারকারী-বান্ধব ডোমেন অনুসন্ধানের মতো বৈশিষ্ট্যগুলির জন্য আমাদের প্ল্যাটফর্মের প্রশংসা করে৷",
        success4Title: "ইউজার এনগেজমেন্ট ফোকাস",
        success4Des: "বিভাগ-ভিত্তিক মূল্য, বিশেষ ছাড়, এবং একটি বিনামূল্যের ট্রায়াল বিকল্পের সাথে, DomainHub.com সক্রিয়ভাবে ব্যবহারকারীর ব্যস্ততা বাড়ায়, আমাদের মূল্যবান গ্রাহকদের নমনীয়তা এবং সাশ্রয়ী মূল্য প্রদান করে।",
        success5Title: "উন্নত প্রযুক্তি ইন্টিগ্রেশন",
        success5Des: "সেন্ট্রালাইজড এবং স্কেলেবল স্টেট ম্যানেজমেন্টের জন্য Redux-এর সংযোজন উন্নত প্রযুক্তির প্রতি আমাদের নিবেদন প্রদর্শন করে, বৃহৎ-স্কেল ওয়েব অ্যাপ্লিকেশনগুলির জন্য একটি নিরবচ্ছিন্ন এবং অভিযোজিত সমাধান নিশ্চিত করে।",
        success6Title: "ই-কমার্সে শক্তিশালী প্লেয়ার",
        success6Des: "অত্যাধুনিক প্রযুক্তির সাথে সমন্বয়হীন ব্যবহারকারীর অভিজ্ঞতার প্রতি আমাদের প্রতিশ্রুতি, DomainHub.com কে ই-কমার্স ল্যান্ডস্কেপ, বিশেষ করে ওয়েব অবকাঠামো পরিষেবা সেক্টরে একটি শক্তিশালী প্লেয়ার হিসাবে অবস্থান করে",
        success7Title: "উদ্ভাবন এবং সহযোগিতা",
        success7Des: "DomainHub.com টিম সম্মিলিতভাবে সীমাবদ্ধতা ঠেলে দেয়, বাজারে একটি উল্লেখযোগ্য এবং ইতিবাচক পার্থক্য তৈরি করতে নতুন প্রযুক্তি অন্বেষণ করে, উদ্ভাবন এবং সহযোগিতার প্রতি আমাদের চলমান প্রতিশ্রুতি প্রদর্শন করে।",
        totalSell: "মোট বিক্রয়",
        totalUser: "মোট ব্যবহারকারী",
        totalReview: "মোট পর্যালোচনা",

        //free trial
        trialTitle: "বিনামূল্যে ট্রায়াল",
        trialTitlesDes:"আমাদের একটি বিনামূল্যে ডোমেইন উপভোগ করুন! শুধু আপনার প্রিয় ডোমেইন নাম পাঠিয়ে আবেদন করুন, এবং আমরা বাকিটা দেখব। একটি ব্যক্তিগতকৃত ডোমেনের মাধ্যমে আপনার অনলাইন উপস্থিতি সুরক্ষিত করুন যা আপনার পরিচয় প্রতিফলিত করে। আপনার ওয়েব উপস্থিতি বাড়ানোর এই সুযোগটি মিস করবেন না",
        trialSectionTitle: "বিনামূল্যে ট্রায়াল আবেদন",
        trialSelect: "ডোমেইন নির্বাচন করুন",
        trialDes: "7 দিনের জন্য একটি বিনামূল্যে ট্রায়াল সাইন আপ করুন এবং আমাদের আশ্চর্যজনক বৈশিষ্ট্যগুলি অন্বেষণ করুন! আপনার অনলাইন উপস্থিতি বাড়ানোর জন্য নিখুঁত ডোমেন খোঁজার গুরুত্ব আমরা বুঝি",

        //price by category
        categoryTitle: "বিভাগ অনুসারে দাম",
        category1: "শিক্ষামূলক",
        category2: "ব্যবসায়িক",
        category3: "স্বাস্থ্য",
        category4: "সরকারি",
        category5: "শিল্প",
        category6: "মিডিয়া",
        category7: "খেলা",
        category8: "প্রযুক্তি",
        categorySelect: "বিভাগ নির্বাচন করুন",
        showDetails: "বিস্তারিত দেখাও",

        //discount
        discountTitle: "বিশেষ অফার এবং ডিসকাউন্ট",
        discountDes: "আমাদের ওয়েবসাইটে ডোমেইন হোস্টিং এবং বিক্রয়ের একচেটিয়া ডিলগুলি অন্বেষণ করুন! আপনার অনলাইন উপস্থিতি বাড়াতে বিশেষ অফার এবং ডিসকাউন্ট আনলক করুন। শক্তিশালী ওয়েব সমাধানের জন্য সীমিত সময়ের সঞ্চয় মিস করবেন না",

        //footer
        footerTitle: "ডোমেইনহাব",
        footerDes: "DomainHub-এ, আমরা নিরবচ্ছিন্নভাবে আপনার অনলাইন যাত্রাকে শক্তিশালী করি ডোমেইন হোস্টিং সমাধান। শ্রেষ্ঠত্ব আমাদের অঙ্গীকার আমাদের টপ- রেটেড প্যাকেজগুলিতে প্রতিফলিত হয়েছে, একটি বিশাল সম্প্রদায়ের দ্বারা বিশ্বস্ত ব্যবহারকারীদের আমাদের সন্তুষ্ট ক্লায়েন্টদের ক্রমবর্ধমান নেটওয়ার্কে যোগ দিন এবং আপনার অনলাইন উপস্থিতির জন্য সম্ভাবনার বিশ্ব আবিষ্কার করুন। তোমার সাফল্য আমাদের অগ্রাধিকার.আজ আমাদের পরিষেবাগুলি অন্বেষণ করুন এবং নির্ভরযোগ্যতা, দক্ষতা, এবং উদ্ভাবনের অভিজ্ঞতা DomainHub সংজ্ঞায়িত করুন।",
        navigation:"নেভিগেশন",
        faq:"প্রশ্ন",
        privacy:"গোপনীয়তা নীতি",
        terms:"শর্তাবলী",
        company:"প্রতিষ্ঠান",
        about:"সম্পর্কিত",
        team:"টীম",
        contact:"যোগাযোগ",
        contactInfo:"যোগাযোগের তথ্য",
        locationInfo:"মহাখালী, ঢাকা 1212",
        copyright:"কপিরাইট © 2023 DomainHub. | Devengers দ্বারা চালিত",

        //contact us
        contactUs:"যোগাযোগ করুন",
        call:"কল",
        location:"ঠিকানা",
        contactName:"আপনার নাম লিখুন",
        contactNameTitle:"নাম",
        contactEmailTitle:"ইমেইল",
        contactEmail:"আপনার ইমেইল লিখুন",
        message:"আপনার বার্তা লিখুন",
        messageTitle:"বার্তা",
        send:"পাঠান",

        //review
        reviewTitle:"লোকেরা আমাদের সম্পর্কে কী বলে",

        //Admin Dashboard
        navProfile:"প্রোফাইল",
        logout:"প্রস্থান",
        create:"ডোমেইন তৈরি করুন",
        allDomain:"সমস্ত ডোমেইন",
        allDomainReq:"সমস্ত ডোমেন অনুরোধ",
        allFreeTrial:"সমস্ত বিনামূল্যে টেল অ্যাপ্লিকেশন",
        allReviews:"সমস্ত পর্যালোচনা",
        allUser:"সকল ব্যবহারকারী",

         //Dashboard user nav
         myCartNav:"আমার কার্ট",
         freeTrialNav:"আমার বিনামূল্যে টেল অ্যাপ্লিকেশন",
         myDomainNav:"আমার সব ডোমেইন",
         myReviewNav:"আমার সব পর্যালোচনা",
         supportNav:"সহায়তা",
        
      },
  },

},
});

export default i18n;