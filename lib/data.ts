type Product = {

    productId: number;
    name: string;
    price: number;
    category: string;
    image: string;
    stock: number;

}

export const products: Product[] = [

    {
        productId: 1,
        name: "Whey Protein",
        price: 29.99,
        category: "Supplements",
        image: "https://placehold.co/600x400/png?text=Whey+Protein",
        stock: 50
    },

    {
        productId: 2,
        name: "Creatine Monohydrate",
        price: 19.99,
        category: "Supplements",
        image: "https://placehold.co/600x400/png?text=Creatine+Monohydrate",
        stock: 30
    },

    {
        productId: 3,
        name: "BCAA",
        price: 15.99,
        category: "Supplements",
        image: "https://placehold.co/600x400/png?text=BCAA",
        stock: 40
    },

    {
        productId: 4,
        name: "Pre-Workout",
        price: 24.99,
        category: "Supplements",
        image: "https://placehold.co/600x400/png?text=Pre-Workout",
        stock: 25
    }
]