import React from 'react';
import QUERY from '../Query';
import './index.css';
import CV_QUERY from './query/cv';
const MyPDFViewer = () => {
    return (
      <QUERY query={CV_QUERY} id={null}>
      {({ data: { cv } }) => {
        return(
          <>
          <ul className="fa-ul">
            <li style={{color: '#fff'}}><i className="fa fa-file-pdf-o" aria-hidden="true" style={{color: 'red'}}></i><a style={{color: '#DB8962'}} href={cv.file_url} target="_blank"> My CV.pdf</a></li>
          </ul>
          <div className="modal">
            <div className="modalContent">
                <iframe src={cv.file_url} name="viewme" style={{width:"600px", height:"500px"}} frameborder="0"></iframe>

            </div>
          </div>
          </>

    );
  }
}
</QUERY>
);
}

export default MyPDFViewer;
