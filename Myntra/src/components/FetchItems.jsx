import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchCompleted) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusAction.fetchStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchStatusAction.dataFetched());
        dispatch(fetchStatusAction.fetchEnded());
        dispatch(itemSliceAction.addInitialItems(data.items));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return;
};

export default FetchItems;
