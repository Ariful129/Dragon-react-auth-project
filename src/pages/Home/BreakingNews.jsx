import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const BreakingNews = () => {
    return (
        <div className="flex mt-4 mb-4 mr-2">
            <button className="btn btn-secondary">Braking News</button>
            <Marquee pauseOnHover={true} speed={100} className="border-2 bg-amber-100 text-green-600">
                <Link className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
                <Link className="mr-12">I can be a React component, multiple React components, or just some text.</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;