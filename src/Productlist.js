import Product from "./Product"
// import { useState } from "react"

export default function Productlist(){
    let productlist=[
        {id:"1",name:"RTX 2070",price:35000,url:"https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n207swf3oc-8gd-1-270x270.jpg"},
        {id:"2",name:"RTX 2080",price:59000,url:"https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n2080gaming-oc-8gc-1-270x270.jpg"},
        {id:"3",name:"RTX 3090",price:110000,url:"https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n3090turbo-24gd-1-1000x1000.jpg"},
        {id:"4",name:"RTX 4090",price:180000,url:"https://www.thevaluestore.in/image/cache/wp/gj/2023/Graphics-Card/Gigabyte/gv-n4090wf3-24gd-1-1000x1000.webp"}
    ]

    
    return(
        <div className="productlist">
            {
                
                productlist.map((productli)=>{
                    return(
                        <Product name={productli.name} price={productli.price} url={productli.url} key={productli.id} />

                        /* <Product name="RTX 2070" price="35000" url="https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n207swf3oc-8gd-1-270x270.jpg"  />
                        <Product name="RTX 2080" price="59000" url="https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n2080gaming-oc-8gc-1-270x270.jpg"  />
                        <Product name="RTX 3090" price="110000" url="https://www.thevaluestore.in/image/cache/catalog/2020/Graphics-Card/Gigabyte/gv-n3090turbo-24gd-1-1000x1000.jpg" />
                        <Product name="RTX 4090" price="180000" url="https://www.thevaluestore.in/image/cache/wp/gj/2023/Graphics-Card/Gigabyte/gv-n4090wf3-24gd-1-1000x1000.webp" /> */
                            
                        
                    )
                }

                )

            }

        
           
        
        </div>
    )
}