import { useLoaderData, json, Link } from "remix";

import LRUCache from "lru-cache";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { storyblokGraphQL, useStoryblok } from "../utilities/storyblok";

import StoryblokUtilities from "../components/storyblok/utilities";

import { SLUG_QUERY } from "../../graphql/storyblok/slug";

export let loader = async ({ params }) => {
    const slug = params.slug;

    const options = {
        max: 10,
        ttl: 1000 * 60 * 5,
    };

    const cache = new LRUCache(options);

    let storyblok = cache.get("slug");

    const variables = {
        slug,
    };

    if (!storyblok) {
        storyblok = await storyblokGraphQL
            .request(SLUG_QUERY, variables)
            .then((data) => data.TemplatedefaultItem);

        cache.set("slug", storyblok);
    }

    return json({ params: slug, storyblok });
};

export function meta({ data }) {
    return { title: data.storyblok.content.seo_title };
}

export default function Index() {
    const enableBridge = true;

    let data = useLoaderData();

    let story = useStoryblok(data.storyblok, enableBridge);

    dayjs.extend(localizedFormat);

    return (
        <div className="mx-auto max-w-screen-lg border border-black">
            <div>
                <pre className="h-40 overflow-x-hidden overflow-y-scroll bg-black font-mono text-xs text-white">
                    {JSON.stringify(data, null, 2)}
                </pre>
                <div className="mb-4">
                    <h1 className="text-center font-bold uppercase text-blue-500">
                        {story.name}
                    </h1>
                    <p className="text-center text-xs uppercase text-gray-500">
                        First published{" "}
                        {dayjs(story.first_published_at).format("LL")}
                    </p>
                    <p className="text-center text-xs uppercase text-gray-500">
                        Last updated {dayjs(story.published_at).format("LL")}
                    </p>
                    <div className="text-center">
                        <Link to="/" className="uppercase">
                            Homepage
                        </Link>
                    </div>
                </div>
            </div>
            {StoryblokUtilities(story.content)}
        </div>
    );
}
