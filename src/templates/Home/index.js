import {useState} from 'react'
import GithubCorner from 'react-github-corner';
import styles from "./styles.module.scss"
import Lottie from 'react-lottie';
import animationData from '../../assets/imgs/github-icon-black.json'
import api from '../../services/api'
import useStore from '../../services/store'
import { useHistory } from 'react-router-dom'


const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

function Home() {
    const [username, setUsername] = useState("")

    const history = useHistory()
    const addStore = useStore((state) => state.setSelectedUser)

    console.log(username)

    async function fetch(){
      await api.get(username)
        .then((response) => {
          addStore(response.data)
           history.push('/user')
        
        }).catch((err) => {
          alert("digite um usuario valido");
       });
    } 

    return(
      <main className="container">
        <div className={styles["wrapper-page"]}>
    
        <div className={styles["wrapper-title"]}>
        <h1>Compass Developer Search</h1>
        <h3>Encontre facilmente um desenvolvedor</h3>
        <input 
        type="text" 
        placeholder="ex: maxassis" 
        required 
        value={username}
        onChange={(e) => setUsername(e.target.value)} />
        <button className="btn btn-dark" onClick={fetch}>BUSCAR</button>
        </div>
        
        <div className="wrapper-logo">
        <Lottie 
	    options={defaultOptions}
        height={350}
        width={350}
      />
        </div>

        </div>
        <GithubCorner href="https://github.com/username/repo" /> 
       </main>  
    )
}

export default Home 