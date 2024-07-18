const GenderCheckBox = () => {
  return (
    <div className="flex gap-2">
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-error"
          />
        </label>
      </div>
      <div className="form-control">
        <label className="cursor-pointer label gap-2">
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-error"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckBox;
