
import ImageGallery from '../components/ImageGallery'

function Gallery() {
    const links = ["https://bit.ly/3lmYVna", "https://bit.ly/3flyaMj"];
    // setTimeout(() => {
    //     document.querySelectorAll('.remove')[0]?.click();
      
    // });
    return (             
        <ImageGallery
            links={links}
        />
    );
  }
  
  export default Gallery;
  