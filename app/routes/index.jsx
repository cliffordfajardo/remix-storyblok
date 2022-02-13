import { useLoaderData, json, Link } from "remix";

import LRUCache from "lru-cache";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { storyblokGraphQL, useStoryblok } from "../utilities/storyblok";

import StoryblokUtilities from "../components/storyblok/utilities";

import { HOME_QUERY } from "../../graphql/storyblok/home";

export let loader = async () => {
    const options = {
        max: 1,
        ttl: 1000 * 60 * 5,
        allowStale: true,
    };

    const cache = new LRUCache(options);

    let storyblok = await cache.get("homepage");

    if (!storyblok) {
        storyblok = await storyblokGraphQL
            .request(HOME_QUERY)
            .then((data) => data.TemplateindexItem);

        cache.set("homepage", storyblok);
    }

    return json({ storyblok });
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
                        <Link to="/about-us" className="uppercase">
                            About Us
                        </Link>
                    </div>
                </div>
            </div>
            {StoryblokUtilities(story.content)}
        </div>
    );
}
