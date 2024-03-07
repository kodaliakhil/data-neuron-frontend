import React, { useState } from "react";
import { add, update } from "../../services/Service";

const Header = () => {
  const [apidata, setApiData] = useState();
  const [newDescription, setNewDescription] = useState("");
  const [addCount, setAddCount] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  function onAdd() {
    add({ entry: newDescription, addCount, updateCount })
      .then((res) => res.json())
      .then((data) => {
        setAddCount(data.addCount);
        setApiData(data);
      });
    setNewDescription("");
  }

  function onUpdate() {
    update({ _id: apidata._id, entry: newDescription, addCount, updateCount })
      .then((res) => res.json())
      .then((data) => setUpdateCount(data.updateCount));
  }
  return (
    <header className=" bg-dark p-2 shadow-lg d-flex flex-row justify-content-center align-items-center sticky-top">
      <input
        type="text"
        className="p-2"
        placeholder="Add/Update Description"
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
      />
      <button className="btn btn-light shadow p-2 m-2" onClick={onAdd}>
        Add
      </button>
      <button className="btn btn-light shadow p-2 m-2" onClick={onUpdate}>
        Update
      </button>

      <h5 className="text-light">{`Add:${addCount} Update: ${updateCount} Total: ${
        addCount + updateCount
      }`}</h5>
    </header>
  );
};

export default Header;
