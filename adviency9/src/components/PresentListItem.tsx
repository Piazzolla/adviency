import { FC } from "react";
import { Present } from "../interfaces/Present";

interface Props {
    present: Present;
    onBorrarItem: (item: string) => void;

}

export const PresentListItem: FC<Props> = ({ present, onBorrarItem }) => {

    return (
        <>
            <span>
                {present.name}
            </span>
            <span style={{ marginLeft: '5px', marginRight: '5px'}}>
                {present.quantity}
            </span>
            <button
                onClick={() => onBorrarItem(present.name)}
            >x</button>
        </>
    )
}
