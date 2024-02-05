function Product(){
    const product1 = "Xiaomi Redmi note 12s";
    const product2 = "Honor 9a";

    return(
        <ul>
            <li>Iphone SE</li>
            <li>{product1}</li>
            <li>{product2.toUpperCase()}</li>
        </ul>
    );
}

export default Product