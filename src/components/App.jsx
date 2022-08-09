
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

import fetchPhotosByApi from '../../src/Api';


import s from './App.module.css';
import { useState } from 'react';
import { useEffect } from 'react';



const App =()=> {
const [q, setQ] = useState('');
const [photos, setPhotos] = useState([]);
const [page, setPage] = useState(1);
const [loader, setLoader] = useState(false);
const [error, setError] = useState(null)

  

   useEffect(()=> {
    if (q === '') {
      return
    }
    setLoader(true)

    fetchPhotosByApi(q, page)
      .then(photos => {
        if (photos.hits.length === 0) {
          alert('Please, try again!');
        }
        else{
          setPhotos((prev)=> [...prev, ...photos.hits])
        }
      })
      .catch(error => setError(error))
      .finally(()=> setLoader(false))
   }, [q, page])
      
  

  const handleFormSubmit =(q)=>{
    setQ(q);
    setPhotos([]);
    setPage(1)
  }

  // const loadMorePhotos = () => {
  //   setLoader(true)

  //  fetchPhotosByApi(q, page)
  //     .then(photos => {
  //       setPhotos(prev=> 
  //          [...prev, ...photos.hits]
  //       );
  //     })
  //     .catch(error => setError(error))
  //     .finally(()=> setLoader(false))
  // };

  // useEffect(()=> {
  //   console.log('USE EFFECT PO Q');
  //   fetchPhotos()
  // }, [q]);

  // useEffect(()=> {
  //   console.log('USE EFFECT PO PAGE');
  //   loadMorePhotos()
  // }, [page])

 

  const handleLoadMore = () => {
    setPage((prev) => prev + 1)
  }

  


  return (
    <>
     <div className={s.app}>
     <Searchbar onSubmit={handleFormSubmit}/>
      {error && <h1>{error.message};</h1>}
      <ImageGallery photos={photos} />
      {loader && <Loader />}
      {photos.length >= 12 && <Button 
      onMore={handleLoadMore}
      />}
      
     </div>
    </>
  );

};

export default App;