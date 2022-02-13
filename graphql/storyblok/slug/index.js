import { gql } from "graphql-request";

export const SLUG_QUERY = gql`
    query data($slug: ID!) {
        TemplatedefaultItem(id: $slug) {
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
