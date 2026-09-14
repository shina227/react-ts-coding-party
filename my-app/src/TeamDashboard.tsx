// Author: Shina Atete Mpeta  structure (Tasks 1-10)
// Author: Grevy  array and props (Tasks 13, 20)
// Author: Rwema  layout and styling (Tasks 21-30)
// Author: IRADUKUNDA Ibrahim  form handling (Tasks 31-40)
// Author: Kagame Dan state (tasks 41-50)

import { type ChangeEvent, type FormEvent, useMemo, useState } from "react";
import MemberCard, { type MemberCardProps } from "./MemberCard";
import "./TeamDashboard.css";

interface TeamMember extends MemberCardProps {}

type FilterOption = "all" | "active" | "inactive";

const initialMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alice",
    role: "Frontend Developer",
    tasksCompleted: 12,
    isActive: true,
    bio: "Loves building UI with React.",
  },
  {
    id: "2",
    name: "Bob",
    role: "Backend Developer",
    isActive: false,
  },
  {
    id: "3",
    name: "Carol",
    role: "Designer",
    tasksCompleted: 5,
    isActive: true,
  },
  {
    id: "4",
    name: "Dan Kagame",
    role: "Project Lead",
    tasksCompleted: 8,
    isActive: true,
    bio: "Coordinates the team and keeps the project on track.",
  },
];

function TeamDashboard() {
  const [teamScore, setTeamScore] = useState<number>(0);
  const [newMemberName, setNewMemberName] = useState<string>("");
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [filter, setFilter] = useState<FilterOption>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      const statusMatches =
        filter === "all"
          ? true
          : filter === "active"
            ? member.isActive
            : !member.isActive;

      const searchMatches = member.name
        .toLowerCase()
        .includes(searchTerm.trim().toLowerCase());

      return statusMatches && searchMatches;
    });
  }, [filter, members, searchTerm]);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewMemberName(event.target.value);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = newMemberName.trim();

    if (!trimmedName) {
      return;
    }

    const newMember: TeamMember = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      name: trimmedName,
      role: "New Team Member",
      tasksCompleted: 0,
      isActive: true,
      bio: "Recently added to the team.",
    };

    setMembers((currentMembers) => [newMember, ...currentMembers]);
    setNewMemberName("");
  };

  const handleRemoveMember = (id: string) => {
    setMembers((currentMembers) =>
      currentMembers.filter((member) => member.id !== id),
    );
  };

  const handleToggleStatus = (id: string) => {
    setMembers((currentMembers) =>
      currentMembers.map((member) =>
        member.id === id
          ? { ...member, isActive: !member.isActive }
          : member,
      ),
    );
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

      <div className="controls-panel">
        <div className="filter-group" aria-label="Member filters">
          <button
            type="button"
            className={filter === "all" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            type="button"
            className={filter === "active" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
          <button
            type="button"
            className={filter === "inactive" ? "filter-btn active" : "filter-btn"}
            onClick={() => setFilter("inactive")}
          >
            Inactive
          </button>
        </div>

        <label className="search-label" htmlFor="member-search">
          Search members
        </label>
        <input
          id="member-search"
          className="search-input"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search by name"
        />
      </div>

      <div className="card-grid">
        {filteredMembers.length > 0 ? (
          filteredMembers.map((member) => (
            <MemberCard
              key={member.id}
              {...member}
              onRemove={handleRemoveMember}
              onToggleStatus={handleToggleStatus}
            />
          ))
        ) : (
          <p className="no-members">No members match the current filters.</p>
        )}
      </div>
    </div>
  );
}

export default TeamDashboard;
