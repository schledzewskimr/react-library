import { AccordionComponent, ExampleComponent, NotificationComponent } from "../../../../library";

/**
 * Represents the configuration for a page in the application.
 *
 * @interface PageConfig
 * @property {string} name - The name of the page.
 * @property {string} description - A brief description of the page.
 * @property {React.FC} component - The React functional component associated with the page.
 */
interface PageConfig<T = {}> { 
    name: string;
    description: string;
    component: React.FC<T>;
}

/**
 * An array of page configuration objects used to define the metadata and components
 * for different pages in the application.
 *
 * Each configuration object includes:
 * - `name`: A string representing the name of the component.
 * - `description`: A brief description of the component's purpose.
 * - `component`: The React component associated with the page.
 */
const pageConfigs: PageConfig<any>[] = [

    {
        name: "Accordion",
        description: "An accordion component",
        component: AccordionComponent,
    },
    {
        name: "ExampleComponent",
        description: "An example component",
        component: ExampleComponent,
    },
    {
        name: "Notification",
        description: "A notification component",
        component: NotificationComponent,
    },
];

export default pageConfigs;