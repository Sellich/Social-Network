import { useState } from "react"
import c from "./Paginator.module.css"
const Paginator = (props) => {

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   const portionSize = 10

   let pages = []

   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
   }

   let portionCount = Math.ceil(pagesCount / portionSize)

   let [portionNumber, setPortionNumber] = useState(1)

   let leftBorder = (portionNumber - 1) * portionSize + 1
   let rightBorder = portionNumber * portionSize


   return (
      <div>
         {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}> PREV </button>}
         {pages.filter(p => p <= rightBorder && p >= leftBorder).map((p) => {
            return <span key={p} className={p === props.currentPage ? c.selected : null}
               onClick={() => props.onPageChange(p)}> {p} </span>
         })}
         {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}> NEXT </button>}
      </div>

   )
}

export default Paginator