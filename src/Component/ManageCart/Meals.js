import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import "./Meals.css";

export default function Meals(props) {
  let { id, name, price, description } = props.item;
  let { ProductList, handleIncrement, handleDecrement } = props;

  let myProduct = ProductList?.filter((obj) => obj.id == id)?.[0];
  let myCount = myProduct?.count;
  return (
    <>
      <Card className="meal-card">
        <CardHeader title={name} subheader={price + " " + "₹"} />

        <CardContent>
          <Typography variant="body2">
            <i>{description}</i>
          </Typography>
        </CardContent>

        <CardActions >
          <Button onClick={() => handleIncrement(props.item)}><b>+</b></Button>{" "}
          <span>{myCount || 0}</span>
          <Button onClick={() => handleDecrement(props.item)}><b>-</b></Button>
        </CardActions>
      </Card>
    </>
  );
}
