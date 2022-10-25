import { ChevronRight } from "@mui/icons-material";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function CategoriesList({ open, data }) {
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        {data.map((v, i) => (
          <div key={i}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ChevronRight />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    to={`search?type=categories&q=${v}`}
                    style={{ textDecoration: "none" }}
                  >
                    {v}
                  </Link>
                }
              />
            </ListItemButton>
          </div>
        ))}
      </List>
    </Collapse>
  );
}
