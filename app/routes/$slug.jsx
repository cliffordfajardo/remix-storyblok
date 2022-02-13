import { useLoaderData, json, Link } from "remix";

import LRUCache from "lru-cache";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

import { storyblokGraphQL, useStoryblok } from "../utilities/storyblok";

import StoryblokUtilities from "../components/storyblok/utilities";

import TemplateDefault from "~/components/layout/templates/default";

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
        <TemplateDefault>
            <div>
                <div className="indicator block w-auto">
                    <div className="indicator-item -mt-px -mr-px !transform-none">
                        <p className="badge badge-lg w-max">
                            Last updated{" "}
                            {dayjs(story.published_at).format("LL")}
                        </p>
                    </div>
                    <div className="mockup-code rounded-box mb-2 max-h-40 overflow-scroll bg-neutral text-neutral-content shadow-lg">
                        <pre className="text-sm">
                            <code>{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    </div>
                </div>
                <div className="mb-4">
                    <h1 className="text-center font-bold uppercase text-blue-500">
                        {story.name}
                    </h1>
                </div>
            </div>
            {StoryblokUtilities(story.content)}
        </TemplateDefault>
    );
}
