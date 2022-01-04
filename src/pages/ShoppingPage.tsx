import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import { products } from "../data/products";

const product = products[0];

export const ShoppingPage = () => {

    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard 
                key={product.id}
                product={ product }
                initialValues={{
                    count: 4,
                    maxCount: 15
                }}
            >
                {
                    ({count, reset, increaseBy, isMaxCountReached, maxCount}) => (
                        <>
                            <ProductImage />
                            <ProductTitle />
                            <ProductButtons />
                        </>
                    )
                }
            </ProductCard>
        </div>
    )
}
