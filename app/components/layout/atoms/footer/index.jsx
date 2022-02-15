import { FiFacebook, FiHeart, FiInstagram, FiTwitter } from "react-icons/fi";

const LayoutFooter = () => {
    return (
        <footer className="footer footer-center rounded-box bg-neutral p-2 text-neutral-content shadow-lg md:p-8 lg:p-16">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a rel="noopener" href="/" target="_blank">
                        <FiFacebook className="text-xl" />
                    </a>
                    <a href="/" target="_blank" rel="noopener">
                        <FiTwitter className="text-xl" />
                    </a>
                    <a href="/" target="_blank" rel="noopener">
                        <FiInstagram className="text-xl" />
                    </a>
                </div>
            </div>
            <div>
                <p>
                    Created with <FiHeart className="inline text-lg" /> by{" "}
                    <a
                        href="https://github.com/black-tape-project"
                        target="_blank"
                        rel="noopener"
                    >
                        Black Tape Project
                    </a>
                    .
                </p>
            </div>
        </footer>
    );
};

export default LayoutFooter;
