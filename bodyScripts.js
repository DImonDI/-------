import { photos } from "./photos.js"


const fillPhotoGallerey = () =>{

    const photoGallerey = document.querySelector('#photoContainer');
    const photoCard = document.querySelector('#photo');

    for (let i=0; i<photos.length; i++) {

        const photo = document.createElement('img');
        photo.src = `./images/${photos[i]}`;
        photo.setAttribute('onclick', 'selected(this)');
        photoGallerey.append(photo);

    }

    const photo = document.querySelector('img').cloneNode(true);
    photoCard.append(photo);
}

const main = () => {
    fillPhotoGallerey();
}
main()