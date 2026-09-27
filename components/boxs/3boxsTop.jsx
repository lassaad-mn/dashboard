
import { Mosque } from '@/components/ui/Mosque'
import { Crosshair as Goal } from '@/components/ui/Goal'
import { ClipboardList as Task } from '@/components/ui/Tasks'
import {  Circle } from 'rc-progress';
function ThreeboxsTop() {
  console.log((JSON.parse(localStorage.Goals).length)*10)
  return (
    
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 p-4 text-tcd capitalize '>
      {/* <div  className='rounded   p-4 h-fit  bg-secondary space-y-3'>
            <div className='flex justify-between items-center'>
              <Mosque/>
              <Circle percent={100} trailWidth={5}  className=' size-12'  strokeWidth={4} strokeColor="#D3D3D3" /> 
            </div>
          
            <span>prayer remaining</span>
            <p className='text-3xl'>1</p>
            
            
          </div> */}
          <div className='rounded   p-4 h-fit  bg-secondary space-y-3'>
            <div className='flex justify-between items-center '>
              
              <Task/>
              <Circle percent={(JSON.parse(localStorage.tasks).length*10)}  trailWidth={5} className='size-12'  strokeWidth={4} strokeColor={`${((100-(JSON.parse(localStorage.tasks).length*10))>=50)?"green":"red"}`} /> 
            </div>
            <span>tasks remaining</span>
            
            <p className='text-3xl'>{JSON.parse(localStorage.tasks).length}</p>
           
          </div>
          <div className='rounded   p-4 h-fit bg-secondary space-y-3'>
            <div className='flex justify-between items-center'>
              <Goal/>
              <Circle percent={(JSON.parse(localStorage.Goals).length)*10}  trailWidth={5}   className=' size-12'  strokeWidth={4} strokeColor={`${((100-(JSON.parse(localStorage.tasks).length*10))>=50)?"green":"red"}`} /> 
            </div>
            goals remaining
            <p className='text-3xl'>{JSON.parse(localStorage.Goals).length}</p>
            
          </div>
    </div>
  )
}

export default ThreeboxsTop
