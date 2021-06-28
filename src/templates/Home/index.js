import GithubCorner from "react-github-corner";
import { useForm } from "react-hook-form";
import styles from "./styles.module.scss";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/github-icon-black.json";
import api from "../../services/api";
import useStore from "../../services/store";
import { useHistory } from "react-router-dom";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Home() {
  const { register, handleSubmit } = useForm();

  const history = useHistory();
  const addStore = useStore((state) => state.setSelectedUser);

  async function onSubmit(data) {
    await api
      .get(data.username)
      .then((response) => {
        addStore(response.data);
        history.push("/user");
      })
      .catch((err) => {
        alert("digite um usuario valido");
      });
  }

  return (
    <main className="container">
      <div className={styles["wrapper-page"]}>
        <div className={styles["wrapper-page__wrapper-title"]}>
          <h1>Compass Developer Search</h1>
          <h3>Encontre facilmente um desenvolvedor</h3>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="ex: maxassis"
              required
              {...register("username")}
            />
            <button className="btn btn-dark" type="submit">
              BUSCAR
            </button>
          </form>
        </div>

        <div className={styles["wrapper-page__wrapper-title__logo"]}>
          <Lottie options={defaultOptions} />
        </div>
      </div>
      <GithubCorner href="https://github.com/maxassis" target="_blank" rel="noreferrer" />
    </main>
  );
}

export default Home;
