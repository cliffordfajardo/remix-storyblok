import { Link } from "remix";

const LayoutFooter = () => {
    return (
        <footer className="footer footer-center rounded-box bg-neutral p-2 text-neutral-content shadow-lg md:p-8 lg:p-16">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a href="/" target="_blank" rel="noopener">
                        Social
                    </a>
                    <a href="/" target="_blank" rel="noopener">
                        Social
                    </a>
                    <a href="/" target="_blank" rel="noopener">
                        Social
                    </a>
                </div>
            </div>
            <div>
                <p>
                    Created with love by Black Tape Project, MYPROJECX and
                    Wildepoint.
                </p>
            </div>
        </footer>
    );
};

export default LayoutFooter;
