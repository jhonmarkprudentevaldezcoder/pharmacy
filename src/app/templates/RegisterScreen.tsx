"use client";
import React, { useState } from "react";

export default function RegisterScreen() {
  const [Strand, setStrand] = useState<string>("");
  const [ID, setId] = useState<string>("");
  const [RFID, setRfid] = useState<string>("");
  const [Username, setUsername] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password1, setPassword1] = useState<string>("");
  const [Password2, setPassword2] = useState<string>("");
  const [FirstName, setFirstName] = useState<string>("");
  const [MiddleName, setMiddleName] = useState<string>("");
  const [Surname, setSurname] = useState<string>("");
  const [Gender, setGender] = useState<string>("");
  const [Address, setAddress] = useState<string>("");
  const [GradeLevel, setGradeLevel] = useState<string>("");
  const [Section, setSection] = useState<string>("");
  const [ContactNumber, setContactNumber] = useState<string>("");

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if Passwords match
    if (Password1 !== Password2) {
      alert("Passwords do not match.");
      return;
    }

    // Create a user object with form data
    const user = {
      ID,
      RFID,
      Username,
      Email,
      Password: Password1, // Use one of the Passwords
      FirstName,
      MiddleName,
      Surname,
      Gender,
      Strand,
      Address,
      GradeLevel,
      Section,
      ContactNumber,
    };

    try {
      // Send a POST request to the registration endpoint
      const response = await fetch("https://kvnshapi.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        // Registration successful
        alert("Registration successful!");
        setId("");
        setRfid("");
        setUsername("");
        setEmail("");
        setPassword1("");
        setPassword2("");
        setFirstName("");
        setMiddleName("");
        setSurname("");
        setGender("");
        setStrand("");
        setAddress("");
        setGradeLevel("");
        setSection("");
        setContactNumber("");
      } else {
        // Registration failed
        const responseData = await response.json(); // Parse response JSON
        alert(`Registration failed. ${responseData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during registration.");
    }
  };

  return (
    <div id="Registe" className="mb-12 mt-12">
      <div
        className="h-96 bg-gray-200/50 bg-no-repeat"
        style={{
          backgroundImage: "url('/images/ban.jpg')",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="flex flex-col md:flex-row justify-center gap-24 md:gap-9">
        <div className="flex flex-col py-4 gap-1 md:w-1/2 lg:w-1/4">
          <div className="flex flex-col gap-5 md:py-5 lg:py-12   ">
            <span className="font-bold text-[#051c40] text-3xl uppercase px-5 md:px-0 ">
              REGISTER
            </span>
            <form
              onSubmit={handleRegistration}
              className="text-sm px-5 md:px-0 flex flex-col gap-4 "
            >
              <input
                type="text"
                placeholder="ID"
                className="input-text"
                value={ID}
                onChange={(e) => setId(e.target.value)}
              />
              {/*  <input
                type="text"
                placeholder="RFID"
                className="input-text"
                value={RFID}
                onChange={(e) => setRfid(e.target.value)}
              /> */}
              <input
                type="text"
                placeholder="Username"
                className="input-text"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                className="input-text"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="Password"
                placeholder="Password"
                className="input-text"
                value={Password1}
                onChange={(e) => setPassword1(e.target.value)}
                required
              />
              <input
                type="Password"
                placeholder="Confirm password"
                className="input-text"
                value={Password2}
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="FIRST NAME"
                className="input-text"
                value={FirstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="MIDDLE NAME"
                className="input-text"
                value={MiddleName}
                onChange={(e) => setMiddleName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="LAST NAME"
                className="input-text"
                value={Surname}
                onChange={(e) => setSurname(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Gender"
                className="input-text"
                value={Gender}
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="input-text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="GRADE LEVEL"
                className="input-text"
                value={GradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Section"
                className="input-text"
                value={Section}
                onChange={(e) => setSection(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Strand"
                className="input-text"
                value={Strand}
                onChange={(e) => setStrand(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="CONTACT NUMBER"
                className="input-text"
                value={ContactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
              <input
                type="submit"
                value="REGISTER"
                className="p-2 w-full bg-blue-900 text-white font-sans font-bold cursor-pointer hover:bg-blue-600 transition-all ease-in-out duration-75 delay-75"
              />
            </form>
          </div>
        </div>

        <div className="md:w-1/4 py-5 md:py-2 flex items-center">
          <div
            className="h-96 bg-gradient-to-r from-blue-900 to-blue-500  w-full "
            style={{
              backgroundImage: "url('/images/logo.jpg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
