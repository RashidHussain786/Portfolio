import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const ProjectComponent = () => {
  // Sample project data (replace this with your actual project data)
  const projects = [
    {
        id: 1,
        name: 'Jewelllery Store',
        date: 'Jun 2023 - Jul 2023',
        description:
          'This web application for the Jewelry Store ensures a secure and user-friendly experience for customers. Users are required to log in with their credentials, and only authenticated users can access certain features. Admins have additional privileges to manage products and view order history from a separate dashboard. User passwords are encrypted for security, and the application gracefully handles errors. The design is responsive, allowing access from various devices.',
        githubLink: 'https://github.com/RashidHussain786/Khazana_Jewellers',
      },
      {
        id: 2,
        name: 'Music Community',
        date: 'Feb 2022 - Jul 2023',
        description:
          'Video Calling With Strangers. Submit your song and check whether any person is present who is listening to the same song at the same time. Video calling with that person with similar music. ✨Magic ✨',
        githubLink: 'https://github.com/RashidHussain786/Music_Community',
      },
    {
      id: 3,
      name: 'Student Attendence',
      date: 'Jan 2023 - Jan 2023',
      description:
        'This is a simple frontend web page developed using React.js and Material-UI Components, a popular UI framework for React applications.React Hooks enable developers to add state and lifecycle methods to functional components, making them more versatile and easier to manage. With React Hooks, the project achieves efficient state management and improves code readability and maintainability.',
      githubLink: 'https://github.com/RashidHussain786/Student_Attendence',
    },
    {
      id: 4,
      name: 'Online Book',
      date: 'Jan 2022 - Jan 2022',
      description:
        'This is a simple frontend web page developed using React.js and Material-UI Components, a popular UI framework for React applications. The project leverages the power of React Hooks, which are a set of functions introduced in React 16.8 to allow state and other React features in functional components',
      githubLink: 'https://github.com/RashidHussain786/Online_books',
    },
    {
      id: 5,
      name: 'E-Commerce Website',
      date: 'Mar 2021 - Jun 2021',
      description:
        'Login/Signup (SESSION): The project implements a secure and user-friendly authentication system that allows users to register and log in to their accounts. It incorporates session management techniques to maintain user sessions, providing a seamless and secure login experience. Users can sign up for new accounts with their credentials, and existing users can log in to access personalized features and data',
      githubLink: 'https://github.com/RashidHussain786/E-commerece_website',
    },
    // Add more projects as needed
  ];

  return (
    <Box sx={{ bgcolor: '#000', mt: { xs: '110px', md: '42px' }, color: '#fff' }}>
      <Container sx={{ maxWidth: { lg: '1032px' }, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: { md: 'calc(100vh - 100px)' } }}>
        <Box sx={{ maxWidth: '980px', width: '100%', p: '30px', mt: { xs: 6, md: 0 }, textAlign: 'left' }}>
          <Typography variant="h1" sx={{ fontSize: '30px' }}>Projects</Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', my: '20px', color: '#ccc' }}>
          Welcome to my Projects section, where you can explore some of the exciting projects I have worked on, 
          including the Music Community project featuring real-time video calling and song matching using
           React.js, Node.js, and WebRTC, as well as the Online Book project, showcasing a simple frontend page
            with React.js and Material UI Components utilizing React Hooks and custom styling.
          </Typography>
          {projects.map((project) => (
            <Box key={project.id} sx={{p:2, mt: 2, border: '1px solid #233056', borderRadius: '4px' }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item >
                <Box sx={{p:'10px',borderRadius:'4px',bgcolor:'#026e00',color:'#fff',fontWeight:'bold',fontSize:"18px",textAlign:'center'}}>
                    {project.name}
                </Box>
                  <Typography variant="subtitle1"sx={{py:2}}>{project.date}</Typography>
                  <Typography variant="body1"sx={{pb:2}}> {project.description}</Typography>
                  
                  {/* Link to view the certification */}
                  <Grid item xs>
                <a
                  href={project.githubLink}
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
                  Show Project
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

export default ProjectComponent;
