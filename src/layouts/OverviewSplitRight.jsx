import { Spacer } from "../components"
import CompletedCx from "./CompletedCx"
import MyPlan from "./MyPlan"


const OverviewSplitRight = () => {
  return (
    <div className="lg:mt-0 sm:mt-4">
        <MyPlan/>
        <Spacer marginVertical='mt-4'/>
        <CompletedCx/>
    </div>
  )
}

export default OverviewSplitRight