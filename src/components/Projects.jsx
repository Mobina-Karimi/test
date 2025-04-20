import {cards} from "../constants/data.js"

function Projects() {
    return(
        <div>
            <div className={card}>
            {cards.map(card => 
                <ProCard 
                key={card.id} 
                data={card} />)}
            </div>
        </div>
    )
}
export default About;
