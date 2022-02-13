import StoryblokEditable from "storyblok-react";

import StoryblokUtilities from "../../utilities";

const StoryblokTemplateIndex = ({ content }) => {
    return (
        <StoryblokEditable content={content}>
            <div className="">
                {content.body.map((blok) => StoryblokUtilities(blok))}
            </div>
        </StoryblokEditable>
    );
};

export default StoryblokTemplateIndex;
