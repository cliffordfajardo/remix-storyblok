import StoryblokEditable from "storyblok-react";

import StoryblokUtilities from "../../utilities";

const StoryblokTemplateDefault = ({ content }) => {
    return (
        <StoryblokEditable content={content}>
            <div>{content.body.map((blok) => StoryblokUtilities(blok))}</div>
        </StoryblokEditable>
    );
};

export default StoryblokTemplateDefault;
