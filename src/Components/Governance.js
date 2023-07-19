import { Typography } from '@mui/material';
import React from 'react';

const Governance = () => {
  return (
    <>
      <Typography variant="h5" sx={{ mb: "20px", fontSize: "24px", fontWeight: "bold" }}>
        Project Governance
      </Typography>
      <Typography variant="body1" sx={{ mb: "15px", fontSize: "18px", lineHeight: "1.6" }}>
        This portfolio and <span style={{ color: "#84ba64", fontSize: "22px" }}>resume download</span> project is governed by a transparent and collaborative decision-making process. As the sole owner and creator of this project, I am responsible for its maintenance and updates.
      </Typography>
      <Typography variant="h6" sx={{ mb: "10px" }}>
        Collaborators
      </Typography>
      <Typography variant="body1" sx={{ mb: "15px", fontSize: "18px", lineHeight: "1.6" }}>
        As the primary <span style={{ color: "#84ba64", fontSize: "22px" }}>contributor</span> and maintainer of this project, I ensure that all significant and valuable contributions are carefully considered. While I am the sole decision-maker for this project, I encourage feedback and suggestions from users and visitors to enhance the portfolio's content and user experience.
      </Typography>
      <Typography variant="h6" sx={{ mb: "10px" }}>
        Technical Direction
      </Typography>
      <Typography variant="body1" sx={{ mb: "15px", fontSize: "18px", lineHeight: "1.6" }}>
        As the project owner, I set the technical direction and <span style={{ color: "#84ba64", fontSize: "22px" }}>design choices</span> for the portfolio website and resume download functionality. I strive to create an efficient, responsive, and aesthetically pleasing web application that showcases my skills and accomplishments effectively.
      </Typography>
      <Typography variant="h6" sx={{ mb: "10px" }}>
        Community Engagement
      </Typography>
      <Typography variant="body1" sx={{ mb: "15px", fontSize: "18px", lineHeight: "1.6" }}>
        I value open communication and <span style={{ color: "#84ba64", fontSize: "22px" }}>welcome input</span> from users, clients, and peers. If you have any questions, suggestions, or feedback regarding this portfolio or resume download process, please feel free to reach out to me through the provided contact information on the website.
      </Typography>
      <Typography variant="body1" sx={{ mb: "15px", fontSize: "18px", lineHeight: "1.6" }}>
        My goal is to provide a seamless and enjoyable user experience, and your feedback is essential to achieve that.
      </Typography>
      <Typography variant="body1">
        This governance structure allows me to maintain full control over the project while promoting a collaborative and user-focused approach. By continuously improving and updating the portfolio and resume download features, I aim to present my skills and achievements in the best possible light to potential clients and employers.
      </Typography>
    </>
  );
};

export default Governance;
