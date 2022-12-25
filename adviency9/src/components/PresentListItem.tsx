import { FC } from "react";

interface Props {
    present: string;
    onBorrarItem: (item: string) => void;

}

export const PresentListItem: FC<Props> = ({ present, onBorrarItem }) => {

    return (
        <>
            {present}
            <button
                onClick={() => onBorrarItem(present)}
            >x</button>
        </>
    )
}
