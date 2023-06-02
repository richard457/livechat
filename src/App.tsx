import { Box } from "@mui/material";
import LiveChat from "./components/livechat/LiveChat";

function App() {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box p={4} fontSize="2rem">
        A
      </Box>
      <Box flex="1 1" p={4}>
        <LiveChat />
      </Box>
    </Box>
  );
}

export default App;
