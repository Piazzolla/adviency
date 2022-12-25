import { useEffect, useState } from "react";
import { Present } from "../interfaces/Present";



export const useList = ( initialList:Present[] = []) => {


    useEffect(() => {
       if(!initialList) {
        if(localStorage.getItem('lista'))
        {
            initialList = JSON.parse(localStorage.getItem('lista')!);
        }
        else {
            throw Error('No hay una lista inicial de regalos');
        }
       }
    }, [])
    
    const [listState, setListState] = useState(initialList);

    const onBorrarItem = (item:string) => {
        setListState(listState.filter( p => p.name !== item ));
    }

    const onBorrarTodo = () => {
        setListState([]);
    }

    const onAgregar = (item:string, quant = 1) => {
        if(!item) return;
        if( (listState.map( i => i.name)).includes(item)) {
             
            const newState = listState.map( i => {
                if(i.name === item){
                {
                    i.name,
                    i.quantity = i.quantity + quant;
                }}
                return i;

            })

            setListState(newState);

        }
        else {
            setListState( [...listState, { name: item, quantity: quant}])
        }
    }
        


    return {
        listState,
        onBorrarItem,
        onBorrarTodo,
        onAgregar
    }

}