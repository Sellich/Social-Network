import { useEffect } from "react"
import { useState } from "react"
import c from "./SearchForm.module.css"
import loupe from "../../common/icons/loupe.png"

const SearchForm = ({ currentPage, pageSize, getUsers }) => {

   const [formValue, setValue] = useState()
   useEffect(() => {

      const filter = setTimeout(() => { getUsers(currentPage, pageSize, formValue) }, 1000)
      return () => clearTimeout(filter)
   }, [formValue])


   return (
      <form >
         <div className={c.form}>
            <input type="search" value={formValue} onChange={(e) => setValue(e.target.value)} className={c.input} />
            <div className={c.loupeContainer} onClick={() => getUsers(currentPage, pageSize, formValue)}>
               <img src={loupe} alt="loupe" className={c.loupe} />
            </div>
         </div>
      </form>
   )
}

export default SearchForm;