import React from 'react';
import './App.css';
import report from './report.json';


function App() {

  console.log(report)



  // for (let i = 0; i < report.markers.length; i++) {

  //   console.log(i)
  //   console.log(report.markers[i].name)
  // }

  return (
    <div>
      {report.markers[0].name}
      {
        report.markers.map((marker, index) => {
          return (
            <div key={index} >
              <div>{marker.id}</div>
              <div>{marker.name}</div>
              <div>{marker.short}</div>
              <div>{marker.info}</div>
                <div>
                  {marker.measurements.map((measurement, index) => {
                    return (
                      <div key={index}>
                        <div>score {measurement.score}</div>
                      </div>
                    )
                  })}
                </div>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
