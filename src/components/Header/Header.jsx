import '../../css/App.css';
import totalLogo from '../../assets/totalink-logo.png';
import { MenuButton } from '../MenuButton/MenuButton';
import { Link } from 'react-router-dom';

import { useBreakpoint } from '../../hooks/useBreakpoint';
import { HeaderNav } from '../HeaderNav/HeaderNav';

export const Header = () => {
  const breakpoint = useBreakpoint();

  // console.log(breakpoint);

  return (
    <div className="header-container">
      <Link to="/" >
        <img src={totalLogo} alt="Total Ink Logo" />
      </Link>
      {
        breakpoint === 'mobile' || breakpoint === 'tablet' ?
        <MenuButton /> :
        null
      }
      { breakpoint === 'notebook' || breakpoint === 'desktop' ?
        <HeaderNav /> :
        null
      }
      { breakpoint === 'loading' ?
        <span>Loading</span>:
        null
      }
    </div>    
  )

  // if (breakpoint === '') {
  //   return (
  //     <div className="header-container">
  //       <Link to="/" >
  //         <img src={totalLogo} alt="Total Ink Logo" />
  //       </Link>
  //     </div>
  //   )
  // } else if (breakpoint === 'mobile' || breakpoint === 'tablet') {
  //   return (
  //     <div className="header-container">
  //       <Link to="/" >
  //         <img src={totalLogo} alt="Total Ink Logo" />
  //       </Link>
  //       <MenuButton />
  //     </div>
  //   )
  // } else if (breakpoint === 'laptop' || breakpoint === 'desktop') {
  //   return (
  //     <div className="header-container">
  //       <Link to="/" >
  //         <img src={totalLogo} alt="Total Ink Logo" />
  //       </Link>
  //       <HeaderNav />
  //     </div>
  //   )
  // }
  
  // { breakpoint === '' ? null : null }
  // { breakpoint === 'mobile' || breakpoint === 'tablet' ?
  //   <div className="header-container">
  //     <Link to="/" >
  //       <img src={totalLogo} alt="Total Ink Logo" />
  //     </Link>
  //     <MenuButton />
  //   </div> :
  //   null
  // }
  // { breakpoint === 'laptop' || breakpoint === 'desktop' ?
  //   <div className="header-container">
  //     <Link to="/" >
  //       <img src={totalLogo} alt="Total Ink Logo" />
  //     </Link>
  //   </div> :
  //   <HeaderNav />
  // }
}