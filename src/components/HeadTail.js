
import React, { useState } from "react";

const HeadTail = () => {
  let initialValue = "select value";
  const [value, setValue] = useState(initialValue);
  const [validate, setValidate] = useState(false);
  const [tableData, setTableData] = useState([]);

  const data = ["select value", "H", "T"];
  
  const onSubmit = () => {
    if (value === "select value") {
      setValidate(true);
      return;
    } else {
      setValidate(false);
      let tempTableData = [...tableData];
      let lastItemArray = tempTableData?.length
        ? [...tempTableData[tempTableData.length - 1]]
        : [];
      let lastItem = lastItemArray?.length ? lastItemArray[0] : null;
      if (lastItem === value) {
        let lastIndex = tempTableData.length - 1;
        lastItemArray.push(value);
        tempTableData[lastIndex] = lastItemArray;
      } else {
        tempTableData.push([value]);
      }
      setTableData(tempTableData);
      setValue(initialValue);
    }
  };

  return (
    <>
      <h1>Head and Tail Page</h1>

      <div>
        Please Select :
        <select
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        >
          {data.map((val) => (
            <option key={val} value={val}>
              {val}
            </option>
          ))}
        </select>
        <div>
          {validate && (
            <p style={{ color: "red" }}>Please select either "H" or "T".</p>
          )}
        </div>
      </div>
      <button onClick={onSubmit}>Submit</button>
      {tableData?.length > 0 && (
        <div style={{ display: "flex", marginTop: 20 }}>
          {tableData?.length > 0 &&
            tableData?.map((key, id) => {
              return (
                <div
                  key={id}
                  style={{
                    marginRight: 15,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {tableData[id]?.map((item, idx) => {
                    return <div key={idx}>{item}</div>;
                  })}
                </div>
              );
            })}
        </div>
      )}
    </>
  );
};

export default HeadTail;
