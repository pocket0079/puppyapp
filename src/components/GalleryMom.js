//1. import the useState and useEffect Hooks from the react library
import { useState, useEffect } from "react";
import FilteredForm from "./FilteredForm";
import LilGallery from "./LilGallery";

//2. import axios
import axios from 'axios';

const GalleryMom = () => {

    //3. initialize state to hold the data AKA pictures return from the unsplash api
    const [puppyPics, setPuppyPics] = useState([]);

    //D initialize another piece of state to represent the photo orientation (which the user has chosen within the form)
    const [photoOrientation, setPhotoOrientation] = useState(null)

    //4. define a side effect which will run ONCE on component mount to make a request to the unsplash api for some puppy pics
    useEffect( () => {
        
        axios({
            url: 'https://api.unsplash.com/search/photos',
            params: {
                client_id: 'XWWkZf2pWkFj-CFbqZnG5n4nReJyeuDeOpy7acIaS0M',
                query: 'puppies',
                per_page: 30,
                //how do we get the users dropdown selection on form submit into the paramater
                //D1 pass in the state variable so that this parameters value is tied to state
                orientation: photoOrientation
            }
        }).then ((apiData) => {
            console.log(apiData);
            //once the async API request resolves successfully, we will save the retured data in state.

            setPuppyPics(apiData.data.results)
        })
        
        //E in order to ensure that this side effect runs EVERY TIME the user chooses a new photo orientation, (+submits the form with their choice), just pass that state value into the dependancy array
                //ie we are defining what the exectution of this side effect is DEPENDENT on
    }, [photoOrientation]);

    //A. define an event handler which will be passed via props to the LilGallery component
        //when called, this event handler will log out the balue of the chosen pic orientation

        const selectPhotoOrientation = (event, chosenOrientation) => {
            //this function is called when the form is submited and the default beha=viour of a form is to 'submit' the data and refresh the page
                //how do we tell this function NOT to refresh the page
                //we need to call the preventDefault method which is available o nthe event object
                event.preventDefault();
            console.log(chosenOrientation);

            //call the state updater functoin and use the effect option value to update the photoOrientation
            setPhotoOrientation(chosenOrientation);
        }

    return(
        <section>
            {/* B. pass the submit event handler down via props */}
            <FilteredForm submitHandler={selectPhotoOrientation}/>

            {/* //5. pass down the photos in state to LilGallery as props */}
            <LilGallery photos={puppyPics}/>
        </section>
    )
}

export default GalleryMom;