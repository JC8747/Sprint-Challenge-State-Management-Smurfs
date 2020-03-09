import React, { useState, useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurfs } from "../redux/actions/dataActions";

const App = props => {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    height: ""
  });
  useEffect(() => {
    props.getSmurfs();
  }, []);
  const handleSubmit = e => {
    e.preventDefault();
    props.addSmurfs(formData);
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          onChange={handleChange}
          name="age"
          type="number"
          placeholder="age"
        />
        <input
          onChange={handleChange}
          name="height"
          type="text"
          placeholder="height"
        />
        <button type="submit">Add</button>
      </form>

      <div>
        {props.a.length > 0 &&
          props.a.map((i, k) => (
            <div key={k}>
              <hr />
              <h1>{i.name}</h1>
              <h1>{i.age}</h1>
              <h1>{i.height}</h1>
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

const s = s => ({
  a: s.Data.smurfs
});
const a = {
  addSmurfs,
  getSmurfs
};
export default connect(s, a)(App);