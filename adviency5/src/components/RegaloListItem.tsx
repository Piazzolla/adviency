import { FC } from 'react';
import { Regalo } from '../interfaces/Regalo';

interface Props {
    regalo: Regalo;
}

export const RegaloListItem: FC<Props> = ({ regalo }) => {
    return (
        <div className="regalo-list-item">{regalo.nombre}</div>
    )
}
