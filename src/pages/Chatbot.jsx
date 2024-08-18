import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import robota from "/images/robota.png";
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  useEffect(() => {
    setUserInput("");
    setMessages([]);
  }, [open]);
  const addMessage = (text, isUser = true) => {
    const message = { text, isUser };
    setMessages([...messages, message]);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUserInput = () => {
    if (userInput.trim() === "") return;
    addMessage(userInput, true);

    // Simulate responses for demonstration purposes
    setTimeout(() => {
      const response = generateResponse(userInput);
      addMessage(response, false);
    }, 1000);

    setUserInput("");
  };

  const generateResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase().trim();

    if (lowerCaseMessage.includes("exchange rate")) {
      return "The current exchange rate for USD to EUR is 1.15.";
    } else if (lowerCaseMessage.includes("tata steels")) {
      return "The current stock price for tata steels is 127.10 INR";
    } else if (lowerCaseMessage.includes("stock prices")) {
      return "The current stock price for XYZ Corp is 100.00 INR";
    } else if (lowerCaseMessage.includes("current stock price for jio")) {
      return "Current stock price for Jio  is 217.00 INR ";
    } else if (lowerCaseMessage.includes("current stock price for mrf tyres")) {
      return "Current stock price for MRF tyres is1,09,401.05 INR";
    } else if (lowerCaseMessage.includes("current stock price for swiggy")) {
      return "Current stock price for Swiggy  is  310 INR ";
    } else if (lowerCaseMessage.includes("current stock price for amazon")) {
      return "Current stock price for amazon  is 129.64 USD ";
    } else if (lowerCaseMessage.includes("current stock price for accenture")) {
      return "current stock price for Accenture is 303.77 USD ";
    } else if (
      lowerCaseMessage.includes(
        "suggest me the active discounts on clothing websites?"
      )
    ) {
      return "Ajio – End of the  season sale(60-70%) discount on top wear Amazon - Big biilllion days sale (flat 80% discount on top brands)  Myntra – Festive sale(Flat 50% on footwear of top brands)";
    } else {
      return "I'm sorry, I can't provide that information at the moment.";
    }
  };

  return (
    <div>
      <button color="primary" onClick={handleOpen}>
        <img
          src={robota}
          alt=""
          className="animate-pulse hover:scale-110 duration-300 ease-in-out"
        />
      </button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <div className="flex justify-center items-center gap-2"><h1 className="text-2xl font-bold text-center -mb-5">
            VA-YOU 
          </h1>
          <img src={robota} className="w-[50px]" alt="" /></div>
          <br />
          <span className="text-center">your personal Assistant</span>
        </DialogTitle>
        <DialogContent>
          <div className="chatbox">
            {messages.map((message, index) => (
              <div key={index}>{message.text}</div>
            ))}
          </div>
          <TextField
            value={userInput}
            name="query"
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="How can I help you?"
            fullWidth
            onKeyDown={(e) => {
              if (e.key === "Enter") handleUserInput();
            }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleUserInput}
            sx={{ mt: "10px" }}
          >
            Send
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Chatbot;
