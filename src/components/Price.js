import React from 'react';
import { connect } from 'react-refetch';
import { hot } from 'react-hot-loader';

const formatter = new Intl.NumberFormat({
  style: 'currency',
  currency: 'EUR',
});

const Price = ({ btcFetch }) => {
  if (!btcFetch.fulfilled) return <div />;

  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title">Current Bitcoin Price (BTC)</p>
      </header>
      <div className="card-content">
        <div className="content">
          <ul>
            <li>
              {btcFetch.value.EUR.toLocaleString('en-US', {
                style: 'currency',
                currency: 'EUR',
              })}
            </li>
            <li>
              {btcFetch.value.USD.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </li>
          </ul>
        </div>
        <span
          className="tag is-pulled-right"
          style={{ marginRight: '-1.5rem' }}
        >
          <time>{new Date().toLocaleString()}</time>
        </span>
      </div>
    </div>
  );
};

export default hot(module)(
  connect(() => ({
    btcFetch: {
      url:
        'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR',
      refreshInterval: 10000,
    },
  }))(Price),
);
