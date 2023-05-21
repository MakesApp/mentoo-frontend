import React, { useState } from "react";
import "./PersonalData.css";
interface User {
  id: number;
  fullName: string;
  volunteeringTime: number;
  project: string;
}


const PersonalData: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User>({
    id: 1,
    fullName: "Lord Voldermot",
    volunteeringTime: 118,
    project: "מחוברים לחיים",
  });

  return (
    <div>
      <div className="data-container">
        <div className="personal-info">
          <p className="vol-hours">{currentUser.volunteeringTime}</p>
          <p>
            שעות 
            ההתנדבות 
            שלי
          </p>
        </div>
        <div>
          <p className="project">{currentUser.project}</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalData;
