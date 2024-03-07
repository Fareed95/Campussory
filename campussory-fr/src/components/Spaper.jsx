import React from 'react';
import '/src/Styles/spaper.css'
function SamplePaperList() {
  // Sample data for past sample papers
  const samplePapers = [
    { srNo: 1, subject: 'Data Structures', year: 2021, downloadLink: '#' },
    { srNo: 2, subject: 'Algorithms', year: 2020, downloadLink: '#' },
    { srNo: 3, subject: 'System Design', year: 2019, downloadLink: '#' },
    { srNo: 4, subject: 'Object-Oriented Programming', year: 2018, downloadLink: '#' },
    { srNo: 5, subject: 'Database Management Systems', year: 2017, downloadLink: '#' },
    { srNo: 6, subject: 'Operating Systems', year: 2016, downloadLink: '#' },
    { srNo: 7, subject: 'Networking', year: 2015, downloadLink: '#' },
    { srNo: 8, subject: 'Problem Solving', year: 2014, downloadLink: '#' },
    { srNo: 9, subject: 'Coding Challenges', year: 2013, downloadLink: '#' },
    { srNo: 10, subject: 'Technical Interview Questions', year: 2012, downloadLink: '#' }
  ];

  return (
    <div className="sample-paper-list">
      <h2>Past Sample Papers</h2>
      <table>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Subject</th>
            <th>Year</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {samplePapers.map((paper) => (
            <tr key={paper.srNo}>
              <td>{paper.srNo}</td>
              <td>{paper.subject}</td>
              <td>{paper.year}</td>
              <td>
                <a href={paper.downloadLink} download>Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SamplePaperList;
