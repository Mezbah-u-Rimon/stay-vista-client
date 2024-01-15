/* eslint-disable react/prop-types */
import queryString from "query-string";
import { useNavigate, useSearchParams } from "react-router-dom";

const CategoryBox = ({ label, icon: Icon, selected }) => {
    const [params, setParams] = useSearchParams()
    const navigate = useNavigate();

    const handleClick = () => {
        let currentQuery = {};
        if (params) {
            currentQuery = queryString.parse(params.toString());

            const updateQuery = { ...currentQuery, category: label }
            const url = queryString.stringifyUrl({
                url: "/",
                query: updateQuery,
            })

            navigate(url)
        }
    }
    params.get('category')

    return (
        <div onClick={handleClick} className={`flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-black transition cursor-pointer ${selected ? 'border-b-black text-black' : 'text-neutral-500'}`}>
            <Icon size={26} />
            <h1 className="text-sm font-medium"> {label}</h1>
        </div>
    );
};

export default CategoryBox;