import React, { useEffect, useState } from "react";
import { add, getData, update } from "../../services/Service";

const Header = () => {
  const [apidata, setApiData] = useState();
  const [entry, setEntry] = useState("");
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  function onAdd() {
    add({ entry, addCount, updateCount })
      .then((res) => res.json())
      .then((data) => {
        setAddCount(data.addCount);
        setApiData(data);
      });
    setEntry("");
  }

  function onUpdate() {
    update({ _id: apidata._id, entry, addCount, updateCount })
      .then((res) => res.json())
      .then((data) => {
        setUpdateCount(data.updateCount);
        setApiData(data);
      });
    setEntry("");
  }

  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then((data) => {
        setApiData(data[0]);
        setAddCount(data[0].addCount);
        setUpdateCount(data[0].updateCount);
      });
  }, []);

  return (
    <header className=" bg-dark p-2 d-flex justify-content-between align-items-center sticky-top">
      <h1 style={{ color: "#fff" }}>{apidata?.entry}</h1>
      <div className="d-flex justify-content-end align-items-center">
        <input
          type="text"
          className="p-2"
          placeholder="Add  or Update "
          onChange={(e) => setEntry(e.target.value)}
          value={entry}
        />
        <button
          className="btn btn-success shadow p-2 m-2"
          onClick={onAdd}
          style={{ width: "100px" }}
        >
          Add
        </button>
        <button
          className="btn btn-primary shadow p-2 m-2"
          onClick={onUpdate}
          style={{ width: "100px" }}
        >
          Update
        </button>

        <h5 className="text-light">{`Add:${addCount} Update: ${updateCount} Total: ${
          addCount + updateCount
        }`}</h5>
      </div>
    </header>
  );
};

export default Header;
