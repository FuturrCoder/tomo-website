import PersonCard from "./PersonCard";

function UsersList({ users, message }) {
  return (
    <div className="mt-2 flex flex-nowrap gap-3 overflow-x-auto">
      {users.length === 0 ?
        <p className="mt-4 test-md text-neutral-gray">{message}</p> :
        users.map((user) => (
          <PersonCard {...user} key={user.id}/>
        ))
      }
    </div>
  );
}

export default UsersList;