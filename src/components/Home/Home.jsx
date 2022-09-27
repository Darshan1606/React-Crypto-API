import React from "react";
import millify from "millify";
import { Typography, Card, Col, Row, Statistic } from "antd";
import { Link } from "react-router-dom";

import Currency from "../Currency/Currency";
import News from "../News/News"

import { useGetCryptosQuery } from "../../services/cryptoApi";

import {
  TitleBox,
  HeaderBox,
  ContentBox,
  CardBoxes,
  StatCard,
  CrytoHead
} from "./Home.styled";

const { Title } = Typography;

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  console.log(data);
  if (isFetching) return "Loading...";

  return (
    <>
      <HeaderBox>
        <TitleBox className="titlebox">
          <Title level={2}>Global Crypto Statistic</Title>
        </TitleBox>
        <ContentBox>
          Having an exact hold of the market with precise and solid information
          is essential for any individual who needs to turn into a beneficial
          crypto dealer or financial backer
        </ContentBox>
        <br />
        <CardBoxes>
          <StatCard>
            <Statistic
              title="Total Cryptocurrencies"
              value={globalStats.total}
            ></Statistic>
          </StatCard>

          <StatCard>
            <Statistic
              title="Total Exchanges"
              value={millify(globalStats.totalExchanges)}
            ></Statistic>
          </StatCard>

          <StatCard>
            <Statistic
              title="Total Market Cap"
              value={millify(globalStats.totalMarketCap)}
            ></Statistic>
          </StatCard>

          <StatCard>
            <Statistic
              title="Total 24th Volume"
              value={millify(globalStats.total24hVolume)}
            ></Statistic>
          </StatCard>

          <StatCard>
            <Statistic
              title="Total Markets"
              value={millify(globalStats.totalMarkets)}
            ></Statistic>
          </StatCard>
        </CardBoxes>
      </HeaderBox>

      <CrytoHead >
        <Title level={1} className="home-title">
          Top 50 Cryptocurrencies in the World
        </Title>
      </CrytoHead>
      <Currency simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={4} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified />
    </>
  );
};

export default Home;
