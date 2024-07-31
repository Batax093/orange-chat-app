import { IoSend } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSendMessage}
      className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="input input-bordered w-full p-2.5 block rounded-lg bg-gray-100 border-gray-300 text-black"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3">
          {loading ? <span className="loading loading-spinner"></span> : <IoSend />}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
