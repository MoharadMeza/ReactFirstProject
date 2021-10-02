/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/know-your-customer.actions";
import { useUIContext } from "../know-your-customer-ui.context";

export function ModuleDeleteDialog({ id, show, onHide }) {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      setIds: UIContext.setIds,
      queryParams: UIContext.queryParams
    };
  }, [UIContext]);

  // Module Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    state => ({ isLoading: state.kycUser.actionsLoading }), /* change module */
    shallowEqual
  );

  // if !id we should close modal
  useEffect(() => {
    if (!id) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteRecord = () => {
    // server request for deleting record by id
    dispatch(actions.deleteRecord(id)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchRecords(UIProps.queryParams));
      // clear selections list
      UIProps.setIds([]);
      // closing delete modal
    })
    .finally(() => {
      // closing delete modal
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          KYC Delete
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete this kyc?</span>
        )}
        {isLoading && <span>kyc is deleting...</span>}
      </Modal.Body>

      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-light btn-elevate"
          >
            Cancel
          </button>
          
          <button
            type="button"
            onClick={deleteRecord}
            className="btn btn-delete btn-elevate"
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
