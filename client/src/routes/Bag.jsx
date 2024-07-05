import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import { useSelector } from "react-redux";

const Bag = () => {
  const bagItems = useSelector((store) => store.bag);
  const item = useSelector((store) => store.item);

  const totalItems = item.filter((item) => {
    return bagItems.includes(item.id);
  });

  return (
    <>
      <main>
        <div className="bag-page">
        <div className="bag-items-container">
          {totalItems.map((item) => (
            <BagItem key={item.id} item={item} />
          ))}
        </div>
          <BagSummary />
        </div>
      </main>
    </>
  );
};

export default Bag;
