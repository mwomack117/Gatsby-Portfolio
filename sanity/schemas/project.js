import { MdCode as icon} from "react-icons/md";
export default {
    // Tisplay name for the type
    title: 'Projects',
    // Identifier for this document type used in the api
    name: 'project',
    type: 'document',
    icon,
    fields: [
        {
            // Display name for this field
            title: 'Project Name',
            // Identifier for this field used in the api
            name: 'name',
            type: 'string',
        },
        {
            title: 'Image',
            name:  'image',
            type: 'image'
        },
        {
            title: 'Headline',
            name: 'headline',
            type: 'string'
        },
        {
            title: 'Site Link',
            name: "siteURL",
            type: 'string'
        },
        {
            title: 'GH Link',
            name: "ghURL",
            type: 'string'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'string'
        }
    ]
}