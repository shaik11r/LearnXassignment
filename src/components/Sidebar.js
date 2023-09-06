import WindowIcon from '@mui/icons-material/Window';
import DraftsIcon from '@mui/icons-material/Drafts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import Person2Icon from '@mui/icons-material/Person2';
import ExploreIcon from '@mui/icons-material/Explore';
function Sidebar(){
    return(
        <div className="sidebar__main">
            <div className="sidebar__second">
                <WindowIcon className='sidebar_icon'/>
                <div>Home</div>
            </div>
            <div className="sidebar__second">
                <DraftsIcon className='sidebar_icon'/>
                <div>Job Invites</div>
            </div>
            <div className="sidebar__second">
               <AnalyticsIcon className='sidebar_icon'/>
                <div>Analytics</div>
            </div>
            <div className="sidebar__second">
                <Person2Icon className='sidebar_icon'/>
                <div>My Profile</div>
            </div>
            <div className="sidebar__second">
                <ExploreIcon className='sidebar_icon'/>
                <div>Explore</div>
            </div>
        </div>
    )
}
export default Sidebar;