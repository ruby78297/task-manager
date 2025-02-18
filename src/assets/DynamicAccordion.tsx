import React, { useState } from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface DynamicAccordionProps {
  header: string;
  content: React.ReactNode;
  headerColor?: string;
  bodyColor?: string;
  expandedHeaderColor?: string;
  expandedBodyColor?: string;
}

const DynamicAccordion: React.FC<DynamicAccordionProps> = ({
  header,
  content,
  headerColor = 'primary.main', // Default header color
  bodyColor = 'background.paper', // Default body color
  expandedHeaderColor = 'secondary.main', // Default expanded header color
  expandedBodyColor = 'background.default', // Default expanded body color
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleChange}
      sx={{
        marginBottom: 2,
        borderRadius: '12px',
        overflow: 'hidden',
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls='panel-content'
        id='panel-header'
        sx={{
          backgroundColor: expanded
            ? expandedHeaderColor
            : headerColor,
          transition: 'background-color 0.3s',
          color: expanded ? 'white' : 'inherit',
        }}
      >
        <Typography variant='h6'>{header}</Typography>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          backgroundColor: expanded
            ? expandedBodyColor
            : bodyColor,
          transition: 'background-color 0.3s',
        }}
      >
        <Box>{content}</Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default DynamicAccordion;
