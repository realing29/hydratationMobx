import store from 'store'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'

const Page = observer(() => {
	return (
		<div>
			<div>{JSON.stringify(store.state)}</div>
			<div>
				<Link href='/1'>page 1</Link>
				<br />
				<Link href='/2'>page 2</Link>
				<br />
				<Link href='/3'>page 3</Link>
				<br />
			</div>
		</div>
	)
})

Page.getInitialProps = async (ctx) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${ctx.query.id}`)
	const json = await res.json()
	return { data: json }
}

Page.initState = (data) => {
	store.init(data)
}

export default Page
