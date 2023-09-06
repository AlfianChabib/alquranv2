"use client";
import { useState } from "react";
import { usePosition } from "../stores/Position";
import EditKota from "./EditKota";

export default function TimePosition() {
  const kota = usePosition((state) => state.kota);
  const kabupaten = usePosition((state) => state.kabupaten);

  const [editKota, setEditKota] = useState(false);

  return (
    <section className="flex flex-col w-full h-36 rounded-xl bg-layer px-4 text-[#E3F5F8] ">
      <h1 className="text-base font-semibold m-1 text-center">
        {kota}, {kabupaten}{" "}
        <button onClick={() => setEditKota(true)}>edit</button>
        <EditKota
          editKota={editKota}
          setEditKota={setEditKota}
          kota={kota}
          kabupaten={kabupaten}
        />
      </h1>
      <div className="flex justify-between">
        <div className="flex flex-col flex-1 h-full justify-between pb-2">
          <p className="text-sm font-medium underline underline-offset-4">
            Waktu Sholat
          </p>
          <div>
            <p className="text-3xl font-bold">Subuh</p>
            <p className="text-sm font-medium">04:16 WIB</p>
          </div>
        </div>
        <span className="w-[2px] h-[100px] bg-[#E3F5F8]"></span>
        <div className="flex flex-col flex-1 justify-between pb-2 text-end">
          <p className="text-sm font-medium underline underline-offset-4">
            Tanggal
          </p>
          <div>
            <p className="text-lg font-bold">15 Safar 1445</p>
            <p className="text-sm font-medium">1 September 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}
