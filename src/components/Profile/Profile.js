import GroupsIcon from "@mui/icons-material/Groups";
import * as React from "react";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Progressbarfun from "./Progressbar";
import Picture from "../assets/ben-sweet-2LowviVHZ-E-unsplash.jpg";
import AddCircleIcon from "@mui/icons-material/AddCircle";
const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 40,
    height: 24,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#7673f4" : "#7673f4",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#7673f4",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.mode === "light" ? "" : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 19,
      height: 20,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#39393D" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  })
);

function Profile() {
  return (
    <div className="profile__first">
      <img className="profile_img" src={Picture} alt="picture" />
      <div className="profile__second">
        <div className="profile__second-name">Nadeen Shaik</div>
        <div className="profile__second-role">UI/UX Designer</div>
        <div className="profile__second-bottom">
          <GroupsIcon />
          <div>21 followers</div>
          <div>63 following</div>
        </div>
      </div>
      <div className="profile__third">
        <div>Make my profile visible to employers</div>
        <FormGroup>
          <FormControlLabel control={<IOSSwitch sx={{ ml: 2 }} defaultChecked />} />
        </FormGroup>
      </div>
      <div className="profile_third--para">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry
      </div>
      <div className="profile_fourth"></div>
      <div className="profile_fifth-wheel"></div>

      <div className="onlineLinks" style={{ color: "#68647e" }}>
        <div>Online links</div>
        <AddCircleIcon style={{ color: "#7c7cd3", marginRight: "16" }} />
      </div>
      <div className="onlineLinks-para"> Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
      <div className="profile_sixth-ranking">
        <Progressbarfun />
      </div>
    </div>
  );
}
export default Profile;
