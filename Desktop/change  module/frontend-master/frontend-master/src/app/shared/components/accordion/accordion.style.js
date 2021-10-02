import withStyles from "@material-ui/core/styles/withStyles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails/ExpansionPanelDetails";

const Accordion = withStyles({
  root: {
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const AccordionSummary = withStyles({
  root: {
    fontSize: "15px",
    backgroundColor: "#fff",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const AccordionDetails = withStyles(theme => ({
  root: {
    lineHeight: "25px",
    marginLeft: "20px",
    display: "block",
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

export { Accordion, AccordionDetails, AccordionSummary };
