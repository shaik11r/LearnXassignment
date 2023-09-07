import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import EditIcon from "@mui/icons-material/Edit";
import AddCircleIcon from "@mui/icons-material/AddCircle";
export default function Tabcomponent() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="tabcomponent" sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="About" value="1" />
            <Tab label="Skills & Certificated" value="2" />
            <Tab label="Posts" value="3" />
            <Tab label="Spaces" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1" className="tab__main" style={{ maxHeight: "700px", overflowY: "auto" }}>
          <div className="tab__first">
            <div>
              I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <EditIcon style={{ color: "#7c7cd3" }} />
          </div>
          <div className="line"></div>
          <div className="tab__second">
            <div className="tab__second-experience">Experience</div>
            <div className="tab__second-edit">
              <div className="tab__second_left">
                <div className="tab__second-company">Tata Consultany Services</div>
                <div className="tab__second-date">Januray 2023-present</div>
                <div className="tab__second-location">hyderdarbad</div>
                <div className="tab__second-description">
                  I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>
              <AddCircleIcon style={{ color: "#7c7cd3" }} />
              <EditIcon style={{ color: "#7c7cd3" }} />
            </div>
          </div>
          <div className="line"></div>
          <div className="tab__second">
            <div className="tab__second-experience">Education</div>
            <div className="tab__second-edit">
              <div className="tab__second_left">
                <div className="tab__second-company">KARE</div>
                <div className="tab__second-date">Januray 2017-July 2021</div>
                <div className="tab__second-location">madurai,tamilnadu</div>
                <div className="tab__second-description">
                  I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </div>
              </div>
              <AddCircleIcon style={{ color: "#7c7cd3" }} />
              <EditIcon style={{ color: "#7c7cd3" }} />
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2" style={{ maxHeight: "700px", overflowY: "auto" }}>
          I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </TabPanel>
        <TabPanel value="3" style={{ maxHeight: "700px", overflowY: "auto" }}>
          I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </TabPanel>
        <TabPanel value="4" style={{ maxHeight: "700px", overflowY: "auto" }}>
          I Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </TabPanel>
      </TabContext>
    </Box>
  );
}
