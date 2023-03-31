import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { COLORS } from "@/constants/global";
import { useTranslation } from "react-i18next";
import { CheckMark, CopyIcon } from "../icons/icons";

import { CopyButton } from "./copyToClipboard.styled";

type copyToClipboardProps = {
  children: string;
  title?: string;
 
  toastMessage?: string;
};

const CopyToClipboard = ({
  children,
  title, 
}: copyToClipboardProps) => {
  const [copied, setCopied] = useState(0);
  const { t } = useTranslation();

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(1);
      toast.success(t("copyToClipboardMessage"), { autoClose: 2000 });
    } catch (error) {
      console.error(error);
      setCopied(0);
    }
  }

  return (
    <CopyButton
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}      
      title="transfer message"
      copied={copied}
      onClick={handleClick}
    >
      {title || title === "" ? title : children}
      {!copied ? (
        <CopyIcon width={18} heigth={18} />
      ) : (
        <CheckMark width={18} heigth={18} color={COLORS.positive} />
      )}
    </CopyButton>
  );
};

export default CopyToClipboard;