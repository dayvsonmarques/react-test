import React from 'react';
import { render } from 'node-sass';

state = {
    albums: [],
    pics: [],
    picsByAlbum: [],
    usersMostPics: []
};

export const getUsersMostPics = () => {

}

export const getPicsByAlbum = () => {
    // getAlbums();
    // if(albums.length > 0){
    //     albums.forEach(element => {
    //         if(typeof picsByAlbum[albums.id] === 'undefined'){
    //             picsByAlbum[albums.id] = albums;
    //         }
    //     });
    // }

    getPics();

    pics.forEach(element => {
        if(pics.length > 0){
            pics.forEach(element => {
                if(pics[element.idAlbum]){

                }
            });
        }
    });
}

export const getAlbums = () => {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(res => {
        this.setState({
            albums: data
        });

        // let picsByAlbum = [];

        // data.forEach(element => {
        //     if(typeof picsByAlbum[element.]){

        //     }
        // });
    });
}

export const getPics = () => {
    fetch('https://jsonplaceholder.typicode.com/pics')
    .then(res => res.json())
    .then(res => {

        let albumPicsQty = [];

        data.forEach(element => {
            if(typeof albumPicsQty[element.albumId] === 'undefined'){
                albumPicsQty[element.albumId] = [];
            }

            albumPicsQty[element.albumId] = albumPicsQty[element.albumId].length + 1;
        });

        this.setState({
            picsByAlbum: albumPicsQty
        });
    });
}
