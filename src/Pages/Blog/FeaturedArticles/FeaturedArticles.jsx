import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const FeaturedArticles = () => {

    const [blog,setBlog]=useState([])
    console.log(blog);
    useEffect(() => {
        axios.get("https://newsapi.org/v2/everything?q=domain&apiKey=ec7bc56c4e7048e29b488086153c37fa")
        .then(res=>{
           
            setBlog(res?.data?.articles);
        })
        .catch(err => {console.error(err);});
    }, [])

    return (
        <>
            <section className="text-white">
                <div>
                    this is FeaturedArticles
                </div>
                <div>
                    {
                        blog?.map((bo,inx)=><div key={inx}>
                            <div>
                                <img src={bo?.urlToImage} alt="" />
                            </div>
                        <p>{bo?.author}</p>
                        <p>{bo?.content}</p>

                        </div>)
                    }
                </div>
            </section>
        </>
    );
};

export default FeaturedArticles;