const StoryblokHeadingText = ({ content }) => {
    return (
        <div className="rounded-box mb-2 bg-neutral alert text-neutral-content shadow-lg">
            <div className="flex-1 justify-center">
                <label>
                    The component <span className="font-bold">{content}</span>{" "}
                    has not been created yet.
                </label>
            </div>
        </div>
    );
};

export default StoryblokHeadingText;
