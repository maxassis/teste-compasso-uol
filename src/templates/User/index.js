/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GithubCorner from "react-github-corner";
import useStore from "../../services/store";
import CardUser from "../../components/CardUser";
//import styles from "./styles.module.scss";
import api from "../../services/api";

function User() {
  const [repositories, setRepositories] = useState();
  const [stars, setStars] = useState()
  const username = useStore((state) => state.selectedUser);

  async function fetchRepositories() {
    await api
      .get(username.login+"/repos")
      .then((response) => {
        setRepositories(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  }

  async function fetchStars() {
    await api
      .get(username.login+"/starred")
      .then((response) => {
        setStars(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  } 

  useEffect(() => {
   fetchRepositories();
   fetchStars()
  }, []);


  return (
    <div className="container">
      <CardUser />
      
      <GithubCorner href="https://github.com/username/repo" />
    </div>
  );
}

export default User;
