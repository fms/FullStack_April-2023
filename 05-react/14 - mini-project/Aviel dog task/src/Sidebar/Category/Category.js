import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Boost"
          title="Boost"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Zoom"
          title="Zoom"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Air"
          title="Air"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Dynamic"
          title="Dynamic"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
