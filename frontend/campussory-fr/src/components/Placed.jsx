import React from 'react';
import PlacedCard from '/src/components/Placedcard.jsx'; 
import '/src/Styles/Placed.css'; 

function Placed() {

  const placedStudents = [
   
    {
      img: 'path_to_image1.jpg',
      name: 'John Doe',
      dis: 'Computer Science',
      comp: 'ABC Technologies',
      amt: '$60,000',
    },
    {
      img: 'path_to_image2.jpg',
      name: 'Jane Smith',
      dis: 'Electrical Engineering',
      comp: 'XYZ Corporation',
      amt: '$65,000',
    },
    {
      img: 'path_to_image1.jpg',
      name: 'John Doe',
      dis: 'Computer Science',
      comp: 'ABC Technologies',
      amt: '$60,000',
    },
    {
      img: 'path_to_image2.jpg',
      name: 'Jane Smith',
      dis: 'Electrical Engineering',
      comp: 'XYZ Corporation',
      amt: '$75,000',
    },
    {
      img: 'path_to_image3.jpg',
      name: 'Alice Johnson',
      dis: 'Data Science',
      comp: '123 Enterprises',
      amt: '$80,000',
    },
    {
      img: 'path_to_image4.jpg',
      name: 'Bob Williams',
      dis: 'Software Engineering',
      comp: 'Tech Solutions Inc.',
      amt: '$70,000',
    },
       {
      img: 'path_to_image3.jpg',
      name: 'Alice Johnson',
      dis: 'Data Science',
      comp: '123 Enterprises',
      amt: '$80,000',
    },
    {
      img: 'path_to_image4.jpg',
      name: 'Bob Williams',
      dis: 'Software Engineering',
      comp: 'Tech Solutions Inc.',
      amt: '$70,000',
    },

  ];

  return (
    <div className="placed-container">
      <h2>Placed Students</h2>
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
