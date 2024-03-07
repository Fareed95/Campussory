import React from 'react';
import PlacedCard from '/src/components/Placedcard.jsx'; 
import '/src/Styles/Placed.css'; 

function Placed() {

  const placedStudents = [
   
    {
      img: '/public/images/undraw_male_avatar_g98d.svg',
      name: 'John Doe',
      dis: 'Computer Science',
      comp: 'ABC Technologies',
      amt: '$60,000',
    },
    {
      img: '/public/images/undraw_female_avatar_efig.svg',
      name: 'Jane Smith',
      dis: 'Electrical Engineering',
      comp: 'XYZ Corporation',
      amt: '$65,000',
    },
    {
      img: '/public/images/undraw_male_avatar_g98d.svg',
      name: 'John Doe',
      dis: 'Computer Science',
      comp: 'ABC Technologies',
      amt: '$60,000',
    },
    {
      img: '/public/images/undraw_female_avatar_efig.svg',
      name: 'Jane Smith',
      dis: 'Electrical Engineering',
      comp: 'XYZ Corporation',
      amt: '$75,000',
    },
    {
      img: '/public/images/undraw_male_avatar_g98d.svg',
      name: 'Alice Johnson',
      dis: 'Data Science',
      comp: '123 Enterprises',
      amt: '$80,000',
    },
    {
      img: '/public/images/undraw_male_avatar_g98d.svg',
      name: 'Bob Williams',
      dis: 'Software Engineering',
      comp: 'Tech Solutions Inc.',
      amt: '$70,000',
    },
       {
      img: '/public/images/undraw_female_avatar_efig.svg',
      name: 'Alice Johnson',
      dis: 'Data Science',
      comp: '123 Enterprises',
      amt: '$80,000',
    },
    {
      img: '/public/images/undraw_male_avatar_g98d.svg',
      name: 'Bob Williams',
      dis: 'Software Engineering',
      comp: 'Tech Solutions Inc.',
      amt: '$70,000',
    },
    {
      img: '/public/images/undraw_female_avatar_efig.svg',
      name: 'Alice Johnson',
      dis: 'Data Science',
      comp: '123 Enterprises',
      amt: '$80,000',
    }
  ];

  return (
    <div className="placed-container">
      <h2 id='placed'>Placed Students</h2>
      <div className="placed-cards">
        {placedStudents.map((student, index) => (
          <PlacedCard
            key={index}
            img={student.img}
            name={student.name}
            dis={student.dis}
            comp={student.comp}
            amt={student.amt}
          />
        ))}
      </div>
    </div>
  );
}

export default Placed;
