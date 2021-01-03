import { useState } from 'react';
const News = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <h5>{props.body}</h5>
            <p>{props.publish}</p>
        </div>
    );
};
const Dawn = () => {
return (
    <div>
<News title={"Prince Charles, PM Imran reaffirm close UK-Pakistan ties in telephone call"}
body={"Prince of Wales conveys his condolences for the lives lost in Pakistan due to Covid-19." }
publish={"PUBLISHED 41 MINUTES AGO"} />
<News title={"Pakistan reports 3,499 daily Covid cases, positivity rate climbs to 8.16pc"} 
body={"The highest positivity rate was observed in Karachi at 20.12pc, followed by Hyderabad with 18.43pc, and Abbottabad with 14.53pc." }
publish={"UPDATED ABOUT 3 HOURS AGO"}/>
   <News title={"Centre shuttered PSM to take over its land, accuses Ghani"} 
   body={"An incapable, selected cabinet cannot make decisions regarding steel mills and its employees, says Sindh minister." }
publish={"PUBLISHED ABOUT 6 HOURS AGO"}/>
</div>
);
};
export default Dawn;