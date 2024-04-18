import { useState } from "react";
import { Drawer, FloatButton } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import CustomForms from "./enquiry";

export default function DrawerIcon() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FloatButton
        icon={<QuestionCircleOutlined />}
        description="Ask Us"
        type=""
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "#3ba38e", Color: "white", width: 60, height: 60, bottom: 24, right: 15, zIndex: 999 }}
      />
      <Drawer
        title="Contact Us"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        size="small"
      >
        <CustomForms setOpen={setOpen} />
      </Drawer>
      </>
  );
}