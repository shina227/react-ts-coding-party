// Author: Shina original shell (Tasks 1-10)
// Author: Grevy  props and types (Tasks 11-19)
// Author: Rwema  styling (Tasks 21-30)
// Author: IRADUKUNDA Ibrahim  form handling (Tasks 31-40)
// Author: Dan Kagame (Tasks 41-50)

import "./MemberCard.css";

export interface MemberCardProps {
  id?: string;
  name: string;
  role: string;
  tasksCompleted?: number;
  isActive: boolean;
  bio?: string;
  onRemove?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
}

function MemberCard({
  id = "",
  name,
  role,
  tasksCompleted = 0,
  isActive,
  bio,
  onRemove,
  onToggleStatus,
}: MemberCardProps) {
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

      <div className="card-actions">
        <button
          type="button"
          className="toggle-btn"
          onClick={() => onToggleStatus?.(id || name)}
        >
          {isActive ? "Mark Inactive" : "Mark Active"}
        </button>

        <button
          type="button"
          className="remove-btn"
          onClick={() => onRemove?.(id || name)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default MemberCard;
