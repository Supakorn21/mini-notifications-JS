 let notify = document.querySelector('.notify');
 let albums = document.querySelectorAll('.album');
 let itemsTotal = document.querySelector('.items-total');
 let saveBtn = document.querySelector('.button');

let albumsSelected = []
let i = 0;

while(i < albums.length){
    albums[i].onclick = function (e){
        let albumTitle = this.querySelector('.title').textContent
        if(this.classList.contains('selected') !== true){
            this.classList.add('selected')
            albumsSelected.push(albumTitle)
        }else {
            this.classList.remove('selected')
            albumsSelected = albumsSelected.filter(function(item){
                return  item !== albumTitle
            })
        }
        console.log(albumsSelected)

    }
    i++
}

saveBtn.onclick = () => {
    itemsTotal.textContent = albumsSelected.length + ' items saved';
    notify.classList.add('active');

    setTimeout( () => {
        notify.classList.remove('active');
    },2000);
    console.log('saved');
};

























// click album
// show the user he seliected album so we add the class to the album div
// create an array and then add the album title we selected to that array
// find out the total of the album selected 
// save button is clicked then when its clicked show notification with save items total and 