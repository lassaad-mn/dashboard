import { Bar,Line } from 'react-chartjs-2'
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import {
  Checkbox
} from "@/components/ui/checkbox"
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress"
import { useState,useEffect } from 'react'
import { Button } from "@/components/ui/button"




export function TwoboxsTask(){
  var today = JSON.parse(localStorage.Date)
  console.log(Number(localStorage.tasksCompleted)>0)
  const [taskCompleted,setTaskCompleted]=useState(()=>{
    if(Number(localStorage.tasksCompleted)>0){
      console.log("mrgl")
      console.log(Number(localStorage.tasksCompleted))
      return Number(localStorage.tasksCompleted)
    }
    else{return   0}
  })  
  useEffect(
    ()=>{localStorage.setItem("tasksCompleted",String(taskCompleted))
      
    }
    ,[taskCompleted]
  )
 
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks") || "[]"));
   
    return(
        <div className='lg:flex p-4 gap-2  '>
        <div className=' h-75  lg:w-[60%]'>
            <Bar className=''
                data={{
                  labels:[today],
                  datasets:[{
                    label:"test",
                    data:[taskCompleted],
                    backgroundColor:"#0600c2",
                    borderRadius:"20px",
                    
                   
                  }]
                }}
                options={{
                  animation:{
                    duration:1500,
                    easing:"easeOutQuart"
                  },
                  responsive:true,
                  maintainAspectRatio:false,
                  scales:{
                    x:{
                      ticks:{
                        font:{
                          size:20,
                        },
                        color:"#eae9fc"
                      }
                    },
                    y:{
                      ticks:{
                        color:"#eae9fc",
                        font:{
                          size:20
                        }
                        
                        
                        
                      }
                    }
                  },
                  
                  
                
                }
                
                }  

                          
            />
        </div>
        <div className='tasks relative rounded flex-1 bg-primary text-tcd p-4  space-y-2'>
                <h1 className='text-3xl capitalize font-bold text-tcd '>tasks</h1>
                <div className="">
                  {tasks.map((task,index)=>{
                    return(
                    
                    <div key={index} className='flex items-center p-1 justify-between' ><p>{task}</p> <Button onClick={()=>{ 
                      let taskRemaing = JSON.parse(localStorage.tasks).filter((_,i)=>i!=index)
                      localStorage.setItem("tasks",JSON.stringify(taskRemaing))
                      setTasks(taskRemaing)
                      setTaskCompleted(Number(localStorage.tasksCompleted)+1);}} type="reset" variant="outline" className={"text-black  bg-green-500"}>
          Done !
        </Button></div>
                  )
                  })}
                </div>
                 <Progress value={taskCompleted*10}  className="w-full  ">
                  <ProgressLabel className={"capitalize"}>tasks progress</ProgressLabel>
                  <ProgressValue className={"text-green-500"}  />
                </Progress>
                <Button onClick={()=>{setTaskCompleted(0);window.location.reload()}} type="reset" variant="outline" className={"text-black hover:bg-tcd"}>
          Reset
        </Button>
                
        </div>
        
        </div>
    )
}