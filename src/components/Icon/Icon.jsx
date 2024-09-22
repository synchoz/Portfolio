import Github from "../../assets/Github.svg?react";
import Mail from "../../assets/Mail.svg?react";
import Phone from "../../assets/Phone.svg?react";
import Linkedin from "../../assets/Linkedin.svg?react";
import CSharp from "../../assets/CSharp.svg?react";
import Express from "../../assets/Express.svg?react";
import Javascript from "../../assets/JavaScript.svg?react";
import JQuery from "../../assets/JQuery.svg?react";
import NodeJs from "../../assets/NodeJs.svg?react";
import SocketIO from "../../assets/socketio.svg?react";
import ReactJS from "../../assets/React.svg?react";
import ViteJS from "../../assets/VIte.svg?react";
import Postman from "../../assets/Postman.svg?react";
import TailWindCSS from "../../assets/tailwind.svg?react";
import MySQL from "../../assets/mysql.svg?react";
import Docker from "../../assets/docker.svg?react";
import SQLServer from "../../assets/sqlserver.svg?react";
import HTML from "../../assets/html.svg?react";
import CSS from "../../assets/css.svg?react";
import clsx from "clsx";
import styles from "./style.module.scss";
import Close from "../../assets/close.svg?react";
import Menu from "../../assets/burgerMenu.svg?react";



const icons = {
    github: Github,
    mail: Mail,
    phone: Phone,
    linkedin: Linkedin,
    csharp: CSharp,
    express: Express,
    javascript: Javascript,
    jquery: JQuery,
    nodejs: NodeJs,
    socketio: SocketIO,
    vite: ViteJS,
    tailwind: TailWindCSS,
    mysql: MySQL,
    react: ReactJS, 
    postman: Postman,
    docker: Docker,
    sqlserver: SQLServer,
    html: HTML,
    css: CSS,
    menu: Menu,
    close: Close
}


export default function Icon({name, size = 24, className, ...rest}) {
    const SVG = icons[name];

    if(!SVG) {
        console.warn(`Icon ${name} doesn't exist!`);
        return null;
    }

    return(
        <div title={name}>
            <SVG 
                width={size}
                height={size}
                className={clsx(className, styles.icon)}
                {...rest}
            />
        </div>
    )
}