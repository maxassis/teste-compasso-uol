/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import GithubCorner from "react-github-corner";
import useStore from "../../services/store";
import CardUser from "../../components/CardUser";
import api from "../../services/api";
import SingleCardRepositorie from '../../components/CardSingleRepositorie/index'

function User() {
  const [repositories, setRepositories] = useState();
  const [stars, setStars] = useState()
  const [toggleRepositories, setToggleRepositories] = useState(false)
  const [toogleStars, setToggleStars] = useState(false)
  const username = useStore((state) => state.selectedUser);
  
  console.log(repositories)
  
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
      <CardUser 
      setToggleRepositories={setToggleRepositories} 
      toggleRepositories={toggleRepositories} 
      setToggleStars={setToggleStars}
      toogleStars={toogleStars}
      />

      {!!toggleRepositories && 
      <SingleCardRepositorie 
      repositories={repositories} 
      setToggleRepositories={setToggleRepositories} 
      toggleRepositories={toggleRepositories}
      setToogleStars={setToggleStars}
      toogleStars={toogleStars}
      />}

      {!!toogleStars && 
      <SingleCardRepositorie 
      repositories={stars} 
      setToggleRepositories={setToggleStars} 
      toggleRepositories={toogleStars}
      setToogleStars={setToggleStars}
      toogleStars={toogleStars}
      />}  
         
      <GithubCorner href="https://github.com/maxassis?tab=repositories" target="_blank" rel="noreferrer" />
    </div>
  );
}

export default User;
