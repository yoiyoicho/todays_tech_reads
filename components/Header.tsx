import { useUser } from '@auth0/nextjs-auth0/client';

export default function Header() {
  const { user } = useUser();
  return(
    <header className="flex justify-between items-center mb-4">
      <h1 className="text-3xl font-bold text-white">{"Today's Tech Reads"}</h1>
        {user && (
          <div className="flex gap-4 items-center">
            <p>{user.name}さん</p>
            <a
              className="p-2 bg-white text-[#5590c9] rounded-md"
              href="/api/auth/logout"
            >
              Logout
            </a>
          </div>
        )}
    </header>
  )
}
