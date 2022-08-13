import { readFeedback } from '../api/feedback'

const FeedbackPage = (props: any) => {
	return (
		<>
			<ul>
				{props.feedbackItems.map((item: any) => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</>
	)
}

export async function getStaticProps() {
	const data = readFeedback()
	return {
		props: {
			feedbackItems: data,
		},
	}
}

export default FeedbackPage
