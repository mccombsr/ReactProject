import React, { Component } from 'react';
import './App.css';
import Product from './Components/Product';
import CartItem from './Components/CartItem';
import axios from 'axios';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      key: "ccfe76ec",
      cart: [],
      shirts: [
        {
          id: 2,
          imageUrl: 'https://ae01.alicdn.com/kf/HTB1BgbHafBNTKJjy0Fdq6APpVXa9/Harajuku-Space-Cat-Panda-T-Shirt-Astronaut-Galaxy-3d-T-Shirt-Fashion-Tees-Women-Men-Tops.jpg',
          title: 'Cat/Panda Shirt',
          price: 299.99,
          description: 'Ground control to Major Tom!'
        },
        {
          id: 3,
          imageUrl: 'https://teebirthday.com/wp-content/uploads/2018/06/Taylor-Swift-Cat-Best-Friend-Purr-Ever-Olivia-And-Meredith-Deadpool-2-V-neck.jpg',
          title: 'T-Swift Cat Shirt',
          price: 599.99,
          description: "A luxurious shirt with a picture of Taylor's furry friends!"
        }
      ],
      mugs: [
        {
          id: 1,
          imageUrl: 'https://rlv.zcache.com/im_silently_correcting_your_grammar_cat_mug-r501c97293521418bb25e95c0a45fec40_x7jgr_8byvr_540.jpg',
          title: 'Cat Mug',
          price: 124.99,
          description: 'A wonderful mug with a cat meme!'
        }
      ],
      decorations: [
        {
          id: 4,
          imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51--ysBjB7L._SL500_AC_SS350_.jpg',
          title: 'Cat Picture Frame',
          price: 59.99,
          description: 'The purrfect frame for your favorite photos of that special someone.'
        }
      ]
    }
    this.addToCart = this.addToCart.bind(this);
    this.checkout = this.checkout.bind(this);
  }

  componentDidMount(){
    axios.get(`http://104.248.178.153/products/catalog?key=${this.state.key}`)
    .then(productsResponse => {
     console.log(`found products ${productsResponse.data}`); 
    })
  }

  addToCart(item) {
    this.setState({
      cart: [...this.state.cart, item]
    });
  }

  checkout = () => {
    this.setState({
      cart: []
    });
    alert("Purchase is complete!")
  };


  render() {
    return (
      <div className="App">
        <section className='products'>
          <h1>Products</h1>
          <h2>T-Shirts</h2>
          {this.state.shirts.map(item =>
            <Product 
            key={item.id}
            item={item}
            addToCart={this.addToCart}
            />
          )}
          <h2>Mugs</h2>
          {this.state.mugs.map(item =>
            <Product 
            key={item.id}
            item={item}
            addToCart={this.addToCart}
            />
          )}
          <h2>Decorations</h2>
          {this.state.decorations.map(item =>
            <Product 
            key={item.id}
            item={item}
            addToCart={this.addToCart}
            />
          )}
        </section>

        <section className='cart'>
          <h1>Cart</h1>
          <h2>Total $
          {this.state.cart.reduce((totalPrice, product) => (totalPrice += product.price), 0)}
          </h2>
          <button onClick={this.checkout}>Checkout</button>
          {this.state.cart.map(item =>
            <CartItem
            key={item.id}
            item={item}
            />
          )}
        </section>
      </div>
    );
  }
}


