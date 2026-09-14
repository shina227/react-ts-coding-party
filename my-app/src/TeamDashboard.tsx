// Author: Shina Atete Mpeta  original TeamDashboard structure (Tasks 1-10)
// Author: Grevy  typed member array and props (Tasks 13, 20)
import MemberCard, { type MemberCardProps } from "./MemberCard";

// Task 20: typed array of member objects
// (Task 13 is satisfied by this array feeding different name/role values to each card)
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
    isActive: false, // tasksCompleted omitted on purpose, Task 19's default kicks in
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
    <>
      <h2>Team Dashboard</h2>
      <p>Track our group's progress on the React + TypeScript coding party.</p>

      {/* Task 20: render from the typed array with .map() */}
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </>
  );
}

export default TeamDashboard;
