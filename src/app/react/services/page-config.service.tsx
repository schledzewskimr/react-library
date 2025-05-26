
interface PageConfig { 
    name: string;
    description: string;
}

const pageConfigs: PageConfig[] = [
    {
        name: "Accordion",
        description: "An accordion component",
    },
    {
        name: "ExampleComponent",
        description: "An example component",
    },
    {
        name: "Notification",
        description: "A notification component",
    },
];

const htmlPageConfigs: PageConfig[] = [
    {
        name: "Accordion",
        description: "An accordion component",
    },
    {
        name: "ExampleComponent",
        description: "An example component",
    },
    {
        name: "Notification",
        description: "A notification component",
    },
    {
        name: "Card",
        description: "A card component",
    },
];

export { pageConfigs, htmlPageConfigs };