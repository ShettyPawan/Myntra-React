import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";

const BagSummary = ({ item }) => {
  const convenienceFee = 99;
  let totalMRP = 0;
  let totalDiscount = 0;
  item.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  let totalPaymentAmount = totalMRP - totalDiscount + convenienceFee;

  let bagSummary = {
    totalItems: item.length,
    totalMRP: totalMRP,
    totalDiscount: totalDiscount,
    totalPaymentAmount: totalPaymentAmount,
  };

  const dispatch = useDispatch();
  const handlePlaceOrder = () => {
    alert("Your order have been placed successfully");
    let item = [];
    dispatch(bagSliceAction.resetBag(item));
  };

  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSummary.totalItems} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹ {bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹ {bagSummary.totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹ {convenienceFee}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹ {bagSummary.totalPaymentAmount}
          </span>
        </div>
      </div>
      <button className="btn-place-order" onClick={handlePlaceOrder}>
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
