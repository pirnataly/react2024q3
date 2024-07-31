import classes from '@components/UI/modal/Modal.module.css';
import React, { useEffect, useState } from 'react';
import Loader from '@components/UI/Loader/Loader';
import useFetching from '../../../hooks/useFetching';
import PhotoService from '../../../API/PhotoService';
import '../../../styles/App.css';
import { ModalComponent, PhotoByIdType } from '../../../interfaces/types';

export default function ModalContent({ id }: ModalComponent) {
  const [modalData, setModalData] = useState<null | PhotoByIdType>(null);
  const [fetchById, isPhotoLoading, errorMessage] = useFetching(async (PhotoId: string | null) => {
    if (PhotoId) {
      const data = await PhotoService.fetchById(String(PhotoId));
      if (data && data !== 'bad') {
        setModalData(data);
      }
    }
  });

  function getUrl() {
    if (modalData) {
      return `https://live.staticflickr.com/${modalData.server}/${modalData.id}_${modalData.secret}_b.jpg`;
    }
    return '';
  }

  useEffect(() => {
    fetchById(id);
  }, [id]);

  return isPhotoLoading ? (
    <Loader />
  ) : (
    <div className={classes.modalContent}>
      {errorMessage ? (
        <h1 className="error-message">errorMessage</h1>
      ) : (
        <>
          <img src={getUrl()} alt={`${id}`} className={classes.modalImage} />

          <p
            className={`${classes.moduleDescription} ${classes.moduleHeading}`}
          >{`Title: ${modalData?.title._content}`}</p>
          <p className={classes.moduleDescription}>date: {modalData?.dates.taken}</p>
          <p className={classes.moduleDescription}>author: {modalData?.owner.realname}</p>
          <p className={classes.moduleDescription}>views: {modalData?.views}</p>
        </>
      )}
    </div>
  );
}
