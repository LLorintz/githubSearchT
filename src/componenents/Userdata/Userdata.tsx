import './userdata.css'
import { userType } from '../../type/type'
import Pin from './Pin'
import Github from './Github'
import Twitter from './Twitter'
import Link from './Link'

type userprops = {
  user:userType;
}

const Userdata = ({user}:userprops) => {

  const convertDate =(datetime?:string)=>{
    if (!datetime) {
      return 'unknown date'
    }
    const date = new Date(datetime)
    const day = date.getDate()
    const month = date.toLocaleDateString("default", {month:"short"})
    const year = date.getFullYear();
    return `${day} ${month} ${year}`
  }

  return (
    <div className='user-card'>
      <div className='user-top'>
        <img className='avatar' src={user.avatar_url} alt="avatar" />
        <div className='userinfo'>
            <div className='userinfo-inner'>
                <h2>{user.name?user.name:user.login}</h2>
                <a className='login' href={`https://github.com/${user.login}`}>@{user.login}</a>
            </div>
            <p className='joined'>{convertDate(user.created_at)}</p>
        </div>
      </div>
      <div className='user-middle'>
        <p className={`bio ${!user.bio?'not-available' : ''}`}>{user.bio? user.bio:'user has no bio'}</p>
        <div className='stats'>
          <div className='stat'>
            <h3 className='stat-name'>Repos</h3>
            <p className='stat-number'>{user.public_repos}</p>
          </div>
          <div className='stat'>
            <h3 className='stat-name'>Followers</h3>
            <p className='stat-number'>{user.followers}</p>
          </div>  
          <div className='stat'>
            <h3 className='stat-name'>Following</h3>
            <p className='stat-number'>{user.following}</p>
          </div>
        </div>
      </div>
      <div className='user-bottom'>
        <div className='links'>
            <div className={`link-wrapper ${!user.location?'not-available':''}`}>
              <Pin></Pin>
              <p>{!user.location?"Not available" : user.location}</p>
            </div>
            <div className={`link-wrapper ${!user.blog?'not-available':''}`}>
              <Link></Link>
              {!user.blog?(
                <p>Not available</p>
              ):(
                <a href={user.blog} target='_blank'>{user.blog}</a>
              )}
            </div>
        </div>
        <div className='links'>
          <div className={`link-wrapper ${!user.twitter_username?'not-available':''}`}>
            <Twitter></Twitter>
            {!user.twitter_username?(
                <p>Not available</p>
              ):(
                <a href={`https://twitter.com/${user.twitter_username}`} target='_blank'>{user.twitter_username}</a>
              )}
          </div>
          <div className={`link-wrapper ${!user.company?'not-available':''}`}>
              <Github></Github>
              {!user.company?(
                <p>Not available</p>
              ):(
                <p>{user.company}</p>
              )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Userdata