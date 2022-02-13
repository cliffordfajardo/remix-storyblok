const StoryblokHeadingText = ({ content }) => {
    return (
        <>
            <div className="border border-dashed border-red-500 p-4 text-center text-red-500">
                <p className="mb-0 text-sm uppercase">
                    The component <span className="font-bold">{content}</span>{" "}
                    has not been created yet.
                </p>
            </div>
        </>
    );
};

export default StoryblokHeadingText;
