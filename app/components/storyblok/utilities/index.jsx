import { createElement } from "react";

import StoryblokPlaceholder from "../utilities/placeholder";

import StoryblokContentHeadingText from "../content/heading";
import StoryblokContentRichtext from "../content/richtext";
import StoryblokTemplateDefault from "../templates/default";
import StoryblokTemplateIndex from "../templates/index";

const Components = {
    heading_text: StoryblokContentHeadingText,
    richtext: StoryblokContentRichtext,
    template_default: StoryblokTemplateDefault,
    template_index: StoryblokTemplateIndex,
};

const DynamicComponent = (blok) => {
    if (typeof Components[blok.component] !== "undefined") {
        return createElement(Components[blok.component], {
            key: blok._uid,
            content: blok,
        });
    }

    return createElement(
        () => <StoryblokPlaceholder content={blok.component} />,
        { key: blok._uid }
    );
};

export default DynamicComponent;
