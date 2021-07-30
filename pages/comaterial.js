/*

import * as React from 'react'
// reactstrap components
import { ListGroup, ListGroupItem, Row, Col, Button,dropzone } from "reactstrap";
// core components


function Example() {
  React.useEffect(async () => {
    // we make a dynamic import for the Dropzone, as this component is not made to work on SSR
    const Dropzone = (await import("dropzone")).default;
    Dropzone.autoDiscover = false;
    // this variable is to delete the previous image from the dropzone state
    // it is just to make the HTML DOM a bit better, and keep it light
    let currentSingleFile = undefined;
    // single dropzone file - accepts only images
    new Dropzone(document.getElementById("dropzone-single"), {
      url: "/",
      thumbnailWidth: null,
      thumbnailHeight: null,
      previewsContainer: document.getElementsByClassName(
        "dz-preview-single"
      )[0],
      previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
        .innerHTML,
      maxFiles: 1,
      acceptedFiles: "image/*",
      init: function () {
        this.on("addedfile", function (file) {
          if (currentSingleFile) {
            this.removeFile(currentSingleFile);
          }
          currentSingleFile = file;
        });
      },
    });
    document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
  }, []);
  return (
    <>
      <div className="dropzone dropzone-single mb-3" id="dropzone-single">
        <div className="fallback">
          <div className="custom-file">
            <input
              className="custom-file-input"
              id="projectCoverUploads"
              type="file"
            />
            <label className="custom-file-label" htmlFor="projectCoverUploads">
              Choose file
            </label>
          </div>
        </div>
        <div className="dz-preview dz-preview-single">
          <div className="dz-preview-cover">
            <img alt="..." className="dz-preview-img" data-dz-thumbnail="" />
          </div>
        </div>
      </div>
    </>
  );
}
*/
const Comaterial = () => {
  return(
    <p> bantuan materi coming soon</p>
  )
}

export default Comaterial;