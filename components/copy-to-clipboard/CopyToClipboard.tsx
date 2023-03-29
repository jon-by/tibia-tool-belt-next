import { useState, useTransition } from "react";
import { toast } from "react-toastify";
import { COLORS } from "@/constants/global"
import { useTranslation } from "react-i18next";
import { CheckMark, CopyIcon } from "../icons/icons";

import { CypyButton } from "./copyToClipboard.styled";

type copyToClipboardProps = {
  children: string;
  title?: string;
  svgMargin?: boolean;
  toastMessage?: string;
};

const CopyToClipboard = ({
  children,
  title,
  svgMargin = false,
}: copyToClipboardProps) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(children);
      setCopied(true);
      toast.success(t("copyToClipboardMessage"), { autoClose: 2000 });
    } catch (error) {
      console.error(error);
      setCopied(false);
    }
  }

  return (
    <CypyButton
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      svgMargin={svgMargin}
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
    </CypyButton>
  );
};

export default CopyToClipboard;
