import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import List from "./components/List";
import Alert from "./components/Alert";
function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [checkEditItem, setCheckEditItem] = useState(false);
  const [editId, setEditId] = useState(null);
  const submitData = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({ show: true, msg: "กรุณาป้อนข้อมูล", type: "error" });
    } else if (checkEditItem && name) {
      const result = list.map((item) => {
        if (item.id === editId) {
          return {
            ...item,
            title: name,
          };
        }
        return item;
      });
      setList(result);
      setName("");
      setCheckEditItem(false);
      setEditId(null);
      setAlert({
        show: true,
        msg: "แก้ไขข้อมูลเรียบร้อยแล้ว",
        type: "success",
      });
    } else {
      const newItem = {
        id: uuidv4(),
        title: name,
      };
      setList([...list, newItem]);
      setName("");
      setAlert({
        show: true,
        msg: "บันทึกข้อมูลเรียบร้อยแล้ว",
        type: "success",
      });
    }
  };
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setAlert({ show: true, msg: "ลบข้อมูลเรียบร้อยแล้ว", type: "error" });
  };
  const editItem = (id) => {
    setCheckEditItem(true);
    setEditId(id);
    const editItem = list.find((item) => item.id === id);
    setName(editItem.title);
  };
  return (
    <section className="container">
      <h1>Todolist App</h1>
      {alert.show && <Alert {...alert} setAlert={setAlert} list={list} />}
      <form className="form-group" onSubmit={submitData}>
        <div className="form-control">
          <input
            type="text"
            className="text-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          ></input>
          <button type="submit" className="submit-btn">
            {checkEditItem ? "แก้ไขข้อมูล" : "เพิ่มข้อมูล"}
          </button>
        </div>
      </form>
      <section className="list-container">
        {list.map((data, index) => {
          return (
            <List
              {...data}
              key={index}
              removeItem={removeItem}
              editItem={editItem}
            />
          );
        })}
      </section>
    </section>
  );
}

export default App;
