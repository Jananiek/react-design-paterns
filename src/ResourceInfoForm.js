import { withEditableResource } from "./withEditableResource";

export const ResourceInfoForm = withEditableResource(
  ({ user, onChangeUser, onSaveUser, onResetUser }) => {
    const { name, age, hairColor } = user || {};
    return user ? (
      <>
        <label>
          Name:
          <input
            value={name}
            type="text"
            onChange={(e) => onChangeUser({ name: e.target.value })}
          />
        </label>
        <label>
          Age:
          <input
            value={age}
            type="number"
            onChange={(e) => onChangeUser({ age: e.target.value })}
          />
        </label>
        <label>
          Hair Color:
          <input
            value={hairColor}
            onChange={(e) => onChangeUser({ hairColor: e.target.value })}
          />
        </label>
        <button onClick={onResetUser}>Reset</button>
        <button onClick={onSaveUser}>Save</button>
      </>
    ) : (
      <p>Loading....</p>
    );
  },
  "/users/234","user"
);
