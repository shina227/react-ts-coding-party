// Author: Shina original shell (Tasks 1-10)
// Author: Grevy  props and types (Tasks 11-19)
// Author: Rwema  styling (Tasks 21-30)

import "./MemberCard.css";

export interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted?: number;
  isActive: boolean;
  bio?: string;
}

function MemberCard({
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
}: MemberCardProps) {
  // pick card class based on active state
  const cardClass = isActive ? "card active" : "card inactive";

  return (
    <div className={cardClass}>
      <h3 className="name">{name}</h3>
      <p className="role">{role}</p>
      <p className="tasks">Tasks completed: {tasksCompleted}</p>

      <span className={isActive ? "status-active" : "status-inactive"}>
        {isActive ? "Active" : "Inactive"}
      </span>

      {bio && <p className="bio">{bio}</p>}
    </div>
  );
}

export default MemberCard;