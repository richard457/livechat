import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Fab, Typography, Grid } from "@mui/material";
import { Config } from "../../types/Config";
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import CloseIcon from "@mui/icons-material/Close";
import AddRounded from "@mui/icons-material/AddRounded"

type Props = {
  configs?: Config[];
};
// 
type Message = {
  text: string;
  sent: boolean;
};

export default function LiveChat(props: Props) {
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [showButtons, setShowButtons] = useState(true);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim()) {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    const token = props.configs?.[0]?.token ?? '';

    console.log("handle messages",token)
    setMessages([...messages, { text: message, sent: true }]);
    setMessage("");
    setShowButtons(false);
  };

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleShowButtons = () => {
    setShowButtons(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const welcomeMessage = {
      text: "Welcome to flipper bot, your digital assistant. What would you like to do?",
      sent: false,
    };
    setMessages([welcomeMessage]);
  }, []);

  return (
    <>
      <Box position="fixed" bottom={16} right={16} zIndex={999}>
        <Fab
          color="success"
          sx={{ bgcolor: "success.main", color: "black" }}
          onClick={handleToggleChat}
        >
          <ForumRoundedIcon sx={{ color: "black" }} />
        </Fab>
      </Box>
      <Box
        position="fixed"
        bottom={isOpen ? 80 : -400}
        right={16}
        width="300px"
        height="360px"
        bgcolor="white"
        boxShadow="0px 0px 5px rgba(0, 0, 0, 0.3)"
        p={2}
        zIndex={888}
        style={{
          overflowY: "auto",
          overflowX: "hidden",
          transition: "bottom 0.3s ease-in-out",
        }}
      >
        <Box
          sx={{
            bgcolor: "primary.main",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "8px",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
          }}
        >
          <Typography variant="subtitle1" fontFamily="Poppins">flipper bot</Typography>
          <Button onClick={handleCloseChat} size="small">
            <CloseIcon sx={{color:'white'}}/>
          </Button>
        </Box>
        <Box
          sx={{
            paddingTop: "35px",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <Box
            sx={{
              marginBottom: "8px",
              height: "240px"
            }}
          >
            {messages.map((msg, index) => (
              <Box
                key={index}
                sx={{
                  overflowY: "auto",
                  display: "flex",
                  flexDirection: msg.sent ? "row-reverse" : "row",
                  alignItems: "flex-start",
                  margin: "8px",
                }}
              >
                <Box
                  sx={{
                    bgcolor: msg.sent ? "success.main" : "lightgrey",
                    color: msg.sent ? "white" : "black",
                    borderRadius: "16px",
                    padding: "8px",
                    width: "80%",
                    alignSelf: msg.sent ? "flex-end" : "flex-start",
                  }}
                >
                  <Typography variant="body1" fontFamily="Poppins">{msg.text}</Typography>
                </Box>
                
              </Box>
              
            ))}
            {showButtons && (
            <Grid container spacing={2} sx={{ marginBottom: "8px" }}>
              <Grid item xs={6}>
                <Button color = "success" variant="outlined" fullWidth onClick={handleShowButtons} sx={{
                  textTransform: "none",
                  borderRadius: "20px 20px 20px 20px",
                  width: "100%",}}>
                  <Typography fontFamily="Poppins">Ask a Question</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button color = "success" variant="outlined" fullWidth onClick={handleShowButtons} sx={{
                  textTransform: "none",
                  borderRadius: "20px 20px 20px 20px",
                  width: "100%",}}>
                  <Typography fontFamily="Poppins">Connect to sales</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button color = "success" variant="outlined" fullWidth onClick={handleShowButtons} sx={{
                  textTransform: "none",
                  borderRadius: "20px 20px 20px 20px",
                  width: "100%",}}>
                <Typography fontFamily="Poppins">Report an Abuse</Typography>
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button color = "success" variant="outlined" fullWidth onClick={handleShowButtons} sx={{
                  textTransform: "none",
                  borderRadius: "20px 20px 20px 20px",
                  width: "100%",}}>
                <Typography fontFamily="Poppins">Learn about bot</Typography>
                </Button>
              </Grid>
            </Grid>
          )}
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            position="absolute"
            bottom={0}
            right={20}>
              <Button
                variant="outlined"
                color="success"
                sx={{position: "absolute",
                bottom: 5,
                left: -60,
                height: "100%",
                minWidth: "unset",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                border: "none",'&:hover': {
                  border: 'none',
                },
                }}
              >
                <AddRounded sx={{color:"green"}}/>
              </Button>
              
              <form onSubmit={handleSubmit}>
          <TextField
            value={message}
            onChange={handleInputChange}
            label="Type your message"
            variant="outlined"
            size="small"
            sx={{
              marginBottom: "8px",
             borderRadius: "20px",
              width:"250px",
              alignSelf:"end",
              fontFamily: "Poppins",
              borderColor: "lightgreen",
              '& .MuiOutlinedInput-root': {
                borderRadius: "20px",
                '& fieldset': {
                  borderColor: 'lightgreen',
                  borderTopLeftRadius: '20px',
                  borderBottomLeftRadius: '20px',
                  borderTopRightRadius: '20px',
                  borderBottomRightRadius: '20px',
                },
                '&:hover fieldset': {
                  borderColor: 'lightgreen',
                },
                '&.Mui-focused fieldset': {
                  borderColor: 'lightgreen',
                },
              },
            }}
          />
          </form>
          </Box>
        </Box>
      </Box>
    </>
  );
}