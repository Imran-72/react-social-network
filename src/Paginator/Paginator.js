import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from "classnames"


const Paginator = ({usersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {
    let pagesCount = Math.ceil(usersCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rigthPortionPageNumber = portionNumber * portionSize
    return <div className={s.paginator}>
        {portionNumber > 1 &&
        <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rigthPortionPageNumber)
            .map(p => {
                return <span className={cn({
                        [s.selectedPage]: currentPage === p
                    },
                    s.pageNumber)}
                             onClick={(e) => {
                                 onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
        <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>Next</button>}
    </div>
}

export default Paginator;