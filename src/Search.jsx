import React from 'react'
import { useGlobalContext } from './contact'
import "./search.css"


const Search = () => {
  const {queary,setQueary,isError}= useGlobalContext()
  return (
    <>
      <section className='search'>
        <h2>Movies App</h2>
        <h6>Search your favorite Movies</h6>
        <form action="#" onSubmit={(e)=>e.preventDefault()}>
          <div>
            <input type="text"  placeholder='search here' value={queary}
            onChange={(e)=>setQueary(e.target.value)}/>
          </div>
        </form>
        <div>
          <p>{isError.show && isError.msg}</p>
        </div>

      </section>
    </>
  )
}

export default Search
