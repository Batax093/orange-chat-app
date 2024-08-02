import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extracttime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? "chat-start" : "chat-end";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const bubbleColor = fromMe ? "bg-amber-500" : "bg-blue-500";
  const formattedTime = extractTime(message.createdAt);

  return (
    <div className={`chat ${chatClassName} ${bubbleColor} rounded-md`}>
      <div className="chat-image avatar flex items-center justify-center h-full px-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            alt="Profile"
            src={profilePic}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="w-full">
        <div className={`chat-bubble text-black bg-amber-500 ${bubbleColor} pb-2 pl-0 w-full`}>{message.message}</div>
        <div className="chat-footer opacity-50 flex text-xs gap-1 items-center text-black">{formattedTime}</div>
      </div>
    </div>
  );
};

export default Message;
