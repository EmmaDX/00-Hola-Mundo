import { useState } from 'react'

export function XFollowCard({ /*formattedUserName*/ userName = 'unknown', /*children*/ name = 'unknown', initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)

    const text = isFollowing ? '' : 'Seguir'
    const buttonClassNmae = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing) 
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className="tw-followCard-avatar" alt="Profile Picture" src={`https://unavatar.io/x/${userName}`} />
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUserName'>@{/*formattedUserName*/userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassNmae} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}
 