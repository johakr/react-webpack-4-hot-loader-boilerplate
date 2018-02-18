import React from 'react';
import { connect } from 'react-refetch';
import { hot } from 'react-hot-loader';
import {
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';

class Price extends React.PureComponent {
  state = {
    history: [],
  };

  componentDidUpdate(props, state) {
    if (
      props.btcFetch.fulfilled &&
      state.history.length === this.state.history.length
    ) {
      this.setState({
        history: [
          ...this.state.history,
          {
            name: new Date().toLocaleString(),
            eur: this.props.btcFetch.value.EUR,
            usd: this.props.btcFetch.value.USD,
          },
        ],
      });
    }
  }

  render() {
    const { btcFetch } = this.props;

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
                {btcFetch.value.EUR.toLocaleString({
                  style: 'currency',
                  currency: 'EUR',
                })}{' '}
                €
              </li>
              <li>
                {btcFetch.value.USD.toLocaleString({
                  style: 'currency',
                  currency: 'USD',
                })}{' '}
                $
              </li>
            </ul>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={this.state.history}>
                <Tooltip />
                <XAxis dataKey="name" />
                <YAxis domain={['auto', 'auto']} unit="€" yAxisId={0} />
                <YAxis
                  orientation="right"
                  domain={['auto', 'auto']}
                  unit="$"
                  yAxisId={1}
                />
                <Line
                  type="monotone"
                  dataKey="eur"
                  stroke="#00D1B2"
                  strokeWidth={2}
                  yAxisId={0}
                />
                <Line
                  type="monotone"
                  dataKey="usd"
                  stroke="#3273DD"
                  strokeWidth={2}
                  yAxisId={1}
                />
              </LineChart>
            </ResponsiveContainer>
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
  }
}

export default hot(module)(
  connect(() => ({
    btcFetch: {
      url:
        'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,EUR',
      refreshInterval: 10000,
    },
  }))(Price),
);
