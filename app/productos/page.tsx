import { products } from "../../lib/data";
import Image from "next/image";

export default function Productos() {

    return(

        <div className="grid grid-cols-2 md:grid-cols-4 p-6 gap-4 ">

            {

                products.map(product => {

                    return(

                        <div key={product.productId} className="flex flex-col items-center p-4 border border-gray-300 rounded-lg">
                            <Image src={product.image} alt={product.name} width={200} height={200} />
                            <h2>{product.name}</h2>
                            <p>${product.price.toFixed(2)}</p>
                            <p>Category: {product.category}</p>
                            <p>Stock: {product.stock}</p>
                        </div>

                    )

                })

            }

        </div>

    )
}