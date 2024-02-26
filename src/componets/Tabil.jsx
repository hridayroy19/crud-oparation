import { useEffect, useState } from "react";
import UseAxiosPublic from "./sheradComponet/UseAxiosPublic";

const Tabil = () => {
  const [datas, setDatas] = useState([]);
  console.log(datas);

  const axiosPublic = UseAxiosPublic();

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axiosPublic.get("/data");
  //         const data = response.data;
  //         setDatas(data);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }dfdf
  //     };

  //     fetchData();
  //   }, [axiosPublic]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const rensponce = await axiosPublic("/data")
        const data = rensponce.data
        setDatas(data);
      }
      catch (error) {
        console.log(error, " data fetching error")
      }
    }
    fetchData()

  }, [axiosPublic])

  return (
    <div className="mt-14 mb-10">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead className="bg-yellow-300">
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>Phone Namber</th>
              <th> action</th>
            </tr>
          </thead>
          <tbody className="text-xl bg-red-100 font-mono">
            {/* row 1 */}
            {datas?.map((dataInfo) => (
              <tr key={dataInfo._id}>
                <td>{dataInfo.fromData} </td>
                <td> {dataInfo.email} </td>
                <td>{dataInfo.phone} </td>
                <td className=" flex gap-4 text-red-800">
                  <button className="w-[95px] border-2 border-gray-800  hover:bg-rose-400 ">update</button>
                  <button className="w-[95px] border-2 border-gray-800 hover:bg-rose-400 ">delet</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabil;
