import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"
import { TwoboxsTask } from '@/components/boxs/2boxtasks'
import { Twoboxsgoals } from '@/components/boxs/2boxsgoals'
import ThreeboxsTop from '@/components/boxs/3boxsTop'
export function  SideBarCom({children}){
    return(
        <SidebarProvider className={" bg-bcd  "} >
                <Sidebar   >
                <SidebarHeader className={"bg-bcd  text-tcd "} >
                    <div className='flex items-center gap-3 
                    '>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="text-accent hover:text-primary bi bi-graph-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
                    </svg> 
                    <p className=' capitalize'>dashboard </p>
                    
                    </div>
                </SidebarHeader>

                <SidebarContent className={"bg-bcd text-tcd capitalize"}>
                    <span>menu</span>
                    <div className='p-4  '>
                    
                    <ul className='space-y-6'>
                        <li className='cursor-pointer  '>  <Link to="/mainDashboard" className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class =" text-accent hover:text-primary bi bi-list-task" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
            <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
        </svg><span className='text-gray-400 hover:text-tcd'>home</span>
       </Link> </li>
                        
                        <li  className='cursor-pointer  '><Link to="/TasksPage" className="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class=" bi text-accent hover:text-primary  bi-graph-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07"/>
        </svg><span className='text-gray-400 hover:text-tcd'>task managment</span></Link></li>
                       
                        <Link to="/GoalsPage" className="flex items-center gap-2"><li className='cursor-pointer flex items-center gap-2 '><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class=" bi text-accent hover:text-primary  bi-bookmark-check" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
        </svg><span className='text-gray-400 hover:text-tcd'>specific goals</span></li></Link>
                        
                    </ul>
                    </div>
                </SidebarContent>

                <SidebarFooter className={"bg-bcd text-tcd"}>
                    Settings
                </SidebarFooter>
                </Sidebar>
            <main className='w-full '>
                <SidebarTrigger />
                {children}
       




            </main>
        </SidebarProvider>
    )
        
}