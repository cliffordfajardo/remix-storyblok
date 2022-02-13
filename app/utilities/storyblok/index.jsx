import { useEffect, useState } from "react";

import { GraphQLClient } from "graphql-request";

import { storyblokInit, useStoryblokBridge } from "@storyblok/js";

export const storyblokGraphQL = new GraphQLClient(
    "https://gapi.storyblok.com/v1/api",
    {
        headers: {
            token: "hPTPjdQBOG1o2ky59SrkQwtt",
            version: "draft",
        },
    }
);

export function useStoryblok(originalStory, preview) {
    let [story, setStory] = useState(originalStory);

    useEffect(() => {
        setStory(originalStory);

        const existingScript = document.getElementById(
            "storyblok-javascript-bridge"
        );

        if (!existingScript) {
            storyblokInit({});
        }

        if (preview) {
            useStoryblokBridge(story.id, (story) => setStory(story));
        }
    }, [originalStory, preview]);

    return story;
}
