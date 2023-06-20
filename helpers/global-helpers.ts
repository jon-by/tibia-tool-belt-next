import domtoimage from "dom-to-image";
import { COLORS } from "@/constants/global";

export function getFormatedDate(timestamp: number | string): string {
    const d = new Date(timestamp)
    return `${d.toLocaleString().replace(" ", "").replace(",", " - ")}`
}

export async function saveDomElementAsImage(nodeToCopy: string) {
    const node = document.getElementById(nodeToCopy);
    if (!node) return false

    try {
        await domtoimage.toBlob(node, { bgcolor: COLORS["body-bg"] })
            .then((blob) => {
                navigator.clipboard
                    .write([
                        new ClipboardItem({
                            [blob.type]: blob,
                        }),
                    ])
            }).catch(err => console.log(err))

        return true

    } catch (error) {
        return false
    }

}