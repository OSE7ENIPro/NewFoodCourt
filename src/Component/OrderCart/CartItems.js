import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardContent,
  CardHeader,
  Card,
  CardActions,
} from "@mui/material";
import { connect } from "react-redux";
import { manageProduct } from "../Redux/Action/Action";
import "./CartItems.css";
import Meals from "../ManageCart/Meals";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  marginTop: 30,
  zIndex: 1,
};

function CartItems(props) {
  let { ProductList, manageProduct } = props;

  const handleIncrement = (product) => {
    let id = product["id"];
    let name = product["name"];
    let price = product["price"];
    let description = product["description"];
    let getPrevCount =
      ProductList?.filter((obj) => obj?.id == id)?.[0]?.count || 0;
    let restProduct = ProductList?.filter((obj) => obj?.id !== id);

    let incProductCount = {
      id,
      name,
      price,
      description,
      count: getPrevCount + 1,
    };

    manageProduct([...restProduct, incProductCount]);
  };

  const handleDecrement = (product) => {
    let id = product["id"];
    let name = product["name"];
    let price = product["price"];
    let description = product["description"];
    let getPrevCount =
      ProductList?.filter((obj) => obj.id == id)?.[0].count || 0;
    let restProduct = ProductList?.filter((obj) => obj?.id !== id);

    let incProductCount = {
      id,
      name,
      price,
      description,
      count: getPrevCount == 0 ? 0 : getPrevCount - 1,
    };

    manageProduct([...restProduct, incProductCount]);
  };

  const cartTotal = ProductList.reduce((total, items) => {
    return (total = total + parseFloat(items.count * items.price));
  }, 0);

  const [tab, setTab] = useState(true);
  const closeHandler = () => {
    setTab(false);
  };
  return (
    <>
      <Card className="cart-card" sx={style}>
        {ProductList.map((items) => {
          return (
            <>
              <CardHeader title={items.name} subheader={items.description} />

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  <i>{"₹" + items.price + " "}</i>
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <Button onClick={() => handleIncrement(props.items)}>+</Button>{" "}
                <span>Qyt : {items.count || 0}</span>
                <Button onClick={() => handleDecrement(props.items)}>-</Button>
              </CardActions>
              <hr></hr>
            </>
          );
        })}
        <>
          <p>
            Total<span className="totalAmt-span">{cartTotal}</span>
          </p>
          <Button className="btn-close" onClick={closeHandler}>
            Close
          </Button>
        </>
      </Card>
    </>
  );
}
const mapStateToProps = ({ Product }) => ({
  ProductList: Product.productList,
});

const mapDispatchToProps = (dispatch) => ({
  manageProduct: (param) => dispatch(manageProduct(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
