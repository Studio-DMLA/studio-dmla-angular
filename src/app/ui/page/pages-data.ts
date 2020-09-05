export interface Page {
    title: string;
    content: string;
}

export interface Pages {
    [url: string]: Page;
}

export const pages: Pages = {
    home: {
        title: 'Home',
        content: `<p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results and a shared vision.</p><p>
        We do not do business as usual. Our digital boutique have real connections with our clients, provides perspective, and solutions for problems they did not know they have.</p><p>
        We partner with the best in each field to deliver cutting-edge digital solutions to your organization while being responsible for the project management and final product.</p>`
    },
    about: {
        title: 'About',
        content: `<p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results and a shared vision.</p><p>
        We do not do business as usual. Our digital boutique have real connections with our clients, provides perspective, and solutions for problems they did not know they have.</p><p>
        We partner with the best in each field to deliver cutting-edge digital solutions to your organization while being responsible for the project management and final product.</p>`
    },
    projects: {
        title: 'Projects',
        content: ``
    },
    services: {
        title: 'Services',
        content: ``
    },
    sign_up: {
        title: 'Sign up for work',
        content: ``
    },
    hire: {
        title: 'Hire Staff',
        content: ``
    }
};
