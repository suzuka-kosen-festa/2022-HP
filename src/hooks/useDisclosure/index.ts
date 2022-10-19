import { useState } from "react";

const useDisclosure = (initialValue: boolean) => {
  const [isOpen, setIsOpen] = useState(initialValue);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return {
    isOpen,
    open,
    close,
  };
};

export { useDisclosure };
