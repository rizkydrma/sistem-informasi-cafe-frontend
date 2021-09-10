import React, { useCallback, useEffect, useState } from 'react';
import Navbar from 'components/Navbar';
import Table from 'elements/Table/Table';
import FooterNav from 'components/FooterNav';

import { getOrders } from '../../api/order';

export default function ListOrder() {
  const titlePage = 'List Order';
  let [pesanan, setPesanan] = useState([]);
  let [count, setCount] = useState(0);
  let [status, setStatus] = useState('idle');
  const user = JSON.parse(localStorage.getItem('auth')).user;

  const fetchPesanan = useCallback(async () => {
    setStatus('proccess');

    let { data } = await getOrders();
    if (data.error) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setPesanan(data.data.sort((a, b) => a.order_number - b.order_number));

    setCount(data.count);
  }, []);

  useEffect(() => {
    fetchPesanan();
  }, [fetchPesanan]);
  return (
    <main>
      <Navbar title={titlePage} />
      <div className="d-flex content-space-between mb-20 mx-20">
        <h4 className="display-4">Pesanan Anda : {count}</h4>
        <h4 className="display-4">{user.full_name}</h4>
      </div>
      {pesanan && <Table items={pesanan} status={status} />}
      <FooterNav />
    </main>
  );
}
