import React from "react";
import clsx from "clsx";
import { HvTypography } from "@hitachivantara/uikit-react-core";

import useStyles from "./styles";

interface Message {
  error?: string;
  success?: string;
}

interface MessageProps {
  message: Message;
  status: string;
}

const Message: React.FC<MessageProps> = ({ message, status }: MessageProps) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, classes[status as "error" | "success"])}>
      <HvTypography variant="normalText">{message.error}</HvTypography>
    </div>
  );
};

export default Message;
