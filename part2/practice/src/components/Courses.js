import React from 'react'

const Header=({name})=>{
  return(
    <h2>{name}</h2>
  )
}

const Part=({part})=>{
  return(
    <p>{part.name} {part.exercises}</p>
  )
}

const Content=({parts,id})=>{
  // const total=parts.reduce((s,p)=>{
  //   console.log(s,'and',p.exercises)
  //   return s+p.exercises;
  // },0)
  const total=parts.reduce((s,p)=>s+p.exercises
  ,0)
  return(
    <>
    {
      parts.map(part=>
        <Part key={part.id} part={part}></Part>
        )    
    }
    <h5>total of {total} exercises</h5>
    </>
  )
}
const Course=({course})=>{
return(
<>
<Header name={course.name}></Header>
{/* {console.log(course.id.toString())} */}
<Content parts={course.parts} id={course.id}></Content>
</>
)

}

const Courses=({courses})=>{
  return (
    <>
    <h1>Web development curriculum</h1>
    {
      courses.map(course=><Course key= {course.id} course={course}></Course>)
    }
    </>
  )
}

export default Courses