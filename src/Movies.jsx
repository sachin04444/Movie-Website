import React from 'react'
import { useGlobalContext } from "./contact"
import './card.css'
import { NavLink } from 'react-router-dom'

const Movies = () => {
  const { movie, isLoading } = useGlobalContext()
  if(isLoading){
    return (
      <div className='loding'>
        <div>Loading</div>
      </div>
    )
  }
  return (
    <div>
      <div className='card'>
        <div className="full_card">
          {movie.map((curmovie) => {
             const {imdbID,Title,Poster} = curmovie
             const movieName=Title.substring(0,15)
            return <>
             <NavLink to={`movie/${imdbID}`} key={imdbID}>
              <div className='card_main'>
                <h2>{movieName.length >= 15 ? `${movieName}..`:movieName}</h2>
                <div className="imgcontiner">
                  <img src={Poster} alt="" className='imgTag' />
                </div>
              </div>
              </NavLink>
            </>
          })}
        </div>
      </div>
    </div>
  )
}

export default Movies
