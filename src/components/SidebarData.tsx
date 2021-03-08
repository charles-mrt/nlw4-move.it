import {} from "react-icons/fi";
import {FiBarChart2, FiWatch } from "react-icons/fi";


export const SidebarData = [
   {
      title: "Home",
      path:"/",
      icon:<FiWatch />,
      cName:"nav-text"
   },

   {
      title: "Relatório gráfico do usuário",
      path:"/user-graph",
      icon:< FiBarChart2 />,
      cName:"nav-text"
   }
]