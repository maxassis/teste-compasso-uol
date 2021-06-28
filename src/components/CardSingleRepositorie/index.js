import styles from "./styles.module.scss"

function CardSingleRepositorie({repositories}) {

    return(
        <div className={styles.grid}> 
       
        {repositories?.map((item) => {
          return (
           <div className={styles.grid__item} key={item.index}> 
           
           <div>
           <h2 >{item.name}</h2>
           <h4>{item.language}</h4>
           </div>
 
           <div className={styles['grid__item__wrapper-forks']}> 
           <span>stars: {item.stargazers_count}</span>  
           <span>forks: {item.forks}</span>  
           </div>
 
           <div>
           <a href={item.html_url} target="_blank" rel="noreferrer" className="btn btn-dark">ver mais</a>
           </div>  
 
         </div> 
          )
        })}        
       </div>
    )
}

export default CardSingleRepositorie
