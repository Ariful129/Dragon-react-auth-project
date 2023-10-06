import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";



const News = () => {
    const news=useLoaderData();

    const {id}=useParams();
    let single_news=null;

    for(let i=0;i<news.length; i++)
    {
        if(news[i]._id===id){
            single_news=news[i]
           break;
        }
          
    }
    //console.log( single_news.title)

 
    
    




    return (
        <div>

            <Header></Header>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4">

                <div className="col-span-3 border p-2">
                    <img src={single_news.image_url} className="w-full" alt=""  />
                    <h1 className="md:text-center md:text-2xl font-bold mt-4 mb-2">{single_news.title}</h1>
                    <p>{single_news.details}</p>
                    <button className="btn btn-secondary px-16 mt-10">All News in this Category</button>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>

            </div>

        </div>
    );
};

export default News;