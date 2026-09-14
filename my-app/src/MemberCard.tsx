// Author: Shina original component shell (Tasks 1-10)
// Author: Grevy  typed props, conditional rendering, default values (Tasks 11-19)

// Task 11: typed props interface
export interface MemberCardProps {
  name: string;
  role: string;
  tasksCompleted?: number; // Task 14 (numeric) + Task 19 (optional so a default can apply)
  isActive: boolean; // Task 15
  bio?: string; // Task 17: optional prop
}

// Task 19: default value supplied via default function parameter
function MemberCard({ name, role, tasksCompleted = 0, isActive, bio }: MemberCardProps) {
  return (
    <div className="member-card">
      {/* Task 12: display name and role */}
      <h3>{name}</h3>
      <p>{role}</p>

      {/* Task 14: numeric prop */}
      <p>Tasks completed: {tasksCompleted}</p>

      {/* Task 16: conditional rendering based on isActive */}
      <p>{isActive ? "Active" : "Inactive"}</p>

      {/* Task 18: only render bio when one is provided */}
      {bio && <p>{bio}</p>}
    </div>
  );
}

export default MemberCard;
