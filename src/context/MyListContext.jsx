import {createContext, useState} from 'react'


export const MyListContext = createContext();

export const MyListProvider = ({children}) =>{

    const [myList, setMyList]= useState([]);
    function setLike(id, value){
        setMyList(myList.map(movie=> movie.id === id ? {...movie, liked: value} : movie))
    }
    function setWatch(id, value){
        setMyList(myList.map(movie=> movie.id === id ? {
            ...movie, watch: value} : movie))
        }
    function setDelete(id){
        setMyList(myList.filter(movie=> movie.id !== id))
    }

    return(

        <MyListContext.Provider value={{myList, setMyList, setLike, setWatch, setDelete}}>
            {children}
        </MyListContext.Provider>

    )
}