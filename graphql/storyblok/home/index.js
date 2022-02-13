import { gql } from "graphql-request";

export const HOME_QUERY = gql`
    {
        TemplateindexItem(id: "home") {
            id
            slug
            full_slug
            path
            name
            first_published_at
            published_at
            content {
                _editable
                _uid
                component
                seo_description
                seo_follow
                seo_index
                seo_title
                body
            }
        }
    }
`;
