import { useState } from "react";

const Select = () => {
  const [gender, setGender] = useState("all");

  function handleSelect(e) {
    setGender(e.target.value);
  }

  return (
    <div>
      <select defaultValue={gender} onChange={handleSelect}>
        <option value="all">All</option>
        <option value="female">Female Gender</option>
        <option value="male">Male Gender</option>
      </select>
      <h1>{gender}</h1>
    </div>
  );
};

export default Select;
