import styles from '../styles/components/Sidebar.module.css';

import {SidebarData} from '../components/SidebarData';

import Link from 'next/link';


export function Sidebar() {
 
   return(
      <>
         <aside className={styles.appSidebar}>
            <nav>
               <ul>                  
                  { SidebarData.map(( item, index ) => {
                     return(
                        <li key={index} className={item.cName} >
                           <Link href={item.path}>                                 
                              <a title={item.title}> {item.icon}</a>                                 
                           </Link>
                        </li>
                        )
                     })}                 
               </ul>
            </nav>
         </aside>
      </>
   );
}