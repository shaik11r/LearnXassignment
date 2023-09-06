import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
function Navbar() {
  return (
    <div className="navbar__first">
      <div className="navbar__logo">logo</div>
      <div className="navbar_left">
        <input placeholder='Search' className='icon' type='text' />
        <NotificationsNoneIcon className='navbar_icon'/>
        <MailOutlineIcon className='navbar_icon'/>
        <div>profile</div>
      </div>
    </div>
  );
}
export default Navbar;
