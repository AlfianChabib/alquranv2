"use client";

export default function EditKota({ editKota, setEditKota, kota, kabupaten }) {
  return (
    <div
      className={`${
        editKota ? "flex" : "hidden"
      } absolute w-full h-screen z-50 top-0 left-0 flex pt-[4.5rem] px-5 justify-center bg-[#00000090]`}
    >
      <div className="relative flex flex-col w-full h-min bg-[#E3F5F8] dark:bg-gray-900 rounded-xl">
        <button
          onClick={() => setEditKota(false)}
          className="absolute flex text-center justify-center -right-2 -top-2 w-6 h-6 bg-gray-900 dark:bg-[#E3F5F8] dark:text-gray-900 rounded-xl text-md cursor-pointer leading-5"
        >
          ×
        </button>
        <form className="flex w-full flex-col text-[#0A5356] dark:text-[#E3F5F8] items-start font-medium p-4 gap-1">
          <label htmlFor="kota">Kota</label>
          <input
            type="text"
            id="kota"
            placeholder="ex. Jombang"
            className="w-full bg-gray-700 rounded-md font-normal px-2 py-1 text-sm placeholder:text-gray-500 text-gray-200"
          />
          <label htmlFor="kabupaten">Kabupaten</label>
          <input
            type="text"
            id="kabupaten"
            placeholder="ex. Jawa Timur"
            className="w-full bg-gray-700 rounded-md font-normal px-2 py-1 text-sm placeholder:text-gray-500 text-gray-200"
          />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-gray-200 mt-2 mx-auto py-1 rounded-md px-3 text-gray-900"
          >
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
}
