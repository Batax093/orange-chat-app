import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <form
      action=""
      className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="input input-bordered w-full p-2.5 block rounded-lg bg-gray-100 border-gray-300 text-white"
          placeholder="Type a message"
        />
        <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3">
            <IoSend />
        </button>
      </div>
    </form>
  );
};
export default MessageInput;
