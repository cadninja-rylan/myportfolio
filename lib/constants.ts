export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website template for engineering students.',
	mainNav: [
		{
			title: 'Home',
			href: '/',
		},
		{
			title: 'About',
			href: '/about',
		},
		//{
			//title: 'Education',
			//href: '/education',
		//},
		{
			title: 'Skills',
			href: '/skills',
		},
		//{
			//title: 'Experience', add this when u land a co-op
			//href: '/experience',
		//},
		{
			title: 'Projects/ Works',
			href: '/projects',
		},
		{
			title: 'Certificates',
			href: '/certificates',
		},
		//{
			//title: 'Blog',
			//href: '/blog',
		//},
		{
			title: 'Contact',
			href: '/contact',
		},
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
	},
};

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'City, Country',
		startDate: 'May 2023',
		endDate: 'Aug 2023',
		description: [
			'Worked on developing and testing software components for embedded systems',
			'Collaborated with senior engineers on project planning and execution',
			'Implemented test procedures for quality assurance',
		],
		technologies: ['C++', 'Python', 'MATLAB', 'Git'],
	},
	{
		title: 'Research Assistant',
		company: 'University Lab',
		location: 'City, Country',
		startDate: 'Jan 2023',
		endDate: 'Apr 2023',
		description: [
			'Assisted in research focusing on advanced materials for mechanical applications',
			'Conducted literature reviews and compiled research findings',
			'Performed data analysis and visualization of experimental results',
		],
		technologies: ['MATLAB', 'CAD', 'Data Analysis', 'Python'],
	},
];

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'Sketching and Primary Features  -  Part #1',
		description:
			'Developed fully defined 3D parts using sketch relations, constraints, and primary modeling features like extrudes, extrude cuts, fillets, and chamfers; Focused on clean sketch geometry, and dimension driven modeling for manufacturable components.',
		image: '/1001.png',
		tags: ['SolidWorks', 'Sketching', 'Extrude', 'Extrude Cuts', 'Fillets', 'Chamfers'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #2',
		description:
			'',
		image: '/1002.png',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #3',
		description:
			'',
		image: '/1003.png',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #4',
		description:
			'',
		image: '/1004.png',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Secondary Features and Part Modeling  -  Part #1',
		description:
			'Created complex parts using secondary modeling tools such as revolves, linear/circular patterns, cut-extrudes, fillets, and chamfers. Designed functional mechanical components maintaining geometric accuracy and clean parametric design intent.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['SolidWorks', 'Extrude', 'Cut-Extrude', 'Revolve', 'Fillets', 'Chamfers', 'Patterning'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #2',
		description:
			'',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #3',
		description:
			'',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #4',
		description:
			'',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Mechanical Assembly Modeling  -  Part #1',
		description:
			'Built multi-component assembliess with fully constrained mates such as concentric, coincident, parallel, tanget, width, and distance mates. Verified kinematic motion.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['SolidWorks', 'Assembly', 'Mates', 'Motion Study'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #2',
		description:
			'',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #3',
		description:
			'',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Engineering Drawings and Detailing  -  Part #1',
		description:
			'Developed engineering drawings from 3D parts, featuring multi-view projections, section/auxiliary views, precise dimensions, and annotations. Also produced an exploded assembly with a full BOM for clear documentation.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['SolidWorks', 'Engineering Drawings', 'Multi-View Projections', 'Section Views', 'Auxiliary Views', 'Exploded Assembly', 'BOM', 'Dimensioning'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #2',
		description:
			'',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #3',
		description:
			'',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #4',
		description:
			'',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'Parametric Design (Equations and Configurations)  -  Part #1',
		description:
			'Built fully parametric 3D parts using equations, driven dimensions, and design tables to automate geometry updates and generate multiple part configurations.',
		image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
		tags: ['SolidWorks', 'Global Variables', 'Design Tables', 'Configurations'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Part #2',
		description:
			'',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: [],
		link: '#',
		repo: '#',
	},
	{
		title: 'CSWA — Certified SolidWorks Associate',
		description:
			'Achieved a perfect score on the CSWA exam. Accurately modelled and dimensioned multiple mechanical parts, calculated exact mass properties, and fully assembled/mated components under timed exam conditions.',
		image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
		tags: ['SolidWorks', 'CSWA', 'Mass Properties', 'Assemblies', 'Mates'],
		link: '#',
		repo: '#',
	},
	{
		title: 'Tornado Simulation',
		description:
			'I collaborated with a team to build a functional tornado machine exhibit. My role was creating the initial design sketches, planning material requirements, and assisting with hands-on assembly, including securing structural components and hardware.',
		image: 'https://images.pexels.com/photos/1036657/pexels-photo-1036657.jpeg',
		tags: ['Sketching', 'Prototyping', 'Engineering Design', 'Team Project', 'Mechanical Design', 'Build Assembly', 'Fog Machine', 'Concept Development'],
		link: '#',
		repo: '#',
	},
	{
		title: 'AI in Healthcare Diagnostics',
		description:
    		'Designed a research poster summarizing key issues in AI-driven healthcare diagnostics, focusing on algorithmic bias, patient data privacy, and explainable AI.',
  		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		tags: ['AI', 'Healthcare Innovation', 'Diagnostics', 'Data Privacy', 'Algorithmic Bias', 'Explainable AI', 'Ethics'],
		link: '#',
		repo: '#',
	},
];

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'Bachelor of Science',
		field: 'Mechanical Engineering',
		institution: 'University Name',
		location: 'City, Country',
		startDate: 'Sep 2020',
		endDate: 'Present',
		gpa: '3.8/4.0',
		achievements: [
			'Dean\'s List (All Semesters)',
			'Academic Excellence Scholarship',
			'Senior Design Project Award',
		],
	},
	{
		degree: 'High School Diploma',
		field: 'Science and Mathematics',
		institution: 'High School Name',
		location: 'City, Country',
		startDate: 'Sep 2016',
		endDate: 'Jun 2020',
		gpa: '4.0/4.0',
		achievements: [
			'Valedictorian',
			'National Mathematics Competition Finalist',
			'Science Fair Gold Medal',
		],
	},
];

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'SOLIDWORKS CAD Design Associate (CSWA)',
		issuer: 'VirtualTester Online, Tangix Design & Development AB',
		date: 'Oct 2024',
		id: 'C-E8MZHVLJF9',
		url: '#',
		pdf: '/Certificate_C-E8MZHVLJF9.pdf',
	},
	{
		title: 'Onshape Introduction to Assembly Design Completion',
		issuer: 'PTC Inc.',
		date: 'Jan 2024',
		id: 'N/A',
		url: '#',
		pdf: '/rylan-prima-a37f0d4b-e6fc-4d93-acbf-77e42c72dd03-certificate.pdf',
	},
	{
		title: 'Onshape Introduction to Part Design Completion',
		issuer: 'PTC Inc.',
		date: 'Jan 2024',
		id: 'N/A',
		url: '#',
		pdf: '/rylan-prima-65183b8f-1740-44b3-9b6b-efa0eaf97223-certificate.pdf',
	},
];

export type Skill = {
	name: string;
	level: number; // 1-10
	category: 'technical' | 'software' | 'soft' | 'language';
};

export const skills: Skill[] = [
	// Technical Skills
	{ name: 'Mechanical Design', level: 9, category: 'technical' },
	{ name: 'Structural Analysis', level: 8, category: 'technical' },
	{ name: 'Thermodynamics', level: 7, category: 'technical' },
	{ name: 'Control Systems', level: 8, category: 'technical' },
	{ name: 'Circuit Design', level: 6, category: 'technical' },

	// Software Skills
	{ name: 'MATLAB', level: 9, category: 'software' },
	{ name: 'AutoCAD', level: 8, category: 'software' },
	{ name: 'SolidWorks', level: 9, category: 'software' },
	{ name: 'Python', level: 7, category: 'software' },
	{ name: 'C++', level: 6, category: 'software' },
	{ name: 'ANSYS', level: 8, category: 'software' },

	// Soft Skills
	{ name: 'Problem Solving', level: 9, category: 'soft' },
	{ name: 'Team Leadership', level: 8, category: 'soft' },
	{ name: 'Project Management', level: 7, category: 'soft' },
	{ name: 'Technical Writing', level: 8, category: 'soft' },
	{ name: 'Presentation', level: 7, category: 'soft' },

	// Languages
	{ name: 'English', level: 10, category: 'language' },
	{ name: 'Spanish', level: 6, category: 'language' },
	{ name: 'French', level: 4, category: 'language' },
];

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [
	{
		title: 'Advances in Renewable Energy Technologies',
		excerpt: 'Exploring the latest innovations in renewable energy and their impact on sustainable development.',
		date: 'Mar 15, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
		slug: 'advances-in-renewable-energy',
	},
	{
		title: 'The Future of Robotics in Manufacturing',
		excerpt: 'How robotics and automation are revolutionizing the manufacturing industry and creating new opportunities.',
		date: 'Feb 22, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
		slug: 'future-of-robotics-manufacturing',
	},
	{
		title: 'Sustainable Building Materials in Modern Construction',
		excerpt: 'An analysis of eco-friendly building materials and their applications in contemporary architecture.',
		date: 'Jan 10, 2024',
		author: 'Your Name',
		image: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg',
		slug: 'sustainable-building-materials',
	},
];
