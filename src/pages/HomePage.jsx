import Categories from "../components/Categirues";
import Products from "../components/Products";
import Trend from "../components/Trend";
import Services from "../components/Services";

export default function HomePage (){
    return (<>
        <Categories />
        <Products />
        <Trend />
        <Services />
    </>)
}