import { useSearchParams } from "react-router-dom";
import Container from "../Shared/Container";
import { categories } from "./CategoriesData";
import CategoryBox from "./CategoryBox";


const Categories = () => {
    const [params, setParams] = useSearchParams()
    const category = params.get('category')

    return (
        <Container>
            <div className="pb-4 flex items-center justify-center overflow-x-auto">
                {categories?.map((item, idx) => <CategoryBox key={idx} label={item.label} icon={item.icon} selected={category === item.label}>

                </CategoryBox>)}
            </div>

        </Container>
    );
};

export default Categories;