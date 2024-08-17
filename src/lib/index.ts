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
            title: "Flixify (coming soon)",
            description: "An adfree, subfree movie streaming site basically from api(s)",
            url: "https://flixifydev.web.app/"
        },
        {
            title: "Shaheen",
            description: "A discord bot that is specifically built for developers with cool commands and features",
            url: "https://github.com/solomonchidera/shaheen"
        },
        {
            title: "Clipboard Logger",
            description: "A simple clipboard logger script created for MacOs, but will work for any UNIX based system",
            url: "https://github.com/solomonchidera/clipboardLogger"
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
