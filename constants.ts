
import React from 'react';
import type { Project, Skill, Certification } from './types';
import { BrainCircuit, Cpu, Code, Users, BarChart, Mic, Linkedin, Github, Mail, Download, ExternalLink } from 'lucide-react';


// Personal Information
export const PERSONAL_INFO = {
    name: "Alex Doe",
    profilePicture: "https://picsum.photos/seed/profile/300/300",
    bio: "A highly motivated AI/ML Engineer with a passion for developing intelligent systems and solving complex problems. Experienced in the full machine learning lifecycle, from data preprocessing and model development to deployment and monitoring. Adept at leveraging deep learning and NLP techniques to drive business value.",
    objectives: "To apply my expertise in artificial intelligence and machine learning to build innovative solutions that tackle real-world challenges, contribute to a forward-thinking team, and continuously learn and grow in the ever-evolving field of AI.",
    brandingStatement: "Crafting the future of intelligence, one algorithm at a time."
};


// Skills
// FIX: Replaced JSX with React.createElement to be compatible with .ts files. This resolves parsing errors.
export const TECHNICAL_SKILLS: Skill[] = [
    { name: "AI/ML", icon: React.createElement(BrainCircuit, { className: "w-8 h-8 text-blue-400" }) },
    { name: "NLP", icon: React.createElement(Mic, { className: "w-8 h-8 text-blue-400" }) },
    { name: "Neural Networks", icon: React.createElement(Cpu, { className: "w-8 h-8 text-blue-400" }) },
    { name: "Python", icon: React.createElement(Code, { className: "w-8 h-8 text-blue-400" }) },
    { name: "Linux", icon: React.createElement(Code, { className: "w-8 h-8 text-blue-400" }) },
    { name: "Data Analysis", icon: React.createElement(BarChart, { className: "w-8 h-8 text-blue-400" }) },
];

// FIX: Replaced JSX with React.createElement to be compatible with .ts files. This resolves parsing errors.
export const SOFT_SKILLS: Skill[] = [
    { name: "Collaboration", icon: React.createElement(Users, { className: "w-8 h-8 text-blue-400" }) },
    { name: "Analysis", icon: React.createElement(BarChart, { className: "w-8 h-8 text-blue-400" }) },
    { name: "Problem-solving", icon: React.createElement(BrainCircuit, { className: "w-8 h-8 text-blue-400" }) },
];

// Projects
export const PROJECTS: Project[] = [
    {
        title: "Sentiment Analysis Engine",
        description: "A real-time sentiment analysis tool for social media streams, using recurrent neural networks to classify text with high accuracy.",
        liveDemoUrl: "#",
        githubUrl: "#",
        techStack: ["Python", "TensorFlow", "Flask", "React"],
        image: "https://picsum.photos/seed/project1/600/400"
    },
    {
        title: "Image Recognition API",
        description: "A RESTful API that identifies objects in images using a pre-trained convolutional neural network (CNN) model.",
        liveDemoUrl: "#",
        githubUrl: "#",
        techStack: ["PyTorch", "FastAPI", "Docker", "AWS S3"],
        image: "https://picsum.photos/seed/project2/600/400"
    },
    {
        title: "Customer Churn Predictor",
        description: "A predictive model that identifies customers likely to churn, enabling proactive retention strategies.",
        liveDemoUrl: "#",
        githubUrl: "#",
        techStack: ["Scikit-learn", "Pandas", "Streamlit"],
        image: "https://picsum.photos/seed/project3/600/400"
    },
];

// Capstone Project
export const CAPSTONE_PROJECT = {
    title: "Generative Art Synthesizer",
    problemStatement: "Traditional digital art tools offer limited avenues for serendipitous creation. This project aimed to create a system that could generate unique, aesthetically pleasing artwork based on textual prompts, bridging the gap between language and visual art.",
    solution: "Developed a web application powered by a Generative Adversarial Network (GAN). Users can input descriptive text (e.g., 'a serene forest at dusk in the style of Van Gogh'), and the model generates a corresponding image. The system uses a fine-tuned StyleGAN2 model conditioned on text embeddings from a BERT model.",
    technicalDeepDive: "The core challenge was aligning the text and image modalities. This was achieved by training a mapping network to project BERT's text embeddings into the latent space of StyleGAN2. The dataset consisted of millions of image-caption pairs scraped from the web. The entire pipeline was containerized using Docker and deployed on a Kubernetes cluster for scalability and resilience, with a React frontend for user interaction.",
    liveDemoUrl: "#",
    githubUrl: "#",
    image: "https://picsum.photos/seed/capstone/800/500"
};

// Certifications
export const CERTIFICATIONS: Certification[] = [
    { name: "Machine Learning Specialization", issuer: "Coursera & Stanford", url: "#" },
    { name: "Deep Learning Specialization", issuer: "Coursera & DeepLearning.AI", url: "#" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", url: "#" },
    { name: "AWS Certified Machine Learning - Specialty", issuer: "Amazon Web Services", url: "#" },
];

// Career Materials & Contact
export const CAREER_LINKS = {
    resume: "#",
    linkedin: "#",
    github: "#",
    email: "your.email@example.com"
};

// Presentation Section
export const PRESENTATION = {
    intro: "Welcome to my showcase! This presentation provides a brief overview of my journey, key projects, and future aspirations in the field of AI and Machine Learning.",
    projectHighlights: "I've focused on creating practical, high-impact solutions, from real-time sentiment analysis to predictive modeling. Each project presented a unique challenge and an opportunity to apply cutting-edge techniques.",
    capstoneDemoPreview: "The centerpiece of my portfolio is the Generative Art Synthesizer. The video below demonstrates how natural language prompts are transformed into unique visual art, showcasing the power of generative models.",
    youtubeEmbedId: "dQw4w9WgXcQ", // Replace with your YouTube video ID
    futurePlans: "I am eager to explore reinforcement learning and its applications in robotics. I'm also committed to staying at the forefront of AI ethics and developing responsible AI systems."
};

// Navigation
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Capstone', href: '#capstone' },
    { name: 'Certs', href: '#certifications' },
    { name: 'Showcase', href: '#presentation' },
    { name: 'Contact', href: '#contact' },
];

// FIX: Replaced JSX with React.createElement. This resolves a type inference issue that caused an error in Contact.tsx because the `url` property was not being correctly inferred.
export const SOCIAL_ICONS = [
    { name: "Email", icon: React.createElement(Mail), url: `mailto:${CAREER_LINKS.email}` },
    { name: "LinkedIn", icon: React.createElement(Linkedin), url: CAREER_LINKS.linkedin },
    { name: "GitHub", icon: React.createElement(Github), url: CAREER_LINKS.github },
];