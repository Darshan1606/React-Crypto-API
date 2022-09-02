import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic} from 'antd';

import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../../services/cryptoApi';

const { Title } = Typography;

const Home = () => {

  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);
  if(isFetching) return 'Loading...';

  return (
    <>
    <div>Home</div>
    <Title level={2} className="heading">Global Crypto Statistic</Title>
    <Row>
      <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}></Statistic></Col>
      <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)}></Statistic></Col>
      <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}></Statistic></Col>
      <Col span={12}><Statistic title="Total 24th Volume" value={millify(globalStats.total24hVolume)}></Statistic></Col>
      <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}></Statistic></Col>
    </Row>
    </>
  )
}

export default Home