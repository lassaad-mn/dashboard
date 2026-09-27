import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { useEffect } from "react"

export function TaskPage(){
  const DateTask = new Date().getDate()
  console.log(JSON.parse(localStorage.tasks).length)
   const [Tasks,setTasks]=useState(()=>{
    if(JSON.parse(localStorage.tasks).length!=0){return JSON.parse(localStorage.tasks)}
    else{return []}
   })
  //  3dd tasks
   const [date,setDate]=useState([String(DateTask)])
   localStorage.setItem("Date",JSON.stringify(date))
   useEffect(()=>{localStorage.setItem("tasks",JSON.stringify(Tasks))
    
    if(JSON.parse(localStorage.tasks).length>=1){document.getElementById("btndelall").style.display="block"}
  else{document.getElementById("btndelall").style.display="none"}
   },[Tasks])
   
   
function AddTask(task){
    let today= String(DateTask)+"/"+String(new Date().getMonth()+1)
    setTasks([...Tasks,task  ])
    document.getElementById("task").value=""
    
}
function removeItem(i){
  console.log(i)
  console.log(Tasks)
  setTasks(Tasks.filter(( _,index) => index !== i));
  console.log(Tasks)
}

function delALL(){
  setTasks([])

  
              
}



var i=0;
var x=i;
    return(
        <div className="w-[80%] m-auto space-y-5  p-4 rounded">
            <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Task</FieldLabel>
        <Input  className={"h-15 "} id="task" placeholder="Ur Task" />
        <FieldDescription>
          tasks will register  to TaskBoxs check it !
        </FieldDescription>
      </Field>
      
      <Field orientation="horizontal">
        <Button type="reset" variant="outline" className={"text-black hover:bg-tcd"}>
          Reset
        </Button>
        <Button onClick={()=>AddTask(document.getElementById("task").value)} type="button"  >Submit</Button>
      </Field>
    </FieldGroup>


            <div className="space-y-4">
                <h1 className="font-bold text-2xl ">Ur Tasks </h1>
                <div className="p-3 space-y-3" id="TaskBoxInc">
                    <p id="msg" className="text-gray-400">set ur task and tawakkal ala ALLAH !</p>
                    {Tasks.map((task,index)=>{
                        return(<p key={index} className="text-2xl font-bold flex justify-between " ><span>{index}-{task}</span> <Button onClick={()=>removeItem(index)} className={" bg-red-500"}  type="button"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg></Button></p>)
                    })}
                </div>
              <Button onClick={delALL} id="btndelall" className={`bg-red-500 }`}>Delete All !</Button>
            </div>
            
        </div>
    )
    
}