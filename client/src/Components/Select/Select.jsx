import './Select';
const Select = ({ isAdd, handelChange }) => {
  return (
    <select
      name="category"
      className="category-select"
      onChange={handelChange}
    >
      {!isAdd && <option value="All">All</option>}
      <option value="Chair">Chair</option>
      <option value="Sofa">Sofa</option>
      <option value="Living Room">Living Room</option>
      <option value="Kitchen">Kitchen</option>
      <option value="Bed">Bed</option>
    </select>
  );
};

export default Select;
