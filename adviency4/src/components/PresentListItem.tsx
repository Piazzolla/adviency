
interface Props {
    itemName: string;
    borrarCallback: (regalo: string) => void;
}


export const PresentListItem:React.FC<Props> = ({itemName, borrarCallback}) => {
  return (

            <li> {itemName}
                <button
                    onClick={ () => borrarCallback(itemName)}
                >
                    borrar
                </button>
            </li>
        )
}
