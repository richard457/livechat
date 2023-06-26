import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { Config } from "../../types/Config";

export default function ChecklistItem({
  item,
  onChange
}: {
  item: Config;
  onChange: (item: Config) => void;
}): JSX.Element {
  return (
    <Box display="flex" gap="1rem" >
      <FormControlLabel
        sx={{ '& .MuiFormControlLabel-label': { fontSize: '30px' } }}
        label={item.name}
        control={
          <Checkbox
            sx={{ '& .MuiSvgIcon-root': { fontSize: 50 } }}
            checked={item.name!=""}
          />
        }
      />
    </Box>
  );
}