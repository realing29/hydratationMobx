import Link from 'next/link'

export default function Home() {
	return (
		<>
			<main>
				<Link href='/1'>page 1</Link>
				<Link href='/2'>page 2</Link>
				<Link href='/3'>page 3</Link>
			</main>
		</>
	)
}
