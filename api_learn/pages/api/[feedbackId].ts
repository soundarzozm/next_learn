import { readFeedback } from './feedback'

const handler = (req: any, res: any) => {
	if (req.method === 'GET') {
		const feedbackId = req.query.feedbackId

		const feedbackData = readFeedback()
		const selectedFeedback = feedbackData.find(
			(feedback: any) => feedback.id === feedbackId
		)

		res.status(200).json({
			feedback: selectedFeedback,
		})
	}
}

export default handler
