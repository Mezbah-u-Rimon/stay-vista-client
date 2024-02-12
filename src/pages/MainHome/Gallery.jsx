import Container from "../../components/Shared/Container";
import { Gallery } from "react-grid-gallery";
import { images as IMAGES } from "./images";


const images = IMAGES.map((image) => ({
    ...image,
    customOverlay: (
        <div className="custom-overlay__caption">
            <div>{image.caption}</div>
            {image.tags &&
                image.tags.map((t, index) => (
                    <div key={index} className="custom-overlay__tag">
                        {t.title}
                    </div>
                ))}
        </div>
    ),
}));


const Galleries = () => {
    return (
        <Container>
            <div className="pb-20 pt-10">
                <div className="pb-10">
                    <h1 className="md:text-4xl text-3xl font-bold uppercase"> OUR HOTEL GALLERY  </h1>
                    <h6 className="font-medium text-gray-500 text-lg mt-3"> Our Hotel image gallery
                    </h6>
                </div>

                <div>
                    <Gallery images={images} enableImageSelection={false} />
                </div>
            </div>
        </Container>
    );
};

export default Galleries