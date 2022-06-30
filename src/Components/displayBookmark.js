
import React, { useState } from "react";
import '../css/displayBookmark.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan, faImage, faBookmark,faCar,faQuestion } from '@fortawesome/free-solid-svg-icons'
export default function DisplayBookmark() {
    const [bookmark, setBookmark] = useState([
        { "id": 1, "Brand": "Brand name", "Model": "model", "image": "imgageUrl" },
        { "id": 2, "Brand": "Brand name", "Model": "model", "image": "imgageUrl" }
    ]);



    return (
        <div className="viewHodler">


            {bookmark && bookmark.length ? '' : 'No Bookmarks.'}
            {bookmark && bookmark
                .map((cars, index) => {
                    return (
                        <React.Fragment key={cars.id}>
                            <div className="carMainDiv">
                                <div className="details">
                                    <span className="bookNumber">{index + 1}</span>
                                    <span className="descriptions">
                                        <FontAwesomeIcon className="iconWrapper"  icon={faCar}/>
                                        {cars.Brand}</span>
                                    <span className="descriptions">
                                    <FontAwesomeIcon className="iconWrapper" icon={faQuestion}/>
                                        {cars.Model}</span>
                                </div>
                                <div className="imageDiv">
                                    <div className="image">
                                    <FontAwesomeIcon className="iconWrapper"  icon={faImage}/>
                                        {cars.image}</div>
                                </div>

                                <div className="icons">
                                <span>
                                    <FontAwesomeIcon icon={faPen}/>
                                   
                                </span>
                                <span>  <FontAwesomeIcon icon={faTrashCan}/></span>
                                

                                </div>
                            </div>

                        </React.Fragment>
                    )
                })
            }
        </div>

    )


}


