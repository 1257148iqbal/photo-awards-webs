import React, { useEffect, useState } from "react";
import { Card, Col, Row, Toast } from "reactstrap";
import { v4 as uuid } from "uuid";

const imagesArray = [
  {
    id: uuid(),
    sectionName: "Nature",
    imagesInfos: [
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
    ],
  },
  {
    id: uuid(),
    sectionName: "Animal",
    imagesInfos: [
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
    ],
  },
  {
    id: uuid(),
    sectionName: "Scenery",
    imagesInfos: [
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
    ],
  },
  {
    id: uuid(),
    sectionName: "Human",
    imagesInfos: [
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
      { imagesId: uuid(), imageName: "", imageURLS: "", file: {} },
    ],
  },
];

const Participant = () => {
  const [images, setImages] = useState([]);
  const [imageURLS, setImageURLs] = useState(imagesArray);

  useEffect(() => {}, []);

  const multipleImagesUpload = (sectionIndex) => {
    const newImageUrls = [];
    images.forEach((image) => newImageUrls?.push(URL.createObjectURL(image)));
    const _imageURLS = [...imageURLS];
    const imagesInfo = _imageURLS[sectionIndex];
    const imagesInfos = newImageUrls?.map((item) => ({
      imagesId: uuid(),
      imageURLS: item,
      imageName: "",
      file: {},
    }));
    imagesInfo.imagesInfos = imagesInfos;
    setImageURLs(_imageURLS);
  };

  const onImageChange = (e, sectionIndex) => {
    const files = [...e.target.files];
    if (files.length > 4) {
      Toast("Images upload less than 5");
    } else {
      setImages(files);
      multipleImagesUpload(sectionIndex);
    }
  };
  return (
    <Card className="page-content m-auto mt-5">
      <Row className="rounded rounded-3">
        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
          <div className="mb-5">
            {imageURLS?.map((imageSrc, sectionIndex) => {
              return (
                <div key={uuid()}>
                  <div>
                    <h3 className="text-center font-weight-bold ">
                      {`SectionName: ${imageSrc.sectionName}`}
                    </h3>
                    <div className="d-flex justify-content-between align-items-center m-1">
                      <div>
                        <input
                          type="file"
                          id="upload"
                          multiple
                          accept="image/*"
                          onChange={(e) => onImageChange(e, sectionIndex)}
                          hidden
                        />
                        <label className="upload" for="upload">
                          Upload Files
                        </label>
                      </div>
                      <div>
                          <button>Remove All</button>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-around flex-wrap p-3">
                    {imageSrc.imagesInfos?.map((imageInfo) => {
                      return (
                        <Card
                          elevation={3}
                          style={{ height: 310, width: 240 }}
                          key={`${imageSrc.id}${imageInfo.imagesId}`}
                        >
                          <div className="d-grid gap-2 flex-row m-1">
                            <img
                              src={imageInfo.imageURLS}
                              alt="not fount"
                              width="220"
                              height="210"
                              style={{ borderRadius: 5, marginTop: 8 }}
                            />
                            <input
                              type="text"
                              name="fileName"
                              value={imageInfo.imageName}
                              placeholder="Image Name"
                              style={{ width: 220 }}
                              onChange={() => {}}
                            />
                          </div>
                          <div className="d-flex p-2">
                            <input
                              type="file"
                              className="custom-file-input"
                              accept="image/*"
                              onChange={() => {}}
                            />
                            <button>Remove</button>
                          </div>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default Participant;
