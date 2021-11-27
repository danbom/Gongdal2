import React, { useState } from "react";
import { Input, AutoComplete } from "antd";

function SearchBar() {
  function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // eslint-disable-line no-mixed-operators
  }

  const searchResult = (query) =>
    new Array(getRandomInt(5))
      .join(".")
      .split(".")
      .map((_, idx) => {
        const category = `${query}${idx}`;
        return {
          value: category,
          label: (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>
                <a href="/">{query}</a>
              </span>
            </div>
          ),
        };
      });

  const Complete = () => {
    const [options, setOptions] = useState([]);

    const handleSearch = (value) => {
      setOptions(value ? searchResult(value) : []);
    };

    const onSelect = (value) => {
      console.log("onSelect", value);
    };

    return (
      <AutoComplete
        dropdownMatchSelectWidth={252}
        style={{
          width: 200,
        }}
        options={options}
        onSelect={onSelect}
        onSearch={handleSearch}
      >
        <Input.Search
          bordered={false}
          size="middle"
          placeholder="search ..."
          onPressEnter
          allowClear
        />
      </AutoComplete>
    );
  };
  return (
    <>
      <Complete />
    </>
  );
}

export default SearchBar;
