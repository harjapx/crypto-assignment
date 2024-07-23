import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../store/types';
import { fetchData, selectStock } from '../store/actions';
import DataTable from '../components/DataTable';
import SelectStock from '../components/SelectStock';

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: AppState) => state.data);
  const selectedStock = useSelector((state: AppState) => state.selectedStock);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(fetchData(selectedStock));
    }, 5000);

    return () => clearInterval(interval);
  }, [dispatch, selectedStock]);

  return (
    <div>
      <SelectStock />
      <DataTable data={data} />
    </div>
  );
};

export default HomePage;
