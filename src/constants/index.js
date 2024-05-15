import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  plan,
  design,
  implement,
  test,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  quality,
  deploy,
  maintain,
  sarwaat,
  monabbir,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "howwedo",
    title: "How We Do",
  },    
  {
    id: "services",
    title: "Services",
  },

  {
    id: "pricing",
    title: "Pricing",
  },

  {
    id: "contact",
    title: "Contact",
  },
  
];

const services = [
  {
    title: "Web Design and Development",
    description: "At CodeAndCrust, we specialize in creating visually stunning and highly functional websites that elevate your brand's digital presence and drive business growth. Our team of experienced web developers and designers uses the latest web development technologies and design trends to ensure your website performs flawlessly, attracting and retaining more customers. We prioritize customer satisfaction and quality, working closely with you to tailor our web design and development solutions to your unique needs, ultimately enhancing your online visibility and engagement. Every website we build is meticulously tested for performance, usability, and responsiveness across all devices, ensuring an exceptional user experience that converts visitors into loyal customers.",
    icon: web,
  },
  {
    title: "App Development",
    description: "Our app development services at CodeAndCrust are designed to bring your mobile vision to life with cutting-edge technology and intuitive design, driving business success. We develop high-quality, user-friendly mobile applications for both iOS and Android platforms, providing a seamless user experience that keeps your audience engaged. Our commitment to customer satisfaction and quality means we rigorously test every app to be robust, secure, and bug-free, ensuring it supports your business goals. By personalizing each app to your specific requirements, we ensure it not only meets but exceeds your business objectives, helping you reach a wider audience, improve customer engagement, and increase revenue.",
    icon: mobile,
  },
  {
    title: "Website and App Maintenance",
    description: "At CodeAndCrust, our commitment to your success extends beyond the initial launch with our comprehensive website and app maintenance services. We ensure your digital assets remain up-to-date, secure, and performing at their best, helping you maintain a competitive edge. Our proactive approach to maintenance includes regular updates, security checks, and performance optimizations, ensuring a seamless experience for your users and continued business growth. By fostering strong, ongoing relationships with our clients, we provide personalized support and timely solutions, helping you adapt to changing needs, improve customer satisfaction, and achieve long-term success.",
    icon: backend,
  },  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
 
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
 
];

const experiences = [
  {
    title: "Plan",    
    icon: plan,
    iconBg: "#E6DEDD",
    
    points: [
      "We conduct a thorough cost-benefit analysis, schedule tasks, and estimate resources. Our team gathers requirements from various stakeholders to create a detailed software requirement specification document. This document sets clear expectations and goals, aiding in precise project planning.",
    ],
  },
  {
    title: "Design",    
    icon: design,
    iconBg: "#E6DEDD",
    
    points: [
      "Our software engineers analyze requirements and identify the best solutions, integrating pre-existing modules, making informed technology choices, and selecting the right development tools. We ensure seamless integration into your existing IT infrastructure to enhance performance and user experience.",
    ],
  },
  {
    title: "Implement",    
    icon: implement,
    iconBg: "#E6DEDD",
    
    points: [
      "Our development team translates requirements into actionable coding tasks, working diligently to achieve the final product efficiently and effectively. We prioritize clean, maintainable code to ensure long-term success and scalability.",
    ],
  },
  {
    title: "Test",   
    icon: test,
    iconBg: "#E6DEDD",
    
    points: [
      "We employ both automated and manual testing to ensure the software is bug-free and meets your expectations. Testing runs parallel to development, allowing for immediate issue resolution. This comprehensive testing approach ensures your website or app is robust, secure, and ready for deployment.",
    ],
  },
  {
    title: "Quality Assurance",    
    icon: quality,
    iconBg: "#E6DEDD",
    
    points: [
      "Before deployment, our Quality Assurance (QA) team rigorously tests the entire system to ensure it meets all specified requirements and performs flawlessly. We conduct usability testing, security checks, and performance assessments to guarantee that the final product is of the highest quality.",
    ],
  },
  {
    title: "Deploy",    
    icon: deploy,
    iconBg: "#E6DEDD",
    
    points: [
      "We maintain separate build and production environments to ensure uninterrupted service for your users during updates. This phase includes packaging, environment configuration, and installation tasks to move the latest build to production seamlessly. Our deployment strategy ensures minimal downtime and a smooth transition for your users.",
    ],
  },
  {
    title: "Maintain",    
    icon: maintain,
    iconBg: "#E6DEDD",
    
    points: [
      "Post-deployment, we address any issues, manage software changes, and continually monitor performance, security, and user experience to identify improvement opportunities. Our proactive maintenance services ensure your website or app remains up-to-date, secure, and optimized for peak performance, fostering long-term customer satisfaction and business success.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

const pricing = [
  {
    id: "0",
    title: "Startup",
    description: "Suitable for potential super-startups and brand revamps for companies.",
    price: "199",  
    features: [
      "3 Page Website",
      "Custom Layout Design",
      "Contact/Query Form",
      "3 Banner Design",
      "5 Stock Images",
      "Free Favicon Design",
      "Unlimited Revisions",
      "Website Initial Concept in 48 Hours",
      "Complete W3C Certified HTML",
      "Complete Desgin and Development",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Gaurantee",
      "Value Added Services",
      "Serach Engine Optimization",
      "CMS will be Additional *",
      "Mobile Responsive will be Additional *",
    ],
  },
  {
    id: "1",
    title: "Business",
    description: "Suitable for potential super-startups and brand revamps for companies.",
    price: "499",    
    features: [
      "Up To 10 Unique Pages Website",
      "CMS/Admon Panel Intrgration",
      "5+ Stock Photos & Banner Designs",
      "FREE Social Media Integration",
      "FREE Favicon Designs",
      "FREE Google Friendly Sitemap",
      "Unlimited Revisions",
      "Cross Brower Compatible",
      "Complete W3C Certified HTML",
      "Website Initial Concept in 48 Hours",
      "Complete Desgin and Development",
      "Custom, Interactive & Dynamic Web Design",
      "Industry Specified Team of Expert Designers And Developers",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Gaurantee",
      "Value Added Services",
      "Serach Engine Optimization",
      "CMS will be Additional *",
      "Mobile Responsive will be Additional *",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Suitable for potential super-startups and brand revamps for companies.",
    price: "899",    
    features: [
      "Up To 15 Unique Pages Website",
      "Custom Made, Interactive & Dynamic Design",
      "Customized WordPress Or PHP Development",
      "Fully mobile responsive",
      "Interactive sliding banners",
      "Up To 10 Custom made Banner Desings",
      "10 Stock Images",
      "Unlimited Revisions",
      "Content Management System",
      "Online Signup Area (For Newsletters,Offers Etc.)",
      "Search Bar",
      "Live Feeds of Social Networks Integration (Optional)",
      "Google Friendly Sitemap",
      "Search Engine Submission",
      "Cross Browser Compatible",
      "Complete W3C Certified HTML",
      "Industry Specified Team Of Expert Designers And Developers",
      "Complete Deployment",
      "Complete Source Files",
      "Dedicated Project Manager",
      "100% Ownership Rights",
      "100% Satisfaction Guarantee",
      "100% Money Back Gaurantee",
      "CMS will be Additional *",
      "Mobile Responsive will be Additional *",
    ],
  },
];

const about = [
  {
    name: "Sarwaat Tahsin Hriddo",
    title: "Co-Founder & Chief Executive Officer (CEO)",
    description:
      "I am currently pursuing a BSC in Computer Security (Specialized Honors) at York University, Toronto, Ontario. With a background that includes founding a retail startup and being the youngest intern at Rangs Ltd in Dhaka, Bangladesh, I bring a diverse skill set in web and app development to CodeAndCrust. My core values of authenticity, work ethic, commitment to growth, and passion drive me to deliver exceptional digital solutions. I take pride in my work and love what I do, ensuring every project reflects my dedication to excellence. Outside of work, I enjoy playing 8-ball pool, table tennis, and exploring new lookout spots in Ontario, always seeking new perspectives and inspiration.",
    
    image: sarwaat,
    imgBg: "#E6DEDD",
    
  },
  {
    name: "Monabbir Ahmed Bhuiyan",
    title: "Co-Founder & Chief Technology Officer (CTO)",
    description:
      "I am currently pursuing a B.Eng in Software Engineering at York University in Toronto, Ontario. With experience as a junior developer at a startup called GO Learning in Bangladesh, I bring a diverse skill set in web and app development to Code & Crust. Additionally, I hold a black belt 2nd dan in Kyokushin Karate and founded the Kyokushin Karate @ York University Club. As the Co-Founder & Chief Technology Officer (CTO) of Code & Crust, my core values of authenticity, work ethic, commitment to growth, and passion drive me to deliver exceptional digital solutions. I take pride in my work and love what I do, ensuring every project reflects my dedication to excellence. Outside of work, I enjoy playing video games, watching anime, and creating my own video games, always seeking new perspectives and inspiration.",  
    image: monabbir,
    imgBg: "#E6DEDD",
    
  },
];


const questions = [
  {
    question: "Why work with CodeAndCrust?",
    answer:
      "At CodeAndCrust, we pride ourselves on delivering top-quality, innovative services tailored to meet the unique needs of each client. We offer high-end solutions at reasonable prices, ensuring that your business not only meets but exceeds its digital goals. Our commitment to personalization and client success sets us apart from the competition.",
  },
  {
    question:
      "What is your web design process like?",
    answer:
      `Our web design process is comprehensive and client-focused:      

      Plan: We conduct a thorough cost-benefit analysis, schedule tasks, and estimate resources. Our team gathers requirements from various stakeholders to create a detailed software requirement specification document. This sets clear expectations and goals, aiding in precise project planning.
      
      Design: Our software engineers analyze requirements and identify the best solutions, integrating pre-existing modules, making informed technology choices, and selecting the right development tools. We ensure seamless integration into your existing IT infrastructure.
      Implement: Our development team translates requirements into actionable coding tasks, working diligently to achieve the final product efficiently and effectively.
      
      Test: We employ both automated and manual testing to ensure the software is bug-free and meets your expectations. Testing runs parallel to development, allowing for immediate issue resolution.
      
      Deploy: We maintain separate build and production environments to ensure uninterrupted service for your users during updates. This phase includes packaging, environment configuration, and installation tasks to move the latest build to production.
      
      Maintain: Post-deployment, we address any issues, manage software changes, and continually monitor performance, security, and user experience to identify improvement opportunities.`
      ,
  },
  {
    question: "Do you offer Search Engine Optimization (SEO) services?",
    answer:
      "Absolutely. SEO is an integral part of all our services. We implement the best SEO practices to ensure your website ranks high on search engines, and draws more traffic.",
  },
  {
    question: "Do you use templates in your web design and development?",
    answer:
      "We offer both templated and custom website solutions. While our templated websites cater to specific pricing models, our custom websites are designed to meet your unique needs, ensuring maximum impact and value. Please refer to our pricing guide for more details.",
  },
  {
    question: "Where is your team based?",
    answer:
      "Our team operates online, allowing us to serve clients globally. This flexibility ensures we can provide timely and effective solutions, no matter where you are.",
  },
  {
    question: "How do I get started with CodeAndCrust?",
    answer:
      "Getting started is easy. Contact us through our website or call us directly. We will discuss your project needs and guide you through the next steps, ensuring a smooth and personalized onboarding process.",
  },
  {
    question: "How long does it typically take to develop a website?",
    answer:
      "The timeline for website development varies based on project complexity. Typically, a standard website takes 6-8 weeks from planning to deployment, ensuring high-quality results within a reasonable timeframe.",
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "We utilize a range of modern technologies including HTML5, CSS3, JavaScript, React, Angular, Node.js, and various CMS platforms like WordPress and Joomla. Our choice of technology is always aligned with your project needs.",
  },
  {
    question:
      "Can you develop mobile apps for both iOS and Android?",
    answer:
      "Yes, we specialize in developing high-quality mobile apps for both iOS and Android platforms, ensuring a seamless user experience across devices.",
  },
  {
    question:
      "What is your approach to SEO?",
    answer:
      "Our SEO approach includes comprehensive keyword research, on-page optimization, quality content creation, strategic link building, and performance tracking. We aim to boost your website’s visibility, draw more traffic, and increase your revenue.",
  },
  {
    question:
      "How do you ensure the quality of your projects?",
    answer:
      "Quality is at the heart of everything we do. We follow a robust quality assurance process that includes regular testing, code reviews, and continuous client feedback. Our goal is to exceed your expectations with every project.",
  },
  {
    question:
      "How much does it cost to develop a website or app?",
    answer:
      "The cost varies based on the project scope and complexity. We offer competitive pricing without compromising on quality. Contact us for a detailed quote tailored to your specific needs.",
  },
  {
    question:
      "Do you offer custom pricing packages?",
    answer:
      "Yes, we provide flexible pricing packages to suit different budgets and requirements. Our goal is to offer value while meeting your specific needs. Please contact us for more details.",
  },
  {
    question:
      "Can you help improve my existing website or app?",
    answer:
      "Absolutely. We can enhance your existing website or app with new features, design improvements, and performance optimizations, ensuring it meets current industry standards and exceeds your expectations.",
  },
  {
    question:
      "How do you ensure that my project is personalized?",
    answer:
      "We take a client-centric approach, understanding your unique needs and preferences, and tailoring our solutions accordingly. Your success is our priority, and we ensure every project is a perfect fit for your business.",
  },
];


export { services, technologies, experiences, testimonials, projects, pricing, about, questions };
