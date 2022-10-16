import React, { useContext, useEffect, useState } from "react";



const AppContext = React.createContext();

const API_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState([])
  const [isError, setIsError] = useState({ show: 'false', msg: '' })
  const [queary,setQueary]=useState("titanic")
  const getmovies = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log(data)
      if (data.Response === "True") {
        setIsLoading(false)
         setIsError({
          show: false,
          msg: ""
        })
        setMovie(data.Search)
        
      } else {
        setIsError({
          show: true,
          msg: data.Error
        })
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {

   let timeout= setTimeout(()=>{
    getmovies(`${API_url}&s=${queary}`)
   },800);
   return()=>clearTimeout(timeout);
    
  }, [queary])

  return <AppContext.Provider value={{isLoading,isError,movie,queary,setQueary}}>
    {children}
  </AppContext.Provider>
}
const useGlobalContext = () => {
  return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }