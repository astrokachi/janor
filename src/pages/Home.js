"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Card_1 = __importDefault(require("../components/Card"));
const react_2 = require("react");
const data = [
    {
        title: 'Deploy infrastructure and provision web servers with Terraform and Ansible',
        text: 'Using Terraform to setup 3 EC2 instances put behind a load balancer and integrated with Ansible to provision the web servers',
        link: 'github.com/Janortop5/altschool-january-terraform-x-ansible-mini-project',
        svgs: [require('../assets/terraform-svgrepo-com.svg').default, require('../assets/ansible-svgrepo-com.svg').default]
    },
    {
        title: 'Deploy Node.js program using nginx web server on private ec2 instances behind a load balancer',
        text: 'A task to deploy a program that displays the hostname or ip of the server, using Nginx, on 2 (+) private servers in the private subnet(s) of a Logical Network, behind Load Balancer, attached to an Auto Scaling Group',
        link: 'github.com/Janortop5/altschool-december-nginx-challenge',
        svgs: [require('../assets/nginx-logo-svgrepo-com.svg').default]
    },
    {
        title: 'Ansible playbook to setup web server, deploy Laravel app, and run bash script to install and setup Postgres on web server',
        text: 'Ansible playbook to setup web server, deploy Laravel app, and run bash script to install and setup Postgres on web server',
        link: 'github.com/Janortop5/altschool-cloud-ansible-second-semester-exam',
        svgs: [require('../assets/ansible-svgrepo-com.svg').default, require('../assets/bash.png'), require('../assets/postgresql-svgrepo-com.svg').default]
    },
    {
        title: 'Dockerfile to build a Laravel app image and docker-compose file to define, create and manage the services',
        text: 'Dockerfile that contains instructions to build an image of a laravel-real-world-example-app, and docker-compose file to define the services needed for the app, including a mysql database, network, and volumes for logs and persistent data.',
        link: 'github.com/Janortop5/docker-laravel-app',
        svgs: [require('../assets/docker-svgrepo-com.svg').default, require('../assets/laravel-2.svg').default]
    },
];
function Home() {
    const [isHover, setIsHover] = (0, react_2.useState)();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "h-screen p-7 text-text" },
            react_1.default.createElement("div", { className: 'flex w-full justify-end py-3' },
                react_1.default.createElement(react_router_dom_1.Link, { to: '/contact' },
                    react_1.default.createElement("button", { className: "border-primary font-lato border-2 text-primary text-xl h-11 px-4 rounded-[9999px] hover:bg-primary hover:text-white" }, "Send a mail"))),
            react_1.default.createElement("div", { className: 'py-10 flex justify-center' },
                react_1.default.createElement("section", { className: 'py-5', id: 'content' },
                    react_1.default.createElement("h1", { className: 'text-center pt-5 pb-2 text-text font-bold text-5xl' }, "Cloud DevOps Engineer"),
                    react_1.default.createElement("p", { className: 'text-2xl py-6 text-center' }, "I bring the power of the cloud to your fingertips through expertly crafted automation services."),
                    react_1.default.createElement("a", { href: "https://", className: 'mx-auto w-max flex justify-center' },
                        react_1.default.createElement("button", { className: "border-primary font-lato border-2 text-primary text-xl h-11 px-4 rounded-[9999px] hover:bg-primary hover:text-white" }, "My resume")),
                    react_1.default.createElement("div", { className: 'w-full flex justify-center pt-8 pb-2' },
                        react_1.default.createElement("img", { src: require("../assets/avatar.svg").default, alt: "logo" }))))),
        react_1.default.createElement("section", { className: 'p-7 pb-1' },
            react_1.default.createElement("div", { className: 'px-56' },
                react_1.default.createElement("img", { src: require("../assets/hero-devices.svg").default, alt: "hero" }))),
        react_1.default.createElement("section", { className: 'pt-24 pb-72 px-10 md:px-40 bg-primary text-white text-center' },
            react_1.default.createElement("h2", { className: 'md:text-4xl text-2xl mb-6 font-bold' }, "Hi, my name is Aladejana."),
            react_1.default.createElement("p", { className: 'text-base md:text-xl' }, "I'm a passionate Cloud DevOps Engineer, constantly innovating to streamline software delivery with scalable infrastructure solutions. I thrive on troubleshooting complex systems, ensuring cloud environments are secure and reliable, and automating deployments with Terraform and Ansible. Excellent communication skills are my secret weapon for sharing and receiving ideas and solutions.")),
        react_1.default.createElement("section", { className: '-mt-40 bg-white w-[90%] mx-auto rounded-xl p-4 shadow-md shadow-slate-300' },
            react_1.default.createElement("div", { className: "column pt-10 text-center" },
                react_1.default.createElement("span", { className: "fa-stack fa-2x" },
                    react_1.default.createElement("svg", { className: "svg-inline--fa fa-circle fa-stack-2x has-text-success", "aria-hidden": "true", focusable: "false", "data-prefix": "fas", "data-icon": "circle", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
                        react_1.default.createElement("path", { fill: "currentColor", d: "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" })),
                    react_1.default.createElement("svg", { className: "svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark", "aria-hidden": "true", focusable: "false", "data-prefix": "fal", "data-icon": "square-terminal", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", "data-fa-i2svg": "" },
                        react_1.default.createElement("path", { fill: "currentColor", d: "M106.4 147.9L218.4 243.9C221.1 246.9 224 251.3 224 256C224 260.7 221.1 265.1 218.4 268.1L106.4 364.1C99.7 369.9 89.6 369.1 83.85 362.4C78.1 355.7 78.88 345.6 85.59 339.9L183.4 256L85.59 172.1C78.88 166.4 78.1 156.3 83.85 149.6C89.6 142.9 99.7 142.1 106.4 147.9V147.9zM368 352C376.8 352 384 359.2 384 368C384 376.8 376.8 384 368 384H208C199.2 384 192 376.8 192 368C192 359.2 199.2 352 208 352H368zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 64H64C46.33 64 32 78.33 32 96V416C32 433.7 46.33 448 64 448H384C401.7 448 416 433.7 416 416V96C416 78.33 401.7 64 384 64z" }))),
                react_1.default.createElement("div", { className: 'p-10' },
                    react_1.default.createElement("h1", { className: "title is-size-4 is-spaced text-2xl" }, "Cloud DevOps Engineer"),
                    react_1.default.createElement("p", { className: 'm-4' }, "I deploy and manage infrastructure with Terraform, configure systems with Ansible, and troubleshoot production issues on Linux and Windows. I work with cloud providers and containerization tools like Docker and Kubernetes to implement scalable solutions for web servers, load balancers, and databases."),
                    react_1.default.createElement("p", { className: "list-title text-primary" }, "Languages I speak:"),
                    react_1.default.createElement("p", null, "HTML, Css, Python, Javascript"),
                    react_1.default.createElement("p", { className: "list-title text-primary mt-4" }, "Dev Tools:"),
                    react_1.default.createElement("ul", null,
                        react_1.default.createElement("li", null, "Terraform"),
                        react_1.default.createElement("li", null, "Ansible"),
                        react_1.default.createElement("li", null, "Linux"),
                        react_1.default.createElement("li", null, "Windows"),
                        react_1.default.createElement("li", null, "Docker"),
                        react_1.default.createElement("li", null, "Github"),
                        react_1.default.createElement("li", null, "Kubernetes"),
                        react_1.default.createElement("li", null, "BashScript"))))),
        react_1.default.createElement("section", { className: 'mt-8 ' },
            react_1.default.createElement("h2", { className: 'text-3xl text-center mb-6 bg-primary pt-24 pb-48 text-white' }, "Projects"),
            react_1.default.createElement("div", { className: 'flex justify-center flex-wrap gap-4 md:-mt-24 -mt-40 p-4 md:p-0' }, data.map((data) => react_1.default.createElement(Card_1.default, { title: data.title, text: data.text, link: data.link, svgs: data.svgs })))),
        react_1.default.createElement("section", { className: 'text-center mt-32 mb-20 flex-column justify-center items-center gap-5' },
            react_1.default.createElement("h2", { className: 'font-bold text-3xl' }, "Interested in my work?"),
            react_1.default.createElement("p", { className: 'text-xl' }, "I'm always open to discussing Cloud DevOps work or partnership opportunities."),
            react_1.default.createElement("a", { href: "mailto:" },
                react_1.default.createElement("button", { onMouseEnter: () => setIsHover(true), onMouseLeave: () => setIsHover(false), className: "border-primary mt-10  flex w-max items-center font-lato border-2 gap-3 text-primary text-xl h-11 px-5 rounded-[9999px] hover:bg-primary hover:text-white" },
                    react_1.default.createElement("div", { className: 'w-6 h-5  transition-all delay-100' },
                        react_1.default.createElement("img", { className: `absolute w-6 transition-all delay-[50ms] ${isHover ? 'z-10' : '-z-10'}`, src: require('../assets/conversation-svgrepo-com (1).svg').default, alt: "" }),
                        react_1.default.createElement("img", { className: `absolute w-6 transition-all delay-[50ms] ${isHover ? '-z-10' : 'z-10'}`, src: require('../assets/conversation-svgrepo-com.svg').default, alt: "" })),
                    "Start a conversation"))),
        react_1.default.createElement("footer", { className: 'bg-primary text-white py-24 max-w-[1200px] flex-column justify-center items-center' },
            react_1.default.createElement("p", { className: 'opacity-[0.8] text-2xl p-10 text-center' }, "Living, learning, & leveling up one day at a time."),
            react_1.default.createElement("div", { className: "social-icons" },
                react_1.default.createElement("p", { className: "field" },
                    react_1.default.createElement("a", { className: "button is-medium", href: "https://twitter.com/", target: "_blank", rel: "noreferrer" },
                        react_1.default.createElement("span", { className: "icon is-small" },
                            react_1.default.createElement("svg", { className: "svg-inline--fa fa-twitter fa-fw", "aria-hidden": "true", focusable: "false", "data-prefix": "fab", "data-icon": "twitter", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
                                react_1.default.createElement("path", { fill: "currentColor", d: "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" })),
                            react_1.default.createElement("i", { className: "fab fa-twitter fa-fw" }),
                            " ")),
                    react_1.default.createElement("a", { className: "button is-medium", href: "https://linkedin.com/in/", target: "_blank", rel: "noreferrer" },
                        react_1.default.createElement("span", { className: "icon is-small" },
                            react_1.default.createElement("svg", { className: "svg-inline--fa fa-linkedin-in fa-fw", "aria-hidden": "true", focusable: "false", "data-prefix": "fab", "data-icon": "linkedin-in", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512", "data-fa-i2svg": "" },
                                react_1.default.createElement("path", { fill: "currentColor", d: "M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" })),
                            react_1.default.createElement("i", { className: "fab fa-linkedin-in fa-fw" }),
                            " ")),
                    react_1.default.createElement("a", { className: "button is-medium", href: "mailto:" },
                        react_1.default.createElement("span", { className: "icon is-small" },
                            react_1.default.createElement("svg", { className: "svg-inline--fa fa-envelope fa-fw", "aria-hidden": "true", focusable: "false", "data-prefix": "far", "data-icon": "envelope", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
                                react_1.default.createElement("path", { fill: "currentColor", d: "M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" })),
                            react_1.default.createElement("i", { className: "far fa-envelope fa-fw" }),
                            " ")))))));
}
exports.default = Home;
