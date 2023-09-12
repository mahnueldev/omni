import { CourseList } from "../components"
import { CourseListing } from '../data/courselist';


const MyPlan = () => {
  return (
    <div className="bg-dark-200 p-1 ">
        <h2 className="p-4 text-light-100">My Planning</h2>
         {CourseListing.map((item) => (
        <CourseList 
          key={item.id}
          img={item.img}
          title={item.title}
          date={item.date}
          link={item.to}
        
        />
        ))}
    </div>
  )
}

export default MyPlan