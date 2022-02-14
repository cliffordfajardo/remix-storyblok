const StoryblokContentStats = () => {
    return (
        <div className="stats mb-2 w-full shadow">
            <div className="stat place-content-center place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">310M</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
            </div>
            <div className="stat place-content-center place-items-center">
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">400 (22%)</div>
            </div>
            <div className="stat place-content-center place-items-center">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">90 (14%)</div>
            </div>
        </div>
    );
};

export default StoryblokContentStats;
