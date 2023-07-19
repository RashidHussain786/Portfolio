import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';

const ExperienceComponent = () => {
  // Sample data (replace this with the actual data fetched from LinkedIn)
  const experiences = [
    {
      id: 1,
      jobTitle: 'Software Engineer Intern',
      company: 'Cognizant',
      duration: 'Jan 2023 - Present',
      location: 'Gurugram, Haryana, India · On-site',
      skills: 'Entity Framework (EF) Core · React.js',
      logoUrl: 'https://media.licdn.com/dms/image/D4E0BAQHDKo68h6DqgQ/company-logo_100_100/0/1688389916667?e=1697673600&v=beta&t=enUfhJwl4szv65wR6OKOPnkiAFwGy87-37SMy9Njb_I',
    },
    // Add more experience data objects as needed
  ];

  // Sample certification data (replace this with the actual certification data)
  const certifications = [
    {
        id: 1,
        name: 'JavScript Basics for Beginners',
        issuer: 'Udemy',
        date: 'Feb 2023',
        credentialID: 'UC-dc4d6a76-213c-43db-af3a-9ab18a3d6ee2',
        logoUrl: 'https://media.licdn.com/dms/image/C4D0BAQFQr9e68bBOPQ/company-logo_100_100/0/1626275253364?e=1697673600&v=beta&t=HFDwvvZWmiKPuA-QDq6GISmYcGKW2LBANIpHOOyGYvg',
        link: 'https://www.udemy.com/certificate/UC-dc4d6a76-213c-43db-af3a-9ab18a3d6ee2/',
      },
    {
      id: 2,
      name: 'Web Development',
      issuer: 'Coding Blocks',
      date: 'Mar 2022',
      credentialID: 'CBOL-235970-c91c',
      logoUrl: 'https://media.licdn.com/dms/image/C560BAQF5th2_4vAFkA/company-logo_100_100/0/1584115380001?e=1697673600&v=beta&t=4hZEFWBACl3dyjK3cz7WB1WDA3jtum-LaIPDF2m2KIw',
      link: 'https://online.codingblocks.com/certificates/CBOL-235970-c91c',
    },
    {
      id: 3,
      name: 'Structuring Machine Learning Projects',
      issuer: 'Coursera',
      date: 'Jun 2020',
      credentialID: 'GFLAGYJPPB7C',
      logoUrl: 'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1697673600&v=beta&t=1dIpWX9CogcDz-k08HK8HjGwcjJeTroyd_TuPaf--_g',
      link: 'https://www.coursera.org/account/accomplishments/verify/GFLAGYJPPB7C',
    },
    {
      id: 4,
      name: 'AI For Everyone',
      issuer: 'Coursera',
      date: 'May 2020',
      credentialID: 'RXAFDHH6UKHE',
      logoUrl: 'https://media.licdn.com/dms/image/C4D0BAQGexnfBxeEG-g/company-logo_100_100/0/1608039227697?e=1697673600&v=beta&t=1dIpWX9CogcDz-k08HK8HjGwcjJeTroyd_TuPaf--_g',
      link: 'https://www.coursera.org/account/accomplishments/verify/RXAFDHH6UKHE',
    },
    // Add more certification objects as needed
  ];

  return (
    <Box sx={{ bgcolor: '#000', mt: { xs: '110px', md: '42px' }, color: '#fff' }}>
      <Container sx={{ maxWidth: { lg: '1032px' }, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: { md: 'calc(100vh - 100px)' } }}>
        <Box sx={{ maxWidth: '980px', width: '100%', p: '30px', mt: { xs: 6, md: 0 }, textAlign: 'left' }}>
          <Typography variant="h1" sx={{ fontSize: '30px' }}>Experience</Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', mt: '20px', color: '#ccc' }}>
          Welcome to my Experience section. Here, you can explore my journey through various past and current positions, gaining valuable expertise and honing my skills.
           Additionally, you'll find information about my earned Licenses & Certifications, showcasing my commitment to continuous learning and professional development.
            Join me as I share the highlights of my career and accomplishments.
          </Typography>
          {experiences.map((experience) => (
            <Box key={experience.id} sx={{ p: 2, mt: 2, border: '1px solid #0aa007', borderRadius: '4px' }}>
              <Grid container spacing={2} alignItems="center">
                {/* Display the company logo */}
                <Grid item sx={{ backgroundColor: 'transparent' }}>
                  <img src={experience.logoUrl} alt={experience.company} style={{ width: 48, height: 48 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5">{experience.jobTitle}</Typography>
                  <Typography variant="subtitle1">{experience.company}</Typography>
                  <Typography variant="body1">{experience.duration}</Typography>
                  <Typography variant="body1">{experience.location}</Typography>
                  {/* You can add additional styling or elements here to display skills */}
                  <Typography variant="body2">{experience.skills}</Typography>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>

        {/* Certifications Section */}
        <Box sx={{ maxWidth: '980px', width: '100%', p: '30px', mt: '24px', textAlign: 'left' }}>
          <Typography variant="h1" sx={{ fontSize: '30px' }}>Licenses & Certifications</Typography>
          {certifications.map((certification) => (
            <Box key={certification.id} sx={{ p: 2, mt: 2, border: '1px solid #0aa007', borderRadius: '4px' }}>
              <Grid container spacing={2} alignItems="center">
                {/* Display the certification logo */}
                <Grid item sx={{ backgroundColor: 'transparent' }}>
                  <img src={certification.logoUrl} alt={certification.name} style={{ width: 48, height: 48 }} />
                </Grid>
                <Grid item xs>
                  <Typography variant="h5">{certification.name}</Typography>
                  <Typography variant="subtitle1">{certification.issuer}</Typography>
                  <Typography variant="body1">Issued {certification.date}</Typography>
                  <Typography variant="body1">Credential ID :- {certification.credentialID}</Typography>
                  
                  {/* Link to view the certification */}
                  <Grid item xs>
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop:'5px',
                    display: 'inline-block',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    backgroundColor: '#000',
                    color: '#fff',
                    textDecoration: 'none',
                    boxShadow: '0 1px 3px rgba(255, 255, 255, 0.8)',
                    transition: 'background-color 0.2s ease-in-out',
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = '#0aa007'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = '#000'}
                >
                  Show Credential
                </a>
              </Grid>
                  
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default ExperienceComponent;
