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
import { useContext, useEffect, useState } from "react";
function Cart() {
  const authToken = localStorage.getItem("token");

  // const {getCartItems, getUsersCart} = useContext(CartContext)
  const [getCartItems, setCartItems] = useState();

  async function getUsersCart() {
    const response = await fetch("/carts", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    const data = await response.json();
    setCartItems(data);
  }
  useEffect(() => {
    getUsersCart();
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
              <Button color="secondary" size="small" variant="contained" sx={{margin: 1}}>Quantity</Button>
              <Button color="secondary" size="small" variant="contained" sx={{margin: 1}}>Delete</Button>
            </Card>
          ))}
      </Box>
      <div className="subTotal"><h1>Total: 160000</h1></div>
    </>
  );
}

export default Cart;
