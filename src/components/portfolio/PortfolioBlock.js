import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, techStack} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>

         {/* Tech Stack Section */}
<Box 
    my={2} 
    display={'flex'} 
    flexDirection={'column'} 
    alignItems={'center'} 
    fontSize={'1.1rem'}
>
    <Box 
        display={'flex'} 
        justifyContent={'center'} 
        flexWrap={'wrap'} 
        gap={'0.5rem'} 
        mt={1}
        width={'100%'} // Ensures responsiveness
        maxWidth={'600px'} // Limits width for larger screens
    >
        {techStack.map((tech, index) => (
            <Box 
                key={index} 
                p={'8px 20px'} 
                borderRadius={'20px'} 
                style={{
                    backgroundColor: 'var(--background-secondary-color)',  // Use secondary background color for the box
                    color: 'var(--text-primary-color)', 
                    fontWeight: '600',
                    boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.15)',
                    display: 'inline-block',
                    textAlign: 'center',
                    minWidth: 'auto', // Adjusts width based on content
                    textTransform: 'uppercase',
                    letterSpacing: '0.8px',
                    fontSize: '0.9rem',
                    cursor: 'pointer', // Cursor changes on hover
                    transition: 'transform 0.3s ease', // Smooth hover effect
                }}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                }}
            >
                {tech}
            </Box>
        ))}
    </Box>
</Box>


         {/* Live Demo and Source Code Section */}
         <Box className={'portfolio'} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;
