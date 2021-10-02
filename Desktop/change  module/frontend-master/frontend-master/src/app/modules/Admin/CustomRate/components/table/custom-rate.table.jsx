// React bootstrap table next =>
// DOCS: https://react-bootstrap-table.github.io/react-bootstrap-table2/docs/
// STORYBOOK: https://react-bootstrap-table.github.io/react-bootstrap-table2/storybook/index.html
import React, { useEffect, useMemo } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory, {
	PaginationProvider,
} from "react-bootstrap-table2-paginator";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	getSelectRow,
	getHandlerTableChange,
	NoRecordsFoundMessage,
	PleaseWaitMessage,
	sortCaret,
} from "../../../../../../_metronic/_helpers";
import { Pagination } from "../../../../../../_metronic/_partials/controls";
import * as columnFormatters from "./column-formatters";

/* change module */
import * as actions from "../../_redux/custom-rate.actions";
import * as uiHelpers from "../custom-rate-ui.helpers";
import { useUIContext } from "../custom-rate-ui.context";

export function ModuleTable() {
	const UIContext = useUIContext();
	const UIProps = useMemo(() => {
		return {
			ids: UIContext.ids,
			setIds: UIContext.setIds,
			queryParams: UIContext.queryParams,
			setQueryParams: UIContext.setQueryParams,
			openEditPage: UIContext.openEditPage,
			openDeleteRecordDialog: UIContext.openDeleteRecordDialog,
		};
	}, [UIContext]);

	// Getting curret state of module list from store (Redux)
	const { currentState } = useSelector(
		(state) => ({ currentState: state.customRate }) /* change module */,
		shallowEqual
	);
	const { totalCount, entities, listLoading } = currentState;
	const dispatch = useDispatch();

	useEffect(() => {
		// clear selections list
		UIProps.setIds([]);
		// server call by queryParams
		dispatch(actions.fetchRecords(UIProps.queryParams));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [UIProps.queryParams, dispatch]);

	// Table columns
	const columns = [
		{
			dataField: "from",
			text: "From",
			sort: true,
			sortCaret: sortCaret,
		},
		{
			dataField: "to",
			text: "To",
			sort: true,
			sortCaret: sortCaret,
		},
		{
			dataField: "rate",
			text: "Rate",
			sort: true,
			sortCaret: sortCaret,
		},
		{
			dataField: "createdAt",
			text: "Created At",
			sort: true,
			sortCaret: sortCaret,
			formatter: columnFormatters.DateColumnFormatter,
		},
		{
			dataField: "updatedAt",
			text: "Updated At",
			sort: true,
			sortCaret: sortCaret,
			formatter: columnFormatters.DateColumnFormatter,
		},
		{
			dataField: "expireDate",
			text: "Expiration Date",
			sort: true,
			sortCaret: sortCaret,
			formatter: columnFormatters.DateColumnFormatter,
		},
		{
			dataField: "action",
			text: "Actions",
			formatter: columnFormatters.ActionsColumnFormatter,
			formatExtraData: {
				openEditPage: UIProps.openEditPage,
				openDeleteRecordDialog: UIProps.openDeleteRecordDialog,
			},
			classes: "text-right pr-0",
			headerClasses: "text-right pr-3",
			style: {
				minWidth: "100px",
			},
		},
	];
	// Table pagination properties
	const paginationOptions = {
		custom: true,
		totalSize: totalCount,
		sizePerPageList: uiHelpers.sizePerPageList,
		sizePerPage: UIProps.queryParams.pageSize,
		page: UIProps.queryParams.pageNumber,
	};
	return (
		<>
			<PaginationProvider
				pagination={paginationFactory(paginationOptions)}
			>
				{({ paginationProps, paginationTableProps }) => {
					return (
						<Pagination
							isLoading={listLoading}
							paginationProps={paginationProps}
						>
							<BootstrapTable
								wrapperClasses="table-responsive"
								classes="table table-head-custom table-vertical-center overflow-hidden"
								bootstrap4
								bordered={false}
								remote
								keyField="_id"
								data={entities === null ? [] : entities}
								columns={columns}
								defaultSorted={uiHelpers.defaultSorted}
								onTableChange={getHandlerTableChange(
									UIProps.setQueryParams
								)}
								selectRow={getSelectRow({
									entities,
									ids: UIProps.ids,
									setIds: UIProps.setIds,
								})}
								{...paginationTableProps}
							>
								<PleaseWaitMessage entities={entities} />
								<NoRecordsFoundMessage entities={entities} />
							</BootstrapTable>
						</Pagination>
					);
				}}
			</PaginationProvider>
		</>
	);
}
