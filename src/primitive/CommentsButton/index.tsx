import React, { useRef } from "react";

import { Button } from "@chakra-ui/react";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  onClick?: () => void;
}

const CommentsButton: React.FC<IProps> = ({
  onClick,
  children,
  ...restProps
}) => {
  const rootRef = useRef<HTMLButtonElement>(null);

  return (
    <Button
      marginTop="5px"
      h="30px"
      fontSize="13px"
      colorScheme="blackAlpha"
      w="auto"
      ref={rootRef}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </Button>
  );
};

export default CommentsButton;
