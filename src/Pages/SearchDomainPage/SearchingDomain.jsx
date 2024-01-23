import { useSelector } from "react-redux";

const SearchingDomain = () => {

    const domain = useSelector(state => state.domain.domain)
    console.log('domain Info', domain)

    return (
        <div className="h-64">
            <p className="text-2xl text-red-700"> Domain: {domain}</p>


            
        </div>
    );
};

export default SearchingDomain;