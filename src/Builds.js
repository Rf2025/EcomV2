import ktuner from "./ktune.avif"
import cobra from './Cobra.jpg'
import tune from './Stage1.webp'
import buildCss from './Builds.module.css'


const card = ()=>{
    return(
    <div className={buildCss.cardContainer}>
        <h3>Redefine your Si</h3>
            <div className={buildCss.resourceSection }>
            <div className={buildCss.cardComponent}>
               <img src={ktuner} alt="" className={buildCss.Resourceimg}></img>
               <h4>KTuner V2.0</h4>
            <h5>Price:$649.00 USD</h5>
            <button className={buildCss.itemButton}>Realibale tunning solutions</button>
        </div>
        <div className={buildCss.cardComponent}>
               <img src={cobra} alt="" className={buildCss.Resourceimg}></img>
               <h4>Cobra Cold Air Intake </h4>
            <h5>Price:$399.99 USD</h5>
            <button className={buildCss.itemButton}>Best selling CAI!</button>
        </div>
        <div className={buildCss.cardComponent}>
               <img src={tune} alt="" className={buildCss.Resourceimg}></img>
               <h4>Stage 1+ Tune</h4>
            <h5>Price:$194.99 USD</h5>
            <button className={buildCss.itemButton}>Best selling tune!</button>
        </div>
        </div>
    </div>
        
    )
}



export default card;