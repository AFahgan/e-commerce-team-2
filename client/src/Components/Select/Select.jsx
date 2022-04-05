import './Select';
const Select = ({ isAdd, handelChange }) => {
  return (
    <select
      name="category"
      className="category-select"
      onChange={(e) => handelChange(e.target.name, e.target.value)}
    >
      {!isAdd && <option value="All">All</option>}
      <option value="chair">chair</option>
      <option value="sofa">sofa</option>
      <option value="living room">living room</option>
      <option value="kitchen">kitchen</option>
      <option value="bed">bed</option>
    </select>
  );
};

export default Select;
