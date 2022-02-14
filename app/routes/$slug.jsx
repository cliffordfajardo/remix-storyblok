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
                        <p className="badge badge-lg w-max bg-base-300">
                            Last updated{" "}
                            {dayjs(story.published_at).format("LL")}
                        </p>
                    </div>
                    <div className="mockup-code rounded-box mb-2 max-h-40 min-w-0 overflow-scroll bg-neutral text-sm text-neutral-content shadow-lg">
                        <pre>
                            <code>{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    </div>
                </div>
                <div className="hero rounded-box mb-2 bg-base-200 text-neutral-content shadow-lg">
                    <div className="hero-content text-center md:p-8 lg:p-16">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">
                                {story.name}
                            </h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat
                                fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id
                                nisi.
                            </p>
                            <a
                                href="https://github.com/black-tape-project/remix-storyblok"
                                className="btn btn-primary"
                                target="_blank"
                                rel="noopener"
                            >
                                View Repository on Github
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {StoryblokUtilities(story.content)}
        </TemplateDefault>
    );
}
