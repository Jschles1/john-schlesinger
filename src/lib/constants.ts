export const SKILLS = [
    '6 years experience with frontend development.',
    'Extensive knowledge of Javascript including libraries and frameworks such as React, NextJS, and jQuery.',
    'Expertise in implementing designs using CSS and CSS libraries such as MaterialUI and TailwindCSS.',
];

export const EXPERIENCE = [
    {
        role: 'Senior Frontend Developer',
        company: 'Encora Technolgoies',
        startDate: 'December 2020',
        endDate: 'February 2023',
        accomplishments: [
            'Led a team to implement the frontend on LG’s headless CMS ecommerce website for LG employees and partners.',
            'Mentored junior developers on best frontend development guidelines for HTML, CSS and JavaScript.',
            'Led a team of three mid-level engineers to integrate Avon’s frontend checkout flow with Cybersource’s payment processor, allowing Avon to meet PCI security standards for their website.',
        ],
    },
    {
        role: 'Frontend Developer',
        company: 'Encora Technolgoies',
        startDate: 'January 2018',
        endDate: 'December 2020',
        accomplishments: [
            'Utilized HTML, CSS, and JavaScript to design and implement user interfaces.',
            'Provide proficiency and guidance on front-end libraries such as React.',
            'Performed usability research, ensured compatibility, and optimize performance to increase conversions on ecommerce solutions for brands such as 1800flowers.',
        ],
    },
];

export const EDUCATION = [
    {
        name: 'Flatiron School Web Development Bootcamp',
        location: 'New York, NY',
        description: 'JavaScript and Ruby on Rails Certification',
        date: 'Oct 2017',
    },
    {
        name: 'Ramapo College, Anisfield School of Business',
        location: 'Mahwah, NJ',
        description: 'Bachelor of Business Administration, Marketing',
        date: 'May 2014',
    },
];

export const PROJECTS = [
    {
        name: 'HerbHub NJ',
        description:
            'Aggregation website for listing all marijuana dispensary products available in New Jersey dispensaries with the ability for users to sort products by dispensary location, product brand, etc.',
        details: [
            'Frontend built with NextJS, Typescript, Mantine UI, React Query and Prisma.',
            'Hosted on Vercel.',
            'Utilizes AWS Lambda, AWS Step Functions and AWS EventBridge scheduler for running Puppeteer web crawlers to retrieve product information from each NJ dispensary website and save it to a MongoDB database on a daily basis.',
        ],
        ctaLink: 'https://herbhub-client.vercel.app/',
    },
];
