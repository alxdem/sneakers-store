import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionAppProps } from './AccordionApp.props';
import DOMPurify from 'isomorphic-dompurify';
import styles from './AccordionApp.module.css';

export const AccordionApp = ({ items, ...props }: AccordionAppProps) => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <Box {...props}>
            {items.map(item => (
                <Accordion
                    key={item._id}
                    disableGutters={true}
                    expanded={expanded === item._id}
                    onChange={handleChange(item._id)}
                    sx={{
                        backgroundColor: 'info.main',
                        backgroundImage: 'none',
                        px: 0,
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{
                            px: { xs: 2, sm: 0 },
                        }}
                    >
                        <Typography
                            component='h2'
                            variant='h6'
                        >
                            {item.title}
                        </Typography>
                    </AccordionSummary>

                    <AccordionDetails
                        sx={{
                            paddingTop: 0,
                            paddingBottom: 3,
                            px: { xs: 2, sm: 0 },
                        }}
                    >
                        <Typography
                            component='div'
                            variant='body2'
                            className={styles.text}
                            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item.text) }}
                        />
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
}