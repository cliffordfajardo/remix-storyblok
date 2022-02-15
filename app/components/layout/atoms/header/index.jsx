import { FiMenu } from "react-icons/fi";

import { Link } from "remix";

const LayoutHeader = () => {
    return (
        <div className="navbar rounded-box mb-2 bg-neutral text-neutral-content shadow-lg">
            <div className="mx-2 flex-1 px-2">
                <Link to="/" className="text-lg font-bold uppercase">
                    remix-storyblok
                </Link>
            </div>
            <div className="mx-2 hidden flex-none px-2 lg:flex">
                <div className="flex items-stretch space-x-4">
                    <Link to="/" className="btn btn-ghost rounded-btn btn-sm">
                        Home
                    </Link>
                    <Link
                        to="/about-us"
                        className="btn btn-ghost rounded-btn btn-sm"
                    >
                        About
                    </Link>
                </div>
            </div>
            <div className="flex-none">
                <button className="btn btn-ghost rounded-btn btn-sm">
                    <FiMenu />
                </button>
            </div>
        </div>
    );
};

export default LayoutHeader;
