"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Card = ({ title, text, link, svgs }) => {
    return (react_1.default.createElement("div", { className: 'text-center md:w-[30%] w-50% bg-white flex-column shadow-lg rounded-md p-4 justify-between' },
        react_1.default.createElement("div", { className: 'flex justify-center items-center gap-6' }, svgs.map((svg) => react_1.default.createElement("div", { className: 'w-16' },
            react_1.default.createElement("img", { src: svg, alt: "" })))),
        react_1.default.createElement("p", { className: 'text-lg pt-6 pb-4' }, text),
        react_1.default.createElement("a", { href: `https://${link}`, target: '_blank', rel: "noreferrer" },
            react_1.default.createElement("svg", { className: "svg-inline--fa fa-arrow-up-right-from-square mr-2 ", "aria-hidden": "true", focusable: "false", "data-prefix": "fal", "data-icon": "arrow-up-right-from-square", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
                react_1.default.createElement("path", { fill: "#6E07F3", d: "M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 64C28.7 64 0 92.7 0 128V448c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V128c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z" })))));
};
exports.default = Card;
