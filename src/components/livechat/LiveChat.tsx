import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { ChecklistItemType } from "../../types/checklistItem";

type Props = {
  items?: ChecklistItemType[];
}

export default function LiveChat(props: Props) {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(true);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    // Implement logic to send the message
    // You can use the 'message' state value to access the user's input
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box
      position="fixed"
      bottom={0}
      right={0}
      width="300px"
      maxHeight="300px"
      bgcolor="white"
      boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
      p={2}
      display={isOpen ? "block" : "none"}
    >
      <Button
        variant="contained"
        color={isOpen ? "secondary" : "primary"}
        onClick={handleToggleChat}
        fullWidth
      >
        {isOpen ? "Close" : "Open"} Chat
      </Button>
      {isOpen && (
        <>
          <TextField
            value={message}
            onChange={handleInputChange}
            label="Type your message"
            variant="outlined"
            fullWidth
            size="small"
            style={{ marginTop: "8px" }}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            fullWidth
            style={{ marginTop: "8px" }}
          >
            Send
          </Button>
        </>
      )}
    </Box>
  );
}
