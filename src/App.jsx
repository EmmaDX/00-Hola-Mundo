import './App.css'
import { XFollowCard } from './XFollowCard.jsx'

const Kitsune = {
    userName: "KitsuneMaru__",
    name: "KitsuneMaru",
    initialIsFollowing: true
  }

  const users = [
    {
      userName: "_EmmeDX",
      name: "EmmaDX",
      initialIsFollowing: true
    },
    {
      userName: "Rubiu5",
      name: "elrubius",
      initialIsFollowing: true
    },
    {
      userName: "dedreviil",
      name: "elded",
      initialIsFollowing: false
    },
    {
      userName: "GermanGarmendia",
      name: "German",
      initialIsFollowing: false
    },
    {
      ...Kitsune
    }
  ]

export function App() {
  //const format = (userName) => `@${userName}` // FUNCION
  //const formattedUserName = (<span>@_EmmeDX</span>) //ELEMENTO DE REACT

  return (
    <section className='App'>
      <h1>A quién seguir</h1>
      {
        users.map(user => { 
          const {userName, name, initialIsFollowing} = user
          return (
            <XFollowCard
              key={userName}
              userName={userName}
              name={name}
              initialIsFollowing={initialIsFollowing}
            />
          )
        })
      }
    </section> 
  )
}