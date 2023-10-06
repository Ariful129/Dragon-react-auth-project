import { Link } from "react-router-dom";


const NewsCard = ({news}) => {
    const {title,image_url,details,_id}=news;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl mb-16 ">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
             {
               details.length >150
               ? <p>{details.slice(0,150)} <Link to={`/news/${_id}`} className="text-green-600 font-bold text-xm">Read more...</Link></p>
               :<p>{details}</p>
             }
         
        </div>
      </div>
    );
};

export default NewsCard;