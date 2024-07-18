import Sidebar from "../../components/sidebar/Sidebar"
import MessageContainer from "../../components/messages/MessageContainer"

export const Home = () => {
  return <div className="flex sm:h-[450px] md:h-[550px] rounded-lg shadow-md bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-200">
    <Sidebar />

    <MessageContainer />
    
  </div>
}
