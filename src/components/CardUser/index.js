import styles from "./styles.module.scss";
import useStore from "../../services/store";

function CardUser() {
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
          <a href={html_url} className="btn btn-dark" target="_blank"  rel="noreferrer">
            ver repositorios
          </a>
          <a href={html_url} className="btn btn-dark" target="_blank"  rel="noreferrer">
            ver stars
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
