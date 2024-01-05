import { useSelector } from "react-redux";
import BagItems from "../components/BagItems";
import BagSummary from "../components/BagSummary";
import "../../css/bag.css";
import EmptyCartMsg from "../components/EmptyCartMsg";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const itemStore = useSelector((store) => store.items);

  const item = bagItems.map((bagItemId) =>
    itemStore.find((item) => item.id === bagItemId)
  );

  return (
    <main className="mainBagContainer">
      <div className="bag-page">
        {item.map((item) => (
          <BagItems item={item} key={item.id} />
        ))}
        {bagItems != 0 ? <BagSummary item={item} /> : <EmptyCartMsg />}
      </div>
    </main>
  );
};

export default Bag;
