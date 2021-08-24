import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';

import './styles.scss';

export default function Header () {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header__icon" />
      </IconButton>

      <img 
        src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-700x394.png" 
        alt="" 
      />
    </div>
  )
};
