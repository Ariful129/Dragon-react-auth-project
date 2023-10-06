import { Link } from "react-router-dom";


const Carrer = () => {
    return (
        <div className="mt-48 text-center">
            <h1 className=" text-red-600 font-semibold text-5xl border-2 p-10">This is Carrer Page</h1>
            <Link to="/">
               <button className="btn btn-secondary px-10">Home</button>
            </Link>
        </div>
    );
};

export default Carrer;