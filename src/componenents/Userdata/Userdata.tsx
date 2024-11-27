import './userdata.css'
import { userType } from '../../type/type'

type userprops = {
  user:userType;
}

const Userdata = ({user}:userprops) => {
  return (
    <div className='user-card'>
      <div className='user-top'>
        <img className='avatar' src='https://avatars.githubusercontent.com/u/177461493?v=4' alt="avatar" />
        <div className='userinfo'>
            <div className='userinfo-inner'>
                <h2>The Octocat</h2>
                <a href={`https://github.com/${user.login}`}>@octocat</a>
            </div>
            {user.created_at}
        </div>
      </div>
      <div className='user-middle'>
        

      </div>
      <div className='user-bottom'>

      </div>
    </div>
  )
}

export default Userdata