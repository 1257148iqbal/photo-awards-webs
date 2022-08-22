import _ from "lodash";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
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
  //#region state
  const [imageURLS, setImageURLs] = useState(imagesArray);
  //#endregion

  //#region Hooks
  useEffect(() => {}, []);
  //#endregion

  //#region events
  const multipleImagesUpload = (e, sectionIndex) => {
    console.log(sectionIndex);
    const files = [...e.target.files];
    if (files.length > 4) {
      alert("Images upload less than 5");
    } else {
      const newImageUrls = [];
      files.forEach((image) => newImageUrls?.push(URL.createObjectURL(image)));
      const _imageURLS = [...imageURLS];
      const imagesInfo = _imageURLS[sectionIndex];
      const imagesInfos = newImageUrls?.map((item) => ({
        imagesId: uuid(),
        imageURLS: item,
        imageName: "",
        file: {},
      }));
      imagesInfo.imagesInfos = imagesInfos;
      _imageURLS[sectionIndex] = imagesInfo;
      setImageURLs(_imageURLS);
    }
  };

  const singleImagesUpload = (e, sectionIndex, imgageIndex) => {
    const files = e.target.files[0];
    files["ImageUrl"] = URL.createObjectURL(files);
    const _imageURLS = [...imageURLS];
    const _imagesIndex = _imageURLS[sectionIndex].imagesInfos[imgageIndex];
    const newObject = {
      ..._imagesIndex,
      imageName: "",
      imageURLS: files?.ImageUrl,
    };
    _imageURLS[sectionIndex].imagesInfos[imgageIndex] = newObject;
    setImageURLs(_imageURLS);
  };

  const removedAll = (sectionIndex) => {
    const _imageURLS = [...imageURLS];
    const imagesInfo = _imageURLS[sectionIndex];
    const deleteIamges = {
      ...imagesInfo,
      imagesInfos: imagesInfo.imagesInfos.map((i) => ({
        ...i,
        imageURLS: "",
        imageName: "",
      })),
    };
    _imageURLS[sectionIndex] = deleteIamges;
    setImageURLs(_imageURLS);
  };

  const removedSingle = (sectionIndex, imgageIndex) => {
    const _imageURLS = [...imageURLS];
    const _imagesIndex = _imageURLS[sectionIndex].imagesInfos[imgageIndex];
    const newObject = {
      ..._imagesIndex,
      imageName: "",
      imageURLS: "",
    };
    _imageURLS[sectionIndex].imagesInfos[imgageIndex] = newObject;
    setImageURLs(_imageURLS);
  };

  const onChangeEvents = (e, sectionIndex, imgageIndex) => {
    const { value } = e.target;

    const _imageURLS = _.cloneDeep(imageURLS);
    const _imagesIndex = _imageURLS[sectionIndex].imagesInfos[imgageIndex];
    _imagesIndex.imageName = value;
    _imageURLS[sectionIndex].imagesInfos[imgageIndex] = _imagesIndex;
    setImageURLs(_imageURLS);
  };

  //#endregion
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
                          onChange={(e) =>
                            multipleImagesUpload(e, sectionIndex)
                          }
                          hidden
                        />
                        <label className="upload" htmlFor="upload">
                          Upload Files
                        </label>
                      </div>
                      <div>
                        <button onClick={() => removedAll(sectionIndex)}>
                          Remove All
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-around flex-wrap p-3">
                    {imageSrc.imagesInfos?.map((imageInfo, imgageIndex) => {
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
                              height="200"
                              style={{ borderRadius: 5, marginTop: 8 }}
                            />                      
                            <input
                              type="text"
                              id={`imageName-${imageSrc.id}${imageInfo.imagesId}`}
                              name="imageName"
                              value={imageInfo.imageName}
                              placeholder="Image Name"
                              style={{ width: 220 }}
                              onChange={(e) => onChangeEvents(e, sectionIndex, imgageIndex )}
                            />
                          </div>
                          <div className="d-flex p-2">
                            <input
                              type="file"
                              className="custom-file-input"
                              accept="image/*"
                              alt="Empty"
                              onChange={(e) =>
                                singleImagesUpload(e, sectionIndex, imgageIndex)
                              }
                            />
                            <button
                              onClick={() =>
                                removedSingle(sectionIndex, imgageIndex)
                              }
                            >
                              Remove
                            </button>
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
