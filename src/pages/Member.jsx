import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ClassNames } from '@emotion/react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const data = [
  {
    Name: 'Sample task',
    date: 'August 12, 2024',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde tempora ipsum laborum rerum atque natus nisi exercitationem a libero sit omnis deleniti ullam, laboriosam minima fugiat maxime, recusandae mollitia!',
    start_date: '10/06/2024',
    end_date: '12/07/2024',
    assignedby: 'Abirami',
    status: 'completed',
  },
  {
    Name: 'Sample task',
    date: 'August 12, 2024',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde tempora ipsum laborum rerum atque natus nisi exercitationem a libero sit omnis deleniti ullam, laboriosam minima fugiat maxime, recusandae mollitia!',
    start_date: '10/06/2024',
    end_date: '12/07/2024',
    assignedby: 'Murali',
    status: 'completed',
  },
  {
    Name: 'Sample task',
    date: 'August 12, 2024',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde tempora ipsum laborum rerum atque natus nisi exercitationem a libero sit omnis deleniti ullam, laboriosam minima fugiat maxime, recusandae mollitia!',
    start_date: '10/06/2024',
    end_date: '12/07/2024',
    assignedby: 'Abirami',
    status: 'completed',
  },
  {
    Name: 'Sample task',
    date: 'August 12, 2024',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde tempora ipsum laborum rerum atque natus nisi exercitationem a libero sit omnis deleniti ullam, laboriosam minima fugiat maxime, recusandae mollitia!',
    start_date: '10/06/2024',
    end_date: '12/07/2024',
    assignedby: 'Sasi',
    status: 'pending',
  },
  {
    Name: 'Sample task',
    date: 'August 12, 2024',
    detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde tempora ipsum laborum rerum atque natus nisi exercitationem a libero sit omnis deleniti ullam, laboriosam minima fugiat maxime, recusandae mollitia!',
    start_date: '10/06/2024',
    end_date: '12/07/2024',
    assignedby: 'Murali',
    status: 'pending',
  },
];

const Member = () => {
  const [expanded, setExpanded] = useState(-1);
  const navigate = useNavigate();

  const handleExpandClick = (index) => {
    setExpanded(expanded === index ? -1 : index);
  };

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='flex relative'>
        
        <div className={`${open ? 'w-72' : 'w-6'} lg:top-0  lg:sticky relative md:w-64 duration-300 h-screen bg-indigo-300  flex flex-col items-center py-2`}>
          <img
            src="../../right-arrow.png"
            className={`absolute cursor-pointer -right-3 top-9 w-7 ${open && 'rotate-180'} md:hidden`}
            onClick={() => setOpen(!open)}
            alt="toggle"
          />
          <div className='flex items-center mt-10 text-center md:block'>
           
            <p className={`text-blue-900 text-xl font-bold transition-opacity duration-300 ${!open && 'opacity-0'} ${open ? 'ml-4' : ''} md:opacity-100 md:ml-0`}>
              Profile
            </p>
          </div>
          <div className='flex text-blue-900 flex-col items-center mt-4 text-center md:mt-0'>
            <img src="" alt="" />
            <h2 className={` text-xl font-bold transition-opacity duration-300 ${!open && 'opacity-0'} ${open ? 'opacity-100' : ''} md:opacity-100`}>John Doe</h2>
            <p className={` text-sm transition-opacity duration-300 ${!open && 'opacity-0'} ${open ? 'opacity-100' : ''} md:opacity-100`}>Software Engineer</p>
            <p className={` text-sm transition-opacity duration-300 ${!open && 'opacity-0'} ${open ? 'opacity-100' : ''} md:opacity-100`}>johndoe@example.com</p>
          </div>
        
        </div>

        {/* Main Content */}
        <div className={`p-3 flex-1  h-screen text-white ${open && 'blur-md'} md:blur-none`}>
          <h1 className='sticky top-0 text-center font-bold text-2xl'>Task Details</h1>
          <div className="bg-sky-900 sticky top-7  gap-4 mt-2 p-2 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2 text-center">Quick Stats</h2>
            <p className='text-center'>Tasks Assigned: 5</p>
            <p className='text-center'>Tasks Completed: 3</p>
            <p className='text-center'>Pending Tasks: 2</p>
          </div>
          <div className='p-3 text-bold'>
            {data.map((item, index) => (
              <Card  key={index} className='mx-2 my-3 bg-indigo-300 text-2xl'>
                <CardHeader onClick={() => handleExpandClick(index)} className='bg-indigo-300'
                  avatar={
                    <Avatar sx={{ bgcolor: "blue" }}>
                      S
                    </Avatar>
                  }
                  action={
                    <ExpandMore
                      expand={expanded === index}
                       aria-expanded={expanded === index}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </ExpandMore>
                  }
                  title={item.Name}
                  subheader={item.date}
                />
                <CardContent className='bg-indigo-300 text-2xl'>
                  <Typography variant="body2">
                    Status: {item.status}
                  </Typography>
                </CardContent>
                <Collapse in={expanded === index} timeout="auto" unmountOnExit className='bg-indigo-300'>
                  <CardContent>
                    <Typography paragraph>Detail</Typography>
                    <Typography paragraph>
                      Starting date: {item.start_date}
                    </Typography>
                    <Typography paragraph>
                      End date: {item.end_date}
                    </Typography>
                    <Typography paragraph>
                      Assigned By: {item.assignedby}
                    </Typography>
                    <Typography>
                      Overview: {item.detail}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            ))}
          </div>
        </div>

        {open && (
          <div className="top-0inset-0 bg-opacity-50 z-10 md:hidden" onClick={() => setOpen(false)}></div>
        )}
      </div>
    </>
  );
};

export default Member;
