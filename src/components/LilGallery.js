import Photo from './Photo';

//destructure the pic data passed down via props within the component func param
const LilGallery = ({ photos }) => {
    console.log(photos);
    return (
        <div>
            <h2>Here are your puppy picture:</h2>
            <ul className="photos">
        {
            //map through the puppyArray and generate a photo component for each object within the array
                //we will pass the entire object to the photo component via props
                    photos.map((photoObject) => {
                        return <Photo key={photoObject.id} getTheBits={photoObject} />
                })
        }
            </ul>
        </div>
    )
}

export default LilGallery;