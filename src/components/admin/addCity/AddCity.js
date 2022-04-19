import React, { memo, useState } from 'react';
import styles from './AddCity.module.scss';
import ModalAddCity from './ModalAddCity';

const AddCity = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div data-testid="openEl" className={styles.wrapper} onClick={() => setOpen(true)}>
        <div className={styles.title}>Add City</div>
      </div>
      {open && <ModalAddCity open={open} setOpen={setOpen} />}
    </>
  );
};

export default memo(AddCity);
