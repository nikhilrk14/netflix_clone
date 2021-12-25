import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Forms/Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [language, setLanguage] = useState("");
  const [type, setType] = useState("horror");

  return (
    <div className="create">
      <h2>Add a New Movie</h2>
      <form>
        <label>Movie name:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Movie Language:</label>
        <textarea
          required
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        ></textarea>
        <label>Movie Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="horror">horror</option>
          <option value="romance">romance</option>
          <option value="thriller">thriller</option>
          <option value="action">action</option>
          <option value="Sci-fi">Sci-fi</option>
        </select>
        <button>Add Movie</button>
      </form>
    </div>
  );
};

export default withRouter(Form);
