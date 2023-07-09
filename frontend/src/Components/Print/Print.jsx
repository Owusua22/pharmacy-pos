import React from "react"

export const Print = React.forwardRef((props, ref) => {
    const {cart, totalAmount} = props
    return (
      <div ref={ref} className="p-5">

<table className='table'>
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Name</td>
                                <td>Qty</td>
                                <td>Price</td>
                                <td>Total Amount</td>
                              
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
      
             </td>                        

             </tr>
             
            )   
                                    
    }):""}
                        

</tbody>
</table>
     <h2 className='px-2 '>Total Amount: Gh₵{totalAmount}</h2>
                    
      </div>
    );
  });