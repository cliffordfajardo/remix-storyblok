import StoryblokEditable from "storyblok-react";

import { render } from "storyblok-rich-text-react-renderer";

const StoryblokContentRichtext = ({ content }) => {
    return (
        <StoryblokEditable content={content}>
            <div>{render(content.content)}</div>
        </StoryblokEditable>
    );
};

export default StoryblokContentRichtext;
