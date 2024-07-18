import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <form
      action=""
      className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-primary">
        <FiSearch className="w-5 h-5 outline-none" />
      </button>
    </form>
  );
};
export default SearchInput;
