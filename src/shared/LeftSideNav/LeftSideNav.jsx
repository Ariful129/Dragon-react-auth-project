import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories,setCategories]=useState([]);

    useEffect(()=>{
        fetch('categories.json')
        .then(res =>res.json())
        .then(data =>setCategories(data))
    },[])

    return (
        <div className="space-y-6">
            <h1 className="text-2xl text-center text-green-600">All Categories</h1>
            {
                categories.map(cata =><NavLink
                  className="block ml-4 text-xl font-semibold"
                  key={cata.id}
                  to={`/category/${cata.id}`}
                >
                    {cata.name}
                </NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;