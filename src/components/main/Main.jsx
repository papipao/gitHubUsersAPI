import { useState, useEffect } from "react";

function Main() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const res = await fetch(`https://api.github.com/users`);
    const data = await res.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      {users.map((user) => (
        <div className="card_item" key={user.id}>
          <div className="card_inner">
            <img src={user.avatar_url} alt={user.logi} />
            <div className="userName">{user.login}</div>
            <div className="userUrl">{user.html_url}</div>
            <div className="detail-box">
              <div className="getDetail">
                <span>Articles</span>
                23
              </div>
              <div className="getDetail">
                <span>Following</span>
                14
              </div>
              <div className="getDetail">
                <span>Followers</span>
                300
              </div>
            </div>
            <button className="seeMore">See More</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
