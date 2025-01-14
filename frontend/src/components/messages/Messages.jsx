import Message from "./Message";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useEffect, useRef } from "react";
import useListenMessages from "../../hooks/useListenMessages";
const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef(null);
  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  });

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div
            className="py-2"
            key={message._id}
            ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3).map((_, idx) => <MessageSkeleton key={idx} />)]}
      {!loading && messages.length === 0 && <p className="text-center text-gray-500">Send a message to start the conversation</p>}
    </div>
  );
};
export default Messages;
