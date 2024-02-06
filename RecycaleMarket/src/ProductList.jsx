import PropTypes from 'prop-types';

function ProductList(props){

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.color}</b></li>);
    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
    </>);

}

ProductList.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number,
                                              name: PropTypes.string,
                                              color: PropTypes.string  }))
}
ProductList.defaultProps = {
    category: "Category",
    items: [],
}
export default ProductList