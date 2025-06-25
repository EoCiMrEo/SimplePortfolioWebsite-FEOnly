export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "lg:justify-end md:justify-start",
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
    title: "Currently building a Discord Community.",
    description: "We Work Together !",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-end",
    img: "b5.png",
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
    id: 1,
    title: "Cole Fitness Center - Management System",
    des: "A financial management web application that helps users track income, expenses, and savings goals with interactive charts and budget planning features.",
    img: "/ColeFitnessThumbnail.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/python.svg", "/dock.svg"],
    link: "https://github.com/EoCiMrEo/ColeFitnessCenter-BE",
  },
  {
    id: 2,
    title: "Smart Finance - Management System",
    des: "A web-based finance platform designed to manage budgets, track expenses, and generate reports, helping users make smarter financial decisions.",
    img: "/PortfolioThumbnail.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/EoCiMrEo/SmartFinance",
  },
  {
    id: 3,
    title: "Intruder Detector - Embedded System",
    des: "An embedded IoT security solution with motion sensors and real-time alerts, designed for intruder detection in smart environments using Raspberry Pi and Python.",
    img: "/",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/EoCiMrEo/IntruderDetector-EmbeddedDevice",
  },
  {
    id: 4,
    title: "Porfolio - Simple Website (FE Only)",
    des: "A clean and responsive personal portfolio website built with modern frontend tools to showcase projects and skills, featuring smooth transitions and interactive UI elements.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://simple-portfolio-website-fe-only.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "Sample testimonial text goes here. This is a placeholder for a real testimonial that would be provided by a client or user of the service.",
    name: "Sample Name",
    title: "Sample Title",
  },
  {
    quote:
      "Sample testimonial text goes here. This is a placeholder for a real testimonial that would be provided by a client or user of the service.",
    name: "Sample Name",
    title: "Sample Title",
  },
  {
    quote:
      "Sample testimonial text goes here. This is a placeholder for a real testimonial that would be provided by a client or user of the service.",
    name: "Sample Name",
    title: "Sample Title",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "IT Specialist - Le Meridien of Marriott International (2023-2024)",
    desc: "Delivered technical support and maintained hotel IT infrastructure. Ensured secure and efficient IT operations",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Teaching Assistant - Mercy University (2024 - Currently)",
    desc: "Provided instructional support for Python. Guided students with any of their concerns. Helped enhance learning outcomes",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Freelance Developer - Various Clients (2021 - 2023)",
    desc: "Designed and developed anapplication from scratch. Collaborated with clients to deliver custom solutions.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
  },
  {
    id: 4,
    title: "Sample Company - Sample Position (2022 - 2023)",
    desc: "This is just an example description !",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/EoCiMrEo",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/EoCiMrEo",
  },
  {
    id: 3,
    img: "/insta.svg",
    link: "https://www.instagram.com/eocimreo/",
  },
  {
    id: 4,
    img: "/linked.svg",
    link: "https://www.linkedin.com/in/eocimreo/",
  },
  {
    id: 5,
    img: "/discord.svg",
    link: "https://discord.gg/3d9c7a2e",
  },
  {
    id: 6,
    img: "/face.svg",
    link: "https://www.youtube.com/@EoCiMrEo",
  },
];
