export default function UserListItem(props) {
    const { user } = props;
    console.log(user);
    return(
      <li style={{background: `${user.favouriteColour}`}}>
        <img
          src={user.profileImage}
        />
        <h3>{user.firstName} {user.lastName}</h3>
        <p>Email: {user.email}</p>
      </li>
    );
}