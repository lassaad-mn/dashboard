import { useState } from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import { ArrowUpRightIcon, Goal } from "lucide-react"
import { Chart as chartjs , defaults } from 'chart.js/auto'
import { Bar,Line } from 'react-chartjs-2'
import {
  Checkbox
} from "@/components/ui/checkbox"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"

import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {  Circle } from 'rc-progress';
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { color } from 'chart.js/helpers'
import { Mosque } from '@/components/ui/Mosque'
import { Crosshair } from '@/components/ui/Goal'
import { ClipboardList as Task } from '@/components/ui/Tasks'
import { TwoboxsTask } from '@/components/boxs/2boxtasks'
import { Twoboxsgoals } from '@/components/boxs/2boxsgoals'
import { SideBarCom } from '@/components/sideBar/sideBar'
import ThreeboxsTop from '@/components/boxs/3boxsTop'
import { TaskPage } from '@/components/boxs/TaskMangmentPage'
import { GoalPage } from '@/components/boxs/Goalsmanagment'


function App() {
  
  return (
    <> 
    <div className='container text-tcd overflow-hidden'>
      <SideBarCom>
          <Routes>
            <Route path='/' element={
              <>
                <ThreeboxsTop/>
                <TwoboxsTask/>
                <Twoboxsgoals/>
              </>
              
          }    />
            <Route path='/mainDashboard' element={
              <>
                <ThreeboxsTop/>
                <TwoboxsTask/>
                <Twoboxsgoals/>
              </>
              
          }    />
          <Route path='/TasksPage' element={<TaskPage/>} />
          <Route path='/GoalsPage' element={<GoalPage/>}/>
              
              
          </Routes>
      </SideBarCom>
    </div>
         
    </>
  )
}

export default App
