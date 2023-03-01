import React from "react";
import { menu } from "../MenuItems/MenuItems";
import { connect } from "react-redux";
import { manageProduct } from "../Redux/Action/Action";
import Meals from "../ManageCart/Meals";
import { Card } from "react-bootstrap";
import './List.css'


function List(props) {
  let { ProductList, manageProduct } = props;

  const handleIncrement = (product) => {
    let id = product["id"];
    let name = product["name"]
    let price = product["price"]
    let description=product["description"]
    let getPrevCount =
      ProductList?.filter((obj) => obj?.id == id)?.[0]?.count || 0;
    let restProduct = ProductList?.filter((obj) => obj?.id !== id);

    let incProductCount = { id,name,price,description, count: getPrevCount + 1 };

    manageProduct([...restProduct, incProductCount]);
  };

  const handleDecrement = (product) => {
    let id = product["id"];
    let name = product["name"]
    let price = product["price"]
    let description=product["description"]
    let getPrevCount =
      ProductList?.filter((obj) => obj.id == id)?.[0].count || 0;
    let restProduct = ProductList?.filter((obj) => obj?.id !== id);

    let incProductCount = {
      id,name,price,description,
      count: getPrevCount == 0 ? 0 : getPrevCount - 1,
    };

    manageProduct([...restProduct, incProductCount]);
  };

  return (
    <Card className="root-card" sx={{width: 345}}>
      <div className="main-div">
        {menu.map((item) => {
          return (
            <Meals
              key={item.id}
              item={item}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              ProductList={ProductList}
            />
          );
        })}
      </div>
    </Card>
  );
}

const mapStateToProps = ({ Product }) => ({
  ProductList: Product.productList,
});

const mapDispatchToProps = (dispatch) => ({
  manageProduct: (param) => dispatch(manageProduct(param)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);