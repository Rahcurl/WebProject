import "react";

const timetableData = {
  timeSlots: [
    "10:00 TO 10:50",
    "10:50 TO 11:40",
    "11:40 TO 12:30 (TEA BREAK)",
    "12:30 TO 1:20",
    "1:20 TO 2:10",
    "2:10 TO 2:25 (BREAK)",
    "2:25 TO 3:15",
    "3:15 TO 4:05",
  ],
  weekdays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  periods: [
    [
      ".NET (BD) / ADV. JAVA (MV)",
      ".NET (BD) / ADV. JAVA (MV)",
      "",
      "PD (Lib) / DM (OD) / EC (RKI)",
      "PD (Lib) / DM (OD) / EC (RKI)",
      "",
      "TOC (AKK)",
      "TOC (AKK)",
    ],
    [
      ".NET (PJT) / ADV. JAVA (Lib)",
      ".NET (PJT) / ADV. JAVA (Lib)",
      "",
      "AI/ML (CS)",
      "TOC (AKK)",
      "",
      "React (NV)",
      "React (NV)",
    ],
    [
      "AI/ML (CP)",
      "AI/ML (CP)",
      "",
      "PD (Lib) / DM (OD) / EC (RKI)",
      "PD (Lib) / DM (OD) / EC (RKI)",
      "",
      "TOC (AKK)",
      "TOC (AKK)",
    ],
    [
      "React (NV)",
      "React (NV)",
      "",
      "PD (DS) / DM (Lib) / EC (Lib)",
      "ADV. JAVA (NC)",
      "",
      "ADV. JAVA (NC)",
      "ADV. JAVA (NC)",
    ],
    [
      "React (SMS)",
      "React (SMS)",
      "",
      "PD (DS) / DM (Lib) / EC (Lib)",
      "AI/ML (CP)",
      "",
      "AI/ML (CP)",
      "AI/ML (CP)",
    ],
  ],
  locations: ["LL2 / LL6", "LL2", "214 / Elec. Machine Lab", "LL6", "118", "118"],
};

const Timetable = () => {
  const { timeSlots, weekdays, periods, locations } = timetableData;

  return (
    <div style={{ margin: "20px" }}>
      <h1 style={{ textAlign: "center" }}>RK University School of Engineering</h1>
      <br />
      <h1 style={{ textAlign: "center" }}>School of Engineering</h1>
      <h3 style={{ textAlign: "Left" }}>Class Counselor: Prof. Chhaya Patel</h3>
      <table
        border="1"
        style={{
          width: "100%",
          borderCollapse: "collapse",
          textAlign: "center",
        }}
      >
        <thead>
          <tr>
            <th>Time</th>
            {weekdays.map((day, index) => (
              <th key={index}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, rowIndex) => (
            <tr key={rowIndex}>
              <td>{time}</td>
              {weekdays.map((_, colIndex) => (
                <td key={colIndex}>{periods[colIndex][rowIndex] || ""}</td>
              ))}
            </tr>
          ))}
          <tr>
            <td>Class / Lab Location</td>
            {locations.map((location, index) => (
              <td key={index}>{location}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Timetable;
