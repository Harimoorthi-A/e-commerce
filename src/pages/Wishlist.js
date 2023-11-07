import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import wishlistSlice, { removeWishlist } from '../redux/wishlistSlice';
import { AlertTriangle, ShoppingCart, Trash2 } from 'react-feather';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

function Wishlist() {

  const dispatch = useDispatch()

  const wishlistArray = useSelector(state => state.wishlist)
  console.log(wishlistArray);

  const handleAddCart=(product)=>{
    // add to cart
    dispatch(addToCart(product))
    // remove from wishlist
    dispatch(removeWishlist(product.id))
  }
  return (
    <div>
      <h1>Your Wish List</h1>

      {
        wishlistArray.length > 0 ?
          <Table className='container p-5 mt-5' striped bordered hover>
            <thead>
              <tr>
                <th>Sl NO:</th>
                <th>Product</th>
                <th>Price</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {
                wishlistArray.map((i, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.title}</td>
                    <td>{i.price}</td>
                    <td>
                      <img
                        alt=''
                        style={{ height: '100px' }}
                        src={i.image}
                      />
                    </td>
                    <td>
                      <Button onClick={() => dispatch(removeWishlist(i.id))} className='btn btn-light'>
                        <Trash2 style={{ color: "#d61f1f" }}></Trash2>
                        {/* <i class="fa-solid fa-trash mt-2 fa-2x" ></i> */}
                      </Button>
                      <Button onClick={()=>handleAddCart(i)} className='btn btn-light'>
                        <ShoppingCart style={{color: '#2fac55'}}></ShoppingCart>
                        {/* <i class="fa-solid fa-cart-plus pt-2 fa-1x" style={{color: '#2fac55'}}></i> */}
                      </Button>
                    </td>
                  </tr>

                ))
              }
            </tbody>
          </Table>

          : <h1>
            Your wish List is Empty
            <AlertTriangle style={{ color: 'red' }}></AlertTriangle>

          </h1>
      }

      <Link to={'/checkout'}>
        <Button className='btn btn-info'>
          Check Out
        </Button>
      </Link>
    </div >
  )
}

export default Wishlist