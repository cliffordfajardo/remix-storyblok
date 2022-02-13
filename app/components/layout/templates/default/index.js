import LayoutHeader from "../../atoms/header";

const TemplateDefault = ({ children }) => {
    return (
        <div className="my-8 mx-auto max-w-screen-lg">
            <LayoutHeader />
            {children}
        </div>
    );
};

export default TemplateDefault;
