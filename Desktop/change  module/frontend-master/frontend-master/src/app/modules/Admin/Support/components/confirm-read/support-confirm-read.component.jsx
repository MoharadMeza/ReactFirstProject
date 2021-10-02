/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
/* change module */
import * as actions from "../../_redux/support.actions";
import { useUIContext } from "../support-ui.context";

export function ModuleMarkAsReadDialog({ id, show, onHide }) {
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
    state => ({ isLoading: state.adminSupports.actionsLoading }), /* change module */
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
  useEffect(() => { }, [isLoading, dispatch]);

  const markAsReadDialog = () => {
    // server request for deleting record by id
    dispatch(actions.updateRecord({ status:"read", id })).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchRecords(UIProps.queryParams));
      // clear selections list
      UIProps.setIds([]);
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
         Support mark as read
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!isLoading && (
          <span>Are you sure?</span>
        )}
        {isLoading && <span>Please wait...</span>}
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
            onClick={markAsReadDialog}
            className="btn btn-delete btn-elevate"
          >
            Confirm
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
