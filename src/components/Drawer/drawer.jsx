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
        description="Message Us"
        type=""
        onClick={() => setOpen(true)}
        style={{ backgroundColor: "#61dafb",  color: "black", width: 70, height: 70, bottom: 24, right: 24, zIndex: 999 }}
      />
      <Drawer
        title="Message Us"
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