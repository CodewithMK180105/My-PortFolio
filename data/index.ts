export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Enhancing My Full Stack Development with DSA Mastery.",
      description: "As a Full Stack Developer, I'm honing my problem-solving skills by actively solving LeetCode questions and deepening my understanding of Data Structures and Algorithms.",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 10,
      title: "Mystery Message – Decode the Unspeakable",
      des: "A mysterious platform where users can send and receive secret messages without revealing their identity. Designed for fun, curiosity, and a hint of suspense, the sender stays anonymous while the receiver deciphers the message. Powered by Next Auth for secure access and MongoDB for message handling.",
      img: "https://res.cloudinary.com/dffoynel3/image/upload/v1747246074/Screenshot_2025-05-14_233511_ts3wr2.png", // 🔁 Replace with actual screenshot
      iconLists: [
        "/next.svg",
        "/React.svg",
        "/ts.svg",
        "/tail.svg",
        "/shadcn.svg",
        "/mongo.svg",
      ],
      link: "https://mystery-messages-one.vercel.app/" // 🔁 Replace with your actual live link
    },
    {
      id: 9,
      title: "QuickCart – Full Stack Electronics E-commerce Platform",
      des: "A full-stack e-commerce platform allowing users to browse and order electronic products while enabling sellers to manage products and orders. Features include secure auth with Clerk, image uploads via Cloudinary, event handling with Inngest, and payments via Stripe.",
      img: "https://res.cloudinary.com/dffoynel3/image/upload/v1744360156/Screenshot_2025-04-11_133505_atdvqs.png", // 🔁 Replace with actual screenshot
      iconLists: [
        "/next.svg",
        "/React.svg",
        "/ts.svg",
        "/mongo.svg",
        "/clerk_logo.png",
        "/cloudinary.svg",
      ],
      link: "https://quick-cart-electric-devices.vercel.app/" // 🔁 Replace with your actual live link
    },
    {
      id: 8,
      title: "YouTube Comment Analyzer",
      des: "A full-stack web application that fetches YouTube comments, categorizes them using an ML/NLP model, and visualizes them through graphs. Features include category filters, interactive UI, animations, and secure login. Designed for social impact and content insights.",
      img: "https://res.cloudinary.com/dffoynel3/image/upload/v1744357096/Screenshot_2025-04-11_120112_ft6bu4.png", // 🔁 Replace with your actual image URL
      iconLists: [
        "/next.svg",
        "/React.svg",
        "/ts.svg",
        "/tail.svg",
        "/shadcn.svg",
        "/clerk_logo.png"
      ],
      link: "https://github.com/CodewithMK180105/Youtube_Comment_Analyser"
    },
    {
      id: 7,
      title: "DSA Blogs – Coding Blog Platform",
      des: "An interactive platform showcasing coding problem-solving approaches using LeetCode problems, with features like theme options, animations, typing effects, and a copy button for code. Built using modern web technologies to demonstrate advanced frontend skills.",
      img: "https://res.cloudinary.com/dffoynel3/image/upload/v1735383722/DSA_blog_pgelx5.png",
      iconLists: [
        "/next.svg",
        "/React.svg",
        "/ts.svg", 
        "/tail.svg", 
        "/shadcn.svg", 
      ],
      link: "https://dsa-blogs.netlify.app/",
    }
    ,
    {
      id: 6,
      title: "FreshMart – Online Grocery Store",
      des: "FreshMart is a convenient online grocery store that offers categories such as vegetables, fruits, dairy products, meat, bakery items, and grains. Features include adding products to the cart, viewing the cart, and a billing section with GST and delivery charges, making online shopping simple and efficient.",
      img: "https://res.cloudinary.com/dffoynel3/image/upload/v1735383785/FreshMart_mcovww.png",
      iconLists: [
        "/next.svg",
        "/React.svg",
        "/tail.svg",
        "/ts.svg",
        "/shadcn.svg",
      ],
      link: "https://online-grocery-store-using-next-js.vercel.app/",
    },
    // {
    //   id: 5,
    //   title: "CarHub – Car Rental Platform",
    //   des: "A car rental website with advanced filtering options for manufacturer type, model type, fuel type, and years. It fetches car data using RapidAPI, providing a seamless user experience for renting cars.",
    //   img: "https://res.cloudinary.com/dffoynel3/image/upload/v1740160725/car-showroom_zxiiwx.png",
    //   iconLists: [
    //     "/next.svg",
    //     "/React.svg",
    //     "/ts.svg", 
    //     "/tail.svg", 
    //     "/shadcn.svg",
    //     "/api.svg"
    //   ],
    //   link: "https://car-showroom-pi.vercel.app/",
    // },
    {
      id: 4,
      title: "Clothing Hub – E-commerce Store for Clothing",
      des: "Clothing Hub is an online store offering a wide variety of clothing for men, women, and kids. With separate sections for each category, users can easily navigate through different pages and shop for trendy clothes. A seamless shopping experience with multiple product options and categories.",
      img: "https://res.cloudinary.com/dffoynel3/image/upload/v1735383760/E-commerce_hlkjhb.png",
      iconLists: [
        "/React.svg",
        "/Js.svg",
        "/css.svg",
      ],
      link: "https://dancing-cat-bdf7f3.netlify.app",
    },
    // {
    //   id: 3,
    //   title: "Harmony Hub – Music School Platform",
    //   des: "Harmony Hub is a music education platform designed for aspiring musicians and enthusiasts. It offers a wide range of courses, including beginner, intermediate, and advanced programs in instruments like guitar, piano, violin, and vocal training. The site also features instructor profiles, student success stories, live demo sessions, and an easy-to-navigate registration system.",
    //   img: "https://res.cloudinary.com/dffoynel3/image/upload/v1737740553/music-school_ebqnjg.png",
    //   iconLists: [
    //     "/next.svg",
    //     "/React.svg",
    //     "/tail.svg",
    //     "/ts.svg", 
    //     "https://tse3.mm.bing.net/th?id=OIP.k7bUWvQbXDQSgUXyJQbWeAAAAA&pid=Api&P=0&h=180",
    //   ], 
    //     link: "https://music-school-seven.vercel.app/", 
    // },
    // {
    //   id: 2,
    //   title: "SummarizeAI – AI Article Summarizer",
    //   des: "SummarizeAI is a powerful AI-driven tool that allows users to generate concise and accurate summaries of articles and web content. Simply input a URL, and the platform extracts key insights using advanced AI summarization technology. It provides an intuitive interface, quick processing, and precise results, making it an essential tool for researchers, students, and professionals.",
    //   img: "https://res.cloudinary.com/dffoynel3/image/upload/v1738689665/SummarizeAI_hzrroz.png",
    //   iconLists: [
    //     "/next.svg",
    //     "/ts.svg", 
    //     "/React.svg",
    //     "/redux.svg",
    //     "/tail.svg",
    //   ], 
    //     link: "https://ai-article-summarizer-lovat.vercel.app/", 
    // },
    // {
    //   id: 1,
    //   title: "Educity – Educational Advertisement Platform",
    //   des: "Educity is an educational platform designed to connect learners with top-tier institutions and courses. The site features various programs, including undergraduate, master's, and postgraduate degrees, along with testimonials from students, campus photos, and a user-friendly contact form.",
    //   img: "https://res.cloudinary.com/dffoynel3/image/upload/v1735383778/Educity_n3mj3m.png",
    //   iconLists: [
    //     "/React.svg",
    //     "/Js.svg",
    //     "/css.svg",
    //   ],
    //   link: "https://mellifluous-bubblegum-e6aec4.netlify.app",
    // }
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Development Intern - Zen Legal LLP",
      desc: "Worked on building responsive and interactive UIs using Next.js, TypeScript, React.js, Tailwind CSS, Material UI, and ShadCN UI.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Frontend Developer Intern - Vighnotech",
      desc: "Developed and modified the frontend of the Vighnotech website, worked on CRM pages, and optimized the website for SEO.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend Developer Intern - TestKart",
      desc: "Developed responsive and reusable UI components for TestKart’s edtech platform using Next.js, TypeScript, and Tailwind CSS. Focused on enhancing user experience through clean design and frontend best practices.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Frontend Developer Intern - Clearcase Tech Solutions",
      desc: "Building the company website from scratch using Next.js, TypeScript, and Tailwind CSS. Responsible for designing and implementing responsive layouts, reusable components, and ensuring a seamless user experience.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },    
  ];
  
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      name: "git",
      link: "https://github.com/CodewithMK180105"
    },
    {
      id: 2,
      img: "/leetcode.svg",
      name: "Leetcode",
      link: "https://leetcode.com/u/CodewithMK180105/"
    },
    {
      id: 3,
      img: "/link.svg",
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/manishkumar-gupta-1139642b5"
    },
  ];


// https://leetcode.com/medal/?showImg=1