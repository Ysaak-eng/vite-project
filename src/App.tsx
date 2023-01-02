import './global.css';
import {Header} from './components/Header'
import styles from './App.module.css';
import {Sidebar} from './components/Sidebar'
import {Post} from './components/Post'
import avatarImg from './assets/Avatar.jpg';
import Carla from './assets/Carla.jpg';



const post =[
  {
    id:1,
  author:{
    AvatarUrl:avatarImg,
    name:'Ysaak Silverio dos Santos',
    role:'Progrmador Freelancer',

  },
    content:[
          {type:'paragraph',content:'Fala galera 👋'},

          {type:'paragraph',content:'  Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
          {type:'link',content:'Jane.design/doctorcare'},
          {type:'pareagraph',content:'Acesse e deixe seu feedback 👉'},

            
    ],
    publishedAt: new Date('2022-11-32 20:00:00'),
       
},
{id:2,
  author:{
    AvatarUrl:Carla,
    name:'Carla Dexeira',
    role:'Medica',

  },
    content:[
          {type:'paragraph',content:'Fala galera 👋'},

          {type:'paragraph',content:'  Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
          {type:'link',content:'Jane.design/doctorcare'},
          {type:'pareagraph',content:'Acesse e deixe seu feedback 👉'},

            
    ],
    publishedAt : new Date('2022-06-13 15:00:00'),
       
},
]



function App() {

  return (
    <div>
    <Header/>
 
      <div className={styles.wapper}>

        <Sidebar/>

        <main>

          {post.map(post=>{


               return( <Post
               key={post.id}
               content={post.content as []}
               author={post.author}
               publishedDate={post.publishedAt}
               
               />)


          })}


        </main>


      </div>

   </div>
  )
}

export default App
