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

export function GoalPage(){
    console.log(localStorage.Goals!=null)
   const [Goals,setGoals]=useState(()=>{
    if( localStorage.Goals!=null){return JSON.parse(localStorage.Goals)}
    else{return []}
   })
  //  3dd Goals
  

   useEffect(()=>{localStorage.setItem("Goals",JSON.stringify(Goals))
    
    if(JSON.parse(localStorage.Goals).length>=1){document.getElementById("btndelall").style.display="block"}
  else{document.getElementById("btndelall").style.display="none"}
   },[Goals])
   
function AddGoal(goal){
    setGoals([...Goals,goal  ])
    document.getElementById("goal").value=""
    
}
function removeItem(i){
 
  setGoals(Goals.filter(( _,index) => index !== i));

}

function delALL(){
  setGoals([])

  
              
}



var i=0;
var x=i;
    return(
        <div className="w-[80%] m-auto space-y-5  p-4 rounded">
            <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">goal</FieldLabel>
        <Input  className={"h-15 "} id="goal" placeholder="Ur goal" />
        <FieldDescription>
          Goals will register  to goalBoxs check it !
        </FieldDescription>
      </Field>
      <Field orientation="horizontal">
        <Button type="reset" variant="outline" className={"text-black hover:bg-tcd"}>
          Reset
        </Button>
        <Button onClick={()=>AddGoal(document.getElementById("goal").value)} type="button"  >Submit</Button>
      </Field>
    </FieldGroup>


            <div className="space-y-4">
                <h1 className="font-bold text-2xl ">Ur Goals </h1>
                <div className="p-3 space-y-3" id="goalBoxInc">
                    <p id="msg" className="text-gray-400">set ur goal and tawakkal ala ALLAH !</p>
                    {Goals.map((goal,index)=>{
                        return(<p key={index} className="text-2xl font-bold flex justify-between " ><span>{index}-{goal}</span> <Button onClick={()=>removeItem(index)} className={" bg-red-500"}  type="button"  ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
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