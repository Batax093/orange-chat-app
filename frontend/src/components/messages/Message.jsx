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
    <div className={`chat ${chatClassName} ${bubbleColor}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}
          />
        </div>
      </div>
      <div>
        <div className={`chat-bubble chat-bubble-primary bg-amber-500 ${bubbleColor}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-sm text-black">{formattedTime}</div>
      </div>
    </div>
  );
};
export default Message;
