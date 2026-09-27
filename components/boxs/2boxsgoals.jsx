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

export function Twoboxsgoals(){
   const [goalCompleted,setgoalCompleted]=useState(()=>{
      if(Number(localStorage.GoalsCompleted)>0){
        
        return Number(localStorage.GoalsCompleted)
      }
      else{return   0}
    })  
    useEffect(
      ()=>{localStorage.setItem("GoalsCompleted",String(goalCompleted))
        
      }
      ,[goalCompleted]
    )
    const [goals, setGoals] = useState(() => JSON.parse(localStorage.getItem("Goals") || "[]"));
    return(
        <div className='p-4 lg:flex  gap-2  space-y-2'>
          {/* <div className='h-75  lg:w-[60%]'>
            <Line
            data={{
                  labels:["test1","test2","test3"],
                  datasets:[{
                    label:"Goals",
                    
                    data:[60,70,40],
                    borderRadius:"20px",
                  }]
                }}
                options={{
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
                    },
                    responsive:true,
                    maintainAspectRatio:false,
                  
                  
                }} 
          />
          </div> */}
          
          <div className='goals rounded flex-1 bg-primary text-tcd p-4  space-y-2'>
                <h1 className='text-3xl capitalize font-bold text-orange-300 '>goals</h1>
                <FieldGroup className="">
                  {JSON.parse(localStorage.Goals).map((goal,index)=>{
                    return(
                    <div key={index} className='flex items-center p-1 justify-between' ><p>{goal}</p> <Button 
                    onClick={()=>{ 
                      let goalRemaing = JSON.parse(localStorage.Goals).filter((_,i)=>i!=index)
                      
                      localStorage.setItem("Goals",JSON.stringify(goalRemaing))
                      setGoals(goalRemaing);
                      setgoalCompleted(Number(localStorage.GoalsCompleted)+1);}}
                       type="reset" variant="outline" className={"text-black  bg-green-500"}>
          Done !
        </Button></div>
                  )
                  })}
                  
                  
                </FieldGroup>
                 <Progress id="pr" value={goalCompleted*10 }  className="w-full ">
                  <ProgressLabel className={"capitalize"}>Goals progress</ProgressLabel>
                  <ProgressValue className={"text-green-500"}  />
                </Progress>
               <Button onClick={()=>{setgoalCompleted(0) ; window.location.reload()}} type="reset" variant="outline" className={"text-black hover:bg-tcd"}>
          Reset
        </Button>
                
          </div>
        </div>
    )
}