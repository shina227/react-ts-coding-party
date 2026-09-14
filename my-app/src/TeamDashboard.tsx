// Author: Shina Atete Mpeta  structure (Tasks 1-10)
// Author: Grevy  array and props (Tasks 13, 20)
// Author: Rwema  layout and styling (Tasks 21-30)
// Author: IRADUKUNDA Ibrahim  form handling (Tasks 31-40)

import { type ChangeEvent, type FormEvent, useState } from "react";
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
  const [teamScore, setTeamScore] = useState<number>(0);
  const [newMemberName, setNewMemberName] = useState<string>("");

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted member name:", newMemberName);
    setNewMemberName("");
  };

  return (
    <div className="dashboard">
      <h2>Team Dashboard</h2>
      <p style={{ fontStyle: "italic" }}>
        Track our group's progress on the React + TypeScript coding party.
      </p>

      <div className="score-panel">
        <h3>Team Score</h3>
        <p className="team-score">{teamScore}</p>
        <div className="score-actions">
          <button type="button" onClick={() => setTeamScore((current) => current + 1)}>
            Increase Score
          </button>
          <button
            type="button"
            onClick={() => setTeamScore((current) => Math.max(0, current - 1))}
          >
            Decrease Score
          </button>
        </div>
      </div>

      <form className="member-form" onSubmit={handleSubmit}>
        <label htmlFor="member-name">New member name</label>
        <input
          id="member-name"
          type="text"
          value={newMemberName}
          onChange={handleNameChange}
          placeholder="Enter a member name"
        />
        <button type="submit">Add Member</button>
      </form>

      <div className="card-grid">
        {members.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}

export default TeamDashboard;