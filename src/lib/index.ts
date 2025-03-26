import Link from "./Link.svelte";

// Icons
import X from "./assets/X.svg?raw";
import Discord from "./assets/Discord.svg?raw";
import Github from "./assets/Github.svg?raw";
import Linked from "./assets/Linked.svg?raw";
import Kofi from "./assets/Kofi.svg?raw";

interface Config {
    socials: {
        url: string;
        icon: string;
        name: string;
    }[],
    projects: {
        title: string;
        description: string;
        url: string;
    }[],
    discordUid: string;
}

const config: Config = {
    socials: [
        {
            url: "https://x.com/solomonchidera_",
            icon: X,
            name: "Twitter / X"
        },
        {
            url: "https://discord.com/users/1052162509567692800",
            icon: Discord,
            name: "Discord"
        },
        {
            url: "https://github.com/solomonchidera",
            icon: Github,
            name: "Github"
        },
        {
            url: "https://ko-fi.com/solomonchidera",
            icon: Kofi,
            name: "Kofi"
        }
    ],
    projects: [
        {
            title: "flixify (coming soon)",
            description: "an adfree, subfree movie streaming site basically from api(s)",
            url: "https://flixifydev.web.app/"
        },
        {
            title: "simple shell",
            description: "a unix like terminal built using C programming, supports basic UNIX commands",
            url: "https://github.com/SolomonChidera/simple_shell"
        },
        {
            title: "printf",
            description: "a custom printf function that imitiate the standard printf function in C",
            url: "https://github.com/solomonchidera/printf"
        },
        {
            title: "profile maker",
            description: "automatically generate cool markdown for your github profile",
            url: "https://github.com/solomonchidera/PROFILE-MAKER"
        },
        {
            title: "tasonberth",
            description: "shopping site that sells all kinds of tech products like phones, laptops, pcs etc",
            url: "https://tasonbert.com/"
        },
        {
            title: "aatiy (coming soon)",
            description: "a fintech application that serves as a digital bank, with credit and debit card option ",
            url: "https://aatiy-3ee19.web.app/"
        }
    ],
    discordUid: "1052162509567692800"
}

export { Linked, Link, config }
