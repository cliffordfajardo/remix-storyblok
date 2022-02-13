import StoryblokHeadingText from "./index.jsx";

export default {
    title: "component/storyblok/content/heading",
    component: StoryblokHeadingText,
    argTypes: {},
};

const Template = (args) => <StoryblokHeadingText content={args} />;

export const Default = Template.bind({});

Default.args = {
    title: "Title",
    intro: "Intro",
};
