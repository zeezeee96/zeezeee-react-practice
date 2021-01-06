import { useEffect, useState } from "react";

const Datafetch = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/photos";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFetchedData(data);
      })
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Serial No</th>        
          <th>Title</th>
          <th>Picture</th>
        </tr>
        {fetchedData.map((x) => (
          <tr>
            <td> {x.id}</td>
            <td> {x.title} </td>
            <td>
              <img src={x.thumbnailUrl} alt="Error"></img>
            </td>
          </tr>
        ))}
      </table>
      {/* <ul>
          {fetchedData.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.id}</p>
            </li>
          ))}
        </ul> */}
    </div>
  );
};

export default Datafetch;
