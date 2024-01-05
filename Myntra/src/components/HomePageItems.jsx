import { useDispatch, useSelector } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
import { BsCartPlus, BsFillCartXFill } from "react-icons/bs";

const HomePageItems = ({ item }) => {
  const dispatch = useDispatch();
  const bagItems = useSelector((store) => store.bag);
  const elementFound = bagItems.find((element) => element == item.id);

  const handleAddToBag = () => {
    dispatch(bagSliceAction.addToBag(item.id));
  };

  const handleRemoveFromBag = () => {
    dispatch(bagSliceAction.removeFromBag(item.id));
  };

  return (
    <div className="itemContainer">
      <img className="productImage" src={`./src/${item.image}`} alt="item1" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}{" "}
      </div>
      <div className="brandName">{item.company}</div>
      <div className="productName">{item.item_name}</div>
      <div className="price">
        <span className="currentPrice">Rs. {item.current_price}</span>
        <span className="originalPrice">Rs. {item.original_price}</span>
        <span className="discount">({item.discount_percentage}%)</span>
      </div>
      {elementFound ? (
        <button className="removeBag" onClick={handleRemoveFromBag}>
          {" "}
          <BsFillCartXFill /> &nbsp; Remove
        </button>
      ) : (
        <button className="addBag" onClick={handleAddToBag}>
          <BsCartPlus /> &nbsp; Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomePageItems;
