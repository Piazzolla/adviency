import { useEffect, useState } from "react";



export const useList = ( initialList:string[] = []) => {


    //TODO: get from LocalStorage useEffect(() => {
        
    // }, [])
    

    const onBorrarItem = (item:string) => {
        setListState({ ...listState, presents: listState.presents.filter( p => p !== item )});
    }

    const onBorrarTodo = () => {
        setListState({...listState, presents: []});
    }

    const onAgregar = (item:string) => {
        if(!item) return;
        setListState({...listState, presents: [item, ...listState.presents]})
    }
        
    const [listState, setListState] = useState({presents:initialList});


    return {
        ...listState,
        listState,
        onBorrarItem,
        onBorrarTodo,
        onAgregar
    }

}