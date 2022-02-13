import StoryblokEditable from "storyblok-react";

const StoryblokContentHeadingText = ({ content }) => {
    return (
        <StoryblokEditable content={content}>
            <div className="p-4 odd:bg-gray-200 even:bg-gray-400">
                <h5 className="mb-2">{content.title}</h5>
                <p className="mb-0">{content.intro}</p>
            </div>
        </StoryblokEditable>
    );
};

export default StoryblokContentHeadingText;
