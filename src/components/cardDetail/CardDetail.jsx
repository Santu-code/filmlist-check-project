import React from 'react'
import {useLocation} from 'react-router-dom'
import {Button} from '@/components/ui/button.jsx'
import '../../css/CardDetail.css'
import {useContext} from 'react'
import {MyListContext} from '../../context/MyListContext.jsx'
const CardDetail = ({movie, onClose}) => {

    const {myList, setMyList}  = useContext(MyListContext);



    if(!movie){
      return  <h2>No se encontro la pelicula.</h2>
    }

  return (
    <div className='card-overlay'>
      <div className= 'card-detail'>
        <button className= 'close-btn' onClick={onClose}>X</button>
        <div className='card-img'>
          <img className='imgCard' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>
        <div className='card-text-container'>
          <h2 className='titleCard'>{movie.title}</h2>
          <div className='item1'>
            <h2 className='title-card-detail'>-SUMMARY:</h2>
            <p className='summaryCard'>{movie.overview}</p>
          </div>
          <div className='item2'>
            <h2 className='title-card-detail'>-RELEASE DATE:</h2>
            <p >{movie.release_date}</p>
          </div>
          <div className='item3'>
            <h2 className='title-card-detail'>-RATING:</h2>
            <p>{movie.vote_average.toFixed(1)}</p>
          </div>
          <div className='item4' >
            <Button className='btn-add' onClick={()=> setMyList([...myList, {...movie, watch: false, liked: null}])}> + Add to my list</Button>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default CardDetail