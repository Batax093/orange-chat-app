/* eslint-disable react/prop-types */
const GenderCheckBox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex gap-2">
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender === "male" ? "selected" : ""}`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-error"
            checked={selectedGender === "male"}
            onChange={() => onCheckBoxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`cursor-pointer label gap-2 ${selectedGender === "female" ? "selected" : ""}`}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-error"
            checked={selectedGender === "female"}
            onChange={() => onCheckBoxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckBox;
