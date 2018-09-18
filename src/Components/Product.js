import React from 'react';
import PropTypes from 'prop-types';
import Text from './Text';

export default function Product(props) {
    const { item, addToCart } = props;
    return (
        <div className='product'>
            <img src={item.imageUrl} />
            <Text isHeader={true} text={item.title}/>
            <Text isHeader={false} text={item.description}/>
            <Text isHeader={false} text={item.price}/>
            <button onClick={() => props.addToCart(item)}>Add to Cart</button>
        </div>
    )
}

Product.PropTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        imageURL: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,

    })
}