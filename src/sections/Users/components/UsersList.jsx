import UsersListItem from './UsersListItem';

export default function UsersList(props) {
    const { users } = props;
  
    return (
      <ul>
        {users.map((user, index) => {
          return <UsersListItem key={index} user={user} />;
        })}
      </ul>
    );
  }