import useConversation from "../../zustand/useConversation";
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({ conversation, emoji, lastidx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation._id;

  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);

  return (
    <>
      <div
        className={`flex items-center gap-2 hover:bg-gray-100 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-gray-100" : ""}`}
        onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={conversation.profilePic}
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="text-base text-black">{conversation.fullName}</p>
            <span className="text-sm text-gray-500">{emoji}</span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>

      {lastidx ? null : <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};
export default Conversation;
