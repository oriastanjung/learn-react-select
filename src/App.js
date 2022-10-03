import React, { useState } from "react";
import "./App.css";
import Select from "react-select";

function App() {
  const [jabatan, setJabatan] = useState();
  const JabatanDariAPI = [
    "kepala sekolah",
    "wakil kepala sekolah",
    "guru sekolah",
    "tata usaha",
  ];

  const pilihanJabatan = JabatanDariAPI.map((item) => {
    return { value: item, label: item };
  });

  const handleChange = (opsiYangDipilih) => {
    console.log(opsiYangDipilih); // wajib dalam {value : "" , item : ""}
    setJabatan(opsiYangDipilih);
  };

  const submitHandle = () => {
    const data = {
      nama: "orias",
      jabatan: jabatan.value,
    };
    console.log(data);
  };
  return (
    <div className="App">
      <Select
        options={pilihanJabatan}
        value={jabatan}
        onChange={handleChange}
      />
      <button onClick={submitHandle}>Submit</button>
    </div>
  );
}

export default App;
