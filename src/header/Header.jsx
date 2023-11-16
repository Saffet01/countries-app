import React from 'react'
import  "./Header.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Header = (props) => {
  console.log(props);

  const {onClick, darkMode} = props;

  return (
    <div className={`${darkMode ? 'darkMode header' : 'header'}`}>
      <div className={`${darkMode ? 'darkMode logo' : 'logo'}`}>
        Where in the world?
      </div>

      <div className="darkModeBtn" onClick={onClick}>
        <div className={`${darkMode ? 'darkMode darkModeLogo' : 'darkModeLogo'}`} >
          <DarkModeIcon/>
        </div>
        <p className={`${darkMode ? 'darkMode darkModeBtnText' : 'darkModeBtnText'}`}>Dark Mode</p>
      </div>
    </div>
  )
}

export default Header