import { Gift } from "../interfaces/gift"
import { v4 as uuidv4 } from 'uuid';

export const initialGiftList: Gift[] = [
    { id: uuidv4(), name: 'bicicleta', quantity: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Left_side_of_Flying_Pigeon.jpg/1280px-Left_side_of_Flying_Pigeon.jpg', receiver: 'Mariano' },
    { id: uuidv4(), name: 'libro', quantity: 2, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/L_Block_Still_life_with_books.jpg', receiver: 'Goncy' },
    { id: uuidv4(), name: 'playstation', quantity: 1, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/33/PlayStation_Four.png', receiver:'Satan' },
]