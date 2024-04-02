import { FaRegArrowAltCircleRight } from "react-icons/fa";
import "./currency.css";
import { useState } from "react";
import axios from "axios";
import { API_KEY, BASE_URL } from "../../config";

const Currency = () => {
  const [amount, setAmount] = useState(null);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState(0);

  const exchange = async () => {
    const response = await axios.get(
      `${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`
    );
    const result = (response.data.data[toCurrency] * amount).toFixed(2);
    setResult(result);
  };

  return (
    <div className="currency__container">
      <div className="currency">
        <h1 className="currency__title">Currency Converter</h1>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="currency__input"
          type="number"
          placeholder="Enter amount"
        />
        <select
          onChange={(e) => setFromCurrency(e.target.value)}
          className="currency__select"
        >
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaRegArrowAltCircleRight className="currency__arrow-icon" />
        <select
          onChange={(e) => setToCurrency(e.target.value)}
          className="currency__select"
        >
          <option>TRY</option>
          <option>USD</option>
          <option>EUR</option>
        </select>
        <button onClick={exchange} className="currency__button">
          Convert
        </button>
        <h2 className="currency__result-title">Result</h2>
        <p className="currency__result-value">{result}</p>
      </div>
    </div>
  );
};

export default Currency;
