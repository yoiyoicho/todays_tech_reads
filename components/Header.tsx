export default function Header() {
  return(
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold text-white">{"Today's Tech Reads"}</h1>
      <div className="flex gap-4">
        <button className="p-2 bg-white text-[#5590c9] rounded-md">Logout</button>
      </div>
    </header>
  )
}
