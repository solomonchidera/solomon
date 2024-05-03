import Link from "./Link.svelte";

// Icons
import X from "./assets/X.svg?raw";
import Discord from "./assets/Discord.svg?raw";
import Github from "./assets/Github.svg?raw";
import Linked from "./assets/Linked.svg?raw";

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
        }
    ],
    projects: [
        {
            title: "Flixify",
            description: "An adfree, subfree movie streaming site basically from api(s)",
            url: "https://flixify-jet.vercel.app"
        },
        {
            title: "Simple Shell",
            description: "A UNIX like terminal built using C programming, supports basic UNIX commands",
            url: "https://github.com/SolomonChidera/simple_shell"
        },
        {
            title: "Printf",
            description: "A custom printf function that imitiate the standard printf function in C",
            url: "https://github.com/solomonchidera/printf"
        },
        {
            title: "Profile Maker",
            description: "Automatically generate cool markdown for your guthub profile",
            url: "https://github.com/solomonchidera/PROFILE-MAKER"
        },
        {
            title: "Tasonberth",
            description: "Shopping site that sells all kinds of tech products like phones, laptops, pcs etc",
            url: "https://tasonbert.com/"
        },
        {
            title: "Aatiy (coming soon)",
            description: "A fintech application that serves as a digital bank, with credit and debit card option ",
            url: "https://aatiy-3ee19.web.app/"
        }
    ],
    discordUid: "1052162509567692800"
}

export { Linked, Link, config }