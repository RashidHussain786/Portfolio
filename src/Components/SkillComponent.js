import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Importing Material-UI icon

const SkillComponent = () => {
  // Sample skills data (replace this with your actual skill data)
  const skills = [
    { id: 1, name: 'Node.js', description: 'Server-side JavaScript runtime', level: 'Intermediate', tag: 'Programming Languages' },
    { id: 2, name: 'React.js', description: 'JavaScript library for building user interfaces', level: 'Intermediate', tag: 'Frameworks' },
    { id: 3, name: 'Mui', description: 'Material-UI library for React', level: 'Intermediate', tag: 'Frameworks' },
    { id: 4, name: 'JavaScript', description: 'High-level, interpreted scripting language', level: 'Intermediate', tag: 'Programming Languages' },
    { id: 5, name: 'Entity Framework (EF) Core', description: 'Object-relational mapping framework', level: 'Beginner', tag: 'Frameworks' },
    { id: 6, name: 'C++', description: 'General-purpose programming language', level: 'Intermediate', tag: 'Programming Languages' },
    { id: 7, name: 'Leadership', description: 'Skills and qualities to guide and motivate a team', level: 'Advanced', tag: 'Soft Skills' },
    { id: 8, name: 'Communication', description: 'Effective exchange of information and ideas', level: 'Intermediate', tag: 'Soft Skills' },
    { id: 9, name: 'Management', description: 'Skills to organize and oversee projects and people', level: 'Intermediate', tag: 'Soft Skills' },
    { id: 10, name: 'Presentations', description: 'Skills to deliver engaging presentations', level: 'Intermediate', tag: 'Soft Skills' },
    // Add more skills with levels and tags as needed
  ];

  return (
    <Box sx={{ bgcolor: '#000', mt: { xs: '110px', md: '42px' }, color: '#fff' }}>
      <Container sx={{ maxWidth: { lg: '1032px' }, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', minHeight: { md: 'calc(100vh - 100px)' } }}>
        <Box sx={{ maxWidth: '980px', width: '100%', p: '30px', mt: { xs: 6, md: 0 }, textAlign: 'left' }}>
          <Typography variant="h1" sx={{ fontSize: '30px' }}>Skills</Typography>
          <Typography variant="body1" sx={{ fontSize: '18px', my: '20px', color: '#ccc' }}>
            Welcome to my Skills section. As a developer, I've acquired a diverse set of skills that enable me to tackle various challenges and build exceptional projects.
            Below, you'll find a curated list of some of my key skills and areas of expertise.
          </Typography>
          <Grid container spacing={2} sx={{display:'flex',alignContent:'center',justifyContent:'center',mt:2}} >
            {skills.map((skill) => (
              <Grid item key={skill.id} xs={6} sm={4} md={3} sx={{border: '1px solid #233056', borderRadius: '4px',p:2,m:1}}>
                <Box
                  sx={{
                    p: '10px',
                    borderRadius: '4px',
                    backgroundColor: '#026e00',
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textAlign: 'center',
                  }}
                >
                  {skill.name}
                  <CheckCircleIcon sx={{ fontSize: '18px', color: '#fff', verticalAlign: 'middle', marginLeft: '4px' }} />
                </Box>
                <Typography variant="body2" sx={{ fontSize: '14px', color: '#ccc', mt: '6px', textAlign: 'center' }}>
                  {skill.description}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '16px', color: '#ccc', mt: '6px', textAlign: 'center' }}>
                  Level: {skill.level}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: '14px', color: '#ccc', mt: '6px', textAlign: 'center' }}>
                  Tag: {skill.tag}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default SkillComponent;
