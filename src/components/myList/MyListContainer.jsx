import {useState, useContext} from 'react'
import {MyListContext} from '../../context/MyListContext'
import {Eye, EyeClosed, ThumbsUp, ThumbsDown, Trash} from 'lucide-react'
import '../../css/MyList.css'
import Swal from 'sweetalert2'


const MyListContainer = ()=>{
    
    const {myList,setWatch, setLike, setDelete} = useContext(MyListContext);
    
    const deleteFilm = (id) => {
        setDelete(id);
        Swal.fire({
            title: "Film deleted from your list!",
            draggable: true,
            timer: 3000,
            showConfirmButton: false,
            position: 'top-end',
            toast: true,
            icon: 'success',
          });
        }
    return(
        <>
            <h1 className='title-my-list'>My List</h1>
            <div className='my-list-container'>
                {[...myList].sort((a,b)=> a.title.localeCompare(b.title)).map(movie=>(
                
                    <div key={movie.id} className='movie-card-my-list'>
                        <div className='movie-title-card-my-list'>
                            <h2>{movie.title}</h2>
                        </div>
                        <div className='movie-info-my-list'>
                            <div className='movie-img-my-list'>
                                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                            </div>
                            <div className='movie-saw-info-my-list'>
                                <h2 className='subtitle-my-list'>{movie.watch ? 'Unwatched' : 'Watched'}</h2>
                                 <button onClick={()=> setWatch(movie.id, !movie.watch) }>
                               {movie.watch ? <EyeClosed color="#ffffff" size={20} /> : <Eye color="#ffffff" size={20} />}
                                 </button>
                            
                            </div>
                            <div className='movie-like-info-my-list'>
                                <h2 className='subtitle-my-list'>Like</h2>
                                <div className='thumbs-container'>
                                   <button onClick={()=> setLike(movie.id, 'up')} disabled={movie.watch === true} className='thumb-btn'>
                                {movie.liked === 'up' ? <ThumbsUp color='#2bff00' size={20} /> : <ThumbsUp color='#ffffff' size={20} />}
                                   </button>
                                   <button onClick={()=> setLike(movie.id, 'down')}
                                    disabled={movie.watch === true} className='thumb-btn'>
                                {movie.liked === 'down' ? <ThumbsDown color='#ff0000' size={20} /> : <ThumbsDown color='#ffffff' size={20} />}
                                   </button>
                                </div>
                            </div>
                            <div className='movie-delete-info-my-list'>
                            <h2 className='subtitle-my-list'>Delete</h2>
                            <button onClick={()=> deleteFilm(movie.id)}>
                                <Trash color="#f20202" size={20} />
                            </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        
        </>
    )
}

export default MyListContainer