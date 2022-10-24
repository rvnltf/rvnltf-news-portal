import { Folder } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import CategoriesList from "./CategoriesList";

export default function SourceList({ data }) {
  const [open, setOpen] = useState(true);

  const handleClick = (source_id, value) => {
    const updateOpen = open[source_id];
    updateOpen.isOpen = value;

    const newOpen = [...open];
    newOpen[source_id] = updateOpen;
    setOpen(newOpen);
  };

  return (
    <>
      {!data ? (
        <>Loading</>
      ) : (
        <List
          sx={{ width: "100%", bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {data.slice(0, 5).map((v, i) => {
            // const [open, setOpen] = useState({ i: true });

            return (
              <>
                <ListItemButton key={i}>
                  <ListItemIcon>
                    <Folder />
                  </ListItemIcon>
                  <ListItemText primary={v.domain} />
                  {open ? (
                    <ExpandLess onClick={handleClick(v.source_id, true)} />
                  ) : (
                    <ExpandMore onClick={handleClick(v.source_id, true)} />
                  )}
                </ListItemButton>
                <CategoriesList open={open} data={v.categries} />
              </>
            );
          })}
        </List>
      )}
    </>
  );
}
