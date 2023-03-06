import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);
    const getImages = async () => {
        const newImage = await getGifs(category);
        setImages(newImage);
    }

    useEffect(() => {
        getImages();
    }, [])

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {images.map(({ id, title, url }) => {
                    return (
                        <GifItem key={id} title={title} url={url} />
                    );
                })}
            </div>
        </>
    )
}
