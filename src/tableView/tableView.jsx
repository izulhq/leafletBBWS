import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { FaRegCalendarAlt } from "react-icons/fa";

function StripedRowExample() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const today = new Date().toISOString().split("T")[0];
        const apiUrl = `/klimatologi/klimatologi/1/${today}`;

        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to load data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div className="text-danger">{error}</div>;

  return (
    <>
      <h1
        align="center"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "600",
          fontSize: "1.5rem",
          paddingTop: "10px",
          paddingBottom: "8px",
        }}
      >
        Data Klimatologi
      </h1>
      <h2
        align="center"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "1.1rem",
          paddingBottom: "8px",
        }}
      >
        <FaRegCalendarAlt className="mx-2 mt-0" size="25" />
        {new Date().toLocaleDateString()}
      </h2>
      <table
        className="min-w-full text-sm font-poppins font-normal"
        align="center"
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "400",
          fontSize: "0.9rem",
        }}
      >
        <thead
          style={{
            backgroundColor: "#a7c7e7",
            color: "white",
          }}
        >
          <tr>
            <th className="px-2 border">No</th>
            <th className="px-4 py-2 border">Nama Pos</th>
            <th className="px-4 py-2 border">Curah Hujan (mm)</th>
            <th className="px-4 py-2 border">Suhu Min (°C)</th>
            <th className="px-4 py-2 border">Suhu Max (°C)</th>
            <th className="px-4 py-2 border">Kelembapan (%)</th>
            <th className="px-4 py-2 border">Kec. Angin (m/s)</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.pos.id}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{item.pos.nama}</td>
                <td className="px-4 py-2 border text-center">{item.data.ch}</td>
                <td className="px-4 py-2 border text-center">
                  {item.data.suhu_min}
                </td>
                <td className="px-4 py-2 border text-center">
                  {item.data.suhu_max}
                </td>
                <td className="px-4 py-2 border text-center">
                  {item.data.kelembapan}
                </td>
                <td className="px-4 py-2 border text-center">
                  {item.data.kecepatan_angin}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center px-4 py-2 border">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default StripedRowExample;
