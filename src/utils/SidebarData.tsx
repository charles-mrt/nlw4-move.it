import {FiBarChart2, FiWatch, FiUser} from "react-icons/fi";


export const SidebarData = [
   {
      title: "Home",
      path:"/moveit",
      icon:<FiWatch />,
      cName:"nav-text"
   },

   {
      title: "Relatório gráfico do usuário",
      path:"/user-graph",
      icon:< FiBarChart2 />,
      cName:"nav-text"
   },

    {
      title:"alterar nome",
      path:"/",
      icon:<FiUser />,
      cName:"nav-text",
      target:"_blank"      
   }
]