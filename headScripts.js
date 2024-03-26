let selectedPhotoIndex = 0

const selectedPhotoIndexFinder = () =>{
    selectedPhotoIndex = 0
    selectedPhoto = document.querySelector('#photo\ img:only-child')
    allPhotos = document.querySelector('#photoContainer').childNodes
    while (allPhotos[selectedPhotoIndex].src != selectedPhoto.src){
        selectedPhotoIndex += 1
    }
}

const selected = (element, summonedByButton = false) => {
    const photoCard = document.querySelector('#photo');
    const photo = element.cloneNode(true);
    photoCard.innerHTML = '';
    photoCard.append(photo);
    if (summonedByButton == false){
        selectedPhotoIndexFinder()
    }
}

const nextPhoto = () => {
    photoGallerey = document.querySelector('#photoContainer').children
    if (selectedPhotoIndex + 1 < photoGallerey.length){
        selectedPhotoIndex++
    } else {
        selectedPhotoIndex = 0
    }
    selected(photoGallerey[selectedPhotoIndex], true)
}

const prevPhoto = () => {
    photoGallerey = document.querySelector('#photoContainer').children
    if (selectedPhotoIndex > 0){
        selectedPhotoIndex--
    } else {
        selectedPhotoIndex = photoGallerey.length - 1
    }
    selected(photoGallerey[selectedPhotoIndex], true)
}