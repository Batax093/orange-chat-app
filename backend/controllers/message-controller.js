import Conversation from "../models/conversation-models.js";
import Message from "../models/message-models.js";
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id; // Assuming the user ID is stored in the `id` field of the user object

        // Find or create conversation
        let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const getMessages = async (req, res) => {
	try {
		const { id:usertochatid } = req.params;
		const senderid = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderid, usertochatid] },
		}).populate("messages");

		if(!conversation) return res.status(200).json([]);
		const messages = conversation.messages

		res.status(201).json(messages);
		
	} catch (error) {
		console.log("Error in sendMessage controller: ", error.message);
        res.status(500).json({ error: "Internal server error" });
	}
}
