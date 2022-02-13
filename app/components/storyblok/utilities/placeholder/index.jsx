const StoryblokHeadingText = ({ content }) => {
    return (
        <div className="alert rounded-box mb-2 bg-neutral text-neutral-content shadow-lg">
            <div className="flex-1">
                <label>
                    The component <span className="font-bold">{content}</span>{" "}
                    has not been created yet.
                </label>
            </div>
        </div>
    );
};

export default StoryblokHeadingText;
