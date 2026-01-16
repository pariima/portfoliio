import fintechImg from "@assets/generated_images/minimalist_fintech_mobile_app_dashboard_mockup.png";
import vrImg from "@assets/generated_images/vr_headset_interface_abstract_concept.png";
import fashionImg from "@assets/generated_images/minimalist_fashion_e-commerce_website_mockup.png";
import productivityImg from "@assets/generated_images/dark_mode_productivity_app_interface.png";
import profileImg from "@assets/generated_images/professional_designer_headshot_artistic.png";

export const projects = [
  {
    id: "fintech-dashboard",
    title: "Nova Bank",
    category: "Mobile App • Fintech",
    image: fintechImg,
    color: "#4A90E2",
    description: "Reimagining the mobile banking experience for the digital-native generation.",
    role: "Lead Product Designer",
    timeline: "3 months",
    tools: ["Figma", "ProtoPie", "After Effects"],
    challenge: "Traditional banking apps are cluttered and confusing. The goal was to create a zero-friction interface for daily transactions.",
    outcome: "A 40% increase in user engagement and a Red Dot Design Award."
  },
  {
    id: "spatial-vr",
    title: "Aura Spatial",
    category: "VR/AR • Spatial Design",
    image: vrImg,
    color: "#9D4EDD",
    description: "An operating system interface for next-generation mixed reality headsets.",
    role: "UX Researcher & Designer",
    timeline: "6 months",
    tools: ["Unity", "Spline", "Figma"],
    challenge: "Designing for 3D space requires rethinking traditional 2D interaction patterns.",
    outcome: "Developed a gesture-based interaction system that feels natural and intuitive."
  },
  {
    id: "fashion-editorial",
    title: "Maison",
    category: "Web Design • E-commerce",
    image: fashionImg,
    color: "#C19A6B",
    description: "A minimalist e-commerce platform for a luxury sustainable fashion brand.",
    role: "UI Designer",
    timeline: "4 months",
    tools: ["Framer", "Figma"],
    challenge: "Balancing high-end editorial aesthetics with conversion-driven e-commerce patterns.",
    outcome: "A seamless shopping experience that tells the brand's story."
  },
  {
    id: "productivity-suite",
    title: "Flow State",
    category: "Desktop App • Productivity",
    image: productivityImg,
    color: "#10B981",
    description: "A dark-mode focused project management tool for developers.",
    role: "Product Designer",
    timeline: "5 months",
    tools: ["Figma", "React"],
    challenge: "Developers need density without clutter. The challenge was to organize complex data hierarchies.",
    outcome: "Adopted by over 10,000 developer teams in beta."
  }
];

export const profile = {
  image: profileImg,
  name: "Parima Bajracharya",
  title: "Product Designer",
  bio: "I'm a Product Designer with a background in cognitive psychology. I believe that the best designs are the ones that disappear, leaving only the experience.",
  currentlyReading: [
    "The Design of Everyday Things by Don Norman",
    "Shape Up by Ryan Singer",
    "Grid Systems in Graphic Design"
  ]
};
