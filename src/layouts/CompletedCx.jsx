import { LineProgressBar, Spacer } from "../components"
import { CompletedLx} from '../data/courselist';


const CompletedCx = () => {
  return (
    <section className="bg-dark-200 p-4">
      <h2 className="text-base text-light-100">Completed Course</h2>
      <Spacer marginVertical='mb-8'/>
      {CompletedLx.map((item) => (
        <LineProgressBar 
          key={item.id}
          title={item.title}
          value={item.value}
          baseCol= 'bg-green-100'
          barCol= 'bg-blue-100'
          barWidth='6'
          baseWidth='4'
          space="8"
         
        
        />
        ))}
    </section>
  )
}

export default CompletedCx