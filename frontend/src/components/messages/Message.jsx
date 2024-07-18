const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
          />
        </div>
      </div>
      <div>
        <div className="chat-bubble chat-bubble-primary bg-amber-500">What kind of nonsense is this</div>
        <div className="chat-footer opacity-50 text-sm text-black">Delivered</div>
      </div>
    </div>
  );
};
export default Message;
