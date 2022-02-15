import { render } from "storyblok-rich-text-react-renderer";

import { json, Link, useLoaderData } from "remix";

import { HOME_QUERY } from "../../graphql/storyblok/home";

import TemplateDefault from "../components/layout/templates/default";
import StoryblokContentStats from "../components/storyblok/content/stats";
import StoryblokUtilities from "../components/storyblok/utilities";

import { storyblokGraphQL, useStoryblok } from "../utilities/storyblok";

import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import LRUCache from "lru-cache";

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
        <TemplateDefault>
            <div>
                <div className="indicator block w-auto">
                    <div className="indicator-item -mt-px -mr-px !transform-none">
                        <p className="badge badge-lg w-max bg-base-300">
                            Last updated{" "}
                            {dayjs(story.published_at).format("LL")}
                        </p>
                    </div>
                    <div className="mockup-code rounded-box mb-2 max-h-40 min-w-0 overflow-scroll bg-base-100 text-sm text-neutral-content shadow-lg">
                        <pre>
                            <code>{JSON.stringify(data, null, 2)}</code>
                        </pre>
                    </div>
                </div>
                <div className="hero rounded-box mb-2 bg-base-200 text-neutral-content shadow-lg">
                    <div className="hero-content text-center md:p-8 lg:p-16">
                        <div className="md:max-w-[90%] lg:max-w-[70%]">
                            <h1 className="mb-5 text-5xl font-bold">
                                {story.content.title}
                            </h1>
                            <div className="mb-8">
                                {render(story.content.intro)}
                            </div>
                            <div className="flex flex-col justify-center space-y-4 lg:flex-row lg:space-y-0 lg:space-x-4">
                                <a
                                    href="https://github.com/black-tape-project/remix-storyblok"
                                    className="btn btn-primary"
                                    target="_blank"
                                    rel="noopener"
                                >
                                    View repository on github
                                </a>
                                <Link to="about-us" className="btn">
                                    Find out more information
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <StoryblokContentStats />
            </div>
            {StoryblokUtilities(story.content)}
        </TemplateDefault>
    );
}
