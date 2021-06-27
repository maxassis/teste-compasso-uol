import styles from "./styles.module.scss";
import useStore from "../../services/store";

function CardUser({toggleRepositories, setToggleRepositories, setToggleStars, toogleStars}) {
  const userData = useStore((state) => state.selectedUser);
  const {
    login,
    avatar_url,
    name,
    bio,
    followers,
    following,
    public_repos,
    html_url,
  } = userData;


  function toogleCardStars() {
  if(toggleRepositories === true) {
    setToggleRepositories(!toggleRepositories) }
  
    if(toogleStars === true) {
      setToggleStars(true)  
    }  

    setToggleStars(true)  
  }

  function toogleCardRepositories() {
    if(toogleStars === true) {
      setToggleStars(!toogleStars) }

      if(toggleRepositories === true) {
        setToggleRepositories(true) }  
      
      setToggleRepositories(true)  
    }




  return (
    <div className={styles["wrapper-user"]}>
      <div>
        <img src={avatar_url} alt="avatar" />
      </div>

      <div>
        <h1>{name}</h1>
        <h2>{`@${login}`}</h2>

        <p>{bio}</p>

        <div className={styles["wrapper-user__wrapper-followers"]}>
          <span>Followers: {followers}</span>
          <span>Following: {following}</span>
        </div>

        <h4>Repositorios publicos: {public_repos}</h4>

        <div className={styles["wrapper-user__wrapper-buttons"]}>
          <a href={html_url} className="btn btn-dark" target="_blank"  rel="noreferrer">
            ver perfil
          </a>
          <button 
          className="btn btn-dark" 
          target="_blank"  
          rel="noreferrer"
          onClick={toogleCardRepositories}
          >
            ver repositorios
          </button>
          <button 
          className="btn btn-dark" 
          target="_blank"  
          rel="noreferrer"
          onClick={toogleCardStars}
          >
            ver stars
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
