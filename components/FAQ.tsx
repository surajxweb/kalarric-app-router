import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>
            What payment options are accepted on Kalarric?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our app supports a wide range of payment options, including all
            major credit and debit cards, digital wallets, net banking, and UPI
            (Unified Payments Interface).
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls='panel2d-content' id='panel2d-header'>
          <Typography>
            How long does it take for a product to be delivered?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Typically, we strive to deliver your orders within 3-4 business days
            from the date of purchase. Please note that delivery times may vary
            depending on your location and product availability.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls='panel3d-content' id='panel3d-header'>
          <Typography>How long does it take to process a refund?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Refunds are processed within 3 business days after we receive the
            returned product. The time it takes for the refunded amount to
            reflect in your account may vary depending on your bank or payment
            method.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* mera */}

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls='panel4d-content' id='panel4d-header'>
          <Typography>
            What is the average response time for support tickets?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We aim to provide prompt assistance to our customers. Support
            tickets are usually answered within 24 hours of submission. If you
            have an urgent issue, please don&#39;t hesitate to reach out to us
            for faster assistance.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls='panel5d-content' id='panel5d-header'>
          <Typography>Can I track my order status?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can easily track your order&#39;s status by logging into
            your account on our app. Once your order is shipped, you will
            receive a tracking number via email or SMS. You can use this
            tracking number to monitor the delivery progress.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls='panel6d-content' id='panel6d-header'>
          <Typography>What is your return policy?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a hassle-free return policy. If you&#39;re not satisfied
            with your purchase, you can initiate a return within 7 days of
            receiving the product. Once we receive the returned item and it
            meets our return criteria, we will process the refund as per our
            refund policy.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls='panel7d-content' id='panel7d-header'>
          <Typography>
            What should I do if I receive a damaged or incorrect product?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            In the rare event that you receive a damaged or incorrect item,
            please contact our customer support team immediately. We will guide
            you through the process of returning the product and arranging for a
            replacement or refund, as per your preference.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
