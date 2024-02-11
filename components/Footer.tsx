import Link from 'next/link'

export default function Footer() {
  return(
    <footer className="flex justify-center items-center mt-8 text-white flex-col">
      <p>{"© 2024 Today's Tech Reads. All rights reserved."}</p>
      <p>
        {"Developed by "}
        <Link href="https://twitter.com/yoiyoicho" target="_blank">
          <span className="underline">
            @yoiyoicho
          </span>
        </Link>
      </p>
    </footer>
  )
}
