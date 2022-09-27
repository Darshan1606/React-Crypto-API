import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import {  RowTab, ColTab, Card, CardName, CardPrice, CardM, CardChange } from "./Currency.styled";


import { useGetCryptosQuery } from "../../services/cryptoApi";
import { useState } from "react";

const Currency = () => {
  const { data: cryptosList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptosList?.data?.coins);

  console.log(cryptos);

  return (
    <>
      <RowTab gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          
              <Card key={currency.id} Link to={`/crypto/${currency.id}`}>
                <CardName>{`${currency.rank}. ${currency.name}`}</CardName>
                <img
                    width={`60px`}
                    height={`60px`}
                    className="crypto-image"
                    src={currency.iconUrl}
                  />
                <CardPrice>Price : {millify(currency.price)} $</CardPrice>
                <CardM>Market Cap : {millify(currency.marketCap)}</CardM>
                <CardChange>Daily Change : {millify(currency.change)}%</CardChange>
              </Card>

            
            
        
        ))}
      </RowTab>
    </>
  );
};

export default Currency;
