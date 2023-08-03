import React from 'react';

function DdayList({ ddays }) {
  const calculateDday = (dday) => {
      try {
          const targetDateObj = new Date(dday);
          const today = new Date();
          const ddayInMillis = targetDateObj - today;
          let dDay = Math.floor(ddayInMillis / (1000 * 60 * 60 * 24));
          if (dDay > 1) {
              return (`D-${dDay+=1}`);
          } else {
              return (`D + ${dDay+=1}`);
          }
          } catch (error) {
              return;
          }
    };
return (
  <div>
    {/* <ul>
      {ddays.map((dday) => (
        <li key={dday.id}>
          <strong>{dday.title}</strong> - {calculateDday(dday.date)}
        </li>
      ))}
    </ul> */}
  </div>
);
}

export default DdayList
