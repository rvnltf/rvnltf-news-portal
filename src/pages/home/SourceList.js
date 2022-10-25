import { Folder } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";
import { Link } from "react-router-dom";
import CategoriesList from "./CategoriesList";

export default function SourceList({ data }) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    // const updateOpen = open[source_id];
    // updateOpen.isOpen = value;
    // const newOpen = [...open];
    // newOpen[source_id] = updateOpen;
    // setOpen(newOpen);
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
              <div key={i}>
                <ListItemButton>
                  <ListItemIcon>
                    <Folder />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Link
                        to={`search?type=domains&q=${v.domain}`}
                        style={{ textDecoration: "none" }}
                      >
                        {v.domain}
                      </Link>
                    }
                  />
                  {open ? (
                    <ExpandLess onClick={handleClick} />
                  ) : (
                    <ExpandMore onClick={handleClick} />
                  )}
                </ListItemButton>
                <CategoriesList open={open} data={v.categories} />
              </div>
            );
          })}
        </List>
      )}
    </>
  );
}
