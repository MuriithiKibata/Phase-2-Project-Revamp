import React from "react";
import NavBar from "../Navbar/nav";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Box } from "@mui/material";
import "./Cart.css";
import image from "./Stocks-manager-card-bg .jpeg";
import { useEffect, useState } from "react";
function Cart() {
  const authToken = localStorage.getItem("token");

  // const {getCartItems, getUsersCart} = useContext(CartContext)
  const [getCartItems, setCartItems] = useState();
  const [subtotal, setSubTotal] = useState();
  const [getId, setId] = useState();
  const [itemAmount, setItemAmount] = useState({
    amount: ""
  });

  

  async function getUsersCart() {
    const response = await fetch("/carts", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    setCartItems(data);
  }

  async function getSubtotal(){
    const data = await fetch('/subtotal', {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    })
    const response = await data.json();
    setSubTotal(response)
  }

  function clearItem(id) {
    fetch(`/carts/${id}`,{
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    setCartItems(cartItem => getCartItems.filter((item) => item.id !== id))
    getSubtotal()
  }

  function returnItems(id) {
    fetch(`/items/increment/${id}`,{
      method: "PATCH",
      headers:{
        Authorization : `Bearer ${authToken}`, 
        'Content-Type': 'application/json'
      },
      body : JSON.stringify(itemAmount)
    })
    console.log(id)
  }


  function handleDelete(id) {
    Promise.all([clearItem(id), getSubtotal()])
  }

  function clearCart() {
    fetch(`/clearcart`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    })
    Promise.all([setCartItems([]), getSubtotal(), returnItems()])
  }


  useEffect(() => {
    getUsersCart();
    getSubtotal()
  }, []);

  return (
    <>
      <NavBar />
      <Box
        maxWidth="sm"
        minHeight="100vh"
        minWidth="100vw"
        display="flex"
        justifyContent="center"
        alignItems="center"
        margin="auto"
        flexWrap="wrap"
        paddingTop="90px"
      >
        {getCartItems &&
          getCartItems.map((item) => (
            <Card sx={{ maxWidth: 200, margin: 1 }} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price {item.price}, Quantity {item.quantity}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button color="secondary" size="small" variant="contained" sx={{margin: 1}} onClick={() => 
              {handleDelete(item.id)
              setItemAmount({...itemAmount, amount: item.quantity}) 
              returnItems(item.item_id)
              }}>
                Delete
              </Button>
            </Card>
          ))}
      </Box>
      <div className="subTotal"><h1>Total: {subtotal}/=</h1><Button variant = "contained" color = "secondary" size = "large" maxWidth = "sm" onClick = {clearCart}>Checkout</Button></div>
    </>
  );
}

export default Cart;
