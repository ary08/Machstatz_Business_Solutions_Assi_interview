import React, { useEffect, useState } from "react";
import axios from "axios";

const Display = () => {
  const URL = `https://assignmentapis.herokuapp.com/machstatz/get_all_users`;
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(URL).then((data) => {
      // console.log(data);
      setData(data.data);
    });
  }, []);
  console.log(data);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>fist_name</th>
            <th>last_name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>

        {data &&
          data.map((item, index) => {
            return (
              // console.log(item);
              <tbody ket={index}>
                <tr>
                  {/* <td>{item.id.oid}</td> */}
                  <td>{item.fist_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Display;
