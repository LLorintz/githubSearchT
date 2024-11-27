import './header.css'
import light from '/images/lightIcon.svg'
import dark from '/images/darkIcon.svg'

type HeaderProps ={
  darkmode:boolean;
  toggleDarkmode:()=>void;
}

const Header = (props:HeaderProps) => {
  return (
    <div className='header'>
        <h1 className='websitename'>devfinder</h1>
        <button onClick={props.toggleDarkmode} className='theme-toggle'>
        {props.darkmode ? 'light' : 'dark'}
        {props.darkmode ? <img src={light} alt="" /> : <img src={dark} alt="" /> }
        </button>
    </div>
  )
}

export default Header