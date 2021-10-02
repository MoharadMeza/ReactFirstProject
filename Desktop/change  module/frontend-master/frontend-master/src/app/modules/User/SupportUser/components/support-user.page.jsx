import React, { useRef  } from "react"
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../../_metronic/_partials/controls";
import * as actions from "../_redux/support-user.actions"
import { ModuleEdit } from "./support-user-form.component";


export const ModulePage = () => {
    const history = useHistory()
    const btnRef = useRef();
    const dispatch = useDispatch()
    const saveRecord = values => {
        dispatch(actions.createRecord(values)).then(() => backToModuleList())
    };
    const saveRecordClick = () => {
        if (btnRef && btnRef.current) {
            btnRef.current.click();
        }
    };
    const backToModuleList = () => {
        history.push(`/setting-profile`);
    };

    return (
        <Card>
            <CardHeader title="Support">
                <CardHeaderToolbar>
                    <button
                        type="button"
                        // onClick={backToModuleList}
                        className="btn btn-light"
                    >
                        <i className="fa fa-arrow-left"></i>
                        Back
                    </button>

                    <button
                        type="submit"
                        className="btn btn-primary ml-2"
                        onClick={saveRecordClick}
                    >
                        Save
                    </button>
                </CardHeaderToolbar>
            </CardHeader>
            <CardBody>
                <ModuleEdit saveRecord={saveRecord} btnRef={btnRef} />
            </CardBody>
        </Card>
    )
}