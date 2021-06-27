/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GithubCorner from "react-github-corner";
import useStore from "../../services/store";
import CardUser from "../../components/CardUser";
import styles from "./styles.module.scss";
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
      <div className={styles.grid}> 
       
       {repositories?.map((item) => {
         return (
          <div className={styles.grid__item}> 
          
          <div>
          <h2 >{item.name}</h2>
          <h4>{item.language}</h4>
          </div>

          <div className={styles['grid__item__wrapper-forks']}> 
          <span>stars: {item.stargazers_count}</span>  
          <span>forks: {item.forks}</span>  
          </div>

          <div>
          <button className="btn btn-dark">ver mais</button>
          </div>  

        </div> 

         )
       })}
       
      </div>
      <GithubCorner href="https://github.com/username/repo" />
    </div>
  );
}

export default User;
