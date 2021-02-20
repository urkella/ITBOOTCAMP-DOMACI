import { useState, useEffect } from "react";
import { string } from "prop-types";
import { Launch } from "../../components";
import moment from 'moment';
import axios from "axios";
import { years } from '../../data';

import loading from "../../assets/loading.svg";
import "./Launches.css";

const API = "https://api.spacexdata.com/v4";

const Launches = (props) => {
  const { className } = props; // Props from parent component

  // Hooks
  const [launches, setLaunches] = useState([]);

  // Fetch the data
  useEffect(() => {
    return axios
      .get(`${API}/launches`)
      .then((res) => {
        return setLaunches(res.data);
      })
      .catch((e) => console.error("Error: ", e));
  }, []);

  const launchesLoaded = launches && launches.length !== 0;
  const resultClasses = launchesLoaded ? "Launches" : "Loading";
  const results = launchesLoaded ? (
    launches.map((launch) => {
      const id = launch.id;
      return <Launch key={id} {...launch} />;
    })
  ) : (
    <img src={loading} alt="Loading" />
  );

  const setOnChange = (year) => {
    return axios
      .get(`${API}/launches`)
      .then((res) => {
        const result = res.data;
        const formatUnixDateToYear = (date) => moment(date * 1000).format("Y");
        const getResultsByYear = result.filter(i => formatUnixDateToYear(i.static_fire_date_unix) === year);
        return setLaunches(getResultsByYear);
      })
      .catch((e) => console.error("Error: ", e));
  };

  return (
    <div className={className}>
      <div className="Launches-search">
        <select
          className="Launches-searchbar"
          onChange={(event) => setOnChange(event.target.value)}
        >
          <option disabled value="">
            Select launch year
          </option>
          {years.map(year => {
            return (
              <option key={year.key} value={year.key}>{year.label}</option>
            )
          })}
        </select>
        <span>{launches && launches.length}</span>
      </div>
      <div className={resultClasses}>{results}</div>
    </div>
  );
};

Launches.defaultProps = {
  className: null,
};

Launches.propTypes = {
  className: string,
};

export default Launches;
