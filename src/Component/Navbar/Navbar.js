import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import DeliveryDiningSharpIcon from "@mui/icons-material/DeliveryDiningSharp";
import { connect } from "react-redux";
import CartItems from "../OrderCart/CartItems";

function Navbar(props) {
  let { ProductList } = props; // get value from parent and store
  const [component, setComponent] = React.useState(false);

  let totalCartProduct =
    ProductList?.reduce((prevVal, currVal) => {
      return prevVal + currVal?.count;
    }, 0) || 0;

  const cartHandler = () => {
    if(totalCartProduct > 0)
    {
     setComponent(true);
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            Foodie
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              //Notification Badge
              size="large"
              aria-label="show new notifications"
              color="inherit"
              onClick={cartHandler}
            >
              <Badge badgeContent={totalCartProduct} color="error">
                <DeliveryDiningSharpIcon />
              </Badge>
            </IconButton>
            {component ? <CartItems ProductList={ProductList} bool={true} /> : null}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

const mapStateToProps = ({ Product }) => ({
  ProductList: Product.productList,
});

export default connect(mapStateToProps, null)(Navbar);
