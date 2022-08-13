import { useState } from 'react'
import { readFeedback } from '../api/feedback'

const FeedbackPage = (props: any) => {
	const [feedbackData, setFeedbackData] = useState()

	const loadFeedbackHandler = (id: any) => {
		fetch(`/api/${id}`)
			.then((response) => response.json())
			.then((data) => {
				setFeedbackData(data.feedback)
			})
	}

	return (
		<>
			{feedbackData && <p>{feedbackData.email}</p>}
			<ul>
				{props.feedbackItems.map((item: any) => (
					<li key={item.id}>
						{item.text}{' '}
						<button
							onClick={loadFeedbackHandler.bind(null, item.id)}
						>
							Show Details
						</button>
					</li>
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
