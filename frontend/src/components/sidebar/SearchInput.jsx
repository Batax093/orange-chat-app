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
        className="btn btn-circle bg-orange-500 hover:bg-amber-600 text-black ">
        <FiSearch className="w-5 h-5" />
      </button>
    </form>
  );
};
export default SearchInput;
