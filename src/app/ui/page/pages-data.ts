export interface MenuIcon {
  dark: string;
  light: string;
  desc: string;
}

export interface Page {
  content: string;
  active?: boolean;
  link?: string;
  menu_icon?: MenuIcon;
  title?: string;
}

export interface Pages {
  [url: string]: Page;
}

export const pages: Pages = {
  home: {
    content: `<div >
    <div style="width: 100%; text-align: center;">
      <img src="./assets/logos/studio-dmla.svg" alt="Logo studio dmla" class="logo" />
    </div>
    <h1 class="tagline">Digital marketing, the real stuff</h1>
    <p >
      At Studio DMLA we believe that work should go beyond the industrial
      model, and we build a culture that empowers remote collaboration,
      autonomy, results and a shared vision.
    </p>
    <p>
      We do not do business as usual. Our digital boutique have real
      connections with our clients, provides perspective, and solutions
      for problems they did not know they have.
    </p>
    <p>
      We partner with the best in each field to deliver cutting-edge
      digital solutions to your organization while being responsible for
      the project management and final product.
    </p></div>`,
  },
  about: {
    title: "About",
    active: true,
    link: "about",
    menu_icon: {
      dark: `<path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>`,
      light: `<path fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path>`,
      desc: "book",
    },
    content: `<p>At Studio DMLA we believe that work should go beyond the industrial model, and we build a culture that empowers remote collaboration, autonomy, results and a shared vision.</p><p>
        We do not do business as usual. Our digital boutique have real connections with our clients, provides perspective, and solutions for problems they did not know they have.</p><p>
        We partner with the best in each field to deliver cutting-edge digital solutions to your organization while being responsible for the project management and final product.</p>`,
  },
  projects: {
    title: "Projects",
    active: false,
    link: "projects",
    menu_icon: {
      dark: `<path 
            d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z">
          </path>`,
      light: `<path fill="currentColor"
            d="M427.84 380.67l-196.5 97.82a18.6 18.6 0 0 1-14.67 0L20.16 380.67c-4-2-4-5.28 0-7.29L67.22 350a18.65 18.65 0 0 1 14.69 0l134.76 67a18.51 18.51 0 0 0 14.67 0l134.76-67a18.62 18.62 0 0 1 14.68 0l47.06 23.43c4.05 1.96 4.05 5.24 0 7.24zm0-136.53l-47.06-23.43a18.62 18.62 0 0 0-14.68 0l-134.76 67.08a18.68 18.68 0 0 1-14.67 0L81.91 220.71a18.65 18.65 0 0 0-14.69 0l-47.06 23.43c-4 2-4 5.29 0 7.31l196.51 97.8a18.6 18.6 0 0 0 14.67 0l196.5-97.8c4.05-2.02 4.05-5.3 0-7.31zM20.16 130.42l196.5 90.29a20.08 20.08 0 0 0 14.67 0l196.51-90.29c4-1.86 4-4.89 0-6.74L231.33 33.4a19.88 19.88 0 0 0-14.67 0l-196.5 90.28c-4.05 1.85-4.05 4.88 0 6.74z">
          </path>`,
      desc: "buffer",
    },
    content: ``,
  },
  services: {
    title: "Services",
    active: false,
    link: "services",
    menu_icon: {
      dark: `<path 
            d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z">
          </path>`,
      light: `<path fill="currentColor"
            d="M64 96H0c0 123.7 100.3 224 224 224v144c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V320C288 196.3 187.7 96 64 96zm384-64c-84.2 0-157.4 46.5-195.7 115.2 27.7 30.2 48.2 66.9 59 107.6C424 243.1 512 147.9 512 32h-64z">
          </path>`,
      desc: "seedling",
    },
    content: ``,
  },
  sign_up: {
    title: "Sign up for work",
    active: false,
    link: "sign_up",
    menu_icon: {
      dark: `<path fill="currentColor"
            d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z">
          </path>`,
      light: `<path fill="currentColor"
            d="M352 96c0-53.02-42.98-96-96-96s-96 42.98-96 96 42.98 96 96 96 96-42.98 96-96zM233.59 241.1c-59.33-36.32-155.43-46.3-203.79-49.05C13.55 191.13 0 203.51 0 219.14v222.8c0 14.33 11.59 26.28 26.49 27.05 43.66 2.29 131.99 10.68 193.04 41.43 9.37 4.72 20.48-1.71 20.48-11.87V252.56c-.01-4.67-2.32-8.95-6.42-11.46zm248.61-49.05c-48.35 2.74-144.46 12.73-203.78 49.05-4.1 2.51-6.41 6.96-6.41 11.63v245.79c0 10.19 11.14 16.63 20.54 11.9 61.04-30.72 149.32-39.11 192.97-41.4 14.9-.78 26.49-12.73 26.49-27.06V219.14c-.01-15.63-13.56-28.01-29.81-27.09z">
          </path>`,
      desc: "book-reader",
    },
    content: ``,
  },
  hire: {
    title: "Hire Staff",
    active: false,
    link: "hire",
    menu_icon: {
      dark: `<path 
            d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
          </path>`,
      light: `<path fill="currentColor"
            d="M127.1 146.5c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C111.8 5.9 105 0 96.8 0H80.4C70.6 0 63 8.5 64.1 18c3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zm112 0c1.3 7.7 8 13.5 16 13.5h16.5c9.8 0 17.6-8.5 16.3-18-3.8-28.2-16.4-54.2-36.6-74.7-14.4-14.7-23.6-33.3-26.4-53.5C223.8 5.9 217 0 208.8 0h-16.4c-9.8 0-17.5 8.5-16.3 18 3.9 31.9 18 61.3 40.6 84.4 12 12.2 19.7 27.5 22.4 44.1zM400 192H32c-17.7 0-32 14.3-32 32v192c0 53 43 96 96 96h192c53 0 96-43 96-96h16c61.8 0 112-50.2 112-112s-50.2-112-112-112zm0 160h-16v-96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48z">
          </path>`,
      desc: "mug-hot",
    },
    content: ``,
  },
};
