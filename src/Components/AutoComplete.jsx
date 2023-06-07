import React, { useState } from "react";
import { debounce } from "lodash";
import axios from "axios";
import SearchField from "./SearchField";
import ListItems from "./ListItems";

const API_URL = "https://www.googleapis.com/books/v1/volumes";
const DEBOUNCE = 1000;

const searchFun = (query, setResults, setLoading) => {
  axios
    .get(API_URL, {
      params: {
        q: query,
      },
    })
    .then(({ data }) => {
      const { totalItems, items } = data;
      setLoading(false);
      setResults(totalItems ? items.map((i) => i.volumeInfo.title) : []);
    });
};

const debouncedSearch = customDebounce(searchFun, DEBOUNCE);

const customDebounce = (fn, delay) => {
  let time;

  return (...args) => {
    clearTimeout(time);
    time = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const AutoComplete = () => {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const onSearch = (q) => {
    const search = debouncedSearch;

    if (!q) {
      setLoading(false);
      setResults([]);
    } else {
      setLoading(true);
      search(q, setResults, setLoading);
    }
  };

  return (
    <>
      <SearchField onSearch={onSearch} isLoading={loading} />
      {!!result.length && (
        <ListItems items={result} onSelect={(i) => alert(i)} />
      )}
    </>
  );
};

export default AutoComplete;
