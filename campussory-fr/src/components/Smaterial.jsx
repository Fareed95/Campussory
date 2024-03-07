import React from 'react';
import '/src/Styles/smaterial.css'
function Smaterial() {
  // Sample data for study materials
  const studyMaterials = [
    { srNo: 1, topic: 'HTML5 and CSS3 Basics', reviews: 4.5 },
    { srNo: 2, topic: 'Responsive Web Design', reviews: 4.2 },
    { srNo: 3, topic: 'JavaScript Fundamentals', reviews: 4.7 },
    { srNo: 4, topic: 'Frontend Frameworks (React, Angular, Vue.js)', reviews: 4.0 },
    { srNo: 5, topic: 'Backend Development with Node.js and Express', reviews: 4.3 },
    { srNo: 6, topic: 'RESTful APIs', reviews: 4.1 },
    { srNo: 7, topic: 'Database Management (SQL, MongoDB)', reviews: 4.6 },
    { srNo: 8, topic: 'Authentication and Authorization', reviews: 4.4 },
    { srNo: 9, topic: 'Web Security Best Practices', reviews: 4.2 },
    { srNo: 10, topic: 'Deployment and Hosting (AWS, Heroku, Netlify)', reviews: 4.5 },
    { srNo: 11, topic: 'Introduction to Machine Learning', reviews: 4.6 },
    { srNo: 12, topic: 'Linear Regression', reviews: 4.3 },
    { srNo: 13, topic: 'Logistic Regression', reviews: 4.7 },
    { srNo: 14, topic: 'Decision Trees', reviews: 4.2 },
    { srNo: 15, topic: 'Random Forests', reviews: 4.5 },
    { srNo: 16, topic: 'Neural Networks', reviews: 4.4 },
    { srNo: 17, topic: 'Deep Learning Frameworks (TensorFlow, PyTorch)', reviews: 4.6 },
    { srNo: 18, topic: 'Natural Language Processing (NLP)', reviews: 4.1 },
    { srNo: 19, topic: 'Computer Vision', reviews: 4.5 },
    { srNo: 20, topic: 'Reinforcement Learning', reviews: 4.3 }
  ];

  return (
    <div className="study-material-list">
      <h2>Study Materials</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Topic</th>
            <th>Reviews</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {studyMaterials.map((material) => (
            <tr key={material.srNo}>
              <td>{material.srNo}</td>
              <td>{material.topic}</td>
              <td>{material.reviews}</td>
              <td>
                <button>Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Smaterial;

