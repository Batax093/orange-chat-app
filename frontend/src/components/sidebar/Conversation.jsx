const Conversation = () => {
  return (
    <>
      <div className="flex items-center gap-2 hover:bg-gray-100 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-3">
            <p className="text-base ">Username</p>
            <span className="text-sm text-gray-500"></span>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1"></div>
    </>
  );
};
export default Conversation;
