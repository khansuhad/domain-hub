import FeaturedArticles from "./FeaturedArticles/FeaturedArticles";
import RecentArticles from "./RecentArticles/RecentArticles";


const Blog = () => {
    return (
        <>
            <header className="mb-10">
                <section>
                    <div className="flex items-center top-0 h-40 text-white">
                        this is a blog
                    </div>

                    <div className="grid grid-cols-6 gap-10 w-[90%] mx-auto">
                        <div className="col-span-3 ">
                            <FeaturedArticles />
                        </div>

                        <div className="col-span-2 ">
                            <RecentArticles />
                        </div>
                    </div>
                </section>
            </header>
        </>
    );
};

export default Blog;