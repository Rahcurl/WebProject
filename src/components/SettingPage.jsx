import { useContext, useState } from "react";
import { SettingsContext } from "../context/SettingsContext";

function SettingPage() {
  const { settings, updateSettings } = useContext(SettingsContext);
  const [formData, setFormData] = useState(settings);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        facilities: { ...prev.facilities, [name]: checked },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateSettings(formData);
    alert("Settings updated successfully!");
  };

  return (
    <div className="settings-container">
      <h2>Hostel Settings</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Hostel Name:
          <input
            type="text"
            name="hostelName"
            value={formData.hostelName}
            onChange={handleChange}
          />
        </label>

        <label>
          Room Capacity:
          <input
            type="number"
            name="roomCapacity"
            value={formData.roomCapacity}
            onChange={handleChange}
            min="1"
          />
        </label>

        <div>
          <h3>Facilities:</h3>
          <label>
            <input
              type="checkbox"
              name="wifi"
              checked={formData.facilities.wifi}
              onChange={handleChange}
            />
            WiFi
          </label>
          <label>
            <input
              type="checkbox"
              name="laundry"
              checked={formData.facilities.laundry}
              onChange={handleChange}
            />
            Laundry
          </label>
          <label>
            <input
              type="checkbox"
              name="gym"
              checked={formData.facilities.gym}
              onChange={handleChange}
            />
            Gym
          </label>
        </div>

        <button type="submit">Update Settings</button>
      </form>
    </div>
  );
}

export default SettingPage;
