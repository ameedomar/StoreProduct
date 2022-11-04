import React from "react";
import { FetchData } from "../../Utils/ApiUtils";
import ProductsCard from "./SubComp/ProductsCard";
import "./products.scss";
// import CustomModal from "../../Components/NavBar/CustomModal/CustomModal";
// import { Modal } from "bootstrap";
import ProductDetailsModal from "./SubComp/ProductDetails";

import SearchFilter from "./SubComp/SearchFilter";
import { GlobalContext } from "../../Utils/Contexts";
// import axios from 'axios'

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      filteredProducts: [],
      //   productDetails: [],
    };
  }

  async componentDidMount() {
    const resp = await FetchData("https://fakestoreapi.com/products", "GET");

    if (resp.status === 200) {
      this.setState({ products: resp.data, filteredProducts: resp.data });
    } else {
      console.warn("sorry this api failed");
      //@TODO: we will handle it later
    }
  }

  onSearchFilterChangeed(searchText, filterBy) {
    const _filteredProducts = this.state.products.filter((item) => {
      const upperCaseTitle = item.title.toUpperCase();
      const upperCaseDesc = item.description.toUpperCase();
      const upperCaseSearchTxt = searchText.toUpperCase();

      if (filterBy === "title") {
        return upperCaseTitle.includes(upperCaseSearchTxt);
      } else if (filterBy === "desc") {
        return upperCaseDesc.includes(upperCaseSearchTxt);
      }
      return (
        upperCaseTitle.includes(upperCaseSearchTxt) ||
        upperCaseDesc.includes(upperCaseSearchTxt)
      );
    });

    this.setState({ filteredProducts: _filteredProducts });
  }
  onCardClicked(product) {
    //     this.setState(
    //       {
    //         productDetails: product,
    //       },
    //       () => {
    //         const customModal = new Modal("#customModal");
    //         customModal.show();
    //       }
    //     );
    console.log(product + "this is the console in Product ");
    this.context.showModal({
      body: <ProductDetailsModal product={product} />,
      title: <span>{product.title}</span>,
    });
  }
  render() {
    return (
      <div>
        {/* <CustomModal product={this.state.productDetails} /> */}
        <SearchFilter onChange={this.onSearchFilterChangeed.bind(this)} />
        <div className="row ms-5 me-5">
          {this.state.filteredProducts.map((item, idx) => {
            return (
              <div className="col-lg-2 col-md-3" key={idx}>
                <ProductsCard
                  onClick={this.onCardClicked.bind(this, item)}
                  product={item}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
Products.contextType = GlobalContext;
export default Products;
