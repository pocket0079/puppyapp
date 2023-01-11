//2. import useState Hook
import { useState } from "react";

const FilteredForm = ({submitHandler}) => {

    //2A initialize state to keep track of the users dropdown selection
const [userSelection, setUserSelection] = useState(null)


    //2c define a handleChange function
    const handleChange = (event) => {
        //2D update state to be equal to the users chosen pic orientation option
        console.log(event.target.value)
        setUserSelection( event.target.value);
    }

    return (
        //C. define a submit event listener and call the event handler which has been passed down via props
            //pss it the userSelection state as an argument
        <form action="" onSubmit={(event) => { submitHandler(event, userSelection) }}>
            <label htmlFor="filtration">Show me some photos of the following orientation:</label>
            {/* in order to associate a label with an input, use the for and id attributes */}


            {/* in order for React to know what selection the user has made within the dropdown, we need to tie the select to state */}

            {/* 1. listen for the 'change' event within the dropdown
                1A. papss in an onChange event handler */}

                {/* 2E, use the state for the dropdown to subsequently dictate the value of this element (CLOSE THE STATE LOOP) AKA have the value of the dropdown be dictated by react */}
            <select name="filtration" id="filtration"onChange={handleChange} value={userSelection}>
                <option value="placeholder" disabled>Pick a photo orientation:</option>
                <option value="squarish">Square</option>
                <option value="landscape">Landscape</option>
                <option value="portrait">Portrait</option>
            </select>
            <button>Show me my photos!</button>
        </form>
    )
}

export default FilteredForm;