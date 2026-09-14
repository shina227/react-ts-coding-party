// Author: Shina Atete Mpeta  structure (Tasks 1-10)
// Author: Grevy  array and props (Tasks 13, 20)
// Author: Rwema  layout and styling (Tasks 21-30)

import MemberCard, { type MemberCardProps } from "./MemberCard";
import "./TeamDashboard.css";

const members: MemberCardProps[] = [
  {
    name: "Alice",
    role: "Frontend Developer",
    tasksCompleted: 12,
    isActive: true,
    bio: "Loves building UI with React.",
  },
  {
    name: "Bob",
    role: "Backend Developer",
    isActive: false,
  },
  {
    name: "Carol",
    role: "Designer",
    tasksCompleted: 5,
    isActive: true,
  },
];

function TeamDashboard() {
  return (
    <div className="dashboard">
      <h2>Team Dashboard</h2>
      <p style={{ fontStyle: "italic" }}>
        Track our group's progress on the React + TypeScript coding party.
      </p>

      <div className="card-grid">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default TeamDashboard;