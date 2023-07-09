import React, { useEffect, useRef, useState } from 'react';
import Header from './Home/Header';
import axios from "axios"
import { Col, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import { Print } from './Print/Print';
import { useReactToPrint } from 'react-to-print';



/**
 * Renders a page that displays a list of products and a cart. Allows users to add products to the cart,
 * remove products from the cart, and updates the quantity of the products in the cart. 
 *
 * @return {JSX.Element} - The rendered page.
 */

const POSpage = () => {
    const [products, setProducts] = useState([])
    const [isLoading,setisLoading] = useState(false)
    const [cart, setCart] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)

    const toastOptions ={
        autoClose: 400,
        pauseOnHover: true
    }
    
    /**
 * Asynchronously fetches products from the server and updates the state.
 */
    const fetchProducts = async()=>{
        setisLoading(true)
        const result = await axios.get("products")

        setProducts(await result.data)
        setisLoading(false)
    }
        /**
     * Adds a product to the cart or increments the quantity of the product if it already exists.
     *
     * @param {Object} product - The product to add to the cart.
     * @return {Promise<void>} - A promise that resolves when the cart is updated.
     */

    const addProductToCart = async(product) =>{
        let findProductInCart =  await cart.find(i=>{
            return i.id === product.id
            
        })
        if(findProductInCart){
            let newCart =[]
            let newItem
            cart.forEach(cartItem =>{
                if(cartItem.id === product.id){
                    newItem = {
                        ...cartItem,
                     quantity: cartItem.quantity + 1,
                     totalAmount: cartItem.price * (cartItem.quantity + 1)   
                    }
                    newCart.push(newItem)
                } else{
                    newCart.push(cartItem)
                }
            })
            setCart(newCart)
            toast(`Added ${newItem.name} to cart`, toastOptions)
        }else{
            let addingProduct ={
                ...product,
                "quantity": 1,
                "totalAmount": product.price,
            }
            setCart([...cart, addingProduct])
            toast(`Added ${product.name} to cart`, toastOptions)
        }
        }
            /**
     * Removes a product from the cart.
     *
     * @param {Object} product - The product to be removed from the cart.
     */

    const removeProduct = async(product) =>{
        const newCart = cart.filter(cartItem => cartItem.id !== product.id)
        setCart(newCart)
    }
    const componentRef = useRef()

    const handleReactToPrint = useReactToPrint({
        content: () => componentRef.current
    })
/**
 * Renders a page that displays products and allows the user to add them to a cart.
 *
 * @return {JSX.Element} - A React component that renders the POS page.
 */

    
    const handlePrint = () =>{
        handleReactToPrint()
}
   
    useEffect(()=>{
        fetchProducts()

    },[])
    useEffect(()=>{
        console.log(products)
    },[products])

    useEffect(()=>{
      let newTotalAmount = 0
      cart.forEach(icart =>{
        newTotalAmount = newTotalAmount + parseInt(icart.totalAmount)
          
      })
      setTotalAmount(newTotalAmount)
    },[cart])
    return (
        <div className='pos'>
            <Header/>
            <Row>
                <Col md ={6}>
            <div className='col-md-8'>
            {isLoading ? "Loading" : <div className='row'> 
             {products.map((product, key) =>{
            return(
            <div key={key} className="col-md-4 mb-4">
             <div className="pos-item px-2 text-center border " onClick={()=> addProductToCart(product)}>
                           
                <img src={product.image} alt={product.name}  className='img-fluid'/>
                <h3>
                 {product.name}
                 </h3>
                    <h5>Gh₵{product.price}</h5>
                    </div>
                    </div>
                    )
                })}
                </div>}
            </div>
            </Col>
            <Col md ={6}>
            <div className='col-md-6' >
                <div style={{display:"none"}}>
                    <Print cart = {cart} totalAmount ={totalAmount} ref={componentRef}/>
            </div>
                <div className='table-responsive bg-dark' style={{marginTop:"150px"}}>
                    <table className='table table-responsive table-dark table-hover'>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Qty</td>
                                <td>Price</td>
                                <td>Total Amount</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>

                            
                {cart ? cart.map((cartProduct, key)=>{
                     return(
                     <tr key={key}>
                     <td>{cartProduct.id}</td>
                    <td>{cartProduct.name}</td>
                    <td>{cartProduct.quantity}</td>
                    <td>{cartProduct.price}</td>
                <td>{cartProduct.totalAmount}</td>
                    <td>
                      
             <button className='btn btn-danger btn-sm' onClick={()=> removeProduct(cartProduct)}>Remove</button>
                                            
                        </td>                        
                        </tr>
)}):"No item in cart"}
                            
            </tbody>
            </table>
            <h2 className='px-2 text-white'>Total Amount: Gh₵{totalAmount}</h2>
                </div>
    <div className='mt-3'>
    {
     totalAmount !== 0 ? <div>
     <button className='btn btn-success' onClick={handlePrint} style={{marginLeft:"150px", fontSize:"20px"}}>Print Receipt</button>

    </div>: "Please add a product to the cart"}
    </div>

            </div>
            </Col>
            </Row>
        </div>
    
    );
}

export default POSpage;
