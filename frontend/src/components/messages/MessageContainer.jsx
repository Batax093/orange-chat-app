import Messages from "./Messages";
import MessageInput from "./MessageInput";

import { LuMessagesSquare } from "react-icons/lu";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="md:min-w[450px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-orange-500 px-4 py-2 mb-2 rounded-tr-lg">
            <span className="label-text text-gray-900 font-bold">To : </span>
            <span className="text-base text-gray-900 font-bold">John Doe</span>
          </div>

          <Messages />

          <MessageInput />
        </>
      )}
    </div>
  );
};
export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-500 font-semibold flex flex-col items-center gap-2">
            <p>Welcome John Doe</p>
            <p>Select a chat to start messaging</p>
            <LuMessagesSquare className="text-xl md:text-6xl text-" />
        </div>
    </div>
  );
}