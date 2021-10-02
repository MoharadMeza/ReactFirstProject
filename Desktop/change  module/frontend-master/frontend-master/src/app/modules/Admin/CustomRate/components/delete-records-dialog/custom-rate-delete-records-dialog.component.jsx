/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react";
import { Modal } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { ModalProgressBar } from "../../../../../../_metronic/_partials/controls";
import * as actions from "../../_redux/custom-rate.actions";
/* change module */
import { useUIContext } from "../custom-rate-ui.context";

export function ModuleDeleteRecordsDialog({ show, onHide }) {
  const UIContext = useUIContext();
  const UIProps = useMemo(() => {
    return {
      ids: UIContext.ids,
      setIds: UIContext.setIds,
      queryParams: UIContext.queryParams
    };
  }, [UIContext]);

  // Records Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    state => ({ isLoading: state.customRate.actionsLoading }), /* change module */
    shallowEqual
  );

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  // if there weren't selected records we should close modal
  useEffect(() => {
    if (!UIProps.ids || UIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [UIProps.ids]);

  const deleteRecords = () => {
    // server request for deleting product by seleted ids
    dispatch(actions.deleteRecords(UIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchRecords(UIProps.queryParams)).then(() => {
        // clear selections list
        UIProps.setIds([]);
        // closing delete modal
        onHide();
      });
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar />}

      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Global message Delete
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {!isLoading && (
          <span>Are you sure to permanently delete selected custom rate?</span>
        )}

        {isLoading && <span>custom rate are deleting...</span>}
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
            onClick={deleteRecords}
            className="btn btn-primary btn-elevate"
            disabled={isLoading}
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
