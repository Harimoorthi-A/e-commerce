import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartSlice, { clearCart, removeCart } from '../redux/cartSlice';
import Table from 'react-bootstrap/Table';
import { AlertTriangle } from 'react-feather';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch()

  const cartArray = useSelector(state => state.cart)
  console.log(cartArray);

  if (cartArray.length != 0) {
    var total = cartArray.map(i => i.price).reduce((a, b) => a + b)
  }
  else {
    var total = 0
  }

  const handlePay = () => {
    dispatch(clearCart())
  }
  return (
    <div>

      {
        cartArray.length > 0 ?
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
                cartArray.map((i, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{i.title}</td>
                    <td>$ {i.price}</td>
                    <td>
                      <img
                        alt=''
                        style={{ height: '100px' }}
                        src={i.image}
                      />
                    </td>
                    <td>
                      <Button onClick={() => dispatch(removeCart(i.id))} className='btn btn-light'>
                        <i class="fa-solid fa-trash mt-2 fa-2x" style={{ color: "#d61f1f" }}></i>
                      </Button>
                    </td>
                  </tr>

                ))
              }
            </tbody>

          </Table>

          : <h1>
            your Cart is empty
            <AlertTriangle style={{ color: 'red' }}></AlertTriangle>
          </h1>
      }

      <div className='text-end p-5'>
        <h3>Total Price = $ {total}</h3>
      </div>

      <div className='container '>
        <Link to={'/checkout'}>
          <Button onClick={handlePay} className='btn btn-warning text-center w-100' >
            Buy
          </Button>
        </Link>
      </div>

    </div>
  )
}

export default Cart