import LayoutFooter from "../../atoms/footer";
import LayoutHeader from "../../atoms/header";

const TemplateDefault = ({ children }) => {
    return (
        <div className="container my-2 lg:my-8">
            <LayoutHeader />
            {children}
            <LayoutFooter />
        </div>
    );
};

export default TemplateDefault;
