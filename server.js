

//imports the express module into our code and assigns it to a variable
const express = require("express");
const file = require("fs");// fs is a core module

//create express app object (THE BOSS, THE CEO to the 10th!!! )
const app = express();

app.use(express.static("public"));


const htmlTemplate = (title,heading,mainContent)=>
{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${title}</title>
        <link href="/css/style.css" rel="stylesheet"> 
    </head>
    <body>
            <header>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/products">Products</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1 id="heading1">${heading}</h1>
                ${mainContent}
            </main>
            <footer>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro quam voluptate deleniti dignissimos temporibus numquam commodi vero nisi, totam quas corrupti harum excepturi aspernatur?
                </p>
            </footer>
    </body>
    </html>`
}


//routes
app.get("/",(req,res)=>{ //route handler


    const mainHTML=`<p> This is the content for the home page</p>`;
    res.send(htmlTemplate(`Home`,`Home Page`,mainHTML));
    

});

////basedomain.com/services
app.get("/about",(req,res)=>{


    const mainHTML=`<img src="/img/code.jpeg">`;
    res.send(htmlTemplate(`About`,`About Page`,mainHTML));
   

});

////basedomain.com/services
app.get("/services",(req,res)=>{


    const mainHTML=`<p> This is the content for the Services page</p>`;
    res.send(htmlTemplate(`Services`,`Service Page`,mainHTML));
   

});


const getProducts = (productArr)=>
{

    let value = "";
    productArr.forEach(element => {
        
        value += `<p> Product  : ${element}</p>`;
    });

    return value;


}

app.get("/products",(req,res)=>{


    const products = ["Printer", "Camera","IPhone","Samsung S10+","Samsung Smart TV"];
    products.push("HP Laptop");
    products.push("Dell Laptop")
    products.push("Mac");
    products.push("ANdroid Box");

    const mainHTML=getProducts(products);
    res.send(htmlTemplate(`Products`,`Products Page`,mainHTML));

})



app.listen(3000,()=>{

    console.log("Web Server is up and running!")
});




